"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TIMELINE_DATA = [
  { year: "2010", title: "Opening 1st Econiq", desc: "Brand creation and the opening of the first node." },
  { year: "2015", title: "Expansion Starts", desc: "Expanding via franchise with a store in Porto." },
  { year: "2018", title: "Reached 50th Node", desc: "The network expands to 50 locations." },
  { year: "2023", title: "Foreign Expansion", desc: "Opening the first node in France." },
];

export default function AboutTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Scroll Color Change (Orange -> Purple -> Dark Blue)
    gsap.to(sectionRef.current, {
      backgroundColor: "#1e1b4b", // Deep blue
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      }
    });

    // Draw Line
    gsap.fromTo(lineRef.current, 
      { scaleY: 0 }, 
      {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          end: "bottom 80%",
          scrub: true,
        }
      }
    );
  }, { scope: sectionRef });

  return (
    // Default background awal (Coklat terang)
    <section ref={sectionRef} className="relative w-full py-32 px-4 bg-[#EBA754] text-white">
      <h2 className="text-5xl md:text-8xl font-black text-center uppercase text-[#4A2010] mb-32 mix-blend-color-burn">
        JORNADA
      </h2>

      <div className="relative max-w-5xl mx-auto pb-32">
        {/* Background Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-white/20 md:-translate-x-1/2" />
        {/* Fill Line */}
        <div ref={lineRef} className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-white z-10 md:-translate-x-1/2" />

        <div className="flex flex-col gap-24">
          {TIMELINE_DATA.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={item.year} className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? "md:flex-row-reverse" : ""} pl-16 md:pl-0`}>
                
                {/* Year Node (Di tengah garis) */}
                <div className="absolute left-[22px] md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 bg-white text-zinc-900 font-black text-sm md:text-lg py-2 px-4 rounded-full z-20 shadow-xl border border-gray-200">
                  {item.year}
                </div>

                {/* Card Konten */}
                <div className={`w-full md:w-1/2 ${isEven ? "md:pl-16 text-left" : "md:pr-16 md:text-right"}`}>
                  <div className="bg-white text-zinc-900 p-6 md:p-8 rounded-2xl shadow-xl flex items-center gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">{item.title}</h3>
                      <p className="text-sm md:text-base text-zinc-600">{item.desc}</p>
                    </div>
                    {/* Placeholder Thumbnail Kanan Card */}
                    <div className="w-24 h-24 bg-[#E15A2B] rounded-lg flex items-center justify-center font-bold text-white shrink-0">
                      {item.year}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}