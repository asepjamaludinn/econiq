import Link from "next/link";
import { ArticleData } from "@/types";
import ArticleCard from "@/components/ui/ArticleCard";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

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

      <div className="mt-10 flex md:hidden w-full">
        <Link
          href="/content"
          className={cn(
            buttonVariants({ variant: "primary", size: "default" }),
            "w-full",
          )}
        >
          Lihat Semua Artikel
        </Link>
      </div>
    </section>
  );
}
