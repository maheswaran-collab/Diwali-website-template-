'use client';

import React from 'react';
import { Flame, Send, MapPin, Phone, Mail, ArrowUp, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#07090E] text-white border-t border-white/10 pt-16 sm:pt-20 pb-10 overflow-hidden">
      
      {/* Deep Ambient Gold Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D4AF37]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Top Section: Brand Header & Sivakasi Heritage Badge */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-white/10">
          
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#F4D58A] shadow-lg shadow-black/40">
              <Flame className="w-6 h-6 stroke-[1.75]" />
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight luxury-gold-text block leading-none">
                ROYAL DIWALI
              </span>
              <span className="text-[11px] tracking-[0.25em] text-[#F4D58A] font-semibold uppercase font-sans mt-1 block">
                SIVAKASI FACTORY DIRECT • EST. 1998
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111520] border border-white/10 shadow-lg text-xs font-semibold text-gray-300 font-sans">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>CSIR-NEERI Green Certified Manufacturer</span>
          </div>

        </div>

        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 py-12 border-b border-white/10">
          
          {/* Col 1: About & Contact Info */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wide">
              Sivakasi Manufacturing Hub
            </h4>
            <p className="text-xs text-gray-400 font-sans leading-relaxed">
              Generations of pyrotechnic craftsmanship, delivering safe, brilliant, and memorable Diwali celebrations across India with factory-direct wholesale value.
            </p>

            <div className="space-y-2.5 text-xs text-gray-300 font-sans pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Sivakasi Fireworks Industrial Estate, Sivakasi, Tamil Nadu - 626123</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>+91 98765 43210 / +91 98765 43211</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>orders@diwalicelebration.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-sans text-gray-400">
              <li><a href="#hero" className="hover:text-[#F4D58A] transition-colors">Home Showcase</a></li>
              <li><a href="#products" className="hover:text-[#F4D58A] transition-colors">Product Marquee</a></li>
              <li><a href="#process" className="hover:text-[#F4D58A] transition-colors">Order Process</a></li>
              <li><a href="#experience-moments" className="hover:text-[#F4D58A] transition-colors">Diwali Experience</a></li>
              <li><a href="#family-story" className="hover:text-[#F4D58A] transition-colors">Family Storytelling</a></li>
              <li><a href="#why-choose-us" className="hover:text-[#F4D58A] transition-colors">Why Choose Us</a></li>
            </ul>
          </div>

          {/* Col 3: Product Range */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs font-sans text-gray-400">
              <li><span className="hover:text-[#F4D58A] cursor-pointer transition-colors">Sparkling Ground Chakkars</span></li>
              <li><span className="hover:text-[#F4D58A] cursor-pointer transition-colors">Multi-Shot Aerial Sky Cakes</span></li>
              <li><span className="hover:text-[#F4D58A] cursor-pointer transition-colors">Flower Pots & Fountains</span></li>
              <li><span className="hover:text-[#F4D58A] cursor-pointer transition-colors">Eco-Friendly Green Sparklers</span></li>
              <li><span className="hover:text-[#F4D58A] cursor-pointer transition-colors">Grand Family Gift Hampers</span></li>
              <li><span className="hover:text-[#F4D58A] cursor-pointer transition-colors">Sounding Fireworks & Rockets</span></li>
            </ul>
          </div>

          {/* Col 4: Newsletter Box */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              VIP Wholesale Catalog
            </h4>
            <p className="text-xs text-gray-400 font-sans leading-relaxed">
              Subscribe to get early festive catalog releases and bulk discount updates.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2 pt-1">
              <div className="flex items-center gap-1.5">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#111520] border border-white/15 text-white text-xs placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] shadow-inner"
                />
                <button
                  type="submit"
                  className="p-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black font-bold shadow-md hover:scale-105 transition-all shrink-0"
                  title="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <span className="text-[10px] text-gray-400 font-sans block">
                No spam. Unsubscribe anytime with 1-click.
              </span>
            </form>
          </div>

        </div>

        {/* Bottom Copyright & Back-to-Top Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-sans">
          <span>© 2026 Royal Diwali Sivakasi. All Rights Reserved.</span>
          
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#F4D58A] transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-[#F4D58A] transition-colors">Terms of Service</a>
            <a href="#safety" className="hover:text-[#F4D58A] transition-colors">Green Safety Guidelines</a>
            
            {/* Smooth Back-to-Top Button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#111520] border border-white/15 text-white hover:border-[#D4AF37] hover:text-[#F4D58A] transition-all shadow-md"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
