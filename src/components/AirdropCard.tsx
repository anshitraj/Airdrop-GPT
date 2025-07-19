"use client"

import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ExternalLink, AlertTriangle, Clock, DollarSign, Users, Shield, Star, FileText } from 'lucide-react'
import { HowToJoinModal } from './HowToJoinModal'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface AirdropCardProps {
  name: string
  description: string
  chain: string
  cost: string
  reward: string
  timeLeft: string
  riskScore: number
  tasks: number
  participants: string
  referrer?: string
  imageUrl?: string
  isFeatured?: boolean
  isAdvertisement?: boolean
}

export function AirdropCard({
  name,
  description,
  chain,
  cost,
  reward,
  timeLeft,
  riskScore,
  tasks,
  participants,
  referrer,
  imageUrl,
  isFeatured,
  isAdvertisement
}: AirdropCardProps) {
  const getRiskColor = (score: number) => {
    if (score >= 8) return 'text-success'
    if (score >= 6) return 'text-warning'
    return 'text-destructive'
  }

  const getRiskBadgeVariant = (score: number) => {
    if (score >= 8) return 'default'
    if (score >= 6) return 'secondary'
    return 'destructive'
  }

  const getRiskLabel = (score: number) => {
    if (score >= 8) return 'Verified'
    if (score >= 6) return 'Medium Risk'
    return 'Unverified'
  }

  const getRiskTooltip = (score: number) => {
    return `Scam score based on influencer sentiment, contract audit, and on-chain activity. Score: ${score}/10`
  }

  return (
    <Card className="group relative overflow-hidden border border-border bg-card hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] animate-fade-in">
      {isFeatured && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary"></div>
      )}
      
      {isAdvertisement && (
        <div className="absolute top-3 right-3 z-10">
          <Badge variant="secondary" className="text-xs">
            Sponsored
          </Badge>
        </div>
      )}

      {/* Expiry Clock */}
      <div className="absolute top-3 left-3 z-10">
        <Badge variant="outline" className="flex items-center space-x-1 bg-background/80 backdrop-blur-sm">
          <Clock className="h-3 w-3" />
          <span className="text-xs font-medium">{timeLeft}</span>
        </Badge>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12 border-2 border-border">
              <AvatarImage src={imageUrl} alt={name} />
              <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                {name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-lg text-foreground">{name}</h3>
                {isFeatured && <Star className="h-4 w-4 text-warning fill-current" />}
              </div>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          
          <div className="flex flex-col items-end space-y-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge variant={getRiskBadgeVariant(riskScore)} className="flex items-center space-x-1 cursor-help">
                    <Shield className="h-3 w-3" />
                    <span>{getRiskLabel(riskScore)}</span>
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">{getRiskTooltip(riskScore)}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-foreground">{chain}</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <DollarSign className="h-4 w-4" />
              <span className="text-sm">{cost}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{timeLeft}</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span className="text-sm">{participants}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
          <span className="text-sm font-medium text-muted-foreground">Estimated Reward</span>
          <span className="text-lg font-bold text-success">{reward}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{tasks} tasks required</span>
          {riskScore < 7 && (
            <div className="flex items-center space-x-1 text-warning">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-xs">Use caution</span>
            </div>
          )}
        </div>

        {referrer && (
          <div className="flex items-center justify-between p-2 rounded-lg bg-accent/20 border border-accent/30">
            <span className="text-xs text-muted-foreground">Referred by {referrer}</span>
            <Badge variant="outline" className="text-xs">Score: 82</Badge>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex space-x-2">
        <HowToJoinModal airdropName={name}>
          <Button 
            variant="outline" 
            className="flex-1 hover:bg-accent/50 transition-colors"
            size="lg"
          >
            <FileText className="h-4 w-4 mr-2" />
            How to Join
          </Button>
        </HowToJoinModal>
        
        <Button 
          className="flex-1 bg-gradient-primary hover:opacity-90 transition-all duration-200 hover:scale-105 group-hover:shadow-glow animate-pulse"
          size="lg"
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          Join Now
        </Button>
      </CardFooter>
    </Card>
  )
}