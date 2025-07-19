"use client"

import React, { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { AirdropCard } from '@/components/AirdropCard'
import { ChatBot } from '@/components/ChatBot'
import { SearchFilters } from '@/components/SearchFilters'
import { FeedbackSection } from '@/components/FeedbackSection'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Sparkles, TrendingUp, Shield, Users, Award, Star, ArrowRight } from 'lucide-react'

interface FilterState {
  chain: string
  cost: string
  riskScore: string
  category: string
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState<FilterState>({
    chain: '',
    cost: '',
    riskScore: '',
    category: ''
  })

  // Sample airdrop data - in real app this would come from API
  const featuredAirdrops = [
    {
      name: "LayerZero",
      description: "Omnichain interoperability protocol",
      chain: "Ethereum",
      cost: "$25-50",
      reward: "$500-2,000",
      timeLeft: "2 days left",
      riskScore: 9,
      tasks: 8,
      participants: "1.2M",
      referrer: "@airdrop_alpha",
      isFeatured: true,
      imageUrl: "/placeholder.svg"
    },
    {
      name: "zkSync Era",
      description: "Layer 2 scaling solution for Ethereum",
      chain: "zkSync",
      cost: "Free",
      reward: "$200-800",
      timeLeft: "1 week left",
      riskScore: 8,
      tasks: 5,
      participants: "850K",
      isFeatured: true,
      imageUrl: "/placeholder.svg"
    },
    {
      name: "Arbitrum Orbit",
      description: "Next-gen L3 blockchain ecosystem",
      chain: "Arbitrum",
      cost: "$10-25",
      reward: "$300-1,200",
      timeLeft: "5 days left",
      riskScore: 9,
      tasks: 6,
      participants: "600K",
      referrer: "@crypto_insider",
      isFeatured: true,
      imageUrl: "/placeholder.svg"
    }
  ]

  const regularAirdrops = [
    {
      name: "Polygon zkEVM",
      description: "Ethereum-compatible zero-knowledge rollup",
      chain: "Polygon",
      cost: "$5-15",
      reward: "$150-500",
      timeLeft: "3 weeks left",
      riskScore: 8,
      tasks: 4,
      participants: "450K",
      imageUrl: "/placeholder.svg"
    },
    {
      name: "StarkNet Alpha",
      description: "Cairo-based ZK rollup platform",
      chain: "StarkNet",
      cost: "$15-30",
      reward: "$250-750",
      timeLeft: "2 weeks left",
      riskScore: 7,
      tasks: 7,
      participants: "320K",
      referrer: "@defi_hunter",
      imageUrl: "/placeholder.svg"
    },
    {
      name: "SUI Network",
      description: "Move-based layer 1 blockchain",
      chain: "SUI",
      cost: "Free",
      reward: "$100-400",
      timeLeft: "1 month left",
      riskScore: 7,
      tasks: 3,
      participants: "280K",
      imageUrl: "/placeholder.svg"
    },
    {
      name: "CryptoGuard Pro",
      description: "Advanced DeFi security protocol",
      chain: "Ethereum",
      cost: "$50-100",
      reward: "$800-3,000",
      timeLeft: "6 days left",
      riskScore: 6,
      tasks: 12,
      participants: "50K",
      isAdvertisement: true,
      imageUrl: "/placeholder.svg"
    }
  ]

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    // In real app, this would trigger API call with search query
  }

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters)
    // In real app, this would trigger API call with filters
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 px-4">
        <div className="absolute inset-0 bg-background/10"></div>
        <div className="relative container mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-background/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-primary-glow" />
            <span className="text-sm font-medium text-primary-foreground">AI-Powered Airdrop Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Hunt Airdrops
            <br />
            <span className="bg-gradient-to-r from-white via-primary-glow to-white bg-clip-text text-transparent">
              Avoid Scams
            </span>
          </h1>
          
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Your AI assistant for discovering legitimate airdrops, checking eligibility, and maximizing rewards while staying safe from scams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elevated">
              <Users className="h-5 w-5 mr-2" />
              Start Hunting
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Shield className="h-5 w-5 mr-2" />
              Learn Safety Tips
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="border border-border bg-card shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Award className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Active Airdrops</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-border bg-card shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-success" />
                <div>
                  <div className="text-2xl font-bold text-foreground">98%</div>
                  <div className="text-sm text-muted-foreground">Scam Detection</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-border bg-card shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold text-foreground">15K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-border bg-card shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-8 w-8 text-warning" />
                <div>
                  <div className="text-2xl font-bold text-foreground">$2M+</div>
                  <div className="text-sm text-muted-foreground">Rewards Claimed</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <SearchFilters onSearch={handleSearch} onFilterChange={handleFilterChange} />
        </div>

        {/* Featured Airdrops */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Star className="h-6 w-6 text-warning fill-current" />
              <h2 className="text-3xl font-bold text-foreground">Featured Airdrops</h2>
              <Badge className="bg-gradient-primary text-primary-foreground">
                High Potential
              </Badge>
            </div>
            <Button variant="ghost" className="text-primary hover:bg-accent">
              View All
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAirdrops.map((airdrop, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <AirdropCard {...airdrop} />
              </div>
            ))}
          </div>
        </section>

        {/* All Airdrops */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Latest Airdrops</h2>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
              <span>Live updates</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regularAirdrops.map((airdrop, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <AirdropCard {...airdrop} />
              </div>
            ))}
          </div>
        </section>

        {/* AI Chatbot Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ask Your AI Assistant</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get instant answers about airdrop eligibility, safety checks, and step-by-step guidance
            </p>
          </div>
          <ChatBot />
        </section>
      </div>

      {/* Feedback Section */}
      <FeedbackSection />

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">AirdropAI</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Making airdrop hunting safer and more profitable for everyone
          </p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <button className="hover:text-primary transition-colors">Privacy Policy</button>
            <button className="hover:text-primary transition-colors">Terms of Service</button>
            <button className="hover:text-primary transition-colors">Documentation</button>
            <button className="hover:text-primary transition-colors">API</button>
          </div>
        </div>
      </footer>
    </div>
  )
};

export default Index;
