import { ElementType } from "react";

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
}
