'use client';

import { motion, Variants } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  },
};

export default function TechStack() {
  const { count, ref: dsaRef } = useCountUp(542, 2.5); // Replace with dynamic if needed

  return (
    <section id="tech" className="relative w-full min-h-screen bg-background py-32 px-6 md:px-12">
      
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-display font-bold text-[clamp(32px,5vw,72px)] leading-[1.1] text-text-primary mb-12 md:mb-16 uppercase">
          The <span className="text-primary text-outline">Arsenal</span>
        </h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[160px] gap-4 md:gap-6"
        >
          
          {/* Large Cell: Currently Building */}
          <motion.div 
            variants={itemVariants}
            className="col-span-2 row-span-2 bg-surface rounded-[20px] p-6 md:p-8 flex flex-col justify-between group hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,77,0,0.15)] transition-all duration-300 border border-white/5"
          >
            <div className="font-mono text-[11px] text-text-secondary uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Currently Building
            </div>
            <div>
              <h3 className="font-display font-black text-4xl md:text-5xl text-primary mb-4">EQUINOX</h3>
              <p className="font-sans text-text-secondary text-sm md:text-base max-w-sm">
                A massive scale real-time architecture pushing the limits of Node.js and WebSockets.
              </p>
            </div>
          </motion.div>

          {/* Regular Cells */}
          {[
            { name: 'TypeScript', bg: '#261810', color: '#FFD600', cat: 'Language' },
            { name: 'React', bg: '#FF4D00', color: '#0D0905', cat: 'Frontend' },
            { name: 'Node.js', bg: '#FF2D78', color: '#FFF3E0', cat: 'Backend' },
            { name: 'Python', bg: '#1A1008', color: '#FF6B35', cat: 'Language' },
          ].map((tech, i) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="rounded-[20px] p-4 md:p-6 flex flex-col justify-between group hover:scale-[1.04] transition-all duration-300"
              style={{ backgroundColor: tech.bg, boxShadow: `0 0 0 ${tech.bg}00` }}
              whileHover={{ boxShadow: `0 0 30px ${tech.bg}60` }}
            >
              <div className="font-mono text-[10px] uppercase opacity-70" style={{ color: tech.color }}>
                {tech.cat}
              </div>
              <h4 className="font-mono font-bold text-lg md:text-xl" style={{ color: tech.color }}>
                {tech.name}
              </h4>
            </motion.div>
          ))}

          {/* Medium Cell: DSA */}
          <motion.div 
            variants={itemVariants}
            className="col-span-2 row-span-1 bg-accent-1 rounded-[20px] p-4 md:p-6 flex items-center justify-between group hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,214,0,0.3)] transition-all duration-300"
          >
            <div className="flex flex-col">
              <div className="font-mono text-[11px] text-background uppercase tracking-widest mb-1 md:mb-2">
                DSA Practice
              </div>
              <h4 className="font-mono font-bold text-lg md:text-2xl text-background">
                LeetCode Grind
              </h4>
            </div>
            <div ref={dsaRef} className="font-display font-black text-4xl md:text-5xl text-background">
              {Math.floor(count)}
            </div>
          </motion.div>

          {/* More Regular Cells */}
          {[
            { name: 'PostgreSQL', bg: '#FF8C00', color: '#0D0905', cat: 'Database' },
            { name: 'Flutter', bg: '#1A1008', color: '#FF4D00', cat: 'Mobile' },
            { name: 'Docker', bg: '#261810', color: '#FFF3E0', cat: 'DevOps' },
            { name: 'OpenAI', bg: '#FF6B35', color: '#0D0905', cat: 'AI/ML' },
          ].map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="rounded-[20px] p-6 flex flex-col justify-between group hover:scale-[1.04] transition-all duration-300"
              style={{ backgroundColor: tech.bg }}
              whileHover={{ boxShadow: `0 0 30px ${tech.bg}60` }}
            >
              <div className="font-mono text-[10px] uppercase opacity-70" style={{ color: tech.color }}>
                {tech.cat}
              </div>
              <h4 className="font-mono font-bold text-xl" style={{ color: tech.color }}>
                {tech.name}
              </h4>
            </motion.div>
          ))}

          {/* Wide Ticker Cell */}
          <motion.div 
            variants={itemVariants}
            className="col-span-2 md:col-span-4 row-span-1 bg-surface-2 rounded-[20px] overflow-hidden flex flex-col justify-center border border-white/5 group hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-300"
          >
            <div className="font-mono text-[10px] text-text-secondary uppercase px-6 mb-4">
              The Full Stack
            </div>
            <div className="flex whitespace-nowrap overflow-hidden">
              <div className="animate-marquee-left flex shrink-0 items-center gap-8 font-display font-bold text-3xl text-text-primary opacity-50">
                {['Java', 'C', 'Express', 'FastAPI', 'Supabase', 'SQLite', 'Git', 'WebSockets', 'RAG', 'LangChain'].map(t => (
                  <span key={t}>{t}</span>
                ))}
                {/* Duplicate for seamless scroll */}
                {['Java', 'C', 'Express', 'FastAPI', 'Supabase', 'SQLite', 'Git', 'WebSockets', 'RAG', 'LangChain'].map(t => (
                  <span key={t + '2'}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
