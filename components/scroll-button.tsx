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
  duration = 2000,
}: {
  id: string
  children: ReactNode
  duration?: number
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
  // const lenis = useLenis()

  const handleScroll = () => {
    // if (!lenis) return

    // // Scroll to a specific element selector, a DOM element, or a numeric value
    // lenis.scrollTo(id, {
    //   duration: 1.5,
    //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom power ease
    //   offset: -50, // Keep offset for sticky headers
    // })
    const target = document.getElementById(id)

    if (!target) return

    const targetPosition = target.getBoundingClientRect().top + window.scrollY
    const startPosition = window.scrollY
    const distance = targetPosition - startPosition
    let startTime: number | null = null

    // Easing function (Ease-In-Out Quad) to make the start and end smooth
    function ease(t: number, b: number, c: number, d: number) {
      t /= d / 2
      if (t < 1) return (c / 2) * t * t + b
      t--
      return (-c / 2) * (t * (t - 2) - 1) + b
    }

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const run = ease(timeElapsed, startPosition, distance, duration)

      window.scrollTo(0, run)

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
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
