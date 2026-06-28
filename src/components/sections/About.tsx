'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function StatBlock({ end, label, isFloat = false }: { end: number, label: string, isFloat?: boolean }) {
  const { count, ref } = useCountUp(end, 2);
  
  return (
    <div ref={ref} className="flex flex-col gap-1 border-t border-white/10 pt-4">
      <div className="font-display font-bold text-5xl text-primary">
        {isFloat ? count.toFixed(1) : Math.floor(count)}
      </div>
      <div className="font-mono text-[11px] text-text-secondary uppercase tracking-wider">
        / {label}
      </div>
    </div>
  );
}

export default function About() {
  const quoteRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slow Parallax for pull quote
      gsap.to(quoteRef.current, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" className="relative w-full min-h-screen bg-surface flex flex-col md:flex-row items-center p-6 md:p-12 lg:p-24 gap-12 lg:gap-16 overflow-hidden">
      
      {/* Left 60% */}
      <div className="w-full md:w-[60%] flex flex-col z-10 relative mt-12 md:mt-0">
        <span className="font-mono text-primary text-xs mb-6 tracking-widest">02 /</span>
        
        <h2 ref={quoteRef} className="font-display font-bold text-[clamp(28px,4vw,56px)] leading-[1.2] text-text-primary mb-8 md:mb-12">
          "I build things that work.<br/>Loudly."
        </h2>

        <div className="flex flex-col gap-6 font-sans text-text-secondary text-base md:text-lg max-w-xl mb-12 leading-relaxed">
          <p>
            I'm a Full Stack Developer and Computer Science Engineering student pushing the boundaries of what's expected. I don't just write code; I craft experiences that demand attention and operate flawlessly under the hood.
          </p>
          <p>
            Whether I'm architecting scalable backends with Node.js and Supabase, or creating hyper-dynamic frontends, my philosophy remains the same: controlled chaos. Bold visuals, unbreakable logic.
          </p>
        </div>

        {/* 2x2 Stats Grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 max-w-xl">
          <StatBlock end={8.5} label="CGPA" isFloat />
          <StatBlock end={2} label="Major Projects" />
          <StatBlock end={2} label="Hackathon Wins" />
          <StatBlock end={1} label="Internship" />
        </div>
      </div>

      {/* Right 40% */}
      <div className="w-full md:w-[40%] relative flex justify-center items-center mt-12 md:mt-0 min-h-[400px]">
        
        {/* Giant background text */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-[150px] leading-none text-transparent -webkit-text-stroke-2 stroke-surface-2 opacity-50 z-0 select-none">
          JV
        </div>

        {/* Photo Container */}
        <div 
          className="relative w-full max-w-[400px] aspect-[4/5] bg-surface-2 z-10 overflow-hidden mix-blend-luminosity"
          style={{
            clipPath: 'polygon(50% 0%, 100% 20%, 90% 80%, 40% 100%, 0% 70%, 10% 15%)',
          }}
        >
          {/* Orange color overlay for duotone effect */}
          <div className="absolute inset-0 bg-primary opacity-40 mix-blend-color z-20" />
          
          {/* Placeholder for Photo - Replace with Next Image later */}
          <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center font-display text-4xl text-white/20">
            PHOTO
          </div>
          {/* 
            <Image 
              src="/images/justin.jpg" 
              alt="Justin Varghese" 
              fill 
              className="object-cover grayscale" 
            /> 
          */}
        </div>

        {/* Floating Badges */}
        <motion.div 
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[10%] -left-4 md:-left-12 z-30 bg-accent-2 text-white font-mono text-[10px] uppercase px-4 py-2 rounded-full font-bold shadow-lg shadow-accent-2/20 border border-white/20"
        >
          → Equinox
        </motion.div>

        <motion.div 
          animate={{ y: [15, -15, 15] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-[20%] -right-4 md:-right-8 z-30 bg-primary text-background font-mono text-[10px] uppercase px-4 py-2 rounded-full font-bold shadow-lg shadow-primary/20 border border-background/20"
        >
          → CGPA 8.5
        </motion.div>

        <motion.div 
          animate={{ y: [-5, 15, -5] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute top-[60%] -left-8 md:-left-16 z-30 bg-accent-1 text-background font-mono text-[10px] uppercase px-4 py-2 rounded-full font-bold shadow-lg shadow-accent-1/20 border border-background/20"
        >
          → Hackathon
        </motion.div>

      </div>
    </section>
  );
}
