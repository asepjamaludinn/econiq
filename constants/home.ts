import { SvgWallet } from "@/components/icons/SvgWallet";
import { SvgLearn } from "@/components/icons/SvgLearn";
import { SvgTrack } from "@/components/icons/SvgTrack";
import { SvgGrow } from "@/components/icons/SvgGrow";
import { FeatureData, StepData, ImageData, FAQItemData } from "@/types";

export const heroData = {
  titleLine1: "Know Your Money.",
  titleLine2: "Grow Your Money.",
};

export const featuresData: FeatureData[] = [
  {
    title: "Beginner Friendly",
    desc: "Start learning digital finance safely. Eqonic provides intuitive content and step-by-step guides to help you understand Web3 without technical barriers.",
  },
  {
    title: "Financial Literacy",
    desc: "Understand the core of Web3 economics. Learn how decentralized finance works and its impact on the real-world digital economy.",
  },
  {
    title: "Trusted Knowledge Base",
    desc: "Build a strong foundation with verified and accurate information. We help you navigate the Web3 space safely and avoid digital scams or misinformation.",
  },
  {
    title: "Insightful Reading",
    desc: "Engage with dynamic articles that make complex blockchain concepts, smart contracts, and digital finance easy to understand for everyone.",
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
    title: "Discover Trends",
    desc: "Begin your journey by discovering the latest news and trends in Web3, blockchain, and digital finance.",
    Icon: SvgWallet,
  },
  {
    num: "02",
    title: "Learn & Explore",
    desc: "Access comprehensive articles to understand Web3 fundamentals, blockchain security, and digital financial literacy from the basics.",
    Icon: SvgLearn,
  },
  {
    num: "03",
    title: "Analytical Thinking",
    desc: "Read our daily insights to learn how to analyze crypto market movements and technological shifts in real-time.",
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
      "bottom-[5%] md:bottom-[10%] left-[5%] md:left-[0%] lg:left-[10%] w-[150px] md:w-[300px] lg:w-[300px] -rotate-6",
  },
  {
    src: "/images/sepp.png",
    alt: "Sepp",
    positionClasses:
      "top-[10%] md:top-[15%] right-[0%] md:right-[0%] lg:right-[10%] w-[150px] md:w-[300px] lg:w-[300px] rotate-6",
  },
];

export const faqData: FAQItemData[] = [
  {
    question: "What is Eqonic's vision in supporting the INNOVATE theme?",
    answer:
      "In line with the INNOVATE spirit (Impel Novelty, Navigate, Optimize, Validate, Advance Technological Endeavors), Eqonic serves as a digital education innovation. We navigate society through the complexities of Web3 finance via a secure, validated, and optimized platform to advance technological literacy.",
  },
  {
    question: "Why does Eqonic focus purely on educational articles and news?",
    answer:
      "We believe that education is the first line of defense. The Web3 space is full of complex technologies and potential misinformation. By providing a comprehensive and verified knowledge base, we empower beginners to build a strong foundation and critical thinking skills before they enter the real digital economy.",
  },
  {
    question:
      "Does this platform only discuss Economics, or does it touch on sustainability issues?",
    answer:
      "Eqonic covers both! Besides financial articles, Eqonic Academy also highlights the Environment sub-theme by providing education on 'Green Blockchain' (low-carbon emission crypto networks) and how decentralized technology can be used to fund global climate and health initiatives.",
  },
  {
    question: "How does this platform impact the wider community?",
    answer:
      "The website is not just an information medium, but a tool for empowerment. By democratizing access to Web3 knowledge for free, Eqonic aims to increase public awareness, foster critical thinking among the younger generation, and prepare society for the transition to an inclusive digital economy.",
  },
  {
    question: "Do I need to connect a crypto wallet or pay to use Eqonic?",
    answer:
      "Absolutely not. Eqonic is a 100% free educational platform. We will never ask you to connect your real crypto wallet, make deposits, or purchase tokens. Our sole purpose is to provide safe, risk-free financial literacy for everyone.",
  },

  {
    question: "I am an absolute beginner. Where should I start?",
    answer:
      "We recommend starting with our 'Web3 Basics' and 'Internet Evolution' articles. These foundational pieces are designed without complex technical jargon, making it easy to grasp the core concepts before diving into advanced topics like Smart Contracts or Crypto Wallets.",
  },

  {
    question: "How often is the educational content updated?",
    answer:
      "Our team of experts continuously monitors the rapid changes in the Web3 and digital finance landscape. We update our knowledge base and publish new insights weekly to ensure our community always receives the most accurate and validated information.",
  },
];
