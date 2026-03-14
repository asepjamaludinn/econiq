"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { articleCategories, articlesData } from "@/constants";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ArticleList() {
  const [activeCategory, setActiveCategory] = useState("All");
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredArticles =
    activeCategory === "All"
      ? articlesData
      : articlesData.filter((a) => a.category === activeCategory);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".article-card");

    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all",
      },
    );
  }, [activeCategory]);

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-6 lg:px-10 max-w-[1600px] mx-auto bg-white">
      <div className="flex flex-col gap-6 mb-12 lg:mb-16">
        <div className="flex items-center overflow-x-auto w-full pb-2 gap-3 hide-scrollbar">
          {articleCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-[#171717] text-white border-[#171717]"
                  : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
      >
        {filteredArticles.map((article) => (
          <Link
            key={article.id}
            href={article.slug}
            className="article-card group flex flex-col h-full cursor-pointer"
          >
            <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden mb-6 bg-zinc-100">
              <div className="absolute inset-0 bg-[#660DFF]/0 group-hover:bg-[#660DFF]/5 z-10 transition-colors duration-300 pointer-events-none"></div>
              <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>

            <div className="flex items-center text-[13px] text-zinc-500 font-light mb-3">
              <span className="text-black">{article.category}</span>
              <span className="mx-3 text-black">|</span>
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
