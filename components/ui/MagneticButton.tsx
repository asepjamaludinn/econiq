"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

interface MagneticButtonProps {
  children: React.ReactNode
}

export default function MagneticButton({ children }: MagneticButtonProps) {

  const ref = useRef<HTMLButtonElement>(null)

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {

    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  function reset() {
    if (ref.current) {
      ref.current.style.transform = "translate(0px,0px)"
    }
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="px-10 py-5 bg-black text-white rounded-full text-lg"
    >
      {children}
    </motion.button>
  )
}