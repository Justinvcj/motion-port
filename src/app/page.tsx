'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolioStore } from '@/store/usePortfolioStore';
import { useSwipe } from '@/hooks/useSwipe';
import { useKeyboard } from '@/hooks/useKeyboard';
import Logo from '@/components/ui/Logo';
import StepCounter from '@/components/ui/StepCounter';
import JourneyPath from '@/components/ui/JourneyPath';
import dynamic from 'next/dynamic';

// Dynamic imports for steps
const HeroStep = dynamic(() => import('@/components/steps/HeroStep'), { ssr: false });
const AboutStep = dynamic(() => import('@/components/steps/AboutStep'), { ssr: false });
const ProjectsStep = dynamic(() => import('@/components/steps/ProjectsStep'), { ssr: false });
const SkillsStep = dynamic(() => import('@/components/steps/SkillsStep'), { ssr: false });
const StatsStep = dynamic(() => import('@/components/steps/StatsStep'), { ssr: false });
const ExperienceStep = dynamic(() => import('@/components/steps/ExperienceStep'), { ssr: false });
const ContactStep = dynamic(() => import('@/components/steps/ContactStep'), { ssr: false });

const STEPS = [
  HeroStep,
  AboutStep,
  ProjectsStep,
  SkillsStep,
  StatsStep,
  ExperienceStep,
  ContactStep
];

const stepVariants = {
  enter: (direction: 'forward' | 'backward') => ({
    x: direction === 'forward' ? '100vw' : '-100vw',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: (direction: 'forward' | 'backward') => ({
    x: direction === 'forward' ? '-100vw' : '100vw',
    opacity: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function PortfolioApp() {
  const { currentStep, direction } = usePortfolioStore();
  
  // Attach global event listeners for navigation
  useSwipe();
  useKeyboard();

  const CurrentStepComponent = STEPS[currentStep];

  return (
    <main className="relative w-full h-[100dvh] overflow-hidden flex flex-col bg-background">
      <Logo />
      <StepCounter />
      
      {/* The main step renderer */}
      <div className="flex-1 relative w-full h-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 flex flex-col w-full h-full pt-16 pb-[100px] overflow-y-auto overflow-x-hidden" // padding for logo/counter and journey path
          >
            {CurrentStepComponent && <CurrentStepComponent />}
          </motion.div>
        </AnimatePresence>
      </div>

      <JourneyPath />
    </main>
  );
}
