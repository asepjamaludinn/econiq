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
    desc: "Start learning digital finance safely. Eqonic provides intuitive content and articles to help you understand Web3 without technical barriers.",
  },
  {
    title: "Financial Literacy",
    desc: "Understand Web3 economics. Study market behavior and monitor global trends with our real-time educational insights.",
  },
  {
    title: "Trusted Knowledge Base",
    desc: "Access verified and accurate information about digital assets securely. Our platform provides real-world insights without exposing you to financial risks.",
  },
  {
    title: "Insightful Reading",
    desc: "Engage with dynamic articles that make complex blockchain and finance concepts easy to understand for everyone.",
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
    title: "Market Insights",
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
    question: "Why does Eqonic focus on educational articles and news?",
    answer:
      "We focus on the Education and Social sub-themes. The fear of financial loss is often the main barrier to learning Web3. By providing comprehensive articles and news, we empower people from all backgrounds to learn and understand digital economy strategies without the risk of losing any money.",
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

export const articleCategories = [
  "All",
  "Web3 Basics",
  "Security",
  "Market Trends",
  "Green Blockchain",
];

export const articlesData: ArticleData[] = [
  {
    id: "1",
    title: "Understanding Internet Evolution: From Web1 to Web3",
    excerpt:
      "Understand how the internet evolved from the era of simply reading information, to interacting, and now to the era of decentralized digital asset ownership.",
    category: "Web3 Basics",
    readTime: "5 min read",
    date: "Sep 18, 2025",
    thumbnail: "/images/content/evolusi.jpg",
    slug: "/content/evolusi-internet",
    featured: true,
  },
  {
    id: "2",
    title: "Myths & Facts About Crypto Wallet Security",
    excerpt:
      "Are digital wallets truly secure? Let's debunk the various myths that often make beginners hesitate to get started.",
    category: "Security",
    readTime: "4 min read",
    date: "Sep 15, 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1614064641936-3b5e06551b2e?q=80&w=1000&auto=format&fit=crop",
    slug: "/content/mitos-fakta-wallet",
  },
  {
    id: "3",
    title: "Reading the Direction of Web3 Market Trends This Year",
    excerpt:
      "An in-depth analysis of global Web3 adoption trends and their impact on the local digital economy.",
    category: "Market Trends",
    readTime: "7 min read",
    date: "Sep 12, 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1641332214695-1f89c62c3e1e?q=80&w=1000&auto=format&fit=crop",
    slug: "/content/tren-pasar-web3",
  },
  {
    id: "4",
    title: "Green Blockchain: An Eco-Friendly Solution",
    excerpt:
      "Answering concerns about carbon footprints. Get to know the new generation of energy-efficient blockchain technology.",
    category: "Green Blockchain",
    readTime: "6 min read",
    date: "Sep 08, 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?q=80&w=1000&auto=format&fit=crop",
    slug: "/content/green-blockchain",
  },
  {
    id: "5",
    title: "A Guide to Creating Your First Smart Contract",
    excerpt:
      "Practical and safe steps to understand the logic behind smart contracts without the need for complex coding.",
    category: "Web3 Basics",
    readTime: "8 min read",
    date: "Sep 04, 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop",
    slug: "/content/panduan-smart-contract",
  },
];
