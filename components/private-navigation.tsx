'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const leftNavLinks = [
  { name: 'HOME', href: '/', isAnchor: false },
  { name: 'ABOUT', href: '/about', isAnchor: false },
  { name: 'MASSAGES', href: '/massages', isAnchor: false },
];

const rightNavLinks = [
  { name: 'OUR GODDESSES', href: '/#goddesses', isAnchor: true },
  { name: 'BLOG', href: '/blog', isAnchor: false },
  { name: 'CONTACT', href: '/contact', isAnchor: false },
];

const mobileNavLinks = [
  { name: 'HOME', href: '/', isAnchor: false },
  { name: 'ABOUT', href: '/about', isAnchor: false },
  { name: 'MASSAGES', href: '/massages', isAnchor: false },
  { name: 'OUR GODDESSES', href: '/#goddesses', isAnchor: true },
  { name: 'BLOG', href: '/blog', isAnchor: false },
  { name: 'CONTACT', href: '/contact', isAnchor: false },
];

export function PrivateNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, isAnchor: boolean) => {
    setIsMobileMenuOpen(false);
    if (isAnchor && typeof window !== 'undefined') {
      const anchor = href.replace('/#', '#');
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const NavLink = ({ name, href, isAnchor }: { name: string; href: string; isAnchor: boolean }) => {
    if (isAnchor) {
      return (
        <a
          href={href}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick(href, isAnchor);
          }}
          className="text-sm tracking-[0.2em] text-twilight hover:text-gold transition-colors duration-300 font-body"
        >
          {name}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className="text-sm tracking-[0.2em] text-twilight hover:text-gold transition-colors duration-300 font-body"
      >
        {name}
      </Link>
    );
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Desktop Navigation - Centered Logo */}
        <nav className="hidden lg:flex items-center justify-center">
          {/* Left Navigation */}
          <div className="flex items-center gap-8 pr-10">
            {leftNavLinks.map((link) => (
              <NavLink key={link.name} {...link} />
            ))}
          </div>

          {/* Centered Logo */}
          <Link href="/" className="flex items-center justify-center mx-6">
            <div className="relative w-14 h-14 rounded-full overflow-hidden" style={{ boxShadow: '0 0 30px -10px hsl(43 52% 58% / 0.5)' }}>
              <Image
                src="/images/logo.webp"
                alt="private-massage-bangkok-logo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Link>

          {/* Right Navigation */}
          <div className="flex items-center gap-8 pl-10">
            {rightNavLinks.map((link) => (
              <NavLink key={link.name} {...link} />
            ))}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/images/logo.webp"
                alt="private-massage-bangkok-logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-display text-lg tracking-widest text-gradient-gold">
              PRIVATE MASSAGE
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-gold block"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-gold block"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-gold block"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-nav overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {mobileNavLinks.map((link) => (
                link.isAnchor ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href, link.isAnchor);
                    }}
                    className="text-sm tracking-[0.2em] text-twilight hover:text-gold transition-colors py-2 font-body"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm tracking-[0.2em] text-twilight hover:text-gold transition-colors py-2 font-body"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

