import type React from "react";
import { useCartStore } from "../stores/CartStore";

interface Props {
  children:React.ReactNode
}

export const ButtonCart = ({ children }: Props) => {
    const setOpen = useCartStore(state => state.setOpen)
  return (
    <button title='Cart' aria-label='Cart' onClick={setOpen}>
      {children}
    </button>
  );
};