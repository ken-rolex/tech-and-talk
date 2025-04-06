import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export interface BounceButtonProps extends ButtonProps {}

const BounceButton = forwardRef<HTMLButtonElement, BounceButtonProps>(({ className, children, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      className={cn(
        "transition-transform duration-300 hover:scale-105 active:scale-95",
        "hover:animate-bounce-subtle",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  )
})
BounceButton.displayName = "BounceButton"

export { BounceButton }

