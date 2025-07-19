"use client"

import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Circle, ExternalLink, FileText } from 'lucide-react'

interface HowToJoinModalProps {
  airdropName: string
  children: React.ReactNode
}

export function HowToJoinModal({ airdropName, children }: HowToJoinModalProps) {
  const steps = [
    { id: 1, title: "Connect your wallet", description: "Connect MetaMask or compatible wallet", completed: false },
    { id: 2, title: "Complete Galxe campaign", description: "Finish social tasks on Galxe platform", completed: false },
    { id: 3, title: "Bridge tokens", description: "Bridge ETH to destination chain", completed: false },
    { id: 4, title: "Follow on Twitter", description: "Follow @project and retweet announcement", completed: false },
    { id: 5, title: "Join Discord", description: "Join community Discord and verify", completed: false }
  ]

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>How to Join {airdropName}</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
            <span className="text-sm font-medium">Completion Progress</span>
            <Badge variant="secondary">0/5 Complete</Badge>
          </div>

          <div className="space-y-3">
            {steps.map((step) => (
              <div key={step.id} className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                {step.completed ? (
                  <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground mt-0.5" />
                )}
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-foreground">{step.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
            <ExternalLink className="h-4 w-4 mr-2" />
            Start First Task
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}