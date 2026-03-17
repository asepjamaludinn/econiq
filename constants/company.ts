import { Instagram, Twitter, Facebook, Linkedin, Youtube } from "lucide-react";

export const companyInfo = {
  phone: "+62 812 3456 7890",
  email: "helloeconiq@gmail.com",
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
