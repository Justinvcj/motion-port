'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import HeroOrb from '@/components/ui/HeroOrb';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const justinRef = useRef<HTMLHeadingElement>(null);
  const vargheseRef = useRef<HTMLHeadingElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.2 }); // Wait for LoadingSequence to finish

      // Blob fades and scales in
      tl.fromTo(blobRef.current, 
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' }
      );

      // Names slide up smoothly
      tl.fromTo(justinRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        "-=1.5"
      );

      tl.fromTo(vargheseRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        "-=1.3"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="top" className="relative w-full h-[100dvh] bg-background overflow-hidden flex flex-col justify-between">
      
      {/* Background 01 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-[clamp(150px,25vw,300px)] leading-none text-surface select-none pointer-events-none z-0 tracking-tighter opacity-50">
        01
      </div>

      {/* Organic Blob (Clip-Path) */}
      <div 
        ref={blobRef}
        className="absolute -top-10 -right-10 w-[80vw] h-[60vh] md:w-[40vw] md:h-[70vh] bg-primary z-0 opacity-0 transform-gpu md:mix-blend-screen md:blur-none"
        style={{
          clipPath: 'polygon(100% 0, 100% 100%, 75% 95%, 45% 85%, 20% 60%, 0 30%, 15% 0)',
        }}
      />

      {/* 3D Orb */}
      <HeroOrb />

      {/* Main Typography */}
      <div className="relative z-10 pt-[30vh] px-6 md:px-12 pointer-events-none">
        <h1 
          ref={justinRef}
          className="font-display font-extrabold text-[clamp(48px,10vw,120px)] leading-[0.9] text-text-primary -ml-[0.02em] opacity-0"
        >
          JUSTIN
        </h1>
        <h1 
          ref={vargheseRef}
          className="font-display font-extrabold text-[clamp(48px,10vw,120px)] leading-[0.9] text-outline md:ml-[5vw] opacity-0 mt-[-10px] md:mt-[-20px]"
        >
          VARGHESE
        </h1>
      </div>

      {/* Bottom Elements */}
      <div className="relative z-10 p-6 md:p-12 flex justify-between items-end w-full pb-10">
        
        {/* Bottom Left Details */}
        <div className="font-mono text-[13px] text-text-secondary flex flex-col leading-relaxed">
          <span>Full Stack Developer</span>
          <span>BE CSE — DRNGPIT '26</span>
          <span>Coimbatore, India</span>
        </div>

        {/* Bottom Right Scroll Text */}
        <motion.div 
          className="font-mono text-[13px] text-text-secondary pr-4"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          Scroll to explore ↓
        </motion.div>
      </div>

      {/* Right side rotating disc */}
      <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <motion.div 
          className="w-[200px] h-[200px] rounded-full border-2 border-primary flex items-center justify-center relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        >
          {/* Circular Text using SVG */}
          <svg viewBox="0 0 100 100" className="absolute w-full h-full p-2 overflow-visible">
            <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
            <text className="font-mono text-[9px] font-bold fill-text-primary uppercase tracking-widest">
              <textPath href="#circlePath" startOffset="0%">
                AVAILABLE · FOR · WORK · 2025 · AVAILABLE · FOR · WORK · 2025 · 
              </textPath>
            </text>
          </svg>
          <div className="w-2 h-2 rounded-full bg-primary" />
        </motion.div>
      </div>

    </section>
  );
}
