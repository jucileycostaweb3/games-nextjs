import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" ;
import { faUser, faHome, faGamepad, faRankingStar, faRoute } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/helpers/cn";

type NavbarProps = React.ComponentProps<"nav">;
type NavbarListProps = React.ComponentProps<"ul">;
type NavbarListItemProps = React.ComponentProps<"li">;

const NavBarList = ({ children, ...props }: NavbarListProps) => {
  return (
    <ul className="my-4 border-indigo-400/20 hover:border-indigo-400/40 w-full" {...props}>
      { children }
    </ul>
  );
};

const NavBarListItem = ({ children, ...props }: NavbarListItemProps) => {
  return (
    <li className="my-2 mx-2 p-3 rounded-lg bg-transparent hover:bg-indigo-400/40 cursor-pointer" {...props}>
      { children }
    </li>
  );
};

export const Navbar = ({ className, ...props}: NavbarProps) => {
  return(
    // SIDEBAR 
    
    <aside className="mr-4 border-r-2 border-indigo-400/20 hover:border-indigo-400/40 hidden sm:flex w-full max-w-[200px] min-h-screen relative bg-slate-900 flex-col px-2 py-5">
      <div className="fixed">
        <div className="hover:scale-125 duration-300 w-32 h-32 z-30">
          <img src="/images/games.png" alt="Games Logo" />
        </div>

        <nav className={cn("flex flex-col mt-8 w-full gap-5 border-t-2 border-b-2 border-indigo-400/20 hover:border-indigo-400/40", className)} {...props}>
          <NavBarList>  
            <NavBarListItem>
              <FontAwesomeIcon icon={ faHome } className="w-4 h4 mr-2" /> Home              
            </NavBarListItem>        
            
            <NavBarListItem>
              <FontAwesomeIcon icon={ faGamepad } className="w-4 h4 mr-2" /> Games
            </NavBarListItem> 

            <NavBarListItem>
              <FontAwesomeIcon icon={ faRankingStar } className="w-4 h4 mr-2" /> Top 10            
            </NavBarListItem>  
            
            <NavBarListItem>
              <FontAwesomeIcon icon={ faRoute } className="w-4 h4 mr-2" /> Walkthroughs            
            </NavBarListItem>  
          </NavBarList>          
        </nav>
      </div>

      <button className="w-16 h-16 rounded-full bg-slate-900 fixed z-30 bottom-5 left-4 hover:bg-indigo-400/40 duration-300">
        <FontAwesomeIcon icon={ faUser } className="w-9 h-9" />
      </button>
    </aside>

    // FIM SIDEBAR
  );
}