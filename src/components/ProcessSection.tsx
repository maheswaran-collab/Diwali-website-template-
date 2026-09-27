'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Search, ShoppingBag, Send, PhoneCall, Sparkles, Star } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    title: 'Browse Products',
    description: 'Explore our extensive Sivakasi catalog with eco-certified sparklers, fountains, and hampers.',
    icon: Search,
  },
  {
    num: '02',
    title: 'Build Your Cart',
    description: 'Select your preferred items and quantities with transparent factory-direct pricing.',
    icon: ShoppingBag,
  },
  {
    num: '03',
    title: 'Submit Inquiry',
    description: 'Submit your cart as a wholesale quote request in seconds. No advance payment required.',
    icon: Send,
  },
  {
    num: '04',
    title: 'We Contact You',
    description: 'Our team calls to confirm order details, verify safety specs, and arrange express delivery.',
    icon: PhoneCall,
  },
];

const METRICS = [
  { target: 170, suffix: '+', label: 'Products Available' },
  { target: 25, suffix: '+', label: 'Product Categories' },
  { target: 25, suffix: '+', label: 'Years in Sivakasi' },
  { target: 100, suffix: '%', label: 'Safety Certified' },
];

function AnimatedCounter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease-out exponential deceleration for high-end feel
            const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeOutExpo * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function ProcessSection() {
  return (
    <section 
      id="process" 
      className="relative z-10 py-12 sm:py-16 bg-white text-black"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header (Identical style to Section 2) */}
        <div className="text-center max-w-7xl mx-auto px-6 sm:px-12 relative z-10 mb-5 sm:mb-6">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-1.5 mb-1 text-[#B8860B] text-xs font-semibold tracking-[0.25em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span>SIMPLE PROCESS</span>
          </div>

          {/* Section Heading (Single Line on Desktop) */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight mb-4 sm:mb-6 leading-tight whitespace-normal sm:whitespace-nowrap">
            <span className="luxury-gold-text diwali-glow-pulse">How to Place</span>{' '}
            <span className="text-black">Your Order</span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-xs sm:text-sm text-black font-sans font-medium leading-relaxed max-w-xl mx-auto">
            From browsing to delivery — four simple steps
          </p>

          {/* Decorative Flourish Line */}
          <div className="flex items-center justify-center gap-2.5 mt-3">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
            <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]/30" />
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
          </div>
        </div>

        {/* Minimalist 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-12 sm:mb-16">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={`minimal-step-${idx}`}
                className="flex flex-col justify-between p-5 rounded-xl border border-black/5 bg-[#FAFAFA]/60 hover:bg-[#FAFAFA] hover:border-black/15 transition-all duration-300"
              >
                {/* Step Top Bar */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#B8860B]">
                      [{step.num}]
                    </span>
                    <Icon className="w-4 h-4 text-black/40" />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-black mb-1.5">
                    {step.title}
                  </h3>

                  <p className="text-xs text-black/60 font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Metrics Row with Animated Counters */}
        <div className="py-4 sm:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-black/10">
            {METRICS.map((stat, idx) => (
              <div key={`minimal-metric-${idx}`} className={`flex flex-col items-center ${idx > 0 ? 'pt-3 md:pt-0' : ''}`}>
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold luxury-gold-text tracking-tight mb-1">
                  <AnimatedCounter end={stat.target} suffix={stat.suffix} />
                </span>
                <span className="text-xs text-black/70 font-semibold font-sans tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
