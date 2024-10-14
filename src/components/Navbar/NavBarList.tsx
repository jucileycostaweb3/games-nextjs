import { NavbarListProps } from "./types";

export const NavBarList = ({ children, ...props }: NavbarListProps) => {
  return (
    <ul className="my-4 border-indigo-400/20 hover:border-indigo-400/40 w-full" {...props}>
      { children }
    </ul>
  );
};
