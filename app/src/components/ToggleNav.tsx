import type React from "react";
import { useNavigationStore } from "../stores/NavigationStore";

interface Props {
  children: React.ReactNode;
}
export const ToggleNav = ({ children }: Props) => {
  const setOpen = useNavigationStore((state) => state.setOpen);
  const handleClick = () => setOpen();
  return (
    <button className="lg:hidden" onClick={handleClick}>
      {children}
    </button>
  );
};
