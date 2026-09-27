'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Flame, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const STORY_STAGES = [
  {
    stage: '01',
    eyebrow: '01 / ANTICIPATION',
    title: 'The Countdown Begins',
    description: 'Waiting for loved ones to return home as festive warmth and sweet fragrance fill every room.',
  },
  {
    stage: '02',
    eyebrow: '02 / PREPARATION',
    title: 'Every Light Brings Them Closer',
    description: 'Arranging golden diyas along the threshold with joyful anticipation and childlike excitement.',
  },
  {
    stage: '03',
    eyebrow: '03 / TOGETHERNESS',
    title: 'One Home. One Celebration.',
    description: 'Generations gathered together under the evening sky, sharing laughter, stories, and light.',
  },
  {
    stage: '04',
    eyebrow: '04 / HAPPINESS',
    title: 'Moments Worth Remembering',
    description: 'The spark of pure joy in every smile, making this Diwali an unforgettable memory cherished forever.',
  },
];

const TOTAL_FRAMES = 300;

export default function FamilyStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Smooth Lerp Physics Animation Refs
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const animationFrameIdRef = useRef<number | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Preload frame sequence asynchronously on component mount
  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/story-frames/ezgif-frame-${frameNum}.jpg`;

      img.onload = () => {
        if (!isMounted) return;
        loadedCount++;
        if (loadedCount === 1) {
          drawSubFrame(0);
        }
        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
      };

      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;

    return () => {
      isMounted = false;
    };
  }, []);

  // Ultra-Smooth Sub-Frame Canvas Renderer with Dual-Image Crossfade Interpolation
  const drawSubFrame = (floatFrame: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const maxIdx = TOTAL_FRAMES - 1;
    const clampedFloat = Math.min(maxIdx, Math.max(0, floatFrame));
    const frame1 = Math.floor(clampedFloat);
    const frame2 = Math.min(maxIdx, frame1 + 1);
    const alpha2 = clampedFloat - frame1;

    const img1 = imagesRef.current[frame1];
    const img2 = imagesRef.current[frame2];

    if (!img1 || !img1.complete) return;

    if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
      canvas.width = canvas.clientWidth || 1280;
      canvas.height = canvas.clientHeight || 720;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    }

    const hRatio = canvas.width / img1.width;
    const vRatio = canvas.height / img1.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShiftX = (canvas.width - img1.width * ratio) / 2;
    const centerShiftY = (canvas.height - img1.height * ratio) / 2;
    const destW = img1.width * ratio;
    const destH = img1.height * ratio;

    // Draw base frame 1
    ctx.globalAlpha = 1.0;
    ctx.drawImage(img1, 0, 0, img1.width, img1.height, centerShiftX, centerShiftY, destW, destH);

    // Smoothly crossfade frame 2 for sub-frame continuous 60fps blending
    if (alpha2 > 0.01 && img2 && img2.complete && frame2 !== frame1) {
      ctx.globalAlpha = alpha2;
      ctx.drawImage(img2, 0, 0, img2.width, img2.height, centerShiftX, centerShiftY, destW, destH);
    }
  };

  // Continuous Sub-Frame Lerp Animation Loop
  useEffect(() => {
    let animationFrameId: number;

    const renderLoop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;

      if (Math.abs(diff) > 0.001) {
        currentFrameRef.current += diff * 0.15;
        drawSubFrame(currentFrameRef.current);
      } else if (Math.abs(currentFrameRef.current - targetFrameRef.current) > 0.0001) {
        currentFrameRef.current = targetFrameRef.current;
        drawSubFrame(currentFrameRef.current);
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Pre-render initial frame once images start loading
  useEffect(() => {
    drawSubFrame(0);
  }, [imagesLoaded]);

  // GSAP ScrollTrigger Driven Scrubbing
  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        setScrollProgress(progress);

        const targetFrame = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.floor(progress * (TOTAL_FRAMES - 1)))
        );
        targetFrameRef.current = targetFrame;

        const stageIdx = Math.min(
          STORY_STAGES.length - 1,
          Math.floor(progress * STORY_STAGES.length)
        );
        setCurrentStageIndex(stageIdx);
      },
    });

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      st.kill();
    };
  }, []);

  const currentStage = STORY_STAGES[currentStageIndex];

  return (
    <section 
      ref={containerRef}
      id="family-story" 
      className="relative w-full h-[320vh] bg-white text-black z-20"
    >
      {/* Sticky Viewport Wrapper */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between items-center py-4 sm:py-6 px-4 sm:px-8 overflow-hidden z-10 bg-white">
        
        {/* 1. Header Block (Identical Style to Previous Sections) */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 text-center relative z-10 shrink-0 mb-2 sm:mb-3">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-1.5 mb-1 text-[#B8860B] text-xs font-semibold tracking-[0.25em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span>THE DIWALI MOMENT</span>
          </div>

          {/* Section Heading (Single Line on Desktop) */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight mb-2 leading-tight whitespace-normal sm:whitespace-nowrap">
            <span className="luxury-gold-text diwali-glow-pulse">Expecting the</span>{' '}
            <span className="text-black">Happiness of the Family</span>
          </h2>

          {/* Dynamic Story Subtitle Transition */}
          <div className="min-h-[36px] flex items-center justify-center transition-all duration-500 ease-out">
            <div 
              key={`stage-text-${currentStageIndex}`}
              className="animate-fade-in text-center max-w-xl px-2"
            >
              <p className="text-xs sm:text-sm text-black font-sans font-medium leading-relaxed">
                <span className="text-[#B8860B] font-semibold uppercase tracking-wider mr-1.5">[{currentStage.stage}]</span>
                {currentStage.title} — {currentStage.description}
              </p>
            </div>
          </div>

          {/* Decorative Flourish Line */}
          <div className="flex items-center justify-center gap-2.5 mt-2">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
            <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]/30" />
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
          </div>
        </div>

        {/* 2. CENTER PIECE: Perfectly Balanced Cinematic Rectangular Frame */}
        <div className="relative w-full max-w-6xl flex-1 max-h-[62vh] sm:max-h-[66vh] lg:max-h-[70vh] aspect-[16/9] my-auto flex items-center justify-center px-4 sm:px-6">
          
          {/* Outer Frame Container with Golden Border Accent */}
          <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl shadow-black/10 bg-black/5 p-1 transition-all duration-300">
            
            {/* Canvas Element for Lerp-Smoothed Frame Scrubbing */}
            <canvas 
              ref={canvasRef} 
              className="w-full h-full rounded-xl sm:rounded-2xl object-cover block"
            />

            {/* Subtle Loading Placeholder (Disappears once images load) */}
            {!imagesLoaded && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center text-xs font-sans text-black/60 font-medium">
                <Flame className="w-4 h-4 text-[#D4AF37] animate-bounce mr-2" />
                <span>Loading Storytelling Experience...</span>
              </div>
            )}

            {/* Subtle Gold Corner Accents */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none rounded-tl-sm opacity-80" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37] pointer-events-none rounded-tr-sm opacity-80" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37] pointer-events-none rounded-bl-sm opacity-80" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37] pointer-events-none rounded-br-sm opacity-80" />
          </div>

        </div>

        {/* 3. Bottom Progress Bar */}
        <div className="w-full max-w-4xl shrink-0 mt-3 sm:mt-4">
          <div className="w-full h-1 bg-black/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#D4AF37] via-amber-500 to-[#B8860B] transition-all duration-300 ease-out rounded-full"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
