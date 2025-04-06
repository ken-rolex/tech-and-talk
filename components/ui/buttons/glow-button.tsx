import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export interface GlowButtonProps extends ButtonProps {}

const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(({ className, children, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      className={cn(
        "relative overflow-hidden group",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/50 before:to-purple-500/50 before:opacity-0 before:transition-opacity before:duration-300 before:rounded-md before:-z-10 before:blur-xl",
        "hover:before:opacity-100",
        "after:absolute after:inset-0 after:rounded-md after:border after:border-primary/50 after:opacity-0 after:transition-opacity after:duration-300 after:-z-10",
        "hover:after:opacity-100 hover:after:blur-sm",
        "animate-pulse-glow",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  )
})
GlowButton.displayName = "GlowButton"

export { GlowButton }

