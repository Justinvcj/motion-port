'use client';

import { motion } from 'framer-motion';

export default function LeetCodeChart({ easy, medium, hard, total }: { easy: number, medium: number, hard: number, total: number }) {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  
  // Calculate percentages and stroke dasharrays
  const totalSolved = easy + medium + hard;
  const easyPct = easy / totalSolved;
  const medPct = medium / totalSolved;
  const hardPct = hard / totalSolved;

  const easyDash = easyPct * circumference;
  const medDash = medPct * circumference;
  const hardDash = hardPct * circumference;

  const medOffset = circumference - easyDash;
  const hardOffset = circumference - (easyDash + medDash);

  return (
    <div className="flex flex-col md:flex-row items-center gap-12">
      
      {/* Donut Chart */}
      <div className="relative w-[240px] h-[240px] flex items-center justify-center">
        <svg width="240" height="240" viewBox="0 0 200 200" className="transform -rotate-90">
          {/* Background Ring */}
          <circle cx="100" cy="100" r={radius} fill="none" stroke="#261810" strokeWidth="20" />
          
          {/* Hard Ring */}
          <motion.circle 
            cx="100" cy="100" r={radius} 
            fill="none" stroke="#FF2D78" strokeWidth="20"
            strokeDasharray={`${hardDash} ${circumference}`}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: hardOffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="round"
          />
          {/* Medium Ring */}
          <motion.circle 
            cx="100" cy="100" r={radius} 
            fill="none" stroke="#FFD600" strokeWidth="20"
            strokeDasharray={`${medDash} ${circumference}`}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: medOffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            strokeLinecap="round"
          />
          {/* Easy Ring */}
          <motion.circle 
            cx="100" cy="100" r={radius} 
            fill="none" stroke="#22D3EE" strokeWidth="20"
            strokeDasharray={`${easyDash} ${circumference}`}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
            strokeLinecap="round"
          />
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display font-bold text-5xl text-text-primary">{total}</span>
          <span className="font-mono text-[10px] text-text-secondary uppercase">Solved</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-4 font-mono text-[11px] uppercase tracking-widest">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-[#22D3EE]" />
          <span className="w-16 text-text-secondary">Easy</span>
          <span className="text-text-primary font-bold">{easy}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-[#FFD600]" />
          <span className="w-16 text-text-secondary">Medium</span>
          <span className="text-text-primary font-bold">{medium}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-[#FF2D78]" />
          <span className="w-16 text-text-secondary">Hard</span>
          <span className="text-text-primary font-bold">{hard}</span>
        </div>
      </div>

    </div>
  );
}
