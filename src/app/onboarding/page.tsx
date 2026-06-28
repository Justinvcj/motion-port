'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NODES = [
  { id: 1, emoji: '👋', yOffset: -40 },
  { id: 2, emoji: '👨‍💻', yOffset: 40 },
  { id: 3, emoji: '👀', yOffset: -40 },
  { id: 4, emoji: '🚀', yOffset: 40 },
];

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');

  // Content transition variants
  const contentVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  const transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <div className="relative min-h-screen w-full bg-[#3EA4FF] text-white font-sans overflow-hidden flex flex-col">
      
      {/* Top Left Logo */}
      <div className="absolute top-8 left-8 font-bold text-2xl tracking-tight z-50 select-none">
        Jitter
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 pb-48">
        <div className="w-full max-w-md h-[250px] flex flex-col items-center justify-end relative">
          <AnimatePresence mode="wait">
            
            {step === 1 && (
              <motion.div
                key="step1"
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={transition}
                className="text-center absolute bottom-0 w-full"
              >
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
                  Welcome<br />to Jitter
                </h1>
                <button
                  onClick={() => setStep(2)}
                  className="mt-12 px-10 py-4 bg-white text-[#3EA4FF] font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Get Started
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={transition}
                className="text-center w-full absolute bottom-0"
              >
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-10">
                  What&apos;s your<br/>name?
                </h2>
                
                <div className="flex flex-col gap-3 w-full max-w-sm mx-auto shadow-xl">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoFocus
                    className="w-full px-6 py-5 bg-[#5CB3FF] border-0 text-white text-xl font-medium outline-none transition-colors placeholder:text-white/60"
                    placeholder="Justin Varghese"
                    spellCheck="false"
                  />
                  
                  <button
                    onClick={() => {
                      if (name.trim()) setStep(3);
                    }}
                    className={`w-full py-5 bg-white text-[#000000] font-bold text-lg transition-all duration-300 hover:bg-gray-100 ${
                      !name.trim() ? 'opacity-50 pointer-events-none' : 'opacity-100'
                    }`}
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={transition}
                className="text-center w-full max-w-2xl absolute bottom-0"
              >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-10">
                  What describes you best?
                </h2>
                
                <div className="flex flex-col gap-3 w-full max-w-lg mx-auto">
                  {/* Top Row */}
                  <div className="flex justify-center gap-3">
                    {['Designer', 'Marketer', 'Developer'].map((role) => (
                      <button
                        key={role}
                        onClick={() => setStep(4)}
                        className="flex-1 py-4 bg-white/20 hover:bg-white/30 text-white font-medium text-lg transition-all duration-300 border border-white/40 shadow-lg"
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                  {/* Bottom Row */}
                  <div className="flex justify-center gap-3 w-[66%] mx-auto">
                    {['C-level', 'Other'].map((role) => (
                      <button
                        key={role}
                        onClick={() => setStep(4)}
                        className="flex-1 py-4 bg-white/20 hover:bg-white/30 text-white font-medium text-lg transition-all duration-300 border border-white/40 shadow-lg"
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={transition}
                className="text-center absolute bottom-0 w-full"
              >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1]">
                  You&apos;re all set,<br />{name}!
                </h1>
              </motion.div>
            )}
            
          </AnimatePresence>
        </div>
      </main>

      {/* Panoramic Scrolling Flow System */}
      <div className="absolute bottom-12 left-0 w-full h-[200px] pointer-events-none z-0">
        
        <motion.div 
          className="absolute top-0 left-0 h-full flex items-center"
          animate={{ x: `calc(50vw - ${step * 100 - 50}vw)` }}
          transition={{ type: 'spring', stiffness: 50, damping: 14, mass: 1 }}
          style={{ width: '400vw' }}
        >
          {/* Continuous Dashed Sine Wave SVG spanning 400vw */}
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 4000 200" 
            className="absolute top-0 left-0"
            preserveAspectRatio="none"
          >
            <path 
              fill="none" 
              stroke="rgba(255,255,255,0.4)" 
              strokeWidth="1.5" 
              strokeDasharray="6 6"
              d="M0,100 Q500,0 1000,100 T2000,100 T3000,100 T4000,100" 
            />
          </svg>

          {/* Place Nodes precisely along the 100vw intervals */}
          {NODES.map((node, index) => {
            const isActive = step === index + 1;
            
            return (
              <div 
                key={node.id}
                className="absolute flex items-center justify-center"
                style={{ 
                  left: `${(index + 0.5) * 100}vw`,
                  top: '50%',
                  transform: `translate(-50%, calc(-50% + ${node.yOffset}px))`
                }}
              >
                {/* Outer pulsing ring for active node */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      className="absolute w-[120px] h-[120px] rounded-full border-[1.5px] border-white/60"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    />
                  )}
                </AnimatePresence>
                
                {/* The Node itself */}
                <motion.div 
                  className="rounded-full bg-[#99CDFF] flex items-center justify-center text-4xl border-2 border-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] relative z-10"
                  animate={{ 
                    width: isActive ? 80 : 50,
                    height: isActive ? 80 : 50,
                    scale: isActive ? 1 : 0.8,
                    opacity: isActive ? 1 : 0.5,
                    fontSize: isActive ? '36px' : '20px'
                  }}
                  transition={{ type: 'spring', stiffness: 60, damping: 15 }}
                >
                  {node.emoji}
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* Small floating particles */}
        <motion.div 
          className="absolute inset-0 pointer-events-none opacity-50"
          animate={{ x: `-${step * 10}vw` }}
          transition={{ type: 'spring', stiffness: 50, damping: 14 }}
        >
          <div className="absolute top-10 left-[40vw] w-1.5 h-1.5 bg-white rounded-full" />
          <div className="absolute top-32 left-[60vw] w-1 h-1 bg-white rounded-full" />
          <div className="absolute top-20 left-[120vw] w-2 h-2 bg-white rounded-full" />
          <div className="absolute top-4 left-[180vw] w-1 h-1 bg-white rounded-full" />
        </motion.div>
      </div>
      
      {/* Question Mark Button (Bottom Right) */}
      <div className="absolute bottom-6 right-6 w-12 h-12 bg-[#0F172A] rounded-full flex items-center justify-center text-white font-bold text-xl cursor-pointer z-50 hover:scale-105 transition-transform shadow-lg">
        ?
      </div>
    </div>
  );
}
