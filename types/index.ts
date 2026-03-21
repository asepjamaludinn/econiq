import { ElementType, ReactNode, RefObject } from "react";

export interface FeatureData {
  title: string;
  desc: string;
}

export interface FAQItemData {
  question: string;
  answer: string;
}

export interface StepData {
  num: string;
  title: string;
  desc: string;
  Icon: ElementType;
}

export interface ImageData {
  src: string;
  alt: string;
  positionClasses: string;
}

export interface ArticleData {
  id: string;
  title: string;
  excerpt: string;
  topic: string;
  readTime: string;
  date: string;
  thumbnail: string;
  slug: string;
  featured?: boolean;
  authorName?: string;
  authorAvatar?: string;
  content?: string;
}

export interface MarketSlideProps {
  textRef: RefObject<HTMLDivElement | null>;
  images: ImageData[];
  badgeText: string;
  titleContent: ReactNode;
  subtexts: string[];
  wrapperClassName: string;
  imageContainerClassName?: string;
  imageWrapperClassName: string;
  imageClassName?: string;
  badgeClassName: string;
  subtextClassName: string;
  subtextWrapperClassName?: string;
}

export interface CustomVideoPlayerProps {
  src: string;
  poster?: string;
}

export interface HangingSignProps {
  text: string;
}
