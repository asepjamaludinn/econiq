import React, { RefObject } from "react";
import Image from "next/image";
import { ImageData } from "@/types";

export interface MarketSlideProps {
  textRef: RefObject<HTMLDivElement | null>;
  images: ImageData[];
  badgeText: string;
  titleContent: React.ReactNode;
  subtexts: string[];
  wrapperClassName: string;
  imageContainerClassName?: string;
  imageWrapperClassName: string;
  imageClassName?: string;
  badgeClassName: string;
  subtextClassName: string;
  subtextWrapperClassName?: string;
}

export default function MarketSlide({
  textRef,
  images,
  badgeText,
  titleContent,
  subtexts,
  wrapperClassName,
  imageContainerClassName = "absolute inset-0 z-10",
  imageWrapperClassName,
  imageClassName = "object-cover object-center",
  badgeClassName,
  subtextClassName,
  subtextWrapperClassName = "",
}: MarketSlideProps) {
  return (
    <div
      className={`absolute inset-0 w-full h-full flex items-center justify-center max-w-[1600px] mx-auto pb-12 lg:pb-0 ${wrapperClassName}`}
    >
      <div className={imageContainerClassName}>
        {images.map((image, index) => (
          <div
            key={`slide-img-${index}`}
            className={`absolute ${image.positionClasses} flex items-center justify-center`}
          >
            <div
              className={`opacity-0 relative w-full transform-gpu overflow-hidden ${imageWrapperClassName}`}
              style={{ willChange: "transform, opacity" }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                aria-hidden="true"
                fill
                className={imageClassName}
              />
            </div>
          </div>
        ))}
      </div>

      <div
        ref={textRef}
        className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-2xl lg:max-w-4xl pointer-events-auto transform-gpu"
      >
        <div
          className={`${badgeClassName} border-[1px] md:border-2 border-white/10 text-white bg-transparent rounded-full px-4 py-1.5 md:px-5 md:py-1.5 mb-4 md:mb-6 flex items-center justify-center transform-gpu backdrop-blur-sm opacity-0`}
        >
          <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-center">
            {badgeText}
          </span>
        </div>

        {titleContent}

        <div
          className={`flex flex-col items-center w-full max-w-sm lg:max-w-xl transform-gpu ${subtextWrapperClassName}`}
        >
          {subtexts.map((text, idx) => (
            <p
              key={idx}
              className={`${subtextClassName} text-white/90 text-xs md:text-sm lg:text-base font-medium tracking-tight text-center leading-relaxed opacity-0`}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
