import { create } from "zustand";

interface LightBoxState {
  open: boolean;
  setOpen: () => void;
}

export const useLightBoxStore = create<LightBoxState>((set, get) => {
  return {
    open: false,
    setOpen: () => {
      const { open } = get();
      set({ open: !open });
    },
  };
});
