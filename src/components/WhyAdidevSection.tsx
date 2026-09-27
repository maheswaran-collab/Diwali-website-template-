'use client';

import React from 'react';
import { Building2, ShieldCheck, IndianRupee, Sparkles, Truck, ClipboardCheck, Star } from 'lucide-react';

const TRUST_PILLARS = [
  {
    title: 'Sivakasi Factory Direct',
    description: 'Handcrafted directly at our Sivakasi manufacturing hub. Zero middlemen, zero markups—just authentic factory pricing.',
    icon: Building2,
  },
  {
    title: '100% Green Certified',
    description: 'Every sparkler and fountain complies with strict CSIR-NEERI green safety standards for worry-free family celebrations.',
    icon: ShieldCheck,
  },
  {
    title: 'Unbeatable Wholesale Value',
    description: 'Enjoy factory-direct bulk rates and volume discounts tailored for grand celebrations, resellers, and corporate hampers.',
    icon: IndianRupee,
  },
  {
    title: 'Generations of Craftsmanship',
    description: 'Decades of expert pyrotechnic artistry ensuring vibrant colors, reliable ignition, and breathtaking aerial splendor.',
    icon: Sparkles,
  },
  {
    title: 'Pan-India Insured Delivery',
    description: 'Safety-compliant, shockproof, and waterproof packaging delivered straight to your doorstep across India.',
    icon: Truck,
  },
  {
    title: 'Hassle-Free Quote Ordering',
    description: 'Select your items online, receive an instant personalized wholesale quote, and let our team handle the rest.',
    icon: ClipboardCheck,
  },
];

export default function WhyAdidevSection() {
  return (
    <section 
      id="why-choose-us" 
      className="relative z-10 py-16 sm:py-24 bg-white text-black overflow-hidden"
    >
      {/* Soft Ambient Background Gold Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4AF37]/5 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header (Identical style to Section 2, 3 & 4) */}
        <div className="text-center max-w-7xl mx-auto px-6 sm:px-12 relative z-10 mb-10 sm:mb-14">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-1.5 mb-1 text-[#B8860B] text-xs font-semibold tracking-[0.25em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span>WHY CHOOSE US</span>
          </div>

          {/* Section Heading (Single Line on Desktop) */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight mb-4 sm:mb-6 leading-tight whitespace-normal sm:whitespace-nowrap">
            <span className="luxury-gold-text diwali-glow-pulse">Built Different.</span>{' '}
            <span className="text-black">Crafted With Safety.</span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-xs sm:text-sm text-black font-sans font-medium leading-relaxed max-w-xl mx-auto">
            Discover what sets our Sivakasi fireworks apart from every other supplier in India.
          </p>

          {/* Decorative Flourish Line */}
          <div className="flex items-center justify-center gap-2.5 mt-3">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
            <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]/30" />
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
          </div>
        </div>

        {/* 6-Card Grid (3 columns, 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {TRUST_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={`pillar-${idx}`}
                className="group relative rounded-2xl bg-white border border-black/10 p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-[#D4AF37]/60 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 flex items-start gap-4"
              >
                {/* Gold Icon Badge (Left Aligned matching reference layout) */}
                <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#B8860B] shrink-0 group-hover:bg-[#B8860B] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>

                {/* Content Block */}
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-black mb-1.5 group-hover:text-[#B8860B] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/70 font-sans leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
