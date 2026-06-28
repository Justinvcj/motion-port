'use client';
import { motion } from 'framer-motion';
import ContinueButton from '../ui/ContinueButton';
import { useEffect, useState } from 'react';

// Specialized Animated Number Component for LeetCode
const AnimatedNumber = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 1200; // 1.2s

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeOut * value));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [value]);

  return <span>{count}</span>;
};

export default function StatsStep() {
  const [leetCodeStats, setLeetCodeStats] = useState<{ total: number, easy: number, medium: number, hard: number } | null>(null);

  useEffect(() => {
    // Fetch LeetCode Stats
    fetch('https://leetcode-stats-api.herokuapp.com/justinvcj')
      .then(res => res.json())
      .then(data => {
        if (data && data.status === 'success') {
          setLeetCodeStats({
            total: data.totalSolved,
            easy: data.easySolved,
            medium: data.mediumSolved,
            hard: data.hardSolved
          });
        }
      })
      .catch(() => {
        // Fallback if API fails
        setLeetCodeStats({ total: 150, easy: 80, medium: 60, hard: 10 });
      });
  }, []);

  return (
    <div className="flex flex-col items-center text-center w-full px-4 my-auto min-h-min py-12">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-display font-extrabold text-white leading-[1.1] mb-12"
        style={{ fontSize: 'clamp(40px, 7vw, 90px)' }}
      >
        By the numbers.
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-[900px] mb-10">
        
        {/* GitHub Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 bg-white/20 border-[1.5px] border-white/40 rounded-[20px] p-6 backdrop-blur-[12px] flex flex-col gap-4"
        >
          <img 
            src="https://github-readme-stats.vercel.app/api?username=Justinvcj&show_icons=true&theme=transparent&hide_border=true&title_color=ffffff&icon_color=ffffff&text_color=ffffff&bg_color=00000000" 
            alt="GitHub Stats" 
            width={400}
            height={150}
            className="w-full h-auto object-contain"
          />
          <img 
            src="https://github-readme-streak-stats.herokuapp.com/?user=Justinvcj&theme=transparent&hide_border=true&ring=ffffff&fire=ffffff&currStreakLabel=ffffff&background=00000000&dates=ffffff&stroke=ffffff" 
            alt="GitHub Streak" 
            width={400}
            height={150}
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* LeetCode Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1 bg-white/20 border-[1.5px] border-white/40 rounded-[20px] p-6 backdrop-blur-[12px] flex flex-col items-center justify-center"
        >
          {leetCodeStats ? (
            <>
              <div className="font-display font-extrabold text-[64px] text-white leading-none">
                <AnimatedNumber value={leetCodeStats.total} />
              </div>
              <div className="font-sans text-[14px] text-white/70 mb-8">
                problems solved
              </div>
              
              <div className="flex gap-4 font-sans text-[14px]">
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1.5 mb-1 text-white/80"><div className="w-2.5 h-2.5 rounded-full bg-[#4ade80]" /> Easy</div>
                  <span className="font-bold text-white text-lg"><AnimatedNumber value={leetCodeStats.easy} /></span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1.5 mb-1 text-white/80"><div className="w-2.5 h-2.5 rounded-full bg-[#facc15]" /> Medium</div>
                  <span className="font-bold text-white text-lg"><AnimatedNumber value={leetCodeStats.medium} /></span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1.5 mb-1 text-white/80"><div className="w-2.5 h-2.5 rounded-full bg-[#f87171]" /> Hard</div>
                  <span className="font-bold text-white text-lg"><AnimatedNumber value={leetCodeStats.hard} /></span>
                </div>
              </div>
            </>
          ) : (
            <div className="animate-pulse w-full h-full flex flex-col items-center justify-center gap-4">
              <div className="w-24 h-16 bg-white/20 rounded-md" />
              <div className="w-32 h-4 bg-white/20 rounded-md mb-4" />
              <div className="flex gap-4">
                <div className="w-12 h-10 bg-white/20 rounded-md" />
                <div className="w-12 h-10 bg-white/20 rounded-md" />
                <div className="w-12 h-10 bg-white/20 rounded-md" />
              </div>
            </div>
          )}
        </motion.div>

      </div>

      <ContinueButton delay={0.6} />
    </div>
  );
}
