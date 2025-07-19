"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Trophy, Medal, Award, Star } from 'lucide-react'

export function LeaderboardSection() {
  const topHunters = [
    { id: 1, username: "CryptoNinja", avatar: "", xp: 2840, claims: 18, rank: 1 },
    { id: 2, username: "AirdropKing", avatar: "", xp: 2650, claims: 16, rank: 2 },
    { id: 3, username: "Web3Hunter", avatar: "", xp: 2420, claims: 14, rank: 3 },
    { id: 4, username: "DeFiMaster", avatar: "", xp: 2180, claims: 12, rank: 4 },
    { id: 5, username: "TokenSeeker", avatar: "", xp: 1950, claims: 11, rank: 5 }
  ]

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="h-5 w-5 text-warning" />
      case 2: return <Medal className="h-5 w-5 text-muted-foreground" />
      case 3: return <Award className="h-5 w-5 text-amber-600" />
      default: return <Star className="h-4 w-4 text-muted-foreground" />
    }
  }

  return (
    <Card className="border border-border">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center space-x-2 text-lg">
          <Trophy className="h-5 w-5 text-warning" />
          <span>This Month's Top Claimers</span>
          <Badge variant="outline" className="ml-auto">Live</Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {topHunters.map((hunter) => (
          <div key={hunter.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
            <div className="flex items-center justify-center w-8">
              {getRankIcon(hunter.rank)}
            </div>
            
            <Avatar className="h-10 w-10 border-2 border-border">
              <AvatarImage src={hunter.avatar} alt={hunter.username} />
              <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold text-sm">
                {hunter.username.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <h4 className="text-sm font-medium text-foreground">{hunter.username}</h4>
              <p className="text-xs text-muted-foreground">{hunter.claims} successful claims</p>
            </div>
            
            <div className="text-right">
              <div className="text-sm font-bold text-primary">{hunter.xp.toLocaleString()} XP</div>
              <div className="text-xs text-muted-foreground">#{hunter.rank}</div>
            </div>
          </div>
        ))}
        
        <div className="pt-3 border-t border-border">
          <p className="text-xs text-center text-muted-foreground">
            Complete verified airdrops to earn XP and climb the leaderboard
          </p>
        </div>
      </CardContent>
    </Card>
  )
}