import React from "react"

import { cn } from "@/lib/utils"

interface CenterProps extends React.HTMLAttributes<HTMLDivElement> {
  grow?: boolean
  horizontal?: boolean
  vertical?: boolean
}

const Center = React.forwardRef<HTMLDivElement, CenterProps>(
  (
    { grow = true, horizontal = true, vertical = true, className, ...props },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "flex",
        {
          grow,
          "justify-center": horizontal,
          "items-center": vertical,
        },
        className
      )}
      {...props}
    />
  )
)

export { Center }
