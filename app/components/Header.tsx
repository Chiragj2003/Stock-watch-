'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, Activity } from 'lucide-react';

export default function Header() {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);

    const darkModeMatcher = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMatcher.matches);
    document.documentElement.classList.toggle('dark', darkModeMatcher.matches);

    const handleDarkModeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
      document.documentElement.classList.toggle('dark', e.matches);
    };

    darkModeMatcher.addEventListener('change', handleDarkModeChange);

    return () => {
      clearInterval(interval);
      darkModeMatcher.removeEventListener('change', handleDarkModeChange);
    };
  }, []);

  const toggleTheme = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    document.documentElement.classList.toggle('dark', newIsDarkMode);
  };

  return (
    <header className="bg-card/80 backdrop-blur-lg border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">StockWatch</h1>
              <p className="text-xs text-muted-foreground">Real-Time Market Data</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-green-500/10 text-green-500 px-3 py-1.5 rounded-full text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Markets Open
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Local Time</p>
              <p className="text-sm font-mono font-semibold text-foreground">{currentTime}</p>
            </div>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-accent">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
