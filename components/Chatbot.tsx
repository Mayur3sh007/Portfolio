'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from './ui/button';
import { LogOut, MessageCircleIcon, SendHorizonal } from 'lucide-react';
import { Input } from './ui/input';

type ChatMessage = {
  userMessage: string;
  botResponse: string;
};

const Chatbot = () => {
  const [resumeContent, setResumeContent] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [userQuery, setUserQuery] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load the text file content when the component mounts
  useEffect(() => {
    const loadResume = async () => {
      try {
        const response = await fetch('/ResumeData.txt');
        if (!response.ok) {
          throw new Error('Failed to fetch the resume file');
        }
        const textContent = await response.text(); // Get text content instead of blob
        setResumeContent(textContent);
      } catch (error) {
        console.error('Error loading resume:', error);
      }
    };

    loadResume();
  }, []);

  const startSession = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:5000/start_session', {
        resumeContent // Send the content when starting session
      });
      setChatOpen(true);
      console.log('Session started:', response.data);
    } catch (error) {
      console.error('Error starting session:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const endSession = async () => {
    try {
      await axios.post('http://localhost:5000/end_session');
      setChatOpen(false);
      setChatHistory([]);
    } catch (error) {
      console.error('Error ending session:', error);
    }
  };

  const chatWithLlama = async () => {
    if (!userQuery.trim()) return;
    
    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:5000/chat', {
        userMessage: userQuery,
        resumeContent, // Send text content instead of blob
        chatHistory: chatHistory,
      });
      
      const botResponse = response.data;
      setChatHistory((prevHist) => [
        ...prevHist,
        { userMessage: userQuery, botResponse },
      ]);
      setUserQuery('');
    } catch (error) {
      console.error('Error during chat:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading) {
      chatWithLlama();
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-full bg-white">
      {!chatOpen ? (
        <Button 
          onClick={startSession} 
          disabled={isLoading}
          className="flex items-center gap-2 px-4 py-2"
        >
          <MessageCircleIcon className="w-5 h-5" />
          Start Chat
        </Button>
      ) : (
        <div className="flex flex-col w-full max-w-2xl h-[600px] bg-gray-50 rounded-lg shadow-lg p-4">
          {/* Chat History */}
          <div className="flex-1 overflow-y-auto mb-4 space-y-4">
            {chatHistory.map((chat, ind) => (
              <div key={ind} className="space-y-2">
                <div className="flex flex-col bg-blue-100 rounded-lg p-3">
                  <p className="font-semibold">You:</p>
                  <p>{chat.userMessage}</p>
                </div>
                <div className="flex flex-col bg-white rounded-lg p-3">
                  <p className="font-semibold">Assistant:</p>
                  <p>{chat.botResponse}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Input Area */}
          <div className="flex gap-2">
            <Input
              className="flex-1"
              placeholder="Type your message..."
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <Button 
              onClick={chatWithLlama} 
              disabled={isLoading}
              className="px-4"
            >
              <SendHorizonal className="w-5 h-5" />
            </Button>
            <Button 
              onClick={endSession}
              variant="destructive"
              className="px-4"
            >
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;