"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ShieldCheck } from "lucide-react";
import { privacyPolicyData, companyInfo } from "@/constants";

export default function PrivacyPolicy() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".privacy-header",
        { y: 40, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
        },
      );

      tl.fromTo(
        ".privacy-content",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.4",
      );
    },
    { scope: containerRef },
  );

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-white text-[#171717] pt-32 pb-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Header Section */}
        <div className="privacy-header mb-12 md:mb-16 border-b border-zinc-200 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#f4effc] flex items-center justify-center text-[#8644F7]">
              <ShieldCheck size={28} strokeWidth={2} />
            </div>
            <span className="text-[#8644F7] font-bold tracking-widest uppercase text-sm md:text-base">
              Legal & Trust
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-4">
            {privacyPolicyData.title}
          </h1>
          <p className="text-zinc-500 font-medium text-base md:text-lg">
            Last updated: {privacyPolicyData.lastUpdated}
          </p>
        </div>

        {/* Content Section Dinamis */}
        <div className="flex flex-col gap-10 md:gap-12">
          {privacyPolicyData.sections.map((section) => (
            <section key={section.id} className="privacy-content">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[#171717]">
                {section.title}
              </h2>

              <p
                className="text-zinc-600 leading-relaxed text-base md:text-lg mb-4"
                dangerouslySetInnerHTML={{
                  __html: section.content.replace(
                    /\*\*(.*?)\*\*/g,
                    '<strong class="text-[#8644F7]">$1</strong>',
                  ),
                }}
              />

              {section.list && (
                <ul className="list-disc pl-6 text-zinc-600 space-y-2 text-base md:text-lg">
                  {section.list.map((item, idx) => (
                    <li key={idx}>
                      {item.label && (
                        <strong className="text-[#171717]">
                          {item.label}{" "}
                        </strong>
                      )}
                      {item.desc}
                    </li>
                  ))}
                </ul>
              )}

              {/* Render Email Section khusus untuk id 'contact-us' */}
              {section.id === "contact-us" && (
                <div className="bg-[#f4effc] p-6 rounded-2xl border border-[#dcc3f4]">
                  <p className="text-[#171717] font-bold text-lg mb-1">Email</p>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-[#8644F7] hover:text-[#660DFF] font-medium text-lg md:text-xl transition-colors"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
