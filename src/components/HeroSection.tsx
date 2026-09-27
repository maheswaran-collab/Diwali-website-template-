'use client';

import React, { useState } from 'react';
import { ArrowRight, Gift, Leaf, Truck, Heart, ArrowDown } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function HeroSection() {
  const [diyasLitCount, setDiyasLitCount] = useState(108542);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleAction = () => {
    setDiyasLitCount(prev => prev + 1);
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#F4D58A', '#D9A441', '#ff4500', '#ffffff', '#F4C75E']
    });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      onMouseMove={handleMouseMove}
      className="relative min-h-[96vh] sm:min-h-[900px] lg:min-h-[980px] flex flex-col justify-between pt-32 sm:pt-40 pb-8 sm:pb-12 px-6 sm:px-12 lg:px-16 overflow-hidden text-white bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/diwali_hero_bg.png')`,
        backgroundColor: '#0D0912'
      }}
    >
      {/* 0. Black Subtle Cinematic Overlay over Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" 
      />

      {/* 1. Ambient Background Parallax Orbs */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 parallax-layer opacity-10"
        style={{
          transform: `translate3d(${mousePos.x * -4}px, ${mousePos.y * -4}px, 0)`
        }}
      >
        <div className="absolute top-1/4 left-1/5 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-rose-900/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      {/* 2. Floating Golden Embers Parallax */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden z-0 parallax-layer"
        style={{
          transform: `translate3d(${mousePos.x * -7}px, ${mousePos.y * -7}px, 0)`
        }}
      >
        {[
          { left: '12%', bottom: '20%', size: '5px', delay: '0s', duration: '8s' },
          { left: '25%', bottom: '35%', size: '7px', delay: '1.5s', duration: '9.5s' },
          { left: '38%', bottom: '15%', size: '4px', delay: '3.2s', duration: '7s' },
          { left: '52%', bottom: '28%', size: '6px', delay: '0.8s', duration: '10s' },
          { left: '68%', bottom: '18%', size: '5px', delay: '2.5s', duration: '8.5s' },
          { left: '82%', bottom: '32%', size: '8px', delay: '4.1s', duration: '9s' },
          { left: '92%', bottom: '22%', size: '4px', delay: '1.8s', duration: '7.5s' }
        ].map((ember, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-t from-[#F4D58A] to-[#D9A441] animate-float-ember shadow-[0_0_10px_rgba(244,213,138,0.8)]"
            style={{
              left: ember.left,
              bottom: ember.bottom,
              width: ember.size,
              height: ember.size,
              '--delay': ember.delay,
              '--duration': ember.duration
            } as React.CSSProperties}
          />
        ))}
      </div>



      {/* 4. Main Hero Typography & Composition (Exact to Reference Image) */}
      <div 
        className="max-w-4xl mx-auto w-full my-auto z-20 pt-4 sm:pt-8 text-center flex flex-col items-center parallax-layer relative"
        style={{
          transform: `translate3d(${mousePos.x * 4}px, ${mousePos.y * 4}px, 0)`
        }}
      >
        <div className="max-w-3xl space-y-4 sm:space-y-5 text-center flex flex-col items-center pb-2">
          
          {/* Eyebrow Flourish Ribbon */}
          <div className="font-sans font-medium text-xs sm:text-sm tracking-[0.25em] uppercase text-[#F4D58A] flex items-center justify-center gap-3.5 mb-1">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L14.5 8.5L21 9L16 13.5L17.5 20L12 16.5L6.5 20L8 13.5L3 9L9.5 8.5L12 2Z" fill="rgba(212,175,55,0.25)" stroke="#D4AF37" />
              </svg>
              <span>THE FESTIVAL OF LIGHTS · 2026</span>
            </div>
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
          </div>

          {/* Hero Headline (Pure White + Gold GLOW) */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-[78px] font-normal tracking-tight leading-[1.08] text-center uppercase flex flex-col items-center">
            <span className="block text-white font-serif tracking-tight drop-shadow-lg">
              THIS DIWALI,
            </span>
            <span className="block font-serif tracking-tight">
              <span className="text-white drop-shadow-lg">MAKE IT</span>{' '}
              <span className="italic luxury-gold-text font-serif font-semibold relative inline-block">
                GLOW.
                {/* Controlled Illumination Halo behind GLOW */}
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-16 bg-[#D4AF37]/20 rounded-full blur-xl animate-pulse-glow pointer-events-none -z-10" />

                {/* Underline Decorative Stroke */}
                <svg 
                  className="absolute left-1/2 -translate-x-1/2 -bottom-4 sm:-bottom-5 lg:-bottom-6 w-32 sm:w-44 lg:w-52 h-5 sm:h-6 text-[#D4AF37] filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)] pointer-events-none" 
                  viewBox="0 0 200 50" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 20 25 C 60 38 140 38 180 25 M 60 32 C 90 40 110 40 140 32"
                    stroke="url(#flourishGoldLuxury)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <circle cx="100" cy="36" r="2.5" fill="#D4AF37" />
                  <defs>
                    <linearGradient id="flourishGoldLuxury" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#B8860B" />
                      <stop offset="50%" stopColor="#F4D58A" />
                      <stop offset="100%" stopColor="#D4AF37" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </span>
          </h1>

          {/* Description Paragraph */}
          <p className="font-sans font-normal text-sm sm:text-base text-slate-200/90 leading-[1.65] max-w-[620px] text-center mx-auto pt-2 drop-shadow-sm">
            Discover a celebration crafted with tradition, beauty and modern elegance. Perfect gifts for your loved ones.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#products"
              onClick={(e) => {
                handleAction();
                scrollToSection(e, '#products');
              }}
              className="font-ui font-semibold px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F4D58A] via-[#E5B64E] to-[#C9A227] text-black text-xs sm:text-sm tracking-wide shadow-lg shadow-[#E5B64E]/25 hover:shadow-[0_8px_25px_rgba(229,182,78,0.4)] hover:scale-105 transition-all duration-300 flex items-center gap-2.5 group"
            >
              <span>Shop Collection</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1.5 transition-transform" />
            </a>

            <a
              href="#experience"
              onClick={(e) => scrollToSection(e, '#experience')}
              className="font-ui font-medium px-8 py-3.5 rounded-full border border-[#D4AF37]/50 bg-black/40 backdrop-blur-md text-white text-xs sm:text-sm tracking-wide hover:bg-white/10 hover:border-[#F4D58A] transition-all duration-300 shadow-md"
            >
              Explore Gifts
            </a>
          </div>

          {/* 5. Bottom Floating Feature Bar (Glass Pill Container) */}
          <div className="mt-10 sm:mt-12 max-w-3xl mx-auto w-full bg-[rgba(15,10,18,0.65)] backdrop-blur-xl border border-[#D4AF37]/30 rounded-2xl sm:rounded-full p-3.5 sm:px-8 sm:py-3.5 shadow-2xl shadow-black/50">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#D4AF37]/20 gap-3 sm:gap-0">
              
              {/* Module 1 */}
              <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-2.5 sm:px-4 py-1 group cursor-pointer">
                <div className="w-9 h-9 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 flex items-center justify-center text-[#F4D58A] shrink-0 group-hover:scale-110 transition-transform">
                  <Gift className="w-4.5 h-4.5 stroke-[1.5]" />
                </div>
                <p className="text-xs text-white font-medium font-sans leading-tight">
                  Premium Gift Sets
                </p>
              </div>

              {/* Module 2 */}
              <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-2.5 sm:px-4 py-1 group cursor-pointer">
                <div className="w-9 h-9 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 flex items-center justify-center text-[#F4D58A] shrink-0 group-hover:scale-110 transition-transform">
                  <Leaf className="w-4.5 h-4.5 stroke-[1.5]" />
                </div>
                <p className="text-xs text-white font-medium font-sans leading-tight">
                  Eco Friendly Products
                </p>
              </div>

              {/* Module 3 */}
              <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-2.5 sm:px-4 py-1 group cursor-pointer">
                <div className="w-9 h-9 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 flex items-center justify-center text-[#F4D58A] shrink-0 group-hover:scale-110 transition-transform">
                  <Truck className="w-4.5 h-4.5 stroke-[1.5]" />
                </div>
                <p className="text-xs text-white font-medium font-sans leading-tight">
                  Fast &amp; Safe Delivery
                </p>
              </div>

              {/* Module 4 */}
              <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-2.5 sm:px-4 py-1 group cursor-pointer">
                <div className="w-9 h-9 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 flex items-center justify-center text-[#F4D58A] shrink-0 group-hover:scale-110 transition-transform">
                  <Heart className="w-4.5 h-4.5 stroke-[1.5]" />
                </div>
                <p className="text-xs text-white font-medium font-sans leading-tight">
                  Made for Your Loved Ones
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 6. Bottom Scroll Indicator Row */}
      <div className="max-w-7xl mx-auto w-full z-20 pt-6 sm:pt-10 pb-2 flex justify-center items-center">
        <a 
          href="#products" 
          onClick={(e) => scrollToSection(e, '#products')}
          className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-[#F4D58A] font-medium hover:text-[#D4AF37] transition-colors group drop-shadow-sm"
        >
          <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
          <div className="w-6 h-6 rounded-full border border-[#D4AF37]/40 bg-black/40 flex items-center justify-center group-hover:border-[#D4AF37] transition-all">
            <ArrowDown className="w-3 h-3 text-[#F4D58A] animate-bounce" />
          </div>
          <span>SCROLL TO EXPLORE</span>
          <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
        </a>
      </div>

      {/* 7. Feathered Seam Blur to next section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-28 sm:h-40 pointer-events-none z-10 bg-gradient-to-b from-transparent via-[#FAFAFA]/40 to-[#FAFAFA] backdrop-blur-[6px]" 
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 35%, black 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 35%, black 100%)'
        }}
      />
    </section>
  );
}
