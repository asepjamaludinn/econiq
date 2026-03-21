import { Facebook, Youtube, Instagram, Twitter } from "lucide-react";

interface ShareButtonsProps {
  className?: string;
  url?: string;
  title?: string;
}

export default function ShareButtons({
  className = "",
  url,
  title,
}: ShareButtonsProps) {
  const shareLinks = [
    { id: "twitter", url: "https://twitter.com", Icon: Twitter },
    { id: "facebook", url: "https://facebook.com", Icon: Facebook },
    { id: "youtube", url: "https://youtube.com", Icon: Youtube },
    { id: "instagram", url: "https://instagram.com", Icon: Instagram },
  ];

  return (
    <div
      className={`flex items-center justify-end lg:justify-start gap-2.5 lg:gap-3 ${className}`}
    >
      {shareLinks.map((social) => {
        const Icon = social.Icon;
        return (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${social.id}`}
            className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-light transition-all"
          >
            <Icon size={16} className="lg:w-[18px] lg:h-[18px]" />
          </a>
        );
      })}
    </div>
  );
}
