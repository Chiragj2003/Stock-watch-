'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import { recommendedStocks, simulatePriceUpdate, RecommendedStock } from '../data/stocks';

export default function RecommendationsPage() {
  const [stocks, setStocks] = useState<RecommendedStock[]>(recommendedStocks);
  const [marketFilter, setMarketFilter] = useState<'all' | 'US' | 'IN'>('all');
  const [capFilter, setCapFilter] = useState<'all' | 'large' | 'mid' | 'small'>('all');
  const [sortBy, setSortBy] = useState<'aiScore' | 'potential' | 'rating'>('aiScore');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(prevStocks => 
        prevStocks.map(stock => ({
          ...simulatePriceUpdate(stock),
          recommendation: stock.recommendation,
          targetPrice: stock.targetPrice,
          analystRating: stock.analystRating,
          growthPotential: stock.growthPotential,
          reason: stock.reason,
          aiScore: stock.aiScore,
          riskLevel: stock.riskLevel,
          momentum: stock.momentum,
          technicalSignal: stock.technicalSignal,
          fundamentalScore: stock.fundamentalScore,
          sentimentScore: stock.sentimentScore,
        }))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Simulate AI re-analysis
  const runAIAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 2000);
  };

  const filteredStocks = stocks
    .filter(stock => marketFilter === 'all' || stock.market === marketFilter)
    .filter(stock => capFilter === 'all' || stock.capCategory === capFilter)
    .sort((a, b) => {
      if (sortBy === 'aiScore') return b.aiScore - a.aiScore;
      if (sortBy === 'potential') return b.growthPotential - a.growthPotential;
      return b.analystRating - a.analystRating;
    });

  const getRecommendationColor = (rec: string) => {
    switch (rec) {
      case 'Strong Buy': return 'bg-green-500';
      case 'Buy': return 'bg-blue-500';
      case 'Hold': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30';
      case 'Medium': return 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30';
      case 'High': return 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30';
      default: return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/30';
    }
  };

  const getMomentumColor = (momentum: string) => {
    switch (momentum) {
      case 'Bullish': return 'text-green-600 dark:text-green-400';
      case 'Bearish': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getAIScoreColor = (score: number) => {
    if (score >= 85) return 'from-green-500 to-emerald-500';
    if (score >= 70) return 'from-blue-500 to-cyan-500';
    if (score >= 55) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  const getCapLabel = (cap: string) => {
    switch (cap) {
      case 'large': return 'Large Cap';
      case 'mid': return 'Mid Cap';
      case 'small': return 'Small Cap';
      default: return cap;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-6"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Dashboard
        </Link>

        {/* Page Header with AI Badge */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              🤖 AI-Powered Recommendations
            </h1>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
              AI ENHANCED
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Smart stock picks powered by AI analysis combining technical indicators, fundamentals, and sentiment
          </p>
        </div>

        {/* AI Analysis Banner */}
        <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 rounded-2xl p-6 text-white mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">AI Analysis Engine</h3>
                <p className="text-white/80 text-sm">
                  Our AI analyzes 50+ data points including price momentum, volume patterns, sentiment analysis, 
                  fundamental ratios, and market trends to generate recommendations.
                </p>
              </div>
            </div>
            <button
              onClick={runAIAnalysis}
              disabled={isAnalyzing}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                isAnalyzing 
                  ? 'bg-white/20 cursor-not-allowed' 
                  : 'bg-white text-purple-600 hover:bg-white/90'
              }`}
            >
              {isAnalyzing ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Re-analyze
                </>
              )}
            </button>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            {/* Market Filter */}
            <div>
              <span className="text-xs text-gray-500 dark:text-gray-400 block mb-2">Market</span>
              <div className="flex gap-2">
                {(['all', 'US', 'IN'] as const).map((market) => (
                  <button
                    key={market}
                    onClick={() => setMarketFilter(market)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                      marketFilter === market 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {market === 'all' ? '🌐 All' : market === 'US' ? '🇺🇸 US' : '🇮🇳 India'}
                  </button>
                ))}
              </div>
            </div>

            {/* Cap Filter */}
            <div>
              <span className="text-xs text-gray-500 dark:text-gray-400 block mb-2">Market Cap</span>
              <div className="flex gap-2">
                {(['all', 'large', 'mid', 'small'] as const).map((cap) => (
                  <button
                    key={cap}
                    onClick={() => setCapFilter(cap)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                      capFilter === cap 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {cap === 'all' ? 'All Caps' : getCapLabel(cap)}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="ml-auto">
              <span className="text-xs text-gray-500 dark:text-gray-400 block mb-2">Sort by</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'aiScore' | 'potential' | 'rating')}
                className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
              >
                <option value="aiScore">🤖 AI Score</option>
                <option value="potential">📈 Growth Potential</option>
                <option value="rating">⭐ Analyst Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow border border-gray-100 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400">Total Picks</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{filteredStocks.length}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow border border-gray-100 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400">Strong Buy</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              {filteredStocks.filter(s => s.recommendation === 'Strong Buy').length}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow border border-gray-100 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400">Avg AI Score</p>
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {Math.round(filteredStocks.reduce((sum, s) => sum + s.aiScore, 0) / filteredStocks.length || 0)}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow border border-gray-100 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400">Avg Growth</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              +{(filteredStocks.reduce((sum, s) => sum + s.growthPotential, 0) / filteredStocks.length || 0).toFixed(1)}%
            </p>
          </div>
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredStocks.map((stock, index) => (
            <div 
              key={stock.symbol}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="p-6">
                {/* Header with AI Score */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
                        <span className="text-2xl">{stock.market === 'IN' ? '🇮🇳' : '🇺🇸'}</span>
                      </div>
                      <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{stock.symbol}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{stock.name}</p>
                    </div>
                  </div>
                  
                  {/* AI Score Circle */}
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${getAIScoreColor(stock.aiScore)} p-1`}>
                      <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex flex-col items-center justify-center">
                        <span className="text-lg font-bold text-gray-900 dark:text-white">{stock.aiScore}</span>
                        <span className="text-[8px] text-gray-500 dark:text-gray-400">AI SCORE</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badges Row */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`${getRecommendationColor(stock.recommendation)} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {stock.recommendation}
                  </span>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${getRiskColor(stock.riskLevel)}`}>
                    {stock.riskLevel} Risk
                  </span>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 ${getMomentumColor(stock.momentum)}`}>
                    {stock.momentum === 'Bullish' ? '↑' : stock.momentum === 'Bearish' ? '↓' : '→'} {stock.momentum}
                  </span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                    {getCapLabel(stock.capCategory)}
                  </span>
                </div>

                {/* Price Info */}
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Current Price</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stock.currency}{stock.price.toLocaleString()}
                    </p>
                  </div>
                  <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${
                    stock.change >= 0 ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'
                  }`}>
                    <svg
                      className={`w-4 h-4 ${stock.change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400 rotate-180'}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                    <span className={`text-sm font-semibold ${
                      stock.change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                    </span>
                  </div>
                </div>

                {/* AI Metrics Grid */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">Target</p>
                    <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
                      {stock.currency}{stock.targetPrice.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">Growth</p>
                    <p className="text-sm font-bold text-green-600 dark:text-green-400">
                      +{stock.growthPotential}%
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">Fundamental</p>
                    <p className="text-sm font-bold text-purple-600 dark:text-purple-400">
                      {stock.fundamentalScore}/100
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">Sentiment</p>
                    <p className="text-sm font-bold text-orange-600 dark:text-orange-400">
                      {stock.sentimentScore}/100
                    </p>
                  </div>
                </div>

                {/* Technical Signal */}
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">Technical Signal:</span>
                    <span className="text-xs text-gray-700 dark:text-gray-300">{stock.technicalSignal}</span>
                  </div>
                </div>

                {/* AI Reason */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <span className="text-lg">🤖</span>
                    <div>
                      <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-1">AI Analysis</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{stock.reason}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700/30 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">{stock.sector}</span>
                    <span className="text-gray-300 dark:text-gray-600">•</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{stock.marketCap}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className={`w-3 h-3 ${i < Math.round(stock.analystRating) ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'}`} 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ))}
                    <span className="text-xs text-gray-600 dark:text-gray-400 ml-1">{stock.analystRating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredStocks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No stocks match your current filters.</p>
            <button 
              onClick={() => { setMarketFilter('all'); setCapFilter('all'); }}
              className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Investment Disclaimer</h4>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                AI recommendations are for educational and informational purposes only. They do not constitute financial advice. 
                Past performance is not indicative of future results. Always conduct your own research and consult with a qualified 
                financial advisor before making investment decisions.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © 2024 StockWatch AI. Powered by advanced machine learning algorithms.
          </p>
        </div>
      </footer>
    </div>
  );
}
