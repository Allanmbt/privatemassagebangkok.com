'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 其他页面：始终白色背景（完全不透明）
  // 首页：透明背景，滚动后白色
  const navClasses = !isHomePage 
    ? 'bg-white shadow-sm py-4'
    : isScrolled 
      ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' 
      : 'bg-transparent py-6';

  // 其他页面：始终深色文字
  // 首页：白色文字，滚动后深色
  const textClasses = !isHomePage 
    ? 'text-stone-600'
    : isScrolled 
      ? 'text-stone-600' 
      : 'text-white/90';

  // Logo文字颜色
  const logoTextClasses = !isHomePage 
    ? 'text-stone-800'
    : isScrolled 
      ? 'text-stone-800' 
      : 'text-stone-800 md:text-white';

  // 按钮样式
  const buttonClasses = !isHomePage 
    ? 'border-[#46C5A7] text-[#46C5A7] hover:bg-[#46C5A7] hover:text-white'
    : isScrolled 
      ? 'border-[#46C5A7] text-[#46C5A7] hover:bg-[#46C5A7] hover:text-white' 
      : 'border-white text-white hover:bg-white hover:text-stone-800';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full border-2 border-[#46C5A7] flex items-center justify-center transition-colors">
            <span className="font-serif font-bold text-[#46C5A7]">C</span>
          </div>
          <span className={`text-xl font-serif font-medium tracking-wide ${logoTextClasses}`}>
            CBODY
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className={`text-sm font-medium uppercase tracking-wider hover:text-[#46C5A7] transition-colors ${textClasses}`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="tel:+66834826667" 
            className={`flex items-center gap-2 px-5 py-2 rounded-sm border transition-all ${buttonClasses}`}
          >
            <Phone size={14} />
            <span className="text-sm font-medium">Book Now</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#46C5A7]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-stone-100 shadow-xl py-6 px-6 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-stone-600 py-2 border-b border-stone-50 hover:text-[#46C5A7]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="tel:+66834826667"
            className="mt-4 w-full bg-[#46C5A7] text-white py-3 rounded-sm flex items-center justify-center gap-2"
          >
            <Phone size={16} /> Call to Book
          </a>
        </div>
      )}
    </nav>
  );
}
