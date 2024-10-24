import { Pagination } from "@/components";
import { getGameImage, getGameUrl } from "@/helpers/games";
import GamesService from "@/services/Games";
import Image from "next/image";
import Link from "next/link";

export default async function Games({searchParams}: {searchParams?: {page?: string, limit?: string}}) {
  
  const currentPage = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 12;
  const games = await GamesService.getGamesList(currentPage, limit);
  
  return (
    <div className="flex flex-col w-full">
      <div className="container mx-3 my-4">
        <h1 className="text-3xl my-4">Games</h1>  
        <div className="grid grid-cols-4 gap-x-4 gap-y-12">
          {games.data.map((game) => {
            return ( 
              <Link href={ getGameUrl(game.slug) } key={game.id} className="flex-center flex-col relative overflow-hidden">
                <div className="w-full h-full">
                  <Image className="w-full h-full object-cover transition duration-500 hover:scale-105" 
                    src={ getGameImage(game.image) } 
                    width={1920} 
                    height={1080} 
                    alt={game.title}
                  />
                </div>
                <p className="pt-2 pb-2 px-2 w-full">
                  {game.title}
                </p>
              </Link>
            ); 
          })}
        </div>
        
        <div className="mt-8">
          <Pagination currentPage={games.metadata.page} totalPages={games.metadata.totalPages} />              
        </div>
      </div>
    </div>
    
  );
}
