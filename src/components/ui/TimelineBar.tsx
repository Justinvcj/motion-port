'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const TIMELINE = [
  { year: '2022', title: 'Started CSE' },
  { year: '2023', title: 'Nxtlogic Intern' },
  { year: '2024', title: 'KPR Hackathon' },
  { year: '2024', title: 'KSR Hackathon' },
  { year: '2025', title: 'Equinox' },
  { year: '2026', title: 'Graduating' },
];

export default function TimelineBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Draw line animation
      gsap.fromTo(lineRef.current, 
        { strokeDashoffset: 1000 }, // Assume long enough
        { 
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            end: 'right left',
            scrub: true,
          }
        }
      );

      // Dots scale in
      gsap.fromTo('.timeline-dot', 
        { scale: 0 },
        {
          scale: 1,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-x-auto py-12 scrollbar-hide">
      <div className="min-w-[800px] relative">
        
        {/* Connecting Line */}
        <div className="absolute top-[7px] left-4 right-4 h-0.5 z-0">
          <svg width="100%" height="2" preserveAspectRatio="none">
            <line 
              x1="0" y1="1" x2="100%" y2="1" 
              stroke="#FF4D00" strokeWidth="2" strokeDasharray="5 5" opacity="0.3" 
            />
            <path 
              ref={lineRef}
              d={`M 0 1 L 2000 1`} 
              stroke="#FF4D00" strokeWidth="2"
              strokeDasharray="1000"
              fill="none"
            />
          </svg>
        </div>

        {/* Nodes */}
        <div className="flex justify-between relative z-10 w-full px-4">
          {TIMELINE.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-4 w-32 -ml-16">
              <div className="timeline-dot w-4 h-4 rounded-full bg-primary border-4 border-surface shadow-[0_0_15px_rgba(255,77,0,0.5)]" />
              <div className="flex flex-col items-center text-center">
                <span className="font-display font-bold text-primary">{item.year}</span>
                <span className="font-mono text-[10px] text-text-secondary uppercase">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
