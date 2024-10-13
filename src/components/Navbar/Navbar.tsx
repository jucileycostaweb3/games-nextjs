export const Navbar = () => {
  return(
    <nav className="flex flex-col h-screen gap-4 bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/60 max-w-60 p-2">
      <div className="flex items-center justify-center p-2 w-56 h-56 hover:scale-110 duration-300">
        <img src="/images/games.png" alt="Games Logo" />
      </div>
    
      <ul className="flex-grow my-4 border-t border-indigo-400/20 hover:border-indigo-400/60">
        <li className="my-2 p-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">Home</li>
        <li className="my-2 p-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">Games</li>
        <li className="my-2 p-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">Top 10</li>
        <li className="my-2 p-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">Walkthroughs</li>
      </ul>
      <ul className="my-4 border-t border-indigo-400/20 hover:border-indigo-400/60">
        <li className="my-2 p-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">User</li>
      </ul>
    </nav>
  );
}