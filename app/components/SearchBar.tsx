'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  totalStocks?: number;
}

export default function SearchBar({ onSearch, totalStocks }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value.trim());
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search stocks by symbol, name, or sector..."
          className="w-full pl-12 pr-12 py-3 text-base rounded-full border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </form>
      {totalStocks !== undefined && (
        <p className="text-center text-xs text-muted-foreground mt-2">
          Tracking {totalStocks}+ assets across global markets
        </p>
      )}
    </div>
  );
}
