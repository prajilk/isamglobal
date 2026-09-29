"use client"

import { ReactLenis } from "lenis/react"
import type { ReactNode } from "react"

interface SmoothScrollProps {
  children: ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.5,
        lerp: 0.1,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
