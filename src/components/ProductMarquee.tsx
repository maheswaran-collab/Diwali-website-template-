'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Sparkles, Star } from 'lucide-react';

const PRODUCTS = [
  { id: 1, image: '/products/product-1.png' },
  { id: 2, image: '/products/product-2.png' },
  { id: 3, image: '/products/product-3.png' },
  { id: 4, image: '/products/product-4.png' },
  { id: 5, image: '/products/product-5.png' },
  { id: 6, image: '/products/product-6.png' },
  { id: 7, image: '/products/product-7.png' },
];

// Duplicate product sequence 3 times for a flawless 100% infinite continuous loop
const MARQUEE_PRODUCTS = [...PRODUCTS, ...PRODUCTS, ...PRODUCTS];

export default function ProductMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hasHighlighted = useRef<boolean[]>(new Array(MARQUEE_PRODUCTS.length).fill(false));
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  useEffect(() => {
    let animationFrameId: number;
    let lastCheckTime = 0;

    const checkCenterPositions = (time: number) => {
      // Throttle checking to every 75ms to prevent RAF layout thrashing
      if (time - lastCheckTime >= 75) {
        lastCheckTime = time;

        if (containerRef.current) {
          const containerRect = containerRef.current.getBoundingClientRect();
          const centerX = containerRect.left + containerRect.width / 2;
          const centerTolerance = 65;
          const resetDistance = 160;

          MARQUEE_PRODUCTS.forEach((_, i) => {
            const itemEl = itemRefs.current[i];
            if (!itemEl) return;

            const itemRect = itemEl.getBoundingClientRect();
            const itemCenterX = itemRect.left + itemRect.width / 2;
            const distFromCenter = Math.abs(itemCenterX - centerX);

            if (distFromCenter < centerTolerance) {
              if (!hasHighlighted.current[i]) {
                hasHighlighted.current[i] = true;
                setHighlightedIndex(i);

                setTimeout(() => {
                  setHighlightedIndex((prev) => (prev === i ? null : prev));
                }, 750);
              }
            } else if (distFromCenter > resetDistance) {
              hasHighlighted.current[i] = false;
            }
          });
        }
      }

      animationFrameId = requestAnimationFrame(checkCenterPositions);
    };

    animationFrameId = requestAnimationFrame(checkCenterPositions);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section 
      id="products" 
      className="relative z-10 py-10 sm:py-16 overflow-hidden bg-white text-black"
    >
      {/* Top Edge Connecting Seam Feathered Blur */}
      <div 
        className="absolute top-0 left-0 right-0 h-20 sm:h-28 pointer-events-none z-10 bg-gradient-to-t from-transparent via-white/40 to-white backdrop-blur-[6px]" 
        style={{
          WebkitMaskImage: 'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.4) 35%, black 100%)',
          maskImage: 'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.4) 35%, black 100%)'
        }}
      />

      {/* Soft Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-black/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center relative z-10 mb-5 sm:mb-6">
        {/* Eyebrow Tag */}
        <div className="inline-flex items-center gap-1.5 mb-1 text-[#B8860B] text-xs font-semibold tracking-[0.25em] uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
          <span>EXCLUSIVE FESTIVE EXHIBITION</span>
        </div>

        {/* Section Heading (Single Line on Desktop) */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight mb-4 sm:mb-6 leading-tight whitespace-normal sm:whitespace-nowrap">
          <span className="luxury-gold-text diwali-glow-pulse">Royal Diwali</span>{' '}
          <span className="text-black">Product Showcase</span>
        </h2>

        {/* Supporting Paragraph */}
        <p className="text-xs sm:text-sm text-black font-sans font-medium leading-relaxed max-w-xl mx-auto">
          Discover our handcrafted range of luxury fireworks, sparkling fountains, and grand gift hampers designed to bring unforgettable warmth and splendour to your festivities.
        </p>

        {/* Decorative Flourish Line */}
        <div className="flex items-center justify-center gap-2.5 mt-3">
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
          <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]/30" />
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        </div>
      </div>

      {/* MARQUEE CONTAINER WITH EDGE FADE MASK & CENTER DETECTION REF */}
      <div 
        ref={containerRef} 
        className="relative w-full overflow-hidden marquee-edge-mask py-4 z-10"
      >
        <div className="animate-marquee-continuous flex items-center gap-8 sm:gap-14 md:gap-16 px-6">
          {MARQUEE_PRODUCTS.map((product, index) => {
            const floatDelay = (index % PRODUCTS.length) * 0.5;
            const isHighlighted = highlightedIndex === index;

            return (
              <div
                key={`${product.id}-${index}`}
                ref={(el) => { itemRefs.current[index] = el; }}
                className="group relative flex-shrink-0 w-56 sm:w-68 md:w-80 h-60 sm:h-72 md:h-84 flex items-center justify-center cursor-pointer"
              >
                {/* 3D Micro-floating wrapper with staggered timing */}
                <div 
                  className="animate-product-subtle-float relative w-full h-full flex items-center justify-center group-hover:[animation-play-state:paused]"
                  style={{ animationDelay: `${floatDelay}s` }}
                >
                  {/* Soft Gold Ambient Backlight Aura on White Background */}
                  <div 
                    className={`absolute rounded-full transition-all duration-700 ease-out pointer-events-none ${
                      isHighlighted 
                        ? 'w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-r from-[#D4AF37]/25 via-amber-200/20 to-[#B8860B]/25 blur-3xl opacity-100 scale-125' 
                        : 'w-44 h-44 sm:w-56 sm:h-56 bg-[#D4AF37]/10 blur-2xl opacity-50 group-hover:bg-[#D4AF37]/20'
                    }`} 
                  />

                  {/* Pure 3D Product Asset floating directly on WHITE background */}
                  <div 
                    className={`relative w-full h-full transition-all duration-700 ease-out ${
                      isHighlighted
                        ? 'scale-[1.08] filter brightness-[1.05] drop-shadow-[0_24px_40px_rgba(212,175,55,0.40)]'
                        : 'scale-100 filter brightness-100 drop-shadow-[0_12px_24px_rgba(0,0,0,0.14)] group-hover:scale-105 group-hover:drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)]'
                    }`}
                  >
                    <Image
                      src={product.image}
                      alt="Diwali Product"
                      fill
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 360px"
                      className="object-contain transition-all duration-700"
                      priority={index < 4}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
