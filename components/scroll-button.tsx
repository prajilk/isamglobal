"use client"

import { useLenis } from "lenis/react"
import { Button } from "./ui/button"
import type { ReactNode } from "react"

export default function ScrollButton({
  id,
  children,
  size,
  className,
  variant,
}: {
  id: string
  children: ReactNode
  size?:
    | "lg"
    | "sm"
    | "default"
    | "xs"
    | "icon"
    | "icon-xs"
    | "icon-sm"
    | "icon-lg"
    | null
  className?: string
  variant?:
    | "outline"
    | "ghost"
    | "default"
    | "secondary"
    | "destructive"
    | "link"
    | null
}) {
  const lenis = useLenis()

  const handleScroll = () => {
    if (!lenis) return

    // Scroll to a specific element selector, a DOM element, or a numeric value
    lenis.scrollTo(id, {
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom power ease
      offset: -50, // Keep offset for sticky headers
    })
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleScroll}
    >
      {children}
    </Button>
  )
}
