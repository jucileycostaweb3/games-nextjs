import { Hero, Pagination } from "@/components";
import { getArticleImage, getArticleUrl } from "@/helpers/articles";
import { HomeLatestArticles, HomeLatestArticlesSkeleton } from "@/sections";
import ArticlesService from "@/services/Articles";
import GamesService from "@/services/Games";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home({searchParams}: {searchParams?: {page?: string, limit?: string}}) {
  
  const currentPage = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 10;
  
  const articles = await ArticlesService.getHomeArticles(currentPage, limit);
  const heroGames = await GamesService.getRandomGames(40);
  
  return (
    <main className="flex flex-col w-full">
      <Hero games={heroGames.data} />  

      <Suspense fallback={<HomeLatestArticlesSkeleton />}>
        <HomeLatestArticles />
      </Suspense>

      <div className="container mx-3 my-10">
        <h3 className="text-2xl my-6 underline">Articles</h3>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <div className="flex flex-col gap-4">
              {articles.data.map((article) => {
                return (
                  <div key={article.title} className="flex bg-slate-800 rounded-md py-4">
                    <div className="flex items-center">
                      <div className="h-40 rounded-lg overflow-hidden ml-1">
                        <Image className="w-full h-full object-cover transition duration-500 hover:scale-105 rounded-lg" 
                          src={getArticleImage(article.image)} 
                          width={1920} 
                          height={1080} 
                          alt={article.title}
                        />
                      </div>
                    </div>
                    <div className="w-full flex flex-col gap-2 pl-4">
                      <h2 className="text-3xl mb-4 text-indigo-500">
                        {article.title}
                      </h2>
                      <p className="flex-grow">{article.excerpt}</p>
                      <Link href={getArticleUrl(article.slug)} className="bg-slate-700 hover:bg-indigo-400/40 rounded-lg px-4 py-2 inline max-w-max">
                        Ler mais
                      </Link>
                    </div>
                  </div>
                );
              })}
              <div className="mt-8">
                <Pagination currentPage={articles.metadata.page} totalPages={articles.metadata.totalPages} />              
              </div>
            </div>
          </div>

          <div className="col-span-4 bg-cyan-500">

          </div>
        </div>
      </div>
    </main>
  );
}
