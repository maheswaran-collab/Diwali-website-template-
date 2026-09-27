'use client';

import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Shop', href: '#diyas' },
    { name: 'Collections', href: '#fireworks' },
    { name: 'Gifts', href: '#greetings' },
    { name: 'About', href: '#pooja' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-4 sm:px-8 pointer-events-none">
      <div 
        className={`max-w-6xl mx-auto px-5 sm:px-8 py-2.5 sm:py-3 rounded-[32px] transition-all duration-300 pointer-events-auto flex items-center justify-between shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${
          scrolled
            ? 'bg-[rgba(15,10,18,0.92)] backdrop-blur-[24px] border border-[rgba(230,185,87,0.35)] shadow-amber-500/10'
            : 'bg-[rgba(15,10,18,0.60)] backdrop-blur-[20px] border border-[rgba(230,185,87,0.22)]'
        }`}
      >
        {/* Brand Logo (Lotus Symbol + Diwali COLLECTION) */}
        <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="flex items-center gap-2.5 group">
          <div className="text-amber-400 group-hover:scale-105 transition-transform">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#E6B957]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L14.5 8.5L21 9L16 13.5L17.5 20L12 16.5L6.5 20L8 13.5L3 9L9.5 8.5L12 2Z" fill="rgba(230,185,87,0.15)" stroke="#E6B957" />
              <path d="M12 6C13.5 9 16 11 19 11.5C16.5 13 14 16 12 20C10 16 7.5 13 5 11.5C8 11 10.5 9 12 6Z" fill="url(#lotusGradExact)" />
              <defs>
                <linearGradient id="lotusGradExact" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FFF0B8" />
                  <stop offset="50%" stopColor="#F4D58A" />
                  <stop offset="100%" stopColor="#D9A441" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#F8F5EE] block leading-none">
              Diwali
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.25em] text-[#E6B957] uppercase font-sans font-semibold mt-0.5">
              COLLECTION
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 font-ui">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`relative text-xs sm:text-sm font-medium transition-colors py-1 ${
                i === 0 
                  ? 'text-[#E6B957] font-semibold' 
                  : 'text-[rgba(255,248,235,0.85)] hover:text-[#E6B957]'
              }`}
            >
              <span>{link.name}</span>
              {i === 0 && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#E6B957] rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Right Utility Icons (Search, Wishlist, Cart counter with 1.5px thin stroke) */}
        <div className="flex items-center gap-4 sm:gap-5 text-[#F8F5EE]">
          <button title="Search" className="hover:text-[#E6B957] transition-colors hidden sm:block">
            <Search className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[1.5]" />
          </button>

          <button title="Wishlist" className="hover:text-[#E6B957] transition-colors hidden sm:block">
            <Heart className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[1.5]" />
          </button>

          <a href="#sweets" onClick={(e) => scrollToSection(e, '#sweets')} className="relative hover:text-[#E6B957] transition-colors">
            <ShoppingBag className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[1.5]" />
            <span className="absolute -top-1.5 -right-2 bg-[#E6B957] text-[#0D0912] text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md">
              {cartCount}
            </span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-full text-[#E6B957] bg-[rgba(230,185,87,0.12)] border border-[rgba(230,185,87,0.3)]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4.5 h-4.5 stroke-[1.5]" /> : <Menu className="w-4.5 h-4.5 stroke-[1.5]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-6xl mx-auto mt-2 px-6 py-4 rounded-[24px] bg-[rgba(15,10,18,0.96)] backdrop-blur-[20px] border border-[rgba(230,185,87,0.3)] shadow-2xl space-y-3 pointer-events-auto animate-fadeIn">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`block text-sm font-medium py-1 text-center ${
                i === 0 ? 'text-[#E6B957] font-semibold' : 'text-[rgba(255,248,235,0.85)]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
