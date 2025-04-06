"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface StaggeredChildrenProps {
  children: ReactNode
  staggerAmount?: number
  className?: string
}

export function StaggeredChildren({ children, staggerAmount = 0.1, className = "" }: StaggeredChildrenProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerAmount,
      },
    },
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show" className={className}>
      {children}
    </motion.div>
  )
}

