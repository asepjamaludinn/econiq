"use client";

import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

export default function AboutHero() {
  return (
    <section className="relative w-full bg-zinc-900">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/animations/econiq.mp4"
        title="REDEFINISI EKONOMI ECONIQ" 
        date="ERA BARU DIGITAL"
        scrollToExpand="Scroll Untuk Eksplorasi"
        textBlend={true}
      />
    </section>
  );
}