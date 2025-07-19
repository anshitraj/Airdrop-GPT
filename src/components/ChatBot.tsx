"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Send, Bot, User, Sparkles } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hey there! I'm your AI airdrop assistant. I can help you find legitimate airdrops, check eligibility, and avoid scams. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    },
    {
      id: '2',
      text: "How do I check if LayerZero airdrop is still available?",
      sender: 'user',
      timestamp: new Date()
    },
    {
      id: '3',
      text: "Great question! LayerZero's airdrop eligibility is based on your transaction history across supported chains. I can help you check your wallet's eligibility and provide step-by-step instructions. Would you like me to analyze your wallet address?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newMessage])
    setInputMessage('')

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm analyzing your request... This is a demo response. In the full version, I'll provide detailed, accurate information about airdrops, eligibility checks, and safety warnings.",
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto border border-border bg-card shadow-elevated">
      <CardHeader className="border-b border-border">
        <CardTitle className="flex items-center space-x-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-sm"></div>
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary">
              <Bot className="h-5 w-5 text-primary-foreground" />
            </div>
          </div>
          <span className="text-lg font-semibold">AI Airdrop Assistant</span>
          <Sparkles className="h-5 w-5 text-primary animate-glow-pulse" />
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <ScrollArea className="h-[400px] p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <Avatar className="h-8 w-8">
                  <AvatarFallback 
                    className={
                      message.sender === 'bot' 
                        ? 'bg-gradient-primary text-primary-foreground' 
                        : 'bg-secondary text-secondary-foreground'
                    }
                  >
                    {message.sender === 'bot' ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  </AvatarFallback>
                </Avatar>
                
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground ml-auto'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="border-t border-border p-4">
          <div className="flex space-x-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about airdrops, eligibility, or safety..."
              className="flex-1"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button 
              onClick={handleSendMessage}
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
              size="sm"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-3">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setInputMessage("Check my wallet eligibility")}
              className="text-xs"
            >
              Check Eligibility
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setInputMessage("Show me safe airdrops under $5")}
              className="text-xs"
            >
              Low Cost Airdrops
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setInputMessage("How to avoid airdrop scams?")}
              className="text-xs"
            >
              Scam Prevention
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}