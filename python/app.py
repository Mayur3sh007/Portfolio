import os
from flask import Flask, request, jsonify,session,Response
from flask_cors import CORS
from flask_session import Session
from dotenv import load_dotenv
from groq import Groq
import uuid

app = Flask(__name__)
CORS(app, supports_credentials=True)

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

def chat_with_llama(user_prompt, chat_history, course_context):
    # Prepare messages for the LLM interaction
    messages = [
        {"role": "system", "content": f"You are a helpful assistant. Give answer in maximum 25 lines. The financial course context is as follows: {course_context}"},
        *chat_history
    ]

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

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message')
    chat_history = data.get('chatHistory', [])
    course_context = data.get('courseContext', '')
    
    if not user_message or not course_context:
        return jsonify({"error": "Message or course context missing"}), 400

    response = chat_with_llama(user_message, chat_history, course_context)
    
    return jsonify({"response": response})

@app.route('/start_session', methods=['POST'])
def start_session():
    data = request.json
    course_context = data.get('context')
    
    if not course_context:
        return jsonify({"error": "No context provided"}), 400

    # Generate a unique session ID
    session_id = str(uuid.uuid4())
    session['session_id'] = session_id
    session['course_context'] = course_context

    return jsonify({"session_id": session_id, "message": "New session started with provided context"})

@app.route('/end_session', methods=['POST'])
def end_session():
    session.clear()
    return jsonify({"message": "Session ended"})



if __name__ == '__main__':
    app.run(debug=True)
