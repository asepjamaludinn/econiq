"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { companyInfo, privacyPolicyData } from "@/constants";
import parse from "html-react-parser";

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
      /* PERUBAHAN PADDING: Mengurangi padding di layar besar (lg dan xl) agar konten bisa melebar */
      className="min-h-screen bg-white text-foreground pt-32 pb-24 px-5 md:px-8 lg:px-10 xl:px-12"
    >
      {/* KONTEM UTAMA: Bisa diganti max-w-full jika ingin benar-benar mentok kiri kanan */}
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Header Section */}
        <div className="privacy-header mb-12 md:mb-16 border-b border-zinc-200 pb-8 md:pb-12">
          <div className="flex items-center gap-3 mb-6"></div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-[80px] font-black tracking-tighter leading-[0.95] mb-6">
            {privacyPolicyData.title}
          </h1>
          <p className="text-zinc-500 font-medium text-base md:text-lg lg:text-xl">
            Pembaruan Terakhir: {privacyPolicyData.lastUpdated}
          </p>
        </div>

        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          {privacyPolicyData.sections.map((section) => (
            <section key={section.id} className="privacy-content">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-5 md:mb-6 text-foreground">
                {section.title}
              </h2>

              {/* PERUBAHAN: Menghapus max-w-[95%] agar teks mengisi penuh kontainernya */}
              <div className="text-zinc-600 leading-relaxed text-base md:text-lg lg:text-xl mb-5 w-full">
                {parse(
                  section.content.replace(
                    /\*\*(.*?)\*\*/g,
                    '<strong class="text-brand-secondary">$1</strong>',
                  ),
                )}
              </div>

              {section.list && (
                /* PERUBAHAN: Menghapus max-w-[95%] dari list */
                <ul className="list-disc pl-6 md:pl-8 text-zinc-600 space-y-3 text-base md:text-lg lg:text-xl w-full">
                  {section.list.map((item, idx) => (
                    <li key={idx} className="pl-2">
                      {"label" in item && (
                        <strong className="text-foreground">
                          {item.label}{" "}
                        </strong>
                      )}
                      {item.desc}
                    </li>
                  ))}
                </ul>
              )}

              {section.id === "contact-us" && (
                <div className="bg-brand-light p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border border-brand-muted mt-8 max-w-fit">
                  <p className="text-foreground font-bold text-lg md:text-xl lg:text-2xl mb-2">
                    Email Resmi
                  </p>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-brand-secondary hover:text-brand-primary font-black text-xl md:text-2xl lg:text-4xl transition-colors tracking-tight"
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
