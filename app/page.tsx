'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import StockCard from './components/StockCard';
import MarketOverview from './components/MarketOverview';
import { stocksData, usStocksData, indianStocksData, marketIndices, indianIndices, simulatePriceUpdate, searchStocks, Stock } from './data/stocks';

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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Update filtered stocks when stocks, search query, or market filter changes
  useEffect(() => {
    let result = stocks;
    
    // Apply market filter
    if (marketFilter !== 'all') {
      result = result.filter(stock => stock.market === marketFilter);
    }
    
    // Apply search filter
    if (searchQuery) {
      result = searchStocks(searchQuery, result);
    }
    
    setFilteredStocks(result);
  }, [stocks, searchQuery, marketFilter]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const addToWatchlist = useCallback((symbol: string) => {
    setWatchlist(prev => [...prev, symbol]);
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

  const currentIndices = marketFilter === 'IN' ? indianIndices : marketFilter === 'US' ? marketIndices : [...marketIndices, ...indianIndices].slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} totalStocks={stocksData.length} />
        </div>

        {/* Market Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setMarketFilter('all')}
            className={`px-5 py-2.5 rounded-full font-medium transition-colors ${
              marketFilter === 'all' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            🌍 All Markets
          </button>
          <button
            onClick={() => setMarketFilter('US')}
            className={`px-5 py-2.5 rounded-full font-medium transition-colors ${
              marketFilter === 'US' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            🇺🇸 US Market
          </button>
          <button
            onClick={() => setMarketFilter('IN')}
            className={`px-5 py-2.5 rounded-full font-medium transition-colors ${
              marketFilter === 'IN' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            🇮🇳 Indian Market
          </button>
          <Link
            href="/recommendations"
            className="ml-auto px-5 py-2.5 rounded-full font-medium bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 transition-all flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            Recommendations
          </Link>
        </div>

        {/* Market Overview */}
        <div className="mb-8">
          <MarketOverview indices={currentIndices} />
        </div>

        {/* Top Movers Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Top Gainers */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-green-500">📈</span> Top Gainers {marketFilter !== 'all' && `(${marketFilter === 'IN' ? '🇮🇳' : '🇺🇸'})`}
            </h3>
            <div className="space-y-3">
              {gainers.map(stock => (
                <div key={stock.symbol} className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{stock.market === 'IN' ? '🇮🇳' : '🇺🇸'}</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{stock.symbol}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-[120px]">{stock.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900 dark:text-white">{stock.currency}{stock.price.toLocaleString()}</p>
                    <p className="text-sm font-medium text-green-600 dark:text-green-400">
                      +{stock.changePercent.toFixed(2)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Losers */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-red-500">📉</span> Top Losers {marketFilter !== 'all' && `(${marketFilter === 'IN' ? '🇮🇳' : '🇺🇸'})`}
            </h3>
            <div className="space-y-3">
              {losers.map(stock => (
                <div key={stock.symbol} className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{stock.market === 'IN' ? '🇮🇳' : '🇺🇸'}</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{stock.symbol}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-[120px]">{stock.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900 dark:text-white">{stock.currency}{stock.price.toLocaleString()}</p>
                    <p className="text-sm font-medium text-red-600 dark:text-red-400">
                      {stock.changePercent.toFixed(2)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            All Stocks
          </button>
          <button
            onClick={() => setActiveTab('watchlist')}
            className={`px-6 py-2 rounded-full font-medium transition-colors flex items-center gap-2 ${
              activeTab === 'watchlist'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Watchlist ({watchlist.length})
          </button>
        </div>

        {/* Search Result Info */}
        {searchQuery && (
          <div className="mb-4 flex items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400">
              Showing results for &quot;{searchQuery}&quot; ({displayStocks.length} found)
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Stocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayStocks.map(stock => (
            <StockCard
              key={stock.symbol}
              symbol={stock.symbol}
              name={stock.name}
              price={stock.price}
              change={stock.change}
              changePercent={stock.changePercent}
              currency={stock.currency}
              market={stock.market}
              isInWatchlist={watchlist.includes(stock.symbol)}
              onAdd={() => addToWatchlist(stock.symbol)}
              onRemove={() => removeFromWatchlist(stock.symbol)}
            />
          ))}
        </div>

        {displayStocks.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {activeTab === 'watchlist' ? 'No stocks in your watchlist' : 'No stocks found'}
            </p>
            <p className="text-gray-500 dark:text-gray-500 mt-2">
              {activeTab === 'watchlist' ? 'Add stocks to your watchlist by clicking the star icon' : 'Try a different search term'}
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="font-bold text-gray-900 dark:text-white">StockWatch</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 StockWatch. Market data is simulated for demo purposes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}