import { BookOpen, ShieldCheck, LineChart } from "lucide-react";
import { ElementType } from "react";

export const cryptoLogos = [
  { name: "Bitcoin", src: "/images/BTC.svg" },
  { name: "Ethereum", src: "/images/etherium.svg" },
  { name: "Binance", src: "/images/BNB.svg" },
  { name: "Solana", src: "/images/Solana.svg" },
  { name: "Avalanche", src: "/images/Avalanche.svg" },
  { name: "Polygon", src: "/images/polygon.svg" },
  { name: "Shiba Inu", src: "/images/Shiba Inu.svg" },
];

export type AboutFeatureData = {
  icon: ElementType;
  title: string;
  desc: string;
  colorA: string;
  colorB: string;
};

export const aboutMonitoringFeatures: AboutFeatureData[] = [
  {
    icon: BookOpen,
    title: "Modul Terstruktur",
    desc: "Kurikulum Web3 dari konsep dasar hingga tahap lanjutan.",
    colorA: "var(--color-brand-primary)",
    colorB: "var(--color-brand-tertiary)",
  },
  {
    icon: ShieldCheck,
    title: "Simulasi Aman",
    desc: "Praktek interaktif tanpa risiko finansial dunia nyata.",
    colorA: "var(--color-brand-secondary)",
    colorB: "var(--color-grad-end)",
  },
  {
    icon: LineChart,
    title: "Evaluasi Belajar",
    desc: "Pantau perkembangan pemahamanmu secara berkala.",
    colorA: "var(--color-brand-accent)",
    colorB: "var(--color-brand-primary)",
  },
];

export const marqueeItems = [
  "ECONIQ",
  "DIGITAL ECONOMY",
  "WEB3",
  "FINTECH",
  "LITERASI DIGITAL",
  "BLOCKCHAIN",
  "INOVASI",
];

export interface TimelineItemData {
  year: string;
  title: string;
  desc: string;
}

export const aboutTimelineSteps: TimelineItemData[] = [
  {
    year: "2023",
    title: "Inisiasi Edukasi",
    desc: "Menganalisis kesenjangan literasi digital dan mulai merumuskan kurikulum dasar teknologi Web3.",
  },
  {
    year: "2024",
    title: "Pengembangan Modul",
    desc: "Membangun platform pembelajaran interaktif yang dilengkapi dengan simulasi transaksi aman.",
  },
  {
    year: "2025",
    title: "Membangun Komunitas",
    desc: "Memperluas akses edukasi untuk mencetak generasi muda yang melek finansial digital.",
  },
];
