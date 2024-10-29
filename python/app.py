import os
from flask import Flask, request, jsonify, session, Response
from flask_cors import CORS
from flask_session import Session
from dotenv import load_dotenv
from groq import Groq
import uuid
import logging
from elevenlabs import ElevenLabs,VoiceSettings

app = Flask(__name__)
CORS(app, supports_credentials=True)
logging.basicConfig(level=logging.DEBUG)

# Configure server-side sessions (only for start/end of chat)
app.config['SECRET_KEY'] = os.urandom(24)
app.config['SESSION_TYPE'] = 'filesystem'
app.config['SESSION_FILE_DIR'] = './flask_session/'
app.config['SESSION_PERMANENT'] = False
app.config['SESSION_USE_SIGNER'] = True
Session(app)

load_dotenv()
os.environ['GROQ_API_KEY'] = os.getenv("GROQ_API_KEY")
elevenLabs_API_KEY = os.getenv("elevenLabs_API_KEY")

groq_client = Groq()
elevenlabs_client = ElevenLabs(
    api_key=elevenLabs_API_KEY,
)


def chat_with_llama(user_question, chat_history, resume_content):
    # Format the chat history into a list of messages
    formatted_chat_history = []
    for chat in chat_history:
        formatted_chat_history.extend([
            {"role": "user", "content": chat["userMessage"]},
            {"role": "assistant", "content": chat["botResponse"]}
        ])

    # Prepare system message
    system_message = {
        "role": "system",
        "content": f"""
        You are a professional assistant tasked with providing precise and positive responses to user queries about an individual based on the provided resume data.

        Here are the key guidelines for your responses:

        Concise: Keep the responses brief but informative.
        Precise: Focus on key accomplishments and relevant details.
        Praising: Highlight achievements in a positive and professional manner without making it too obvious.
        The provided resume data is:
        {resume_content}
        Donot specify that you are an AI language model and you have been provided my resume data as a source,instead respond as if you are a professional assistant.
        Please respond to user queries using the provided resume information and following the guidelines above.
        """
    }

    # Prepare messages for the LLM interaction
    messages = [
        system_message,
        *formatted_chat_history,
        {"role": "user", "content": user_question}
    ]

    try:
        # Send user's message to the LLM and get a response
        response = groq_client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=messages,
            temperature=0.5,
            max_tokens=2048,
            top_p=1,
            stream=False,
            stop=None
        )

        # Extract the assistant's response
        assistant_response = response.choices[0].message.content
        return assistant_response

    except Exception as e:
        logging.error(f"Error in chat_with_llama: {str(e)}")
        raise


@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('userMessage')
    resume_content = data.get('resumeContent')
    # print(resume_content)
    chat_history = data.get('chatHistory', [])

    # logging.debug(f"Received user_message: {user_message}")
    # logging.debug(f"Received resume_content length: {len(resume_content) if resume_content else 0}")
    # logging.debug(f"Received chat_history length: {len(chat_history)}")

    if not resume_content:
        return jsonify({"error": "No resume data provided"}), 400

    response = chat_with_llama(user_message, chat_history, resume_content)

    return jsonify(response)




@app.route('/text-to-speech', methods=['POST'])
def text_to_speech():
    try:
        data = request.get_json()
        text = data.get('text')
        print("TTS" , text)
    # Generate the audio
        response = elevenlabs_client.text_to_speech.convert(
            voice_id="pMsXgVXv3BLzUgSXRplE",
            optimize_streaming_latency="0",
            output_format="mp3_22050_32",
            text=text,
            voice_settings=VoiceSettings(
                stability=0.1,
                similarity_boost=0.3,
                style=0.2,
            ),
            model_id="eleven_multilingual_v2",
        )

        return Response(
            response=response,
            content_type='audio/mpeg',
            headers={
                'Content-Disposition': 'inline; filename="output.mp3"'
            }
        )

    except Exception as e:
        print(f"An error occurred: {str(e)}")



@app.route('/start_session', methods=['POST'])

def start_session():
    # Generate a unique session ID
    session_id = str(uuid.uuid4())
    session['session_id'] = session_id

    return jsonify({"session_id": session_id, "message": "New session started"})


@app.route('/end_session', methods=['POST'])
def end_session():
    session.clear()
    return jsonify({"message": "Session ended"})


if __name__ == '__main__':
    app.run(debug=True)
