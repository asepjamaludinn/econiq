import Link from "next/link";
import { ArticleData } from "@/types";
import ArticleCard from "@/components/ui/ArticleCard";

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
            Artikel Terkait
          </h2>
        </div>
        <Link
          href="/content"
          className="text-brand-secondary hover:text-brand-primary font-medium tracking-tight transition-colors hidden md:block"
        >
          Lihat Semua Artikel
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-12">
        {articles.map((simArticle) => (
          <ArticleCard
            key={simArticle.id}
            article={simArticle}
            variant="similar"
          />
        ))}
      </div>

      <div className="mt-10 block md:hidden">
        <Link
          href="/content"
          className="block w-full text-center py-4 rounded-xl bg-brand-primary text-white font-medium tracking-tight shadow-[0_8px_25px_rgba(102,13,255,0.25)] hover:bg-brand-dark hover:shadow-[0_12px_30px_rgba(102,13,255,0.35)] hover:-translate-y-1 transition-all duration-300 active:scale-[0.98]"
        >
          Lihat Semua Artikel
        </Link>
      </div>
    </section>
  );
}
