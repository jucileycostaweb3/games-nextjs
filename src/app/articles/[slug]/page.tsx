import { getArticleImage } from "@/helpers/articles";
import ArticleService from "@/services/Articles";
import Image from "next/image";

type ArticleDetailPageProps = { params: { slug: string } };

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const slug = params.slug;
  const article = await ArticleService.getArticleBySlug(slug);

  if (!article) {
    return null;
  }

  return (
    <div className="flex flex-col w-full">
      <div className="container mx-3 my-6">
        <div className="w-2/3">
          <h1 className="text-3xl my-6">{article.title}</h1>
          <Image
            className="my-6 h-full w-full object-cover rounded-lg"
            src={ getArticleImage(article.image) }
            alt={article.title}
            width={1920}
            height={1080}
          />
          <div className="my-6 flex flex-col">
            <p className="my-2 p-2 bg-slate-700 rounded">{article.excerpt}</p>
            <p className="my-2">{article.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}