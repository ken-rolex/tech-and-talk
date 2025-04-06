import type React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(({ className, children, ...props }, ref) => {
  return (
    <Card
      ref={ref}
      className={cn(
        "bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl",
        className,
      )}
      {...props}
    >
      {children}
    </Card>
  )
})
GlassCard.displayName = "GlassCard"

const GlassCardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <CardHeader ref={ref} className={cn("", className)} {...props} />,
)
GlassCardHeader.displayName = "GlassCardHeader"

const GlassCardTitle = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => <CardTitle ref={ref} className={cn("", className)} {...props} />,
)
GlassCardTitle.displayName = "GlassCardTitle"

const GlassCardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <CardDescription ref={ref} className={cn("text-white/70 dark:text-white/70", className)} {...props} />
  ),
)
GlassCardDescription.displayName = "GlassCardDescription"

const GlassCardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <CardContent ref={ref} className={cn("", className)} {...props} />,
)
GlassCardContent.displayName = "GlassCardContent"

const GlassCardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <CardFooter ref={ref} className={cn("", className)} {...props} />,
)
GlassCardFooter.displayName = "GlassCardFooter"

export { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardDescription, GlassCardContent, GlassCardFooter }

