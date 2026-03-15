import type { Metadata } from "next";
import FeaturedArticle from "@/components/sections/content/FeaturedArticle";
import ArticleList from "@/components/sections/content/ArticleList";
import ContentCTA from "@/components/sections/content/ContentCTA";

export const metadata: Metadata = {
  title: "Content | Eqonic",
  description: "Belajar Web3, Blockchain, dan Literasi Finansial Digital.",
};

export default function ContentPage() {
  return (
    <main className="w-full min-h-screen bg-white overflow-hidden selection:bg-[#8644F7] selection:text-white">
      <FeaturedArticle />
      <ArticleList />
      <ContentCTA />
    </main>
  );
}
