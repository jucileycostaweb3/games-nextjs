"use client";

import { cn } from "@/helpers/cn";
import { NavbarListItemButtonProps } from "./types";
import { NavBarListItem } from "./NavBarListItem";

export const NavbarListItemButton = ({ children, className, ...props }: NavbarListItemButtonProps) => {
  return (
    <NavBarListItem className={cn("p-0", className)}>
      <button className="my-2 p-3 flex items-center w-full rounded-lg hover:bg-indigo-400/40" {...props}>
        { children }
      </button>
    </NavBarListItem>
  );
}