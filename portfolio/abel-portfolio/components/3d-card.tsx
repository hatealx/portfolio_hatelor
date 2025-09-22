"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface Card3DProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}

export function Card3D({ children, className, hoverEffect = true }: Card3DProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn("perspective-1000 group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "preserve-3d transition-all duration-500 ease-out",
          hoverEffect && isHovered && "transform rotate-y-12 rotate-x-6 scale-105",
        )}
      >
        {children}
      </div>
    </div>
  )
}
