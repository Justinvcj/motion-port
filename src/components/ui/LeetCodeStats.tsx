'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode } from 'react-icons/si';

interface LeetCodeData {
  status: string;
  message: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
}

function ProgressRing({ radius, stroke, progress, color }: { radius: number, stroke: number, progress: number, color: string }) {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          stroke="rgba(255,255,255,0.1)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress circle */}
        <motion.circle
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{ strokeDasharray: circumference + ' ' + circumference }}
        />
      </svg>
    </div>
  );
}

export default function LeetCodeStats({ username }: { username: string }) {
  const [data, setData] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          setData(data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [username]);

  if (loading) {
    return <div className="w-full h-full flex items-center justify-center text-text-muted">Loading stats...</div>;
  }

  if (!data) {
    return <div className="w-full h-full flex items-center justify-center text-text-muted">Failed to load stats.</div>;
  }

  const easyPercent = (data.easySolved / data.totalEasy) * 100 || 0;
  const mediumPercent = (data.mediumSolved / data.totalMedium) * 100 || 0;
  const hardPercent = (data.hardSolved / data.totalHard) * 100 || 0;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex items-center gap-3 mb-6">
        <SiLeetcode className="text-accent-4" size={24} />
        <span className="text-xl font-bold text-white">LeetCode Stats</span>
      </div>

      <div className="relative flex items-center justify-center mb-8">
        <ProgressRing radius={70} stroke={6} progress={easyPercent} color="#22D3EE" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <ProgressRing radius={55} stroke={6} progress={mediumPercent} color="#F59E0B" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <ProgressRing radius={40} stroke={6} progress={hardPercent} color="#EC4899" />
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pt-1">
          <span className="text-2xl font-bold text-white">{data.totalSolved}</span>
          <span className="text-[10px] text-text-muted uppercase">Solved</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 w-full px-4">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs text-accent-2 mb-1">Easy</span>
          <span className="text-lg font-bold text-white">{data.easySolved}</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-xs text-accent-4 mb-1">Medium</span>
          <span className="text-lg font-bold text-white">{data.mediumSolved}</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-xs text-accent-3 mb-1">Hard</span>
          <span className="text-lg font-bold text-white">{data.hardSolved}</span>
        </div>
      </div>
    </div>
  );
}
