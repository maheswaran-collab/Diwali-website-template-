'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Heart, Flame, Moon, Star } from 'lucide-react';

const EXPERIENCE_MOMENTS = [
  {
    tag: '01 / ILLUMINATION',
    title: 'The First Spark of Light',
    desc: 'The quiet reverence of lighting the first diya on a festive evening, casting warm golden shadows across handcrafted threshold rangolis.',
    icon: Flame,
  },
  {
    tag: '02 / TOGETHERNESS',
    title: 'Unforgettable Family Moments',
    desc: 'Laughter echoing across rooftops as generations unite to watch brilliant fountain sparklers paint golden constellations in the night sky.',
    icon: Heart,
  },
  {
    tag: '03 / CELEBRATION',
    title: 'Grand Midnight Splendour',
    desc: 'When the night erupts into vibrant color, sound, and boundless joy—making every Diwali memory cherished for years to come.',
    icon: Moon,
  },
];

export default function LightUpMomentsSection() {
  return (
    <section 
      id="experience-moments" 
      className="relative z-10 py-16 sm:py-24 bg-white text-black overflow-hidden"
    >
      {/* 1. Light Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4AF37]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-black/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* 2. Header Block (Matching Section 2 & 3 Header Style) */}
        <div className="text-center max-w-7xl mx-auto px-6 sm:px-12 relative z-10 mb-10 sm:mb-14">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-1.5 mb-1 text-[#B8860B] text-xs font-semibold tracking-[0.25em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span>THE DIWALI EXPERIENCE</span>
          </div>

          {/* Main Heading (Single Line on Desktop) */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight mb-4 sm:mb-6 leading-tight whitespace-normal sm:whitespace-nowrap">
            <span className="luxury-gold-text diwali-glow-pulse">Light Up</span>{' '}
            <span className="text-black">Every Moment</span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-xs sm:text-sm text-black font-sans font-medium leading-relaxed max-w-xl mx-auto">
            From the first spark to the final celebration, make every Diwali moment brighter, louder and more memorable.
          </p>

          {/* Decorative Flourish Line */}
          <div className="flex items-center justify-center gap-2.5 mt-3">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
            <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]/30" />
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
          </div>
        </div>

        {/* 3. Main Composition: Layered Editorial Split (Visual Focal Point + Asymmetrical Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visual Focal Point (Illuminated 3D Diya Centerpiece on Light Background) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Concentric Glow Rings */}
            <div className="absolute w-[300px] h-[300px] sm:w-[440px] sm:h-[440px] rounded-full border border-[#D4AF37]/30 animate-spin-slow pointer-events-none" style={{ animationDuration: '35s' }} />
            <div className="absolute w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] rounded-full border border-black/5 pointer-events-none" />

            {/* Glowing Golden Aura Behind Diya */}
            <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-[#D4AF37]/25 via-amber-200/20 to-[#B8860B]/20 rounded-full blur-3xl opacity-90 animate-pulse" style={{ animationDuration: '6s' }} />

            {/* Floating 3D Diya Image Container */}
            <div className="relative z-10 w-full max-w-[320px] sm:max-w-[420px] aspect-square animate-product-subtle-float">
              <Image
                src="/images/diwali_3d_centerpiece.png"
                alt="Diwali Floating Diya Experience"
                fill
                sizes="(max-width: 768px) 320px, 420px"
                className="object-contain drop-shadow-[0_20px_40px_rgba(212,175,55,0.30)]"
                priority
              />
            </div>

            {/* Floating Glass Editorial Badge */}
            <div className="absolute -bottom-4 -left-2 sm:bottom-2 sm:left-2 z-20 bg-white/90 backdrop-blur-xl border border-black/10 rounded-2xl p-4 sm:p-5 shadow-xl shadow-black/5 max-w-[240px] sm:max-w-[280px]">
              <div className="flex items-center gap-3 mb-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#B8860B]">
                  <Flame className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold font-serif text-black tracking-wide">Pure Festive Warmth</span>
              </div>
              <p className="text-[11px] sm:text-xs text-black/75 font-sans leading-relaxed">
                Diwali is not just fireworks—it is the warmth of togetherness brought alive.
              </p>
            </div>

          </div>

          {/* Right Editorial Story Pillars */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            {EXPERIENCE_MOMENTS.map((moment, idx) => {
              const Icon = moment.icon;
              return (
                <div
                  key={`moment-${idx}`}
                  className="group relative rounded-2xl bg-white border border-black/10 p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-[#D4AF37]/60 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    {/* Pillar Tag */}
                    <span className="text-[11px] font-bold tracking-[0.2em] text-[#B8860B] font-sans uppercase">
                      {moment.tag}
                    </span>
                    <Icon className="w-4 h-4 text-black/40 group-hover:text-[#B8860B] transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-black mb-1.5 group-hover:text-[#B8860B] transition-colors">
                    {moment.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-black/70 font-sans leading-relaxed font-normal">
                    {moment.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
