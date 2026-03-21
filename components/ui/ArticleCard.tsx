import Image from "next/image";
import Link from "next/link";
import { ArticleData } from "@/types";

interface ArticleCardProps {
  article: ArticleData;
  variant?: "default" | "similar";
  className?: string;
}

export default function ArticleCard({
  article,
  variant = "default",
  className = "",
}: ArticleCardProps) {
  if (variant === "similar") {
    return (
      <Link
        href={article.slug}
        className={`group flex flex-col h-full cursor-pointer w-full ${className}`}
      >
        <div className="relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] rounded-lg overflow-hidden mb-5 bg-zinc-100">
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 z-10 transition-colors duration-300 pointer-events-none"></div>
          <Image
            src={article.thumbnail}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex justify-between items-start gap-4 w-full px-1">
          <h3 className="text-lg md:text-[22px] font-medium tracking-tight text-foreground leading-[1.3] group-hover:text-brand-primary transition-colors max-w-[75%]">
            {article.title}
          </h3>
          <span className="text-[13px] md:text-sm text-zinc-500 tracking-tight whitespace-nowrap mt-1">
            {article.date}
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={article.slug}
      className={`group flex flex-col h-full cursor-pointer w-[500px] max-w-full ${className}`}
    >
      <div className="relative w-[500px] max-w-full h-[350px] md:h-[300px] lg:h-[340px] rounded-xs overflow-hidden mb-6 bg-zinc-100">
        <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/5 z-10 transition-colors duration-300 pointer-events-none"></div>

        <Image
          src={article.thumbnail}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex items-center gap-6 text-[13px] text-zinc-500 font-normal mb-3">
        <span className="text-zinc-800">{article.topic}</span>
        <span className="text-zinc-800 tracking-tight">{article.date}</span>
      </div>

      <h3 className="text-[22px] md:text-[26px] font-medium tracking-tight text-foreground leading-[1.2] group-hover:text-brand-primary transition-colors line-clamp-3">
        {article.title}
      </h3>
    </Link>
  );
}
