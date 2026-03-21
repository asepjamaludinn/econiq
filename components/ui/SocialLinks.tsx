import Link from "next/link";
import { companyInfo } from "@/constants";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
  variant?: "menu" | "modal";
}

export default function SocialLinks({
  className = "",
  iconClassName = "",
  variant = "menu",
}: SocialLinksProps) {
  const baseStyles =
    variant === "modal"
      ? "w-10 h-10 md:w-11 md:h-11 bg-brand-secondary text-white"
      : "w-7 h-7 bg-white text-brand-primary shadow-sm";

  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-3 ${className}`}
    >
      {companyInfo.socials.map((social) => {
        const Icon = social.Icon;
        return (
          <Link
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex justify-center items-center rounded-full hover:scale-110 transition-all duration-300 ${
              variant === "modal" ? "hover:shadow-lg cursor-pointer" : ""
            } ${baseStyles} ${iconClassName}`}
            aria-label={social.name}
          >
            <Icon size={18} />
          </Link>
        );
      })}
    </div>
  );
}
