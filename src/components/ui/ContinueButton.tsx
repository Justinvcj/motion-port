'use client';
import { motion } from 'framer-motion';
import { usePortfolioStore } from '../../store/usePortfolioStore';

interface ContinueButtonProps {
  text?: string;
  delay?: number;
  onClick?: () => void; // Optional override, defaults to goNext
}

export default function ContinueButton({ text = "Continue →", delay = 0.5, onClick }: ContinueButtonProps) {
  const goNext = usePortfolioStore((state) => state.goNext);

  return (
    <motion.button
      onClick={onClick || goNext}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ 
        scale: 1.04, 
        boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
        backgroundColor: "rgba(255,255,255,0.9)" 
      }}
      whileTap={{ scale: 0.96 }}
      className="bg-white text-[#1A6FA0] font-display font-semibold text-[18px] px-12 py-4 rounded-full mt-10 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#29ABE2]"
    >
      {text}
    </motion.button>
  );
}
