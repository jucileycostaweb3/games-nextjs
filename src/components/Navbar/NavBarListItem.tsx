import { NavbarListItemProps } from "./types";

export const NavBarListItem = ({ children, ...props }: NavbarListItemProps) => {
  return (
    <li className="my-2 mx-2 p-3 rounded-lg hover:bg-indigo-400/40 cursor-pointer" {...props}>
      { children }
    </li>
  );
};
