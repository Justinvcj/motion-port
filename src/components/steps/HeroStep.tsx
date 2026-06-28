import { motion } from 'framer-motion';
import ContinueButton from '../ui/ContinueButton';

export default function HeroStep() {
  const headingText = "Hey, I'm Justin.".split(" ");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      }
    }
  };

  const wordItem = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 15 } }
  };

  return (
    <div className="flex flex-col items-center text-center w-full px-4 my-auto min-h-min py-4">
      {/* Pill Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="px-4 py-1.5 rounded-full bg-surface border border-border-subtle text-white font-sans text-[13px] mb-4"
      >
        👋 Available for opportunities
      </motion.div>

      {/* Main Heading */}
      <motion.h1 
        variants={container}
        initial="hidden"
        animate="show"
        className="font-display font-extrabold text-white leading-[1.1] mb-6 flex flex-wrap justify-center gap-x-4 lg:gap-x-6"
        style={{ fontSize: 'clamp(56px, 9vw, 110px)' }}
      >
        {headingText.map((word, i) => (
          <motion.span key={i} variants={wordItem} className="inline-block">
            {word}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="font-sans font-medium text-white/85 text-center max-w-[600px] mb-6"
        style={{ fontSize: 'clamp(18px, 2.5vw, 28px)' }}
      >
        Full Stack Developer. Builder of Equinox.
      </motion.p>

      <ContinueButton text="Let's go →" delay={0.5} />
    </div>
  );
}
