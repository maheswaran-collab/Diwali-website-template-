'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

const RIBBON_ITEMS = [
  {
    symbol: '🪔',
    title: 'SAFETY CERTIFIED',
    desc: 'Government Approved & 100% Lab Tested',
  },
  {
    symbol: '🎆',
    title: 'SIVAKASI HERITAGE',
    desc: 'Authentic Craftsmanship from Master Artisans',
  },
  {
    symbol: '🚚',
    title: 'PAN-INDIA DELIVERY',
    desc: 'Safe, Insured & Express Doorstep Shipping',
  },
  {
    symbol: '⭐',
    title: '25+ YEARS TRUST',
    desc: 'Lighting Up 100,000+ Happy Celebrations',
  },
  {
    symbol: '👑',
    title: 'ROYAL COLLECTION',
    desc: 'Handcrafted Premium Multi-Color Aerial Shows',
  },
  {
    symbol: '🌿',
    title: 'ECO-FRIENDLY FORMULA',
    desc: 'Low Smoke & Green Certified Fireworks',
  },
];

// Duplicate 3 times for a 100% gapless continuous ribbon loop
const MARQUEE_RIBBON = [...RIBBON_ITEMS, ...RIBBON_ITEMS, ...RIBBON_ITEMS];

export default function TextMarqueeBanner() {
  return (
    <div className="relative z-20 w-full overflow-hidden bg-gradient-to-r from-[#F9F9F8] via-[#F3F2F0] to-[#F9F9F8] border-y border-black/10 py-4 sm:py-4.5 shadow-sm shadow-black/5">
      {/* Background Soft Golden Glow Stream */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-32 bg-[#D4AF37]/5 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent animate-pulse" />
      </div>

      {/* Marquee Ticker Row with Edge Mask */}
      <div className="relative w-full overflow-hidden marquee-edge-mask z-10">
        <div className="animate-marquee-banner flex items-center gap-10 sm:gap-14 md:gap-16 whitespace-nowrap">
          {MARQUEE_RIBBON.map((item, index) => {
            return (
              <div
                key={`ribbon-${index}`}
                className="group flex items-center gap-3.5 shrink-0 cursor-pointer transition-all duration-300 hover:scale-[1.03]"
              >
                {/* 3D White Emblem Badge */}
                <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#D4AF37]/30 shadow-sm shadow-black/5 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_18px_rgba(212,175,55,0.3)] transition-all duration-300">
                  <span className="text-base sm:text-lg filter drop-shadow-[0_0_6px_rgba(212,175,55,0.4)] transform group-hover:scale-110 transition-transform">
                    {item.symbol}
                  </span>
                </div>

                {/* Typography Block */}
                <div className="flex items-center gap-2.5">
                  {/* Highlight Tag */}
                  <span className="font-serif text-xs sm:text-sm font-bold tracking-widest uppercase text-[#B8860B]">
                    {item.title}
                  </span>

                  <span className="text-[#D4AF37] font-serif text-xs">•</span>

                  {/* Subtitle Description */}
                  <span className="text-xs sm:text-sm text-black font-sans tracking-wide group-hover:text-black/80 transition-colors font-medium">
                    {item.desc}
                  </span>
                </div>

                {/* Royal Gold Separator Ornament */}
                <div className="flex items-center gap-2 ml-8 sm:ml-12 opacity-70">
                  <div className="w-1 h-1 rounded-full bg-[#C9A227]" />
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A227] animate-spin-slow" />
                  <div className="w-1 h-1 rounded-full bg-[#C9A227]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
