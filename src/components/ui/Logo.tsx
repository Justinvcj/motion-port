'use client';
import { usePortfolioStore } from '../../store/usePortfolioStore';

export default function Logo() {
  const goToStep = usePortfolioStore((state) => state.goToStep);

  return (
    <div 
      onClick={() => goToStep(0)}
      className="fixed top-8 left-8 md:top-10 md:left-12 font-display font-bold text-lg text-white cursor-pointer select-none z-50 hover:opacity-80 transition-opacity"
    >
      Justin Varghese
    </div>
  );
}
