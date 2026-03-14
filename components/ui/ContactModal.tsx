"use client";

import AnimatedSideModal from "./AnimatedSideModal";
import { companyInfo } from "@/constants";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatedSideModal
      isOpen={isOpen}
      onClose={onClose}
      title="Contact ECONIQ"
      contentClassName="p-6 md:p-8 lg:px-10 lg:py-8 flex-grow flex flex-col gap-4 md:gap-5 lg:gap-4 xl:gap-7"
    >
      <div className="modal-animate-item">
        <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tighter text-[#171717] leading-[0.95] mb-1 md:mb-1.5">
          Let's Build <br />
          <span className="text-[#8644F7]">Something Great.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-4 md:gap-5 lg:gap-4 xl:gap-6">
        <div className="modal-animate-item">
          <h4 className="text-[13px] md:text-sm font-bold text-zinc-400 tracking-widest mb-1 flex items-center gap-1.5 leading-none">
            Operating Hours
          </h4>
          <p className="text-lg md:text-xl xl:text-2xl font-black text-[#171717] leading-tight mb-0.5">
            {companyInfo.hours}
          </p>
          <p className="text-sm md:text-base font-semibold text-zinc-600">
            {companyInfo.workDays}
          </p>
        </div>

        <div className="modal-animate-item">
          <h4 className="text-[13px] md:text-sm font-bold text-zinc-400 tracking-widest mb-1 leading-none">
            Phone / WhatsApp
          </h4>
          <a
            href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
            className="text-lg md:text-xl xl:text-2xl font-black text-[#171717] hover:text-[#8644F7] transition-colors inline-block leading-tight cursor-pointer"
          >
            {companyInfo.phone}
          </a>
        </div>

        <div className="modal-animate-item">
          <h4 className="text-[13px] md:text-sm font-bold text-zinc-400 tracking-widest mb-1 md:mb-1.5 flex items-center gap-1.5 leading-none">
            Email
          </h4>
          <a
            href={`mailto:${companyInfo.email}`}
            className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-black text-[#171717] hover:text-[#8644F7] transition-colors leading-tight cursor-pointer"
          >
            {companyInfo.email}
          </a>
        </div>

        <div className="modal-animate-item">
          <h4 className="text-[13px] md:text-sm font-bold text-zinc-400 tracking-widest mb-1 md:mb-1.5 flex items-center gap-1.5 leading-none">
            Office Address
          </h4>
          <a
            href={companyInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg md:text-xl xl:text-2xl font-black text-[#8644F7] leading-snug max-w-sm lg:max-w-md hover:text-[#660DFF] transition-colors cursor-pointer"
          >
            {companyInfo.address}
          </a>
        </div>
      </div>

      <div className="modal-animate-item mt-auto pt-4 md:pt-5 xl:pt-6 border-t border-zinc-100 flex flex-col gap-3">
        <div>
          <h4 className="text-[11px] font-bold text-zinc-400 tracking-widest mb-1 md:mb-1.5 leading-none">
            Follow Our Journey
          </h4>
          <p className="text-xs md:text-sm font-medium text-zinc-500 leading-tight">
            Latest ECONIQ updates.
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-2 md:gap-3 mt-1">
          {companyInfo.socials.map((social) => {
            const Icon = social.Icon;
            return (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#8644F7] text-white flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer"
                aria-label={social.name}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </AnimatedSideModal>
  );
}
