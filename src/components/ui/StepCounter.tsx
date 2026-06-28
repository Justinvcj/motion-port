'use client';
import { usePortfolioStore } from '../../store/usePortfolioStore';

export default function StepCounter() {
  const currentStep = usePortfolioStore((state) => state.currentStep);
  const totalSteps = 7;

  return (
    <div className="fixed top-8 right-8 md:top-10 md:right-12 font-sans font-medium text-[14px] text-white/70 z-50 select-none tracking-widest">
      {String(currentStep + 1).padStart(2, '0')} / {String(totalSteps).padStart(2, '0')}
    </div>
  );
}
