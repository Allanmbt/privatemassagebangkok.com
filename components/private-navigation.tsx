'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const leftNavLinks = [
  { name: 'HOME', href: '/', isAnchor: false },
  { name: 'ABOUT', href: '/about', isAnchor: false },
  { name: 'MASSAGES', href: '/services', isAnchor: false },
];

const rightNavLinks = [
  { name: 'OUR GODDESSES', href: '/#goddesses', isAnchor: true },
  { name: 'BLOG', href: '/#space', isAnchor: true },
  { name: 'CONTACT', href: '/contact', isAnchor: false },
];

const mobileNavLinks = [
  { name: 'HOME', href: '/', isAnchor: false },
  { name: 'ABOUT', href: '/about', isAnchor: false },
  { name: 'MASSAGES', href: '/services', isAnchor: false },
  { name: 'OUR GODDESSES', href: '/#goddesses', isAnchor: true },
  { name: 'THE SPACE', href: '/#space', isAnchor: true },
  { name: 'CONTACT', href: '/contact', isAnchor: false },
];

export function PrivateNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, isAnchor: boolean) => {
    setIsMobileMenuOpen(false);
    if (isAnchor && pathname === '/') {
      const anchor = href.replace('/#', '#');
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const NavLink = ({ name, href, isAnchor }: { name: string; href: string; isAnchor: boolean }) => {
    if (isAnchor && pathname === '/') {
      const anchor = href.replace('/#', '#');
      return (
        <a
          href={anchor}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick(href, isAnchor);
          }}
          className="text-sm tracking-[0.2em] text-twilight hover:text-gold transition-colors duration-300 whitespace-nowrap"
        >
          {name}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className="text-sm tracking-[0.2em] text-twilight hover:text-gold transition-colors duration-300 whitespace-nowrap"
      >
        {name}
      </Link>
    );
  };

  return (
    <motion.header
      initial={false}
      animate={{ y: 0, opacity: 1 }}
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
                alt="Private Massage Bangkok"
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
        <div className="lg:hidden w-full">
          <div className="flex items-center justify-between w-full">
            {/* Logo + Brand */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/logo.webp"
                  alt="Private Massage Bangkok"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="font-display text-xs md:text-sm tracking-[0.12em] text-gold whitespace-nowrap leading-tight">
                PRIVATE MASSAGE
              </span>
            </Link>



            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col justify-center items-center gap-[5px] p-3 z-50 flex-shrink-0 ml-auto"
              aria-label="Toggle menu"
            >
              <motion.span
                initial={false}
                animate={isMounted && isMobileMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="w-7 h-[3px] bg-gold block rounded-full"
                style={{ transformOrigin: 'center' }}
              />
              <motion.span
                initial={false}
                animate={isMounted && isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="w-7 h-[3px] bg-gold block rounded-full"
              />
              <motion.span
                initial={false}
                animate={isMounted && isMobileMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="w-7 h-[3px] bg-gold block rounded-full"
                style={{ transformOrigin: 'center' }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && isMounted && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden"
            style={{ 
              background: 'hsl(240 10% 5% / 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid hsl(43 15% 20% / 0.3)'
            }}
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4 items-start">
              {mobileNavLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="w-full"
                >
                  {link.isAnchor && pathname === '/' ? (
                    <a
                      href={link.href.replace('/#', '#')}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href, link.isAnchor);
                      }}
                      className="text-sm tracking-[0.2em] text-twilight hover:text-gold transition-colors py-2 block text-left w-full"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm tracking-[0.2em] text-twilight hover:text-gold transition-colors py-2 block text-left w-full"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
