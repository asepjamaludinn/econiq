import { notFound } from "next/navigation";
import Image from "next/image";
import { articlesData } from "@/constants";
import { Facebook, Youtube, Instagram, Twitter } from "lucide-react";
import ContentCTA from "@/components/sections/content/ContentCTA";
import SimilarArticles from "@/components/sections/content/SimilarArticles";
import parse from "html-react-parser";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const article = articlesData.find(
    (a) => a.slug === `/content/${params.slug}`,
  );

  if (!article) return { title: "Not Found" };

  return {
    title: `${article.title} | ECONIQ`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;

  const article = articlesData.find(
    (a) => a.slug === `/content/${params.slug}`,
  );

  if (!article) return notFound();

  const otherArticles = articlesData.filter((a) => a.id !== article.id);
  const relatedByTopic = otherArticles.filter((a) => a.topic === article.topic);
  const remainingArticles = otherArticles.filter(
    (a) => a.topic !== article.topic,
  );

  const similarArticles = [...relatedByTopic, ...remainingArticles].slice(0, 2);

  return (
    <main className="w-full min-h-screen bg-white pb-12 pt-32 selection:bg-brand-secondary selection:text-white">
      <article className="relative w-full px-5 md:px-6 lg:px-10">
        <h1 className="text-4xl md:text-[56px] lg:text-[64px] font-medium tracking-tight leading-[1.05] text-foreground mb-10 max-w-5xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 fill-mode-both">
          {article.title}
        </h1>

        <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[80vh] rounded-[5px] overflow-hidden mb-12 md:mb-24 bg-zinc-100 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both shadow-sm">
          <Image
            src={article.thumbnail}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
          <aside className="col-span-1 lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-32 h-fit">
            <div className="hidden lg:flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
              <span className="text-zinc-600 font-medium tracking-tight">
                {article.topic}
              </span>
            </div>

            <div className="flex flex-row justify-between items-end lg:flex-col lg:items-start lg:gap-6">
              <div className="flex flex-col gap-3">
                {article.authorAvatar && (
                  <div className="hidden lg:block relative w-12 h-12 rounded-full overflow-hidden border border-zinc-200">
                    <Image
                      src={article.authorAvatar}
                      alt={article.authorName || "Author"}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-0.5">
                  <span className="text-[15px] lg:text-[16px] text-foreground font-medium tracking-tight">
                    Curated by
                  </span>
                  <span className="text-sm lg:text-base text-zinc-500 font-light tracking-tight">
                    {article.authorName || "Tim Econiq"}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-0.5 text-right lg:text-left">
                <span className="text-[15px] lg:text-[16px] text-foreground font-medium tracking-tight">
                  Posted on
                </span>
                <span className="text-sm lg:text-base text-zinc-500 font-light tracking-tight">
                  {article.date}
                </span>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center lg:flex-col lg:items-start lg:gap-6 pb-6 border-b border-zinc-100 lg:border-none lg:pb-0">
              <div className="flex flex-col gap-0.5">
                <span className="text-[15px] lg:text-[16px] text-foreground font-medium tracking-tight">
                  Reading time
                </span>
                <span className="text-sm lg:text-base text-zinc-500 font-light tracking-tight">
                  {article.readTime}
                </span>
              </div>

              <div className="flex flex-col gap-2 lg:gap-3 lg:pt-2 text-right lg:text-left">
                <span className="lg:block text-[16px] text-foreground font-medium tracking-tight">
                  Share on
                </span>
                <div className="flex items-center justify-end lg:justify-start gap-2.5 lg:gap-3">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-light transition-all"
                  >
                    <Twitter size={16} className="lg:w-[18px] lg:h-[18px]" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-light transition-all"
                  >
                    <Facebook size={16} className="lg:w-[18px] lg:h-[18px]" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-light transition-all"
                  >
                    <Youtube size={16} className="lg:w-[18px] lg:h-[18px]" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-light transition-all"
                  >
                    <Instagram size={16} className="lg:w-[18px] lg:h-[18px]" />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <div className="col-span-1 lg:col-span-9 min-w-0 w-full">
            <div
              className="article-content text-base md:text-[17px] lg:text-lg text-zinc-600 leading-relaxed tracking-tight
                [&>h3]:text-2xl [&>h3]:md:text-3xl [&>h3]:font-bold [&>h3]:text-foreground [&>h3]:tracking-tight [&>h3]:mt-12 [&>h3]:mb-5
                [&>p]:mb-6 
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2 [&>ul>li::marker]:text-brand-primary
                [&>img]:w-full [&>img]:rounded-[20px] [&>img]:my-10 [&>img]:object-cover [&>img]:border [&>img]:border-zinc-100 [&>img]:shadow-sm
                [&>strong]:text-foreground [&>strong]:font-semibold [&>em]:text-zinc-800
                [&>div]:w-full [&>div]:overflow-x-auto
                [&_table]:w-full [&_table]:min-w-[600px] lg:[&_table]:min-w-full"
            >
              {parse(
                article.content || "<p>Konten artikel belum tersedia.</p>",
              )}
            </div>
          </div>
        </div>
      </article>

      <SimilarArticles articles={similarArticles} />

      <div className="mt-16 md:mt-24">
        <ContentCTA />
      </div>
    </main>
  );
}
