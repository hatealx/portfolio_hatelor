"use client"

import { useEffect, useState } from "react"

interface FloatingElement {
  id: number
  x: number
  y: number
  delay: number
  size: number
  opacity: number
}

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    const generateElements = () => {
      const newElements: FloatingElement[] = []
      for (let i = 0; i < 20; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 5,
          size: Math.random() * 20 + 10,
          opacity: Math.random() * 0.3 + 0.1,
        })
      }
      setElements(newElements)
    }

    generateElements()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-float"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}s`,
            opacity: element.opacity,
          }}
        >
          <div
            className="bg-primary/20 rounded-full blur-sm"
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
            }}
          />
        </div>
      ))}
    </div>
  )
}
