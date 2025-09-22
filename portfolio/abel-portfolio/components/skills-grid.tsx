"use client"

import { Card3D } from "./3d-card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface Skill {
  name: string
  category: string
  level: number
  icon: string
  description: string
}

const skills: Skill[] = [
  {
    name: "Python",
    category: "Backend",
    level: 90,
    icon: "🐍",
    description: "Flask, Django, API development, data processing",
  },
  {
    name: "PHP",
    category: "Backend",
    level: 85,
    icon: "🐘",
    description: "Web development, API integration, server-side logic",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: 75,
    icon: "⚡",
    description: "ES6+, DOM manipulation, async programming",
  },
  {
    name: "Flutter",
    category: "Mobile",
    level: 80,
    icon: "📱",
    description: "Cross-platform mobile apps, Dart, UI/UX",
  },
  {
    name: "AWS",
    category: "Cloud",
    level: 75,
    icon: "☁️",
    description: "EC2, S3, Lambda, API deployment, cloud architecture",
  },
  {
    name: "SQL",
    category: "Database",
    level: 80,
    icon: "🗄️",
    description: "MySQL, PostgreSQL, database design, optimization",
  },
  {
    name: "Git",
    category: "Tools",
    level: 85,
    icon: "🔧",
    description: "Version control, collaboration, branching strategies",
  },
  {
    name: "Linux",
    category: "System",
    level: 70,
    icon: "🐧",
    description: "Server administration, command line, deployment",
  },
]

const categories = ["All", "Backend", "Frontend", "Mobile", "Cloud", "Database", "Tools", "System"]

export function SkillsGrid() {
  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={category === "All" ? "default" : "secondary"}
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <Card3D key={skill.name}>
            <div
              className="bg-card border rounded-lg p-6 h-full hover:shadow-lg transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                {/* Icon and Name */}
                <div className="text-center">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-card-foreground">{skill.name}</h3>
                  <Badge variant="outline" className="text-xs mt-1">
                    {skill.category}
                  </Badge>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Proficiency</span>
                    <span className="text-sm font-medium">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground text-center">{skill.description}</p>
              </div>
            </div>
          </Card3D>
        ))}
      </div>
    </div>
  )
}
