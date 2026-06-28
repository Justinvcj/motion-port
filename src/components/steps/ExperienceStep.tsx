import { motion } from 'framer-motion';
import ContinueButton from '../ui/ContinueButton';

const EXPERIENCE = [
  { year: '2026', title: 'Graduating — BE CSE', subtitle: 'DRNGPIT · CGPA 8.5' },
  { year: '2025', title: 'Built Equinox', subtitle: 'Production ride-hailing platform · Full Stack' },
  { year: '2024', title: 'KSR College Hackathon', subtitle: '36hr Cybersecurity Hackathon · Top performer' },
  { year: '2024', title: 'KPR Institute Hackathon', subtitle: '24hr Hackathon · Built under pressure' },
  { year: '2023', title: 'Internship — Nxtlogic', subtitle: 'Full Stack Developer Intern · Coimbatore' },
  { year: '2022', title: 'Started CSE at DRNGPIT', subtitle: 'Computer Science Engineering · Coimbatore' },
];

export default function ExperienceStep() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } }
  };

  return (
    <div className="flex flex-col items-center text-center w-full px-4 my-auto min-h-min py-12">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-display font-extrabold text-white leading-[1.1] mb-12 shrink-0"
        style={{ fontSize: 'clamp(40px, 7vw, 90px)' }}
      >
        My journey.
      </motion.h1>

      <div className="relative w-full max-w-[600px] mb-8 overflow-y-auto max-h-[50vh] md:overflow-visible md:max-h-none py-4 px-2" style={{ WebkitOverflowScrolling: 'touch' }}>
        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/30 -translate-x-1/2 hidden md:block" />
        
        {/* Mobile vertical line */}
        <div className="absolute left-[20px] top-0 bottom-0 w-[2px] bg-white/30 md:hidden" />

        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-6">
          {EXPERIENCE.map((exp, i) => (
            <motion.div key={i} variants={itemVariant} className="relative flex flex-col md:flex-row items-start md:items-center w-full">
              
              {/* Left Date (Desktop) */}
              <div className="hidden md:block w-1/2 pr-10 text-right font-sans font-medium text-[14px] text-white/70">
                {exp.year}
              </div>

              {/* Node Circle */}
              <div className="absolute left-[20px] md:left-1/2 w-[14px] h-[14px] bg-white rounded-full -translate-x-1/2 top-[24px] md:top-auto z-10" />

              {/* Right Content */}
              <div className="w-full md:w-1/2 pl-[48px] md:pl-10 text-left">
                {/* Mobile Date */}
                <div className="md:hidden font-sans font-medium text-[13px] text-white/70 mb-1">
                  {exp.year}
                </div>
                
                <div className="bg-white/20 border-[1.5px] border-white/40 rounded-[12px] px-5 py-3 backdrop-blur-md">
                  <h4 className="font-sans font-semibold text-[16px] text-white mb-0.5">{exp.title}</h4>
                  <p className="font-sans text-[13px] text-white/80">{exp.subtitle}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="shrink-0">
        <ContinueButton delay={0.6} />
      </div>
    </div>
  );
}
