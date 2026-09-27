'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import confetti from 'canvas-confetti';
import { Rocket, Sparkles } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Exactly 4 Flying Rockets across the sky
interface FlyingRocket {
  id: number;
  src: string;
  alt: string;
  size: string;
  flyClass: string;
  glow: string;
  trailColor: string;
  initialPos?: { top: string; left?: string; right?: string };
  parallaxY?: number;
}

const FOUR_FLYING_ROCKETS: FlyingRocket[] = [
  {
    id: 1,
    src: '/images/site-rocket-1.png',
    alt: 'Diwali Flying Rocket 1 - Upper Left',
    size: 'w-12 sm:w-16 md:w-20',
    flyClass: 'animate-sky-fly-1',
    glow: 'drop-shadow-[0_0_15px_rgba(245,158,11,0.9)]',
    trailColor: 'from-amber-400 via-orange-500 to-transparent',
    initialPos: { top: '14vh', left: '2vw' },
    parallaxY: -260,
  },
  {
    id: 2,
    src: '/images/site-rocket-2.png',
    alt: 'Diwali Flying Rocket 2 - Upper Right',
    size: 'w-14 sm:w-18 md:w-22',
    flyClass: 'animate-sky-fly-2',
    glow: 'drop-shadow-[0_0_15px_rgba(16,185,129,0.9)]',
    trailColor: 'from-emerald-400 via-amber-400 to-transparent',
    initialPos: { top: '30vh', right: '2.5vw' },
    parallaxY: -400,
  },
  {
    id: 3,
    src: '/images/site-rocket-3.png',
    alt: 'Diwali Flying Rocket 3 - Middle Left',
    size: 'w-12 sm:w-16 md:w-20',
    flyClass: 'animate-sky-fly-3',
    glow: 'drop-shadow-[0_0_15px_rgba(244,63,94,0.9)]',
    trailColor: 'from-rose-400 via-amber-400 to-transparent',
    initialPos: { top: '60vh', left: '2vw' },
    parallaxY: -520,
  },
  {
    id: 4,
    src: '/images/site-rocket-4.png',
    alt: 'Diwali Flying Rocket 4 - Lower Right',
    size: 'w-12 sm:w-16 md:w-18',
    flyClass: 'animate-sky-fly-4',
    glow: 'drop-shadow-[0_0_15px_rgba(168,85,247,0.9)]',
    trailColor: 'from-amber-400 via-emerald-400 to-transparent',
    initialPos: { top: '80vh', right: '2vw' },
    parallaxY: -300,
  },
];

interface UserRocket {
  id: number;
  startX: number;
  startY: number;
}

export default function GlobalRocketParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rocketRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [userRockets, setUserRockets] = useState<UserRocket[]>([]);
  const [rocketsLaunchedCount, setRocketsLaunchedCount] = useState(0);

  // Launch explosive fireworks burst
  const triggerBurst = (originX = 0.5, originY = 0.4) => {
    confetti({
      particleCount: 75,
      spread: 90,
      origin: { x: originX, y: originY },
      colors: ['#ffd700', '#ff4500', '#ff007f', '#00f5d4', '#ffffff', '#fbbf24'],
      scalar: 1.15,
    });
  };

  // Launch interactive rocket on click
  const handleLaunchBurst = (e?: React.MouseEvent) => {
    let originX = 0.5;
    let originY = 0.4;
    let clickX = typeof window !== 'undefined' ? window.innerWidth / 2 : 400;
    let clickY = typeof window !== 'undefined' ? window.innerHeight / 2 : 400;

    if (e) {
      clickX = e.clientX;
      clickY = e.clientY;
      originX = e.clientX / window.innerWidth;
      originY = e.clientY / window.innerHeight;
    }

    const newRocket: UserRocket = {
      id: Date.now() + Math.random(),
      startX: clickX,
      startY: typeof window !== 'undefined' ? window.innerHeight + 50 : 800,
    };

    setUserRockets((prev) => [...prev.slice(-5), newRocket]);
    setRocketsLaunchedCount((prev) => prev + 1);

    setTimeout(() => {
      triggerBurst(originX, Math.max(0.1, originY - 0.25));
    }, 450);
  };

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden select-none"
    >
        {/* ========================================== */}
        {/* EXACTLY 4 CONTINUOUS FLYING ROCKETS ENGINE */}
        {/* ========================================== */}
        {FOUR_FLYING_ROCKETS.map((r, index) => (
          <div
            key={r.id}
            ref={(el) => {
              rocketRefs.current[index] = el;
            }}
            className={`absolute bottom-0 ${r.flyClass} pointer-events-auto cursor-pointer group will-change-transform`}
            onClick={handleLaunchBurst}
            title="Click rocket to launch fireworks!"
          >
            <div className="relative transform transition-transform group-hover:scale-125 duration-300">
              {/* Outer Ambient Glow */}
              <div
                className={`absolute inset-0 rounded-full blur-lg bg-gradient-to-t ${r.trailColor} scale-125 opacity-75 group-hover:opacity-100 pointer-events-none`}
              />

              {/* Rocket Graphic */}
              <div className={`relative ${r.size} aspect-square`}>
                <Image
                  src={r.src}
                  alt={r.alt}
                  fill
                  sizes="(max-width: 768px) 80px, 120px"
                  className={`object-contain filter ${r.glow}`}
                  priority={index < 2}
                />
              </div>

              {/* Fiery Exhaust Tail & Spark Trail */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3 h-14 pointer-events-none flex flex-col items-center">
                <div className={`w-2 h-8 bg-gradient-to-b ${r.trailColor} blur-[0.5px] animate-rocket-sparks rounded-full`} />
                <div className="w-3.5 h-3.5 bg-amber-400/80 rounded-full blur-md animate-ping -mt-4" />
              </div>
            </div>
          </div>
        ))}

        {/* ========================================== */}
        {/* USER CLICK INTERACTIVE LAUNCH ROCKETS */}
        {/* ========================================== */}
        {userRockets.map((ur) => (
          <div
            key={ur.id}
            className="absolute z-40 pointer-events-none transition-all duration-700 ease-out"
            style={{
              left: `${ur.startX}px`,
              top: `${ur.startY}px`,
              animation: 'flyStraightUpSky 0.85s cubic-bezier(0.1, 0.9, 0.2, 1) forwards',
            }}
          >
            <div className="relative -translate-x-1/2 -translate-y-1/2">
              <img
                src="/images/rocket_cracker.png"
                alt="User Launched Rocket"
                className="w-12 sm:w-16 h-auto filter drop-shadow-[0_0_20px_rgba(251,191,36,1)]"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3 h-16 bg-gradient-to-b from-yellow-300 via-red-500 to-transparent blur-[1px] rounded-full animate-ping" />
            </div>
          </div>
        ))}
    </div>
  );
}



