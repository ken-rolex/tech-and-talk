"use client"

import type React from "react"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import type { ReactNode } from "react"

interface TiltCardProps {
  children: ReactNode
  className?: string
  tiltAmount?: number
  glareEnabled?: boolean
}

export function TiltCard({ children, className = "", tiltAmount = 10, glareEnabled = true }: TiltCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [tiltAmount, -tiltAmount])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-tiltAmount, tiltAmount])

  const glareX = useTransform(mouseX, [-0.5, 0.5], ["-20%", "120%"])
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["-20%", "120%"])

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = (event.clientX - rect.left) / width - 0.5
    const mouseY = (event.clientY - rect.top) / height - 0.5

    x.set(mouseX)
    y.set(mouseY)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
    >
      {glareEnabled && (
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-tr from-white via-white to-transparent opacity-0 group-hover:opacity-20 pointer-events-none rounded-xl"
          style={{
            left: glareX,
            top: glareY,
          }}
        />
      )}
      <div style={{ transform: "translateZ(50px)" }}>{children}</div>
    </motion.div>
  )
}

