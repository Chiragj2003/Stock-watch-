'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import { recommendedStocks, simulatePriceUpdate, RecommendedStock } from '../data/stocks';
import { ArrowLeft, Cpu, Zap, BarChart, Bot, Shield, TrendingUp, BrainCircuit, FlaskConical, MessageCircle, Star, Info } from 'lucide-react';

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
          ...stock,
        }))
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const runAIAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      // Simulate new scores
      setStocks(prev => prev.map(s => ({
        ...s,
        aiScore: Math.min(100, Math.round(s.aiScore * (0.95 + Math.random() * 0.1))),
        growthPotential: Math.round(s.growthPotential * (0.95 + Math.random() * 0.1) * 10)/10,
      })));
      setIsAnalyzing(false);
    }, 2500);
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
      case 'Strong Buy': return 'bg-green-500 text-white';
      case 'Buy': return 'bg-blue-500 text-white';
      case 'Hold': return 'bg-yellow-500 text-black';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-green-500 bg-green-500/10';
      case 'Medium': return 'text-yellow-500 bg-yellow-500/10';
      case 'High': return 'text-red-500 bg-red-500/10';
      default: return 'text-muted-foreground bg-secondary';
    }
  };

  const getAIScoreColor = (score: number) => {
    if (score >= 85) return 'from-green-400 to-cyan-400';
    if (score >= 70) return 'from-blue-400 to-indigo-400';
    if (score >= 55) return 'from-yellow-400 to-orange-400';
    return 'from-red-400 to-pink-400';
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-6 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-foreground">
              AI-Powered Recommendations
            </h1>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
              BETA
            </span>
          </div>
          <p className="text-muted-foreground">
            Curated stock picks from our AI engine, combining technicals, fundamentals, and market sentiment.
          </p>
        </div>

        <div className="bg-gradient-to-r from-primary to-gray-900 rounded-xl p-6 text-primary-foreground mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <BrainCircuit className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">AI Analysis Engine</h3>
                <p className="text-white/70 text-sm max-w-2xl">
                  Our AI analyzes 50+ data points including price momentum, volume patterns, sentiment, 
                  and fundamental ratios to generate actionable insights.
                </p>
              </div>
            </div>
            <button
              onClick={runAIAnalysis}
              disabled={isAnalyzing}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all text-sm ${
                isAnalyzing 
                  ? 'bg-white/20 cursor-not-allowed' 
                  : 'bg-white text-primary hover:bg-white/90'
              }`}
            >
              {isAnalyzing ? (
                <>
                  <Cpu className="w-5 h-5 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5" />
                  Re-analyze All
                </>
              )}
            </button>
          </div>
        </div>

        <div className="bg-card border rounded-xl p-4 mb-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <div className="flex items-center gap-2">
              {(['all', 'US', 'IN'] as const).map((market) => (
                <button
                  key={market}
                  onClick={() => setMarketFilter(market)}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors text-sm ${
                    marketFilter === market 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground hover:bg-accent'
                  }`}
                >
                  {market === 'all' ? '🌐 All' : market === 'US' ? '🇺🇸 US' : '🇮🇳 India'}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {(['all', 'large', 'mid', 'small'] as const).map((cap) => (
                <button
                  key={cap}
                  onClick={() => setCapFilter(cap)}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors text-sm ${
                    capFilter === cap 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground hover:bg-accent'
                  }`}
                >
                  {getCapLabel(cap)}
                </button>
              ))}
            </div>

            <div className="ml-auto flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'aiScore' | 'potential' | 'rating')}
                className="px-3 py-1.5 rounded-md border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="aiScore">🤖 AI Score</option>
                <option value="potential">📈 Growth Potential</option>
                <option value="rating">⭐ Analyst Rating</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredStocks.map((stock, index) => (
            <div 
              key={stock.symbol}
              className="bg-card border rounded-xl overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="bg-secondary p-2 rounded-lg">
                        <span className="text-2xl">{stock.market === 'IN' ? '🇮🇳' : '🇺🇸'}</span>
                      </div>
                      <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-card">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{stock.symbol}</h3>
                      <p className="text-sm text-muted-foreground">{stock.name}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${getAIScoreColor(stock.aiScore)} p-1`}>
                      <div className="w-full h-full rounded-full bg-card flex flex-col items-center justify-center">
                        <span className="text-xl font-bold text-foreground">{stock.aiScore}</span>
                        <span className="text-[9px] text-muted-foreground font-semibold">AI SCORE</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${getRecommendationColor(stock.recommendation)}`}>
                    {stock.recommendation}
                  </span>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1 ${getRiskColor(stock.riskLevel)}`}>
                    <Shield className="w-3 h-3" /> {stock.riskLevel} Risk
                  </span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {getCapLabel(stock.capCategory)}
                  </span>
                </div>

                <div className="flex items-end justify-between mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Current Price</p>
                    <p className="text-2xl font-bold text-foreground">
                      {stock.currency}{stock.price.toLocaleString()}
                    </p>
                  </div>
                  <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-sm font-semibold ${
                    stock.change >= 0 ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                  }`}>
                    {stock.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingUp className="w-4 h-4 rotate-180" />}
                    {stock.changePercent.toFixed(2)}%
                  
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 text-center">
                  <div className="bg-secondary rounded-lg p-2">
                    <p className="text-[10px] font-medium text-muted-foreground">Target Price</p>
                    <p className="text-sm font-bold text-blue-500">
                      {stock.currency}{stock.targetPrice.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-secondary rounded-lg p-2">
                    <p className="text-[10px] font-medium text-muted-foreground">Growth</p>
                    <p className="text-sm font-bold text-green-500">
                      +{stock.growthPotential}%
                    </p>
                  </div>
                  <div className="bg-secondary rounded-lg p-2">
                    <p className="text-[10px] font-medium text-muted-foreground">Fundamentals</p>
                    <p className="text-sm font-bold text-purple-500">
                      {stock.fundamentalScore}/100
                    </p>
                  </div>
                  <div className="bg-secondary rounded-lg p-2">
                    <p className="text-[10px] font-medium text-muted-foreground">Sentiment</p>
                    <p className="text-sm font-bold text-orange-500">
                      {stock.sentimentScore}/100
                    </p>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Bot className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">AI Analysis</p>
                      <p className="text-xs text-muted-foreground">{stock.reason}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-5 py-3 bg-secondary/50 border-t">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-3.5 h-3.5 ${i < Math.round(stock.analystRating) ? 'text-yellow-400' : 'text-muted-foreground/30'}`} 
                        fill="currentColor" 
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">({stock.analystRating})</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{stock.sector}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredStocks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No stocks match your current filters.</p>
            <button 
              onClick={() => { setMarketFilter('all'); setCapFilter('all'); }}
              className="mt-4 text-primary hover:underline text-sm"
            >
              Clear all filters
            </button>
          </div>
        )}

        <div className="mt-8 bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <Info className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-200 mb-1">Investment Disclaimer</h4>
              <p className="text-sm text-yellow-300/80">
                AI recommendations are for informational purposes only and do not constitute financial advice. 
                Past performance is not indicative of future results. Always conduct your own research.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} StockWatch AI. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
