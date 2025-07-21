import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const roomButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-xs font-semibold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        room: "bg-white/15 text-white border border-white/30 backdrop-blur-sm hover:bg-white/25 shadow-lg",
        ghost: "bg-transparent text-white border-2 border-dashed border-white/30 hover:bg-white/10 hover:border-white/50",
        done: "bg-primary text-primary-foreground hover:bg-primary/90",
      },
      size: {
        sm: "h-9 px-3 py-2",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "room",
      size: "sm",
    },
  }
)

export interface RoomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof roomButtonVariants> {
  asChild?: boolean
}

const RoomButton = React.forwardRef<HTMLButtonElement, RoomButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(roomButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
RoomButton.displayName = "RoomButton"

export { RoomButton, roomButtonVariants }