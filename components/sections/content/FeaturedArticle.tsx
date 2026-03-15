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
        { y: 40, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
        },
      );

      tl.fromTo(
        ".feat-text",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" },
        "-=0.8",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-20 px-4 md:px-6 lg:px-10 bg-white selection:bg-[#8644F7] selection:text-white"
    >
      <h1 className="feat-text text-4xl md:text-5xl lg:text-6xl font-normal text-[#171717] mb-8 md:mb-12 tracking-tight">
        News & Articles
      </h1>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10">
        <div className="w-full md:w-1/2 feat-image-wrapper opacity-0">
          <Link
            href={featured.slug}
            className="group relative block w-full aspect-[3/3] overflow-hidden bg-zinc-100"
          >
            <div className="absolute inset-0 bg-[#660DFF]/5 z-10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"></div>

            <Image
              src={featured.thumbnail}
              alt={featured.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </Link>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-between py-2 md:py-4">
          <div className="feat-text text-black font-light text-sm md:text-md tracking-tight">
            Published on {featured.date}
          </div>

          <div className="flex flex-col max-w-full lg:max-w-[85%]">
            <Link href={featured.slug} className="group">
              <h2 className="feat-text text-3xl md:text-4xl lg:text-5xl font-normal text-[#171717] mb-4 tracking-tight leading-[1.1] group-hover:text-[#8644F7] transition-colors duration-300">
                {featured.title}
              </h2>
            </Link>

            <p className="feat-text text-zinc-900 font-light text-base md:text-lg leading-relaxed mb-6 tracking-tight">
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
