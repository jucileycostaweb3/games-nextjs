import { getGameImage } from "@/helpers/games";
import GamesService from "@/services/Games";
import Image from "next/image";

type GameDetailPageProps = { params: { slug: string } };

export default async function GameDetailPage({ params }: GameDetailPageProps) {
  const slug = params.slug;
  const game = await GamesService.getGameBySlug(slug);

  if (!game) {
    return null;
  }

  return ( 
    <div className="flex flex-col w-full">
      <div className="container mx-3 my-4">
        <div className="w-2/3">
          <h1 className="text-3xl my-6">{game.title}</h1>
          <Image
            className="my-6 h-full w-full object-cover rounded-lg"
            src={getGameImage(game.image)}
            alt={game.title}
            width={1920}
            height={1080}
          />
          <div className="my-6 flex flex-col">
            <p className="my-2 p-2 bg-slate-700 rounded">
              {game.platform} - {game.year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}