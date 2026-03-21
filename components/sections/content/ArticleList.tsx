"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { articlesData } from "@/constants";
import ArticleCard from "@/components/ui/ArticleCard";

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
    <section className="w-full py-6 md:py-24 px-8 md:px-8 lg:px-12 max-w-[1500px] mx-auto bg-white">
      <div className="flex flex-col items-center mb-12 lg:mb-16">
        <span className="px-6 py-2 text-md font-normal tracking-tight uppercase bg-brand-primary text-white rounded-full">
          Jelajahi Artikel Lainnya
        </span>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 lg:gap-x-18 gap-y-16 justify-items-center"
      >
        {filteredArticles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            className="article-card opacity-0"
          />
        ))}
      </div>
    </section>
  );
}
