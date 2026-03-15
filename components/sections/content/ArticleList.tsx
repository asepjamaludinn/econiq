"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { articlesData } from "@/constants";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ArticleList() {
  const gridRef = useRef<HTMLDivElement>(null);

  const featuredArticle =
    articlesData.find((a) => a.featured) || articlesData[0];

  const filteredArticles = articlesData.filter(
    (a) => a.id !== featuredArticle.id,
  );

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".article-card");
      if (cards.length === 0) return;

      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: gridRef },
  );

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-12 max-w-[1500px] mx-auto bg-white">
      <div className="flex flex-col items-center mb-12 lg:mb-16">
        <span className="px-6 py-2 text-md font-normal tracking-tight uppercase bg-[#8644F7] text-white rounded-full">
          More From Our Articles
        </span>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 lg:gap-x-18 gap-y-16 justify-items-center"
      >
        {filteredArticles.map((article) => (
          <Link
            key={article.id}
            href={article.slug}
            className="article-card group flex flex-col h-full cursor-pointer w-[500px] max-w-full"
          >
            <div className="relative w-[500px] max-w-full h-[350px] md:h-[300px] lg:h-[340px] rounded-md overflow-hidden mb-6 bg-zinc-100">
              <div className="absolute inset-0 bg-[#660DFF]/0 group-hover:bg-[#660DFF]/5 z-10 transition-colors duration-300 pointer-events-none"></div>

              <Image
                src={article.thumbnail}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>

            <div className="flex items-center text-[13px] text-zinc-500 font-light mb-3">
              <span className="text-black">{article.topic}</span>
              <span className="mx-3 text-black"></span>
              <span className="text-black">{article.date}</span>
            </div>

            <h3 className="text-[22px] md:text-[26px] font-normal text-[#171717] leading-[1.2] group-hover:text-[#8644F7] transition-colors line-clamp-3">
              {article.title}
            </h3>
          </Link>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="w-full py-20 text-center text-zinc-400 font-medium">
          No articles found in this category.
        </div>
      )}
    </section>
  );
}
