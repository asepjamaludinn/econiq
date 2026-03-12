import { SvgWallet } from "@/components/icons/SvgWallet";
import { SvgLearn } from "@/components/icons/SvgLearn";
import { SvgTrack } from "@/components/icons/SvgTrack";
import { SvgGrow } from "@/components/icons/SvgGrow";
import { FeatureData, StepData, ImageData, FAQItemData } from "@/types";

export const featuresData: FeatureData[] = [
  {
    title: "Beginner Friendly",
    desc: "Start learning digital finance safely. Eqonic provides intuitive simulations to manage virtual wallets without technical barriers.",
  },
  {
    title: "Financial Literacy",
    desc: "Understand Web3 economics. Track virtual assets, study market behavior, and monitor growth with our real-time educational insights.",
  },
  {
    title: "Safe Sandbox Environment",
    desc: "Practice managing digital assets securely. Our platform simulates real-world interactions without exposing you to actual financial risks.",
  },
  {
    title: "Interactive Learning",
    desc: "Engage with dynamic modules that make complex blockchain and finance concepts easy to understand for everyone.",
  },
];

export const walletAssetsData: string[] = [
  "/images/card.svg",
  "/images/BitCoin.svg",
  "/images/kalung.svg",
  "/images/Dolar.svg",
  "/images/75Rp.svg",
  "/images/gelang.svg",
];

export const sumberUangData: string[] = [
  "/images/Uang1 blur.svg",
  "/images/Uang2 blur.svg",
  "/images/Uang3 blur.svg",
];

export const stepsData: StepData[] = [
  {
    num: "01",
    title: "Virtual Wallet",
    desc: "Begin your journey by connecting a virtual wallet. Experience secure Web3 transactions in a safe environment without real financial risk.",
    Icon: SvgWallet,
  },
  {
    num: "02",
    title: "Learn & Explore",
    desc: "Access interactive modules to understand Web3 fundamentals, blockchain security, and digital financial literacy from the basics.",
    Icon: SvgLearn,
  },
  {
    num: "03",
    title: "Interactive Sandbox",
    desc: "Use our simulation dashboard to learn how to track asset movements and analyze crypto market trends in real time.",
    Icon: SvgTrack,
  },
  {
    num: "04",
    title: "Empower Economy",
    desc: "Apply your financial knowledge to make smarter decisions and contribute to a more innovative and sustainable digital economy.",
    Icon: SvgGrow,
  },
];

export const marketingImages: ImageData[] = [
  {
    src: "/images/feed1.svg",
    alt: "Feed 1",
    positionClasses:
      "top-[2%] md:top-[8%] lg:top-[12%] left-[-5%] md:left-[2%] lg:left-[5%] w-[180px] md:w-[280px] lg:w-[320px] -rotate-[12deg]",
  },
  {
    src: "/images/feed2.svg",
    alt: "Feed 2",
    positionClasses:
      "bottom-[8%] md:bottom-[3%] lg:bottom-[8%] left-[10%] md:left-[0%] lg:left-[20%] w-[160px] md:w-[250px] lg:w-[200px] rotate-[6deg]",
  },
  {
    src: "/images/feed3.svg",
    alt: "Feed 3",
    positionClasses:
      "top-[15%] md:top-[10%] lg:top-[18%] right-[-5%] md:-right-[5%] lg:right-[5%] w-[180px] md:w-[280px] lg:w-[280px] rotate-[15deg]",
  },
];

export const locationImages: ImageData[] = [
  {
    src: "/images/store1.png",
    alt: "Store 1",
    positionClasses:
      "top-[5%] md:top-[10%] left-[2%] md:left-[5%] lg:left-[8%] w-[120px] md:w-[180px] lg:w-[220px]",
  },
  {
    src: "/images/store2.png",
    alt: "Store 2",
    positionClasses:
      "bottom-[12%] md:bottom-[15%] left-[5%] md:left-[10%] lg:left-[15%] w-[100px] md:w-[160px] lg:w-[180px]",
  },
  {
    src: "/images/store3.png",
    alt: "Store 3",
    positionClasses:
      "top-[15%] md:top-[12%] right-[2%] md:right-[5%] lg:right-[8%] w-[110px] md:w-[170px] lg:w-[200px]",
  },
  {
    src: "/images/store4.png",
    alt: "Store 4",
    positionClasses:
      "bottom-[10%] md:bottom-[8%] right-[8%] md:right-[15%] lg:right-[10%] w-[130px] md:w-[190px] lg:w-[240px]",
  },
  {
    src: "/images/store5.png",
    alt: "Store 5",
    positionClasses:
      "top-[30%] md:top-[10%] lg:top-[10%] left-[5%] md:left-[40%] lg:left-[45%] w-[90px] md:w-[140px] lg:w-[160px]",
  },
];

export const teamImages: ImageData[] = [
  {
    src: "/images/lazz.png",
    alt: "Lazz",
    positionClasses:
      "bottom-[5%] md:bottom-[10%] left-[5%] md:left-[0%] lg:left-[10%] w-[180px] md:w-[300px] lg:w-[300px] -rotate-6",
  },
  {
    src: "/images/sepp.png",
    alt: "Sepp",
    positionClasses:
      "top-[15%] md:top-[15%] right-[5%] md:right-[0%] lg:right-[10%] w-[180px] md:w-[300px] lg:w-[300px] rotate-6",
  },
];

export const faqData: FAQItemData[] = [
  {
    question: "Apa itu Eqonic dan bagaimana cara kerjanya?",
    answer:
      "Eqonic adalah platform Web3 Financial yang memungkinkan Anda untuk menghubungkan dompet digital, melacak aset secara real-time, dan mempelajari ekosistem keuangan terdesentralisasi melalui modul edukasi interaktif kami.",
  },
  {
    question: "Apakah aman menghubungkan dompet saya?",
    answer:
      "Sangat aman. Kami menggunakan protokol keamanan standar Web3. Eqonic hanya memiliki akses baca (read-only) untuk melacak portofolio Anda dan tidak dapat melakukan transaksi tanpa persetujuan Anda.",
  },
  {
    question: "Aset kripto apa saja yang didukung?",
    answer:
      "Saat ini kami mendukung berbagai aset utama di jaringan Ethereum, Binance Smart Chain, Polygon, dan Solana. Kami terus menambahkan dukungan untuk jaringan dan token baru secara berkala.",
  },
  {
    question: "Apakah platform ini sepenuhnya gratis?",
    answer:
      "Ya, fitur pelacakan aset dasar dan modul edukasi 'Learn & Explore' sepenuhnya gratis untuk digunakan oleh semua pengguna. Kami percaya pada literasi keuangan yang dapat diakses oleh siapa saja.",
  },
];
