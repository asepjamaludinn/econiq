"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { articlesData } from "@/constants";

export default function FeaturedArticle() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const featured = articlesData.find((a) => a.featured) || articlesData[0];

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".feat-image-wrapper",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        },
        0,
      );

      tl.fromTo(
        ".feat-text",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" },
        "0",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-20 px-5 md:px-6 lg:px-10 bg-white selection:bg-brand-secondary selection:text-white"
    >
      <h1 className="feat-text opacity-0 w-full text-center md:text-left lg:text-left text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-12 md:mb-12 tracking-tight">
        Berita & Artikel
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10">
        <div className="w-full lg:w-1/2 feat-image-wrapper opacity-0">
          <Link
            href={featured.slug}
            className="group relative block w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[3/3] overflow-hidden bg-zinc-100"
          >
            <div className="absolute inset-0 bg-brand-primary/5 z-10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"></div>

            <Image
              src={featured.thumbnail}
              alt={featured.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 50vw"
              className="object-cover transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </Link>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-between py-2 md:py-4">
          <div className="feat-text opacity-0 text-black font-normal text-sm md:text-md tracking-tight mb-6 lg:mb-0">
            Dipublikasikan pada {featured.date}
          </div>

          <div className="flex flex-col max-w-full lg:max-w-[85%]">
            <Link href={featured.slug} className="group">
              <h2 className="feat-text opacity-0 text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4 tracking-tight leading-[1.1] group-hover:text-brand-primary transition-colors duration-300">
                {featured.title}
              </h2>
            </Link>

            <p className="feat-text opacity-0 text-zinc-900 font-light text-base md:text-lg leading-relaxed mb-6 tracking-tight">
              {featured.excerpt}
            </p>

            <div className="feat-text text-zinc-900 font-light text-sm tracking-tight">
              {featured.readTime}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
