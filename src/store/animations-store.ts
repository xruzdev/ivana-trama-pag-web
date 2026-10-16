import { create } from "zustand";

interface State {
  startAnimation: boolean;
  setStartAnimation: (value: boolean) => void;
}

export const useAnimationsStore = create<State>()(
  
    (set, get) => ({
      startAnimation: false,
      getStartAnimation: () => {
        const { startAnimation } = get();
        return startAnimation;
      },
      setStartAnimation: (value: boolean) => {
        set({ startAnimation: value });
      },
    }),
  
);