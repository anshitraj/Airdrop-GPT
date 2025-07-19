"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Wallet, Search, Shield, TrendingUp } from 'lucide-react'

export function WalletVerifySection() {
  const [walletAddress, setWalletAddress] = useState('')

  return (
    <Card className="border border-border bg-gradient-to-r from-primary/5 to-accent/5">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center space-x-2 text-lg">
          <Wallet className="h-5 w-5" />
          <span>Check Your Airdrop Eligibility</span>
          <Badge variant="secondary" className="ml-auto">Free</Badge>
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Paste your wallet to check eligibility across 10+ live airdrops
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex space-x-2">
          <Input
            placeholder="0x... or your ENS domain"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            className="flex-1"
          />
          <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
            <Search className="h-4 w-4 mr-2" />
            Check
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="p-3 rounded-lg bg-background/50">
            <div className="flex items-center justify-center space-x-1 text-success">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Secure</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">View-only check</p>
          </div>
          
          <div className="p-3 rounded-lg bg-background/50">
            <div className="flex items-center justify-center space-x-1 text-primary">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">Track</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Save favorites</p>
          </div>
          
          <div className="p-3 rounded-lg bg-background/50">
            <div className="flex items-center justify-center space-x-1 text-warning">
              <span className="text-sm font-medium">10+</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Live airdrops</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}