"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface StaggeredChildProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
}

export function StaggeredChild({ children, direction = "up", className = "" }: StaggeredChildProps) {
  const directionValues = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  }

  const item = {
    hidden: {
      opacity: 0,
      ...directionValues[direction],
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}

