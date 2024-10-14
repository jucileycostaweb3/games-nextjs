import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" ;
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return(
    // SIDEBAR 
    
    <aside className="mr-3 border-r-2 border-indigo-400/20 hover:border-indigo-400/60 hidden sm:flex w-full max-w-[200px] min-h-screen relative bg-slate-900 flex-col px-2 py-5">
      <div className="fixed">
        <div className="hover:scale-125 duration-300 w-40 h-40 z-30">
          <img src="/images/games.png" alt="Games Logo" />
        </div>

        <nav className="flex flex-col mt-8 w-full gap-5">
          <ul className="my-4 border-indigo-400/20 hover:border-indigo-400/60 w-full">
            <li className="my-2 p-3 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">Home</li>
            <li className="my-2 p-3 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">Games</li>
            <li className="my-2 p-3 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">Top 10</li>
            <li className="my-2 p-3 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">Walkthroughs</li>
          </ul>
        </nav>
      </div>
      <button className="w-11 h-11 rounded-full bg-slate-900 fixed z-30 bottom-5 left-4 hover:bg-slate-800 duration-300">
        <FontAwesomeIcon icon={ faUser } size="2x" />
      </button>
    </aside>

    // FIM SIDEBAR
  );
}