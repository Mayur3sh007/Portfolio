'use client'

import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { LogOut, MessageCircle, SendHorizontal, X } from 'lucide-react'

type ChatMessage = {
  userMessage: string
  botResponse: string
  audioUrl?: string
}

export default function EnhancedChatbot() {
  const [resumeContent, setResumeContent] = useState<string>('')
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([])
  const [userQuery, setUserQuery] = useState('')
  const [chatOpen, setChatOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadResume = async () => {
      try {
        const response = await fetch('/ResumeData.txt')
        if (!response.ok) {
          throw new Error('Failed to fetch the resume file')
        }
        const textContent = await response.text()
        setResumeContent(textContent)
      } catch (error) {
        console.error('Error loading resume:', error)
      }
    }

    loadResume()
  }, [])

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [chatHistory])

  const getAudioForText = async (text: string): Promise<string | undefined> => {
    try {
      const response = await axios.post(
        'http://localhost:5000/text-to-speech',
        { text },
        { responseType: 'blob' }
      )
      
      return URL.createObjectURL(new Blob([response.data], { type: 'audio/mpeg' }))
    } catch (error) {
      console.error('Error getting audio:', error)
      return undefined
    }
  }

  const chatWithLlama = async () => {
    if (!userQuery.trim()) return
    
    try {
      setIsLoading(true)
      const response = await axios.post('http://localhost:5000/chat', {
        userMessage: userQuery,
        resumeContent,
        chatHistory: chatHistory,
      })
      
      const botResponse = response.data
      const audioUrl = await getAudioForText(botResponse)
      
      setChatHistory((prevHist) => [
        ...prevHist,
        {
          userMessage: userQuery,
          botResponse,
          ...(audioUrl && { audioUrl })
        },
      ])
      
      setUserQuery('')
    } catch (error) {
      console.error('Error during chat:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const startSession = async () => {
    try {
      setIsLoading(true)
      const response = await axios.post('http://localhost:5000/start_session', {
        resumeContent
      })
      setChatOpen(true)
      setChatHistory([{ userMessage: '', botResponse: "Hey! Ask me questions about Mayuresh" }])
      console.log('Session started:', response.data)
    } catch (error) {
      console.error('Error starting session:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const endSession = async () => {
    try {
      await axios.post('http://localhost:5000/end_session')
      chatHistory.forEach(chat => {
        if (chat.audioUrl) {
          URL.revokeObjectURL(chat.audioUrl)
        }
      })
      setChatOpen(false)
      setChatHistory([])
    } catch (error) {
      console.error('Error ending session:', error)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading) {
      chatWithLlama()
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {!chatOpen ? (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Button
              onClick={startSession}
              disabled={isLoading}
              className="w-16 h-16 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
            >
              <MessageCircle className="w-8 h-8" />
              <span className="sr-only">Open Chat</span>
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Card className="w-full max-w-md h-[600px] bg-black bg-opacity-80 backdrop-blur-md text-white border border-purple-600 shadow-2xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-bold text-purple-400">AI Assistant</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setChatOpen(false)}
                  className="text-purple-400 hover:text-purple-300"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </CardHeader>
              <CardContent className="flex flex-col h-[calc(100%-8rem)]">
                <div ref={chatContainerRef} className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2">
                  {chatHistory.map((chat, ind) => (
                    <div key={ind} className="space-y-2">
                      {chat.userMessage && (
                        <div className="flex flex-col bg-purple-900 bg-opacity-50 rounded-lg p-3 ml-8">
                          <p className="font-semibold text-purple-300">You:</p>
                          <p>{chat.userMessage}</p>
                        </div>
                      )}
                      <div className="flex items-start space-x-2">
                        <motion.div
                          className="relative w-8 h-8"
                          animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <div className={`absolute inset-0 bg-purple-600 rounded-full ${isPlaying ? 'animate-pulse' : ''}`}></div>
                          <MessageCircle className="absolute inset-1 w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1 flex flex-col bg-gray-800 bg-opacity-50 rounded-lg p-3">
                          <p className="font-semibold text-purple-400">Assistant:</p>
                          <p>{chat.botResponse}</p>
                          {chat.audioUrl && (
                            <div className="mt-2">
                              <audio
                                controls
                                src={chat.audioUrl}
                                className="w-full h-8 opacity-70 hover:opacity-100 transition-opacity"
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                                onEnded={() => setIsPlaying(false)}
                              >
                                Your browser does not support the audio element.
                              </audio>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Input
                  className="flex-1 bg-gray-800 bg-opacity-50 text-white border-purple-600 focus:ring-purple-400"
                  placeholder="Type your message..."
                  value={userQuery}
                  onChange={(e) => setUserQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                />
                <Button
                  onClick={chatWithLlama}
                  disabled={isLoading}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  <SendHorizontal className="w-5 h-5" />
                  <span className="sr-only">Send</span>
                </Button>
                <Button
                  onClick={endSession}
                  variant="destructive"
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="sr-only">End Session</span>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}