'use client';

import { Star, TrendingUp, TrendingDown } from 'lucide-react';

interface StockCardProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  currency?: string;
  market?: 'US' | 'IN';
  onAdd?: () => void;
  onRemove?: () => void;
  isInWatchlist?: boolean;
}

export default function StockCard({
  symbol,
  name,
  price,
  change,
  changePercent,
  currency = '$',
  market = 'US',
  onAdd,
  onRemove,
  isInWatchlist,
}: StockCardProps) {
  const isPositive = change >= 0;

  return (
    <div className="bg-card border rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-secondary p-2 rounded-lg">
            <span className="text-xl">{market === 'IN' ? '🇮🇳' : '🇺🇸'}</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">{symbol}</h3>
            <p className="text-xs text-muted-foreground truncate max-w-[150px]">{name}</p>
          </div>
        </div>
        <button
          onClick={isInWatchlist ? onRemove : onAdd}
          className={`p-2 rounded-full transition-colors ${
            isInWatchlist
              ? 'text-yellow-400 hover:bg-yellow-400/10'
              : 'text-muted-foreground hover:text-yellow-400 hover:bg-yellow-400/10'
          }`}
        >
          <Star
            className="w-5 h-5"
            fill={isInWatchlist ? 'currentColor' : 'none'}
          />
        </button>
      </div>
      
      <div className="flex items-end justify-between">
        <p className="text-2xl font-bold text-foreground">
          {currency}{price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-semibold ${
          isPositive ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
        }`}>
          {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          <span>
            {isPositive ? '+' : ''}{changePercent.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
}
