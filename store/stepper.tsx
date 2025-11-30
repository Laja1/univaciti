import { create } from "zustand";

type Stepper = {
  step: number;
  
  setStep: (num: number) => void;
};

export const useStepper = create<Stepper>((set) => ({
  step: 0,
  setStep: (num) => set({ step: num }),
}));
