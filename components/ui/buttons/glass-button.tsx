import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export interface GlassButtonProps extends ButtonProps {}

const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(({ className, children, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      className={cn(
        "bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300",
        "text-foreground shadow-sm",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  )
})
GlassButton.displayName = "GlassButton"

export { GlassButton }

