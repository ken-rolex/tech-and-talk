"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { forwardRef } from "react"

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  tiltAmount?: number
  glareEnabled?: boolean
}

const TiltCard = forwardRef<HTMLDivElement, TiltCardProps>(
  ({ className, children, tiltAmount = 10, glareEnabled = true, ...props }, ref) => {
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
        ref={ref}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn("relative group", className)}
        {...props}
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
        <Card className="transform-style-3d">{children}</Card>
      </motion.div>
    )
  },
)
TiltCard.displayName = "TiltCard"

const TiltCardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <CardHeader ref={ref} className={cn("", className)} {...props} />,
)
TiltCardHeader.displayName = "TiltCardHeader"

const TiltCardTitle = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => <CardTitle ref={ref} className={cn("", className)} {...props} />,
)
TiltCardTitle.displayName = "TiltCardTitle"

const TiltCardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <CardDescription ref={ref} className={cn("", className)} {...props} />,
)
TiltCardDescription.displayName = "TiltCardDescription"

const TiltCardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <CardContent ref={ref} className={cn("", className)} {...props} />,
)
TiltCardContent.displayName = "TiltCardContent"

const TiltCardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <CardFooter ref={ref} className={cn("", className)} {...props} />,
)
TiltCardFooter.displayName = "TiltCardFooter"

export { TiltCard, TiltCardHeader, TiltCardTitle, TiltCardDescription, TiltCardContent, TiltCardFooter }

