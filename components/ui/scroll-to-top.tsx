'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);
  const isVisibleRef = useRef(false);

  // Show button when page is scrolled down
  useEffect(() => {
    let ticking = false;
    let timeoutId: NodeJS.Timeout;
    
    const toggleVisibility = () => {
      const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      
      if (scrollTop > 200) {
        if (!isVisibleRef.current) {
          setHasAppeared(true);
        }
        setIsVisible(true);
        isVisibleRef.current = true;
      } else {
        setIsVisible(false);
        isVisibleRef.current = false;
      }
      
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        ticking = true;
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          requestAnimationFrame(toggleVisibility);
        }, 16); // ~60fps
      }
    };

    // Initial check
    toggleVisibility();
    
    window.addEventListener('scroll', requestTick, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', requestTick);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const scrollToTop = () => {
    setIsScrolling(true);
    
    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Simple timeout to reset scrolling state
    // The visibility will be handled by the main scroll listener
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  return (
    <div
      className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 transition-all duration-500 ease-in-out transform ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
      } ${hasAppeared ? 'scroll-to-top-enter' : ''}`}
    >
      <Button
        onClick={scrollToTop}
        size="lg"
        className={`
          relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary hover:bg-primary/90 
          text-primary-foreground shadow-lg hover:shadow-xl
          transition-all duration-300 ease-out
          button-hover glow-effect group overflow-hidden
          scroll-to-top-hover scroll-pulse scroll-to-top-button
          ${isScrolling ? 'animate-pulse' : ''}
        `}
        aria-label="Scroll to top"
      >
        {/* Background shimmer effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
        
        {/* Glow ring effect */}
        <div className="absolute inset-0 rounded-full bg-primary/20 scale-110 group-hover:scale-125 transition-all duration-300 ease-out blur-sm" />
        
        {/* Arrow icon */}
        <ArrowUp 
          className={`
            h-5 w-5 md:h-6 md:w-6 transition-all duration-300 ease-out relative z-10
            ${isScrolling 
              ? 'animate-bounce text-white' 
              : 'group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:text-white'
            }
          `} 
        />
        
        {/* Ripple effect on click */}
        <div className="absolute inset-0 rounded-full bg-white/30 scale-0 group-active:scale-100 transition-transform duration-200 ease-out" />
        
        {/* Progress indicator ring (optional enhancement) */}
        <div className="absolute inset-[-2px] rounded-full border-2 border-primary/30 group-hover:border-primary/50 transition-colors duration-300" />
      </Button>
    </div>
  );
} 