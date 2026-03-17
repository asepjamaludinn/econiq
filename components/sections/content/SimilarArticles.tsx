import Image from "next/image";
import Link from "next/link";
import { ArticleData } from "@/types";

interface SimilarArticlesProps {
  articles: ArticleData[];
}

export default function SimilarArticles({ articles }: SimilarArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="relative w-full px-5 md:px-6 lg:px-10 mt-20 md:mt-32 pt-16 border-t border-zinc-200">
      <div className="flex items-end justify-between mb-10 md:mb-12">
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            Similar Articles
          </h2>
        </div>
        <Link
          href="/content"
          className="text-brand-secondary hover:text-brand-primary font-medium tracking-tight transition-colors hidden md:block"
        >
          View all articles
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-12">
        {articles.map((simArticle) => (
          <Link
            key={simArticle.id}
            href={simArticle.slug}
            className="group flex flex-col h-full cursor-pointer w-full"
          >
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] rounded-lg overflow-hidden mb-5 bg-zinc-100">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 z-10 transition-colors duration-300 pointer-events-none"></div>
              <Image
                src={simArticle.thumbnail}
                alt={simArticle.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>

            <div className="flex justify-between items-start gap-4 w-full px-1">
              <h3 className="text-lg md:text-[22px] font-medium tracking-tight text-foreground leading-[1.3] group-hover:text-brand-primary transition-colors max-w-[75%]">
                {simArticle.title}
              </h3>
              <span className="text-[13px] md:text-sm text-zinc-500 tracking-tight whitespace-nowrap mt-1">
                {simArticle.date}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 block md:hidden">
        <Link
          href="/content"
          className="block w-full text-center py-4 rounded-xl border border-zinc-200 text-foreground font-medium tracking-tight hover:border-brand-primary hover:text-brand-primary transition-colors"
        >
          View all articles
        </Link>
      </div>
    </section>
  );
}
