"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from './ThemeToggle'
import { LoginModal } from './LoginModal'
import { SignupModal } from './SignupModal'
import { Bot, Zap } from 'lucide-react'

export function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-20 blur-sm"></div>
                <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                  <Bot className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-foreground">AirdropAI</h1>
                <p className="text-xs text-muted-foreground">GPT • Web3 • Safety</p>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowLoginModal(true)}
                className="text-foreground hover:bg-accent/50"
              >
                Login
              </Button>
              
              <Button 
                size="sm"
                onClick={() => setShowSignupModal(true)}
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-glow"
              >
                <Zap className="h-4 w-4 mr-2" />
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      <SignupModal isOpen={showSignupModal} onClose={() => setShowSignupModal(false)} />
    </>
  )
}