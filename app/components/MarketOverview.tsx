'use client';

import { ArrowUp, ArrowDown } from 'lucide-react';

interface MarketIndex {
  name: string;
  value: number;
  change: number;
  changePercent: number;
}

interface MarketOverviewProps {
  indices: MarketIndex[];
}

export default function MarketOverview({ indices }: MarketOverviewProps) {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 text-white shadow-lg">
      <h2 className="text-xl font-bold mb-4">Market Pulse</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {indices.map((index) => {
          const isPositive = index.change >= 0;
          return (
            <div key={index.name} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <p className="text-sm text-white/60">{index.name}</p>
              <p className="text-2xl font-bold">{index.value.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
              <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                <span>
                  {isPositive ? '+' : ''}{index.change.toFixed(2)} ({index.changePercent.toFixed(2)}%)
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
