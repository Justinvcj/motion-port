'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const PROJECTS = [
  {
    title: 'EQUINOX',
    description: 'A high-performance real-time application built to handle massive scale. Unbreakable architecture.',
    tech: ['Node.js', 'React', 'WebSockets', 'Redis'],
    color: '#FF4D00',
    textColor: '#FFF3E0',
  },
  {
    title: 'DEV KNOWLEDGE ENGINE',
    description: 'AI-powered retrieval augmented generation system for internal developer documentation.',
    tech: ['Python', 'LangChain', 'OpenAI', 'Vector DB'],
    color: '#1A1008',
    textColor: '#FFD600',
  },
  {
    title: 'SPENDWISE',
    description: 'Smart financial tracking with automated categorization and predictive budgeting.',
    tech: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    color: '#FF2D78',
    textColor: '#FFF3E0',
  }
];

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Framer motion scroll tracking for horizontal scroll effect
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <section id="projects" className="relative bg-surface">
      
      {/* Mobile Vertical Layout */}
      <div className="md:hidden flex flex-col px-6 py-24 gap-8">
        <div className="font-mono text-[11px] text-text-secondary uppercase tracking-widest mb-4">
          03 / Projects
        </div>
        {PROJECTS.map((project, i) => (
          <div 
            key={i} 
            className="w-full rounded-3xl p-6 flex flex-col relative border border-white/5"
            style={{ backgroundColor: project.color }}
          >
            <div className="flex flex-col justify-between relative z-10 h-full gap-8">
              <div>
                <h3 
                  className="font-display font-black text-4xl leading-[0.9] -ml-[0.04em] mb-4"
                  style={{ color: project.textColor }}
                >
                  {project.title}
                </h3>
                <p className="font-sans text-base" style={{ color: project.textColor, opacity: 0.8 }}>
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 font-mono text-[10px] rounded-full font-bold uppercase border"
                      style={{ color: project.textColor, borderColor: project.textColor }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href="#" 
                  className="px-6 py-3 border-2 font-mono text-sm font-bold rounded-full transition-colors text-center"
                  style={{ borderColor: project.textColor, color: project.textColor }}
                >
                  View Project ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Horizontal Layout */}
      <div ref={targetRef} className="hidden md:block relative h-[300vh]">
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          
          {/* Pinned Label */}
          <div className="absolute top-8 left-12 font-mono text-[11px] text-text-secondary uppercase tracking-widest z-50 mix-blend-difference">
            03 / Projects
          </div>

          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-surface-2 z-50">
            <motion.div 
              className="h-full bg-primary"
              style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
            />
          </div>

          {/* Scrolling Content */}
          <motion.div style={{ x }} className="flex w-[300vw] h-full pt-24 pb-16 px-12 gap-12">
            
            {PROJECTS.map((project, i) => (
              <div 
                key={i} 
                className="w-[100vw] max-w-[1200px] h-[80vh] rounded-3xl p-16 flex flex-row relative shrink-0 border border-white/5"
                style={{ backgroundColor: project.color }}
              >
                <div className="w-1/2 flex flex-col justify-between relative z-10 h-full">
                  <div>
                    <h3 
                      className="font-display font-black text-[clamp(40px,8vw,100px)] leading-[0.9] -ml-[0.04em] mb-6"
                      style={{ color: project.textColor }}
                    >
                      {project.title}
                    </h3>
                    <p className="font-sans text-xl max-w-md" style={{ color: project.textColor, opacity: 0.8 }}>
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mt-8 flex flex-col gap-8">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 font-mono text-[11px] rounded-full font-bold uppercase border"
                          style={{ color: project.textColor, borderColor: project.textColor }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href="#" 
                        className="px-6 py-3 border-2 font-mono text-sm font-bold rounded-full transition-colors"
                        style={{ borderColor: project.textColor, color: project.textColor }}
                      >
                        View Project ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </motion.div>
        </div>
      </div>
    </section>
  );
}
