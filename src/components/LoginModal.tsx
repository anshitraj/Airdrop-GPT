"use client"

import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Mail, Lock, Wallet } from 'lucide-react'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] p-6">
        <DialogHeader className="text-center space-y-2">
          <DialogTitle className="text-2xl font-bold">Welcome Back</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Sign in to your AirdropAI account
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="pl-10"
              />
            </div>
          </div>

          <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
            Sign In
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">or</span>
            </div>
          </div>

          <Button variant="outline" className="w-full">
            <Wallet className="h-4 w-4 mr-2" />
            Connect Wallet
          </Button>

          <div className="text-center">
            <button className="text-sm text-primary hover:underline">
              Forgot your password?
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}