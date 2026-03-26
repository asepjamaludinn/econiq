"use client"

import { useScroll, useTransform } from "framer-motion"

export default function useParallax(ref: any, distance = 200) {

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress,[0,1],[-distance,distance])

  return y
}