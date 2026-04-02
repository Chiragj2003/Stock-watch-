'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import StockCard from './components/StockCard';
import MarketOverview from './components/MarketOverview';
import { stocksData, usStocksData, indianStocksData, marketIndices, indianIndices, simulatePriceUpdate, searchStocks, Stock } from './data/stocks';
import { Globe, Star, TrendingUp, TrendingDown, Award, SearchX } from 'lucide-react';

export default function Home() {
  const [stocks, setStocks] = useState<Stock[]>(stocksData);
  const [filteredStocks, setFilteredStocks] = useState<Stock[]>(stocksData);
  const [watchlist, setWatchlist] = useState<string[]>(['AAPL', 'MSFT', 'RELIANCE', 'TCS']);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'watchlist'>('all');
  const [marketFilter, setMarketFilter] = useState<'all' | 'US' | 'IN'>('all');

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(prevStocks => prevStocks.map(simulatePriceUpdate));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Update filtered stocks when stocks, search query, or market filter changes
  useEffect(() => {
    let result = stocks;
    
    if (marketFilter !== 'all') {
      result = result.filter(stock => stock.market === marketFilter);
    }
    
    if (searchQuery) {
      result = searchStocks(searchQuery, result);
    }
    
    setFilteredStocks(result);
  }, [stocks, searchQuery, marketFilter]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const addToWatchlist = useCallback((symbol: string) => {
    setWatchlist(prev => [...new Set([...prev, symbol])]);
  }, []);

  const removeFromWatchlist = useCallback((symbol: string) => {
    setWatchlist(prev => prev.filter(s => s !== symbol));
  }, []);

  const displayStocks = activeTab === 'watchlist' 
    ? filteredStocks.filter(stock => watchlist.includes(stock.symbol))
    : filteredStocks;

  const currentMarketStocks = marketFilter === 'IN' ? stocks.filter(s => s.market === 'IN') 
    : marketFilter === 'US' ? stocks.filter(s => s.market === 'US') 
    : stocks;
  
  const gainers = [...currentMarketStocks].sort((a, b) => b.changePercent - a.changePercent).slice(0, 3);
  const losers = [...currentMarketStocks].sort((a, b) => a.changePercent - b.changePercent).slice(0, 3);

  const currentIndices = marketFilter === 'IN' ? indianIndices : marketFilter === 'US' ? marketIndices : [...marketIndices, ...indianIndices].slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} totalStocks={stocksData.length} />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            {(['all', 'US', 'IN'] as const).map(market => (
              <button
                key={market}
                onClick={() => setMarketFilter(market)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all flex items-center gap-2 ${
                  marketFilter === market 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'bg-secondary text-secondary-foreground hover:bg-accent'
                }`}
              >
                {market === 'all' ? '🌍' : market === 'US' ? '🇺🇸' : '🇮🇳'}
                {market === 'all' ? 'All Markets' : market === 'US' ? 'US Market' : 'Indian Market'}
              </button>
            ))}
          </div>
          <Link
            href="/recommendations"
            className="px-4 py-2 rounded-full font-medium text-sm bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:shadow-lg transition-all flex items-center gap-2"
          >
            <Award className="w-4 h-4" />
            AI Recommendations
          </Link>
        </div>

        <div className="mb-8">
          <MarketOverview indices={currentIndices} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-card border rounded-xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <TrendingUp className="text-green-500" /> Top Gainers {marketFilter !== 'all' && `(${marketFilter})`}
            </h3>
            <div className="space-y-3">
              {gainers.map(stock => (
                <div key={stock.symbol} className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{stock.market === 'IN' ? '🇮🇳' : '🇺🇸'}</span>
                    <div>
                      <p className="font-semibold text-foreground">{stock.symbol}</p>
                      <p className="text-xs text-muted-foreground truncate max-w-[120px]">{stock.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-foreground">{stock.currency}{stock.price.toLocaleString()}</p>
                    <p className="text-sm font-medium text-green-500">
                      +{stock.changePercent.toFixed(2)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border rounded-xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <TrendingDown className="text-red-500" /> Top Losers {marketFilter !== 'all' && `(${marketFilter})`}
            </h3>
            <div className="space-y-3">
              {losers.map(stock => (
                <div key={stock.symbol} className="flex justify-between items-center p-3 bg-red-500/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{stock.market === 'IN' ? '🇮🇳' : '🇺🇸'}</span>
                    <div>
                      <p className="font-semibold text-foreground">{stock.symbol}</p>
                      <p className="text-xs text-muted-foreground truncate max-w-[120px]">{stock.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-foreground">{stock.currency}{stock.price.toLocaleString()}</p>
                    <p className="text-sm font-medium text-red-500">
                      {stock.changePercent.toFixed(2)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex border-b mb-6">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 font-medium transition-colors flex items-center gap-2 ${
              activeTab === 'all'
                ? 'border-b-2 border-primary text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Globe className="w-4 h-4" />
            All Stocks
          </button>
          <button
            onClick={() => setActiveTab('watchlist')}
            className={`px-4 py-2 font-medium transition-colors flex items-center gap-2 ${
              activeTab === 'watchlist'
                ? 'border-b-2 border-primary text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Star className="w-4 h-4" />
            Watchlist <span className="bg-secondary text-secondary-foreground text-xs font-bold px-2 py-0.5 rounded-full">{watchlist.length}</span>
          </button>
        </div>

        {searchQuery && (
          <div className="mb-4 flex items-center justify-between">
            <p className="text-muted-foreground text-sm">
              Showing results for &quot;{searchQuery}&quot; ({displayStocks.length} found)
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-primary hover:underline text-sm"
            >
              Clear search
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayStocks.map(stock => (
            <StockCard
              key={stock.symbol}
              {...stock}
              isInWatchlist={watchlist.includes(stock.symbol)}
              onAdd={() => addToWatchlist(stock.symbol)}
              onRemove={() => removeFromWatchlist(stock.symbol)}
            />
          ))}
        </div>

        {displayStocks.length === 0 && (
          <div className="text-center py-16">
            <SearchX className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-xl text-foreground">
              {activeTab === 'watchlist' ? 'Your watchlist is empty' : 'No stocks found'}
            </p>
            <p className="text-muted-foreground mt-2 text-sm">
              {activeTab === 'watchlist' ? 'Add stocks by clicking the star icon.' : 'Try a different search term or clear filters.'}
            </p>
          </div>
        )}
      </main>

      <footer className="border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Activity className="w-5 h-5" />
              </div>
              <span className="font-bold text-foreground">StockWatch</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} StockWatch. Data is simulated.
            </p>
            <div className="flex gap-4">
              {/* Social links can be added here */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}