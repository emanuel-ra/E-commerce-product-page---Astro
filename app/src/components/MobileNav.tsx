import { useNavigationStore } from "../stores/NavigationStore";

interface Props {
  children: React.ReactNode;
}
export const MobileNav = ({ children }: Props) => {
  const open = useNavigationStore((state) => state.open);
  return (
    <div
      className={` z-20 ${
        open
          ? "h-dvh w-full absolute left-0 top-0 bg-black/70 transition-all ease-in delay-75"
          : "hidden transition ease-out delay-75"
      } `}
    >
      {children}
    </div>
  );
};
