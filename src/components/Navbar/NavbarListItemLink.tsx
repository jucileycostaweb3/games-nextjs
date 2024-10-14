import { cn } from "@/helpers/cn";
import { NavbarListItemLinkProps } from "./types";
import { NavBarListItem } from "./NavBarListItem";
import Link from "next/link";

export const NavbarListItemLink = ({ href, children, className, ...props }: NavbarListItemLinkProps) => {
  return (
    <NavBarListItem className={cn("p-0", className)}>
      <Link href={href} className="my-2 p-3 flex items-center rounded-lg hover:bg-indigo-400/40" {...props}>
        { children }
      </Link>
    </NavBarListItem>
  );
}