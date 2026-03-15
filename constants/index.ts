import { SvgWallet } from "@/components/icons/SvgWallet";
import { SvgLearn } from "@/components/icons/SvgLearn";
import { SvgTrack } from "@/components/icons/SvgTrack";
import { SvgGrow } from "@/components/icons/SvgGrow";
import { FeatureData, StepData, ImageData, FAQItemData } from "@/types";
import { Instagram, Twitter, Facebook, Linkedin, Youtube } from "lucide-react";
import { ArticleData } from "@/types";

export const companyInfo = {
  phone: "+62 812 3456 7890",
  email: "hello@eqonic.id",
  address:
    "Directorate Building 2nd Floor, State Polytechnic of Indramayu, West Java",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Politeknik+Negeri+Indramayu",
  hours: "09:00 - 17:00",
  workDays: "Monday – Friday (UTC+7)",
  socials: [
    {
      id: "instagram",
      name: "Instagram",
      url: "https://instagram.com",
      Icon: Instagram,
    },
    {
      id: "twitter",
      name: "Twitter",
      url: "https://twitter.com",
      Icon: Twitter,
    },
    {
      id: "facebook",
      name: "Facebook",
      url: "https://facebook.com",
      Icon: Facebook,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://linkedin.com",
      Icon: Linkedin,
    },
    {
      id: "youtube",
      name: "YouTube",
      url: "https://youtube.com",
      Icon: Youtube,
    },
  ],
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
];

export const heroData = {
  titleLine1: "Know Your Money.",
  titleLine2: "Grow Your Money.",
};

export const privacyPolicyData = {
  title: "Privacy Policy",
  lastUpdated: "March 2026",
  sections: [
    {
      id: "introduction",
      title: "1. Introduction",
      content:
        "Welcome to ECONIQ. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.",
    },
    {
      id: "data-we-collect",
      title: "2. Data We Collect",
      content:
        "When you use our platform, specifically when you fill out forms to subscribe to our newsletter or access our educational content, we may collect the following data:",
      list: [
        { label: "Identity Data:", desc: "includes your full name." },
        { label: "Contact Data:", desc: "includes your email address." },
        {
          label: "Technical Data:",
          desc: "internet protocol (IP) address, browser type, and interaction metrics with our platform.",
        },
      ],
    },
    {
      id: "how-we-use-data",
      title: "3. How We Use Your Data",
      content:
        "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:",
      list: [
        {
          desc: "To provide you with the latest news and information regarding Web3 and financial literacy.",
        },
        {
          desc: "To manage our relationship with you, including sending confirmation emails and platform updates.",
        },
        {
          desc: "To improve our website, products/services, marketing, and user experiences.",
        },
      ],
    },
    {
      id: "data-security",
      title: "4. Data Security",
      content:
        "ECONIQ operates as an educational platform. This means our platform provides financial insights and tech news **without requiring real financial investments or connecting actual crypto wallets**. We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way.",
    },
    {
      id: "contact-us",
      title: "5. Contact Us",
      content:
        "If you have any questions about this privacy policy or our privacy practices, please contact us via email.",
    },
  ],
};

export const articlesData: ArticleData[] = [
  {
    id: "1",
    title: "What is Web3: A Beginner's Guide",
    excerpt:
      "Kenali konsep dasar Web3 dan bagaimana ia akan mengubah cara kita berinteraksi di internet.",
    topic: "Web3 Basics",
    readTime: "4 min read",
    date: "Sep 01, 2025",
    thumbnail: "/images/content/web3-basics.JPG",
    slug: "/content/what-is-web3",
    featured: true,
  },
  {
    id: "2",
    title: "What is Blockchain & How Does It Work?",
    excerpt:
      "Penjelasan sederhana tentang teknologi di balik Web3 tanpa istilah teknis yang memusingkan.",
    topic: "Technology",
    readTime: "5 min read",
    date: "Sep 03, 2025",
    thumbnail: "/images/content/blockchain.JPG",
    slug: "/content/what-is-blockchain",
  },
  {
    id: "4",
    title: "What is a Crypto Wallet?",
    excerpt: "Pahami fungsi dompet digital untuk mengamankan aset Web3 kamu.",
    topic: "Wallet",
    readTime: "3 min read",
    date: "Sep 07, 2025",
    thumbnail: "/images/content/wallet.JPG",
    slug: "/content/crypto-wallet",
  },

  {
    id: "7",
    title: "Internet Evolution: Web1 → Web3",
    excerpt:
      "Pahami bagaimana internet berevolusi dari sekadar membaca informasi hingga era kepemilikan aset digital.",
    topic: "History",
    readTime: "5 min read",
    date: "Sep 18, 2025",
    thumbnail: "/images/content/evolusi.JPG",
    slug: "/content/evolusi-internet",
  },
  {
    id: "8",
    title: "Myths & Facts About Crypto Wallet Security",
    excerpt:
      "Apakah dompet digital benar-benar aman? Mari kita kupas mitos dan fakta keamanannya.",
    topic: "Security",
    readTime: "6 min read",
    date: "Sep 15, 2025",
    thumbnail: "/images/content/security.JPG",
    slug: "/content/mitos-fakta-wallet",
  },
  {
    id: "9",
    title: "Green Blockchain: An Eco-Friendly Solution",
    excerpt:
      "Menjawab kekhawatiran jejak karbon. Kenali teknologi blockchain generasi baru yang hemat energi.",
    topic: "Environment",
    readTime: "6 min read",
    date: "Sep 08, 2025",
    thumbnail: "/images/content/green.JPG",
    slug: "/content/green-blockchain",
  },

  {
    id: "11",
    title: "A Guide to Creating Your First Smart Contract",
    excerpt:
      "Langkah praktis memahami logika di balik smart contract dan bagaimana cara kerjanya di ekosistem blockchain.",
    topic: "Development",
    readTime: "8 min read",
    date: "Sep 20, 2025",
    thumbnail: "/images/content/smart-contract.JPG",
    slug: "/content/panduan-smart-contract",
  },
];
