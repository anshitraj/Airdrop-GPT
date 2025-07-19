"use client"

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Search, Filter, X, TrendingUp } from 'lucide-react'

interface SearchFiltersProps {
  onSearch: (query: string) => void
  onFilterChange: (filters: FilterState) => void
}

interface FilterState {
  chain: string
  cost: string
  riskScore: string
  category: string
}

export function SearchFilters({ onSearch, onFilterChange }: SearchFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState<FilterState>({
    chain: '',
    cost: '',
    riskScore: '',
    category: ''
  })
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    onSearch(value)
  }

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)

    // Update active filters for display
    if (value && !activeFilters.includes(`${key}:${value}`)) {
      setActiveFilters([...activeFilters, `${key}:${value}`])
    }
  }

  const removeFilter = (filterKey: string) => {
    const [key, value] = filterKey.split(':')
    const newFilters = { ...filters, [key]: '' }
    setFilters(newFilters)
    setActiveFilters(activeFilters.filter(f => f !== filterKey))
    onFilterChange(newFilters)
  }

  const clearAllFilters = () => {
    const clearedFilters = { chain: '', cost: '', riskScore: '', category: '' }
    setFilters(clearedFilters)
    setActiveFilters([])
    onFilterChange(clearedFilters)
  }

  const trendingSearches = [
    "LayerZero",
    "Arbitrum",
    "zkSync",
    "Starknet",
    "Polygon"
  ]

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder="Search airdrops... (e.g., 'LayerZero', 'zkSync', 'DeFi')"
          className="pl-10 pr-4 h-12 text-base border-border focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* Trending Searches */}
      {!searchQuery && (
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4" />
            <span>Trending:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {trendingSearches.map((term) => (
              <button
                key={term}
                onClick={() => handleSearchChange(term)}
                className="text-xs px-2 py-1 rounded-full bg-muted hover:bg-accent transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex items-center space-x-1 text-sm font-medium text-foreground">
          <Filter className="h-4 w-4" />
          <span>Filters:</span>
        </div>

        <Select value={filters.chain} onValueChange={(value) => handleFilterChange('chain', value)}>
          <SelectTrigger className="w-[130px] h-9">
            <SelectValue placeholder="Chain" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ethereum">Ethereum</SelectItem>
            <SelectItem value="arbitrum">Arbitrum</SelectItem>
            <SelectItem value="polygon">Polygon</SelectItem>
            <SelectItem value="optimism">Optimism</SelectItem>
            <SelectItem value="solana">Solana</SelectItem>
            <SelectItem value="cosmos">Cosmos</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.cost} onValueChange={(value) => handleFilterChange('cost', value)}>
          <SelectTrigger className="w-[120px] h-9">
            <SelectValue placeholder="Cost" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="free">Free</SelectItem>
            <SelectItem value="under-5">Under $5</SelectItem>
            <SelectItem value="5-20">$5 - $20</SelectItem>
            <SelectItem value="20-50">$20 - $50</SelectItem>
            <SelectItem value="over-50">Over $50</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.riskScore} onValueChange={(value) => handleFilterChange('riskScore', value)}>
          <SelectTrigger className="w-[140px] h-9">
            <SelectValue placeholder="Risk Score" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="high">High (8-10)</SelectItem>
            <SelectItem value="medium">Medium (6-7)</SelectItem>
            <SelectItem value="low">Low (1-5)</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.category} onValueChange={(value) => handleFilterChange('category', value)}>
          <SelectTrigger className="w-[120px] h-9">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="defi">DeFi</SelectItem>
            <SelectItem value="gaming">Gaming</SelectItem>
            <SelectItem value="nft">NFT</SelectItem>
            <SelectItem value="infrastructure">Infrastructure</SelectItem>
            <SelectItem value="social">Social</SelectItem>
          </SelectContent>
        </Select>

        {activeFilters.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearAllFilters}
            className="h-9 text-xs"
          >
            Clear All
          </Button>
        )}
      </div>

      {/* Active Filters Display */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {activeFilters.map((filter) => {
            const [key, value] = filter.split(':')
            return (
              <Badge
                key={filter}
                variant="secondary"
                className="flex items-center space-x-1 pr-1"
              >
                <span className="text-xs">{key}: {value}</span>
                <button
                  onClick={() => removeFilter(filter)}
                  className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )
          })}
        </div>
      )}
    </div>
  )
}