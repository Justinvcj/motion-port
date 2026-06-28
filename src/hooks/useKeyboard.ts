import { useEffect } from 'react';
import { usePortfolioStore } from '../store/usePortfolioStore';

export const useKeyboard = () => {
  const { goNext, goPrev, goToStep } = usePortfolioStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in an input or textarea
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'Enter':
        case ' ': // Spacebar
          e.preventDefault();
          goNext();
          break;
        case 'ArrowLeft':
        case 'Escape':
          e.preventDefault();
          goPrev();
          break;
        // Digit keys 1-7
        case '1': goToStep(0); break;
        case '2': goToStep(1); break;
        case '3': goToStep(2); break;
        case '4': goToStep(3); break;
        case '5': goToStep(4); break;
        case '6': goToStep(5); break;
        case '7': goToStep(6); break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev, goToStep]);
};
