'use client';

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
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
      <h2 className="text-xl font-bold mb-4">Market Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {indices.map((index) => {
          const isPositive = index.change >= 0;
          return (
            <div key={index.name} className="bg-white/10 backdrop-blur rounded-xl p-4">
              <p className="text-sm text-white/70">{index.name}</p>
              <p className="text-2xl font-bold">{index.value.toLocaleString()}</p>
              <div className={`flex items-center gap-1 ${isPositive ? 'text-green-300' : 'text-red-300'}`}>
                <svg
                  className={`w-4 h-4 ${!isPositive && 'rotate-180'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                <span className="text-sm font-medium">
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
