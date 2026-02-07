'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="w-9 h-9 p-0 rounded-full"
      >
        <div className="w-4 h-4" />
      </Button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative w-9 h-9 p-0 rounded-full hover:bg-primary/10 transition-all duration-300 button-hover group overflow-hidden"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Sun icon */}
        <Sun
          className={`absolute w-4 h-4 text-primary transition-all duration-500 ease-in-out ${
            isDark
              ? 'rotate-90 scale-0 opacity-0'
              : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        
        {/* Moon icon */}
        <Moon
          className={`absolute w-4 h-4 text-primary transition-all duration-500 ease-in-out ${
            isDark
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0'
          }`}
        />
        
        {/* Background glow effect */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-br transition-all duration-300 opacity-0 group-hover:opacity-20 ${
            isDark
              ? 'from-blue-400 to-purple-500'
              : 'from-yellow-400 to-orange-500'
          }`}
        />
      </div>
      
      {/* Click ripple effect */}
      <div className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-active:scale-100 transition-transform duration-200" />
    </Button>
  );
} 