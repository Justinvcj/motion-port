import { motion } from 'framer-motion';
import ContinueButton from '../ui/ContinueButton';

const BIO_LINES = [
  "Final-year CSE student at DRNGPIT · CGPA 8.5",
  "Built Equinox — a production ride-hailing platform",
  "Interned at Nxtlogic · Competed in 2 hackathons"
];

const STATS = [
  "8.5 CGPA",
  "2 Projects",
  "2 Hackathons",
  "1 Internship"
];

export default function AboutStep() {
  return (
    <div className="flex flex-col items-center text-center w-full px-4 my-auto min-h-min py-4">
      {/* H1 Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-display font-extrabold text-white leading-[1.1] mb-6"
        style={{ fontSize: 'clamp(28px, 5vw, 64px)' }}
      >
        I build things that work.
      </motion.h1>

      {/* Circular Photo Frame */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
        className="w-[120px] h-[120px] rounded-full border-[3px] border-white flex items-center justify-center bg-white/10 mb-4"
        style={{ boxShadow: '0 0 0 8px rgba(255,255,255,0.2)' }}
      >
        {/* Placeholder for Photo */}
        <span className="font-display font-bold text-[#1A6FA0] text-3xl">JV</span>
      </motion.div>

      {/* Bio Text */}
      <div className="flex flex-col gap-1 mb-6 max-w-[520px]">
        {BIO_LINES.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            className="font-sans text-[18px] text-white/90"
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* Stat Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-6 max-w-[600px]">
        {STATS.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
            className="bg-white text-[#1A6FA0] font-sans font-semibold text-[16px] px-[20px] py-[10px] rounded-full"
          >
            {stat}
          </motion.div>
        ))}
      </div>

      <ContinueButton delay={0.8} />
    </div>
  );
}
