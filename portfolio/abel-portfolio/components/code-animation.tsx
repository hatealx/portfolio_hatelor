"use client"

import { useEffect, useState } from "react"

const codeSnippets = [
  "def create_api():",
  "    app = Flask(__name__)",
  "    return app",
  "",
  "class DatabaseManager:",
  "    def __init__(self):",
  "        self.connection = None",
  "",
  "async function fetchData() {",
  "    const response = await fetch('/api/data')",
  "    return response.json()",
  "}",
  "",
  "SELECT * FROM users",
  "WHERE active = true",
  "ORDER BY created_at DESC",
]

export function CodeAnimation() {
  const [visibleLines, setVisibleLines] = useState<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev.length >= codeSnippets.length) {
          return []
        }
        return [...prev, prev.length]
      })
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-mono text-sm text-muted-foreground/60 space-y-1 select-none">
      {codeSnippets.map((line, index) => (
        <div
          key={index}
          className={`transition-all duration-500 ${
            visibleLines.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          {line || "\u00A0"}
        </div>
      ))}
    </div>
  )
}
