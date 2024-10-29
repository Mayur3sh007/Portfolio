import os
from flask import Flask, request, jsonify, session, Response
from flask_cors import CORS
from flask_session import Session
from dotenv import load_dotenv
from groq import Groq
import uuid
import logging

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
client = Groq()
api_key = os.environ.get("GROQ_API_KEY"
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
        "content": f"""You are a professional assistant whose purpose is to provide precise and glorifying responses to user queries about the individual based on the provided resume data.

The provided resume data is:

{resume_content}

When responding to user queries, aim to be:

Concise: Keep the response brief but informative.
Precise: Focus on the key accomplishments and relevant details.
Glorifying: Highlight achievements in a positive and professional manner.
Please use the provided resume data to generate professional answers."""
    }

    # Prepare messages for the LLM interaction
    messages = [
        system_message,
        *formatted_chat_history,
        {"role": "user", "content": user_question}
    ]

    try:
        # Send user's message to the LLM and get a response
        response = client.chat.completions.create(
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
    print(resume_content)
    chat_history = data.get('chatHistory', [])

    logging.debug(f"Received user_message: {user_message}")
    logging.debug(f"Received resume_content length: {len(resume_content) if resume_content else 0}")
    logging.debug(f"Received chat_history length: {len(chat_history)}")

    if not resume_content:
        return jsonify({"error": "No resume data provided"}), 400

    response = chat_with_llama(user_message, chat_history, resume_content)

    return jsonify(response)


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
