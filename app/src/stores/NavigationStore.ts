import { create } from "zustand";

interface NavigationState {
  open: boolean;
  setOpen: () => void;
}

export const useNavigationStore = create<NavigationState>((set, get) => {
  return {
    open: false,
    setOpen: () => {
      const { open } = get();
      set({ open: !open });
    },
  };
});
