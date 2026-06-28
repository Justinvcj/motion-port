'use client';

import { motion } from 'framer-motion';
import LeetCodeChart from '@/components/ui/LeetCodeChart';
import TimelineBar from '@/components/ui/TimelineBar';

export default function Stats() {
  return (
    <section id="stats" className="relative w-full min-h-screen bg-surface py-32 px-6 md:px-12 flex flex-col gap-24">
      
      <span className="font-mono text-text-secondary text-xs tracking-widest absolute top-12 left-6 md:left-12">
        05 / NUMBERS
      </span>

      {/* Band 1: GitHub Stats */}
      <div className="max-w-[1400px] mx-auto w-full flex flex-col xl:flex-row gap-8">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 bg-surface-2 rounded-2xl border-t-4 border-primary p-6 md:p-12"
        >
          <img 
            src="https://github-readme-stats.vercel.app/api?username=Justinvcj&show_icons=true&theme=tokyonight&hide_border=true&bg_color=transparent&title_color=FF4D00" 
            alt="GitHub Stats" 
            className="w-full h-auto"
          />
        </motion.div>
        
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1 bg-surface-2 rounded-2xl border-t-4 border-primary p-6 md:p-12 flex items-center justify-center"
        >
          <img 
            src="https://github-readme-streak-stats.herokuapp.com/?user=Justinvcj&theme=tokyonight&hide_border=true&background=transparent&ring=FF4D00&fire=FFD600&currStreakNum=FFF3E0" 
            alt="GitHub Streak" 
            className="w-full h-auto max-w-[400px]"
          />
        </motion.div>
      </div>

      {/* Band 2: LeetCode */}
      <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center py-12">
        <h3 className="font-display font-bold text-3xl md:text-5xl mb-12 text-text-primary text-center">
          Algorithm Grind
        </h3>
        <LeetCodeChart easy={180} medium={312} hard={50} total={542} />
      </div>

      {/* Band 3: Timeline */}
      <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center">
        <h3 className="font-display font-bold text-3xl md:text-5xl mb-12 text-text-primary text-center">
          The Journey So Far
        </h3>
        <TimelineBar />
      </div>

    </section>
  );
}
