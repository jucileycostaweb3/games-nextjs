import { handleSignOutForm } from "@/app/auth/sign-out/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" ;
import { faUser, faHome, faGamepad, faRankingStar, faRoute } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/helpers/cn";
import Link from "next/link";
import { NavbarProps } from "./types";
import { NavBarList } from "./NavBarList";
import { NavbarListItemLink } from "./NavbarListItemLink";
import Image from "next/image";
import { FormButton } from "@/components";

export const Navbar = ({ className, user, ...props}: NavbarProps) => {
  return(
    // SIDEBAR 
    
    <aside className="border-r-2 flex flex-col w-full max-w-[200px] min-h-screen px-2 py-5 mr-0.5 bg-slate-900 border-indigo-400/20 hover:border-indigo-400/40">
      <div className="fixed">
        <div className="flex flex-col items-center justify-center hover:scale-125 duration-300">
          <Image src="/assets/images/games.png" width={96} height={96} alt="Games Logo"/>
        </div>

        <nav className={cn("flex flex-col mt-8 w-full gap-5 border-t-2 border-b-2 border-indigo-400/20 hover:border-indigo-400/40", className)} {...props}>
          <NavBarList>  
            <NavbarListItemLink href="/">
              <FontAwesomeIcon icon={ faHome } className="w-4 h4 mr-2" /> Home
            </NavbarListItemLink>        
            
            <NavbarListItemLink href="/games">
              <FontAwesomeIcon icon={ faGamepad } className="w-4 h4 mr-2" /> Games
            </NavbarListItemLink> 

            <NavbarListItemLink href="/top-10">
              <FontAwesomeIcon icon={ faRankingStar } className="w-4 h4 mr-2" /> Top 10
            </NavbarListItemLink>  
            
            <NavbarListItemLink href="/walkthroughs">
              <FontAwesomeIcon icon={ faRoute } className="w-4 h4 mr-2" /> Walkthroughs         
            </NavbarListItemLink>  
          </NavBarList>          
        </nav>
      </div>

      { 
        user ? (
          <div className="flex items-center left-8">
            <Link href="/user" className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 z-30 fixed top-[450px] left-11 hover:bg-indigo-400/40 duration-300">
              <FontAwesomeIcon icon={ faUser } className="w-9 h-9" />
            </Link>
            
            <div className="fixed top-[515px] left-14">
              {user.name}
            </div>

            <div className="fixed top-[550px] left-8">
              <FormButton action={ handleSignOutForm } className="flex items-center justify-center w-24 h-9 rounded-full bg-slate-900 hover:bg-indigo-400/40 duration-300">Log out</FormButton>  
            </div>      
          </div>

        ) : (
          <div className="flex items-center left-8">
            <Link href="/auth/sign-in" className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 z-30 fixed top-[450px] left-11 hover:bg-indigo-400/40 duration-300">
              <FontAwesomeIcon icon={ faUser } className="w-9 h-9" />
            </Link>

            <div className="fixed top-[515px] left-14">
              <Link href="/auth/sign-in">
                Login
              </Link>
            </div>
          </div>
        )
      }
    </aside>

    // FIM SIDEBAR
  );
}