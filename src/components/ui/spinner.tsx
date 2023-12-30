import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const spinnerVariants = cva("text-muted-foreground", {
  variants: {
    speed: {
      default: "animate-spin",
      slow: "animate-spin-slow",
      fast: "animate-spin-fast",
    },
  },
  defaultVariants: {
    speed: "default",
  },
})

export interface SpinnerProps
  extends Omit<React.SVGAttributes<SVGSVGElement>, "speed">,
    VariantProps<typeof spinnerVariants> {}

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ speed, className, ...props }, ref) => {
    return (
      <Loader2
        className={cn(spinnerVariants({ speed, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Spinner.displayName = "Spinner"

export { Spinner, spinnerVariants }
