import { create } from 'zustand';

interface PortfolioState {
  currentStep: number;
  direction: 'forward' | 'backward';
  goNext: () => void;
  goPrev: () => void;
  goToStep: (n: number) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  currentStep: 0,
  direction: 'forward',
  goNext: () => set((state) => {
    if (state.currentStep < 6) {
      return { currentStep: state.currentStep + 1, direction: 'forward' };
    }
    return state;
  }),
  goPrev: () => set((state) => {
    if (state.currentStep > 0) {
      return { currentStep: state.currentStep - 1, direction: 'backward' };
    }
    return state;
  }),
  goToStep: (n) => set((state) => {
    if (n >= 0 && n <= 6 && n !== state.currentStep) {
      return { 
        currentStep: n, 
        direction: n > state.currentStep ? 'forward' : 'backward' 
      };
    }
    return state;
  }),
}));
