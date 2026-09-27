'use client';

import React from 'react';
import { Sparkles, Star, ArrowRight, ShieldCheck, Truck, Factory } from 'lucide-react';

export default function CtaSection() {
  return (
    <section 
      id="cta" 
      className="relative z-10 py-16 sm:py-24 lg:py-28 bg-white text-black overflow-hidden"
    >
      {/* Soft Ambient Gold Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#D4AF37]/10 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* White Glass Card Wrapper */}
        <div className="relative rounded-3xl bg-[#FAFAFA] border border-black/10 p-8 sm:p-14 lg:p-16 text-center shadow-xl shadow-black/[0.03]">
          
          {/* Top Seam Gold Highlight Line */}
          <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent rounded-full" />

          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-1.5 mb-2 text-[#B8860B] text-xs font-semibold tracking-[0.25em] uppercase font-sans">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span>READY TO ORDER?</span>
          </div>

          {/* Main Heading (Single Line on Desktop) */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight mb-4 leading-tight whitespace-normal sm:whitespace-nowrap">
            <span className="luxury-gold-text diwali-glow-pulse">Let's Light Up Your</span>{' '}
            <span className="text-black">Next Celebration</span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-xs sm:text-base text-black/75 font-sans font-medium leading-relaxed max-w-xl mx-auto mb-6">
            Get competitive factory-direct pricing. Build your cart and submit an inquiry — no commitment required.
          </p>

          {/* Decorative Flourish Line */}
          <div className="flex items-center justify-center gap-2.5 mb-8">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
            <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]/30" />
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
          </div>

          {/* Action Buttons Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            {/* Primary Golden Pill Button */}
            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-amber-400 to-[#B8860B] text-black font-sans font-semibold text-sm tracking-wide shadow-lg shadow-[#D4AF37]/25 hover:shadow-xl hover:shadow-[#D4AF37]/35 hover:scale-[1.03] transition-all duration-300"
            >
              <span>Browse Products</span>
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </a>

            {/* Secondary Outline Pill Button */}
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white border border-black/20 text-black font-sans font-semibold text-sm tracking-wide hover:border-[#B8860B] hover:text-[#B8860B] hover:scale-[1.02] transition-all duration-300"
            >
              <span>Contact Our Team</span>
            </a>
          </div>

          {/* Bottom Trust Badges */}
          <div className="pt-6 border-t border-black/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-sans text-black/70 font-medium">
            <span className="flex items-center gap-1.5">
              <Factory className="w-3.5 h-3.5 text-[#B8860B]" />
              Direct Sivakasi Factory
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B8860B]" />
              100% Green Certified
            </span>
            <span className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#B8860B]" />
              Doorstep Pan-India Delivery
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
