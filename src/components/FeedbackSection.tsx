"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Star, Send, MessageSquare, Bug, Lightbulb, Heart } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export function FeedbackSection() {
  const [rating, setRating] = useState(0)
  const [feedbackType, setFeedbackType] = useState('')
  const [feedback, setFeedback] = useState('')
  const [email, setEmail] = useState('')
  const { toast } = useToast()

  const handleSubmitFeedback = () => {
    if (!feedback.trim() || !feedbackType) {
      toast({
        title: "Missing Information",
        description: "Please fill in the feedback type and message.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Thank you for your feedback!",
      description: "We'll review your feedback and use it to improve AirdropAI.",
    })

    // Reset form
    setRating(0)
    setFeedbackType('')
    setFeedback('')
    setEmail('')
  }

  const feedbackTypes = [
    { value: 'bug', label: 'Bug Report', icon: Bug },
    { value: 'feature', label: 'Feature Request', icon: Lightbulb },
    { value: 'general', label: 'General Feedback', icon: MessageSquare },
    { value: 'praise', label: 'Praise', icon: Heart }
  ]

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Help Us Improve</h2>
          <p className="text-lg text-muted-foreground">
            Your feedback helps us build better tools for the airdrop community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Feedback Form */}
          <Card className="border border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                <span>Share Your Feedback</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Rating */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Rate your experience</Label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-6 w-6 transition-colors ${
                          star <= rating
                            ? 'text-warning fill-current'
                            : 'text-muted-foreground hover:text-warning'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Feedback Type */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Feedback Type</Label>
                <Select value={feedbackType} onValueChange={setFeedbackType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select feedback type" />
                  </SelectTrigger>
                  <SelectContent>
                    {feedbackTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        <div className="flex items-center space-x-2">
                          <type.icon className="h-4 w-4" />
                          <span>{type.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Feedback Message */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Your Message</Label>
                <Textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Tell us what you think, what features you'd like to see, or any issues you've encountered..."
                  className="min-h-[120px] resize-none"
                />
              </div>

              {/* Email (Optional) */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Email (Optional)</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                />
                <p className="text-xs text-muted-foreground">
                  We'll only use this to follow up if needed
                </p>
              </div>

              <Button 
                onClick={handleSubmitFeedback}
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Feedback
              </Button>
            </CardContent>
          </Card>

          {/* Contact & Community */}
          <div className="space-y-6">
            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-foreground">Support Email</h4>
                    <p className="text-muted-foreground">support@airdropai.app</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Business Inquiries</h4>
                    <p className="text-muted-foreground">partnerships@airdropai.app</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Response Time</h4>
                    <p className="text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle>Join Our Community</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <div className="w-5 h-5 bg-[#5865F2] rounded mr-3"></div>
                    Discord Community
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <div className="w-5 h-5 bg-[#1DA1F2] rounded mr-3"></div>
                    Twitter Updates
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <div className="w-5 h-5 bg-[#0088cc] rounded mr-3"></div>
                    Telegram Channel
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border border-border bg-gradient-secondary">
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-foreground">15K+</div>
                    <div className="text-sm text-muted-foreground">Active Users</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">500+</div>
                    <div className="text-sm text-muted-foreground">Airdrops Tracked</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">98%</div>
                    <div className="text-sm text-muted-foreground">Scam Detection</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">$2M+</div>
                    <div className="text-sm text-muted-foreground">Rewards Claimed</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}