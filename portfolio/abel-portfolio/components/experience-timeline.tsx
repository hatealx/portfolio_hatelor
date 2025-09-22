"use client"

import { useState } from "react"
import { Card3D } from "./3d-card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, MapPinIcon, ExternalLinkIcon } from "./icons"

interface Experience {
  id: string
  period: string
  position: string
  company: string
  location: string
  technologies: string[]
  achievements: string[]
  type: "work" | "education" | "project"
}

const experiences: Experience[] = [
  {
    id: "seaford-2023",
    period: "July 2023 - Present",
    position: "Backend & Frontend Developer",
    company: "Seaford Natural History Society",
    location: "UK (Remote)",
    technologies: ["Python", "Flask", "PHP", "AWS", "JavaScript"],
    achievements: [
      "Built image gallery boosting engagement by 30%",
      "Deployed species-occurrence Flask API on AWS",
      "Re-implemented API in PHP for cost & speed optimization",
      "Designed responsive dashboard interface",
    ],
    type: "work",
  },
  {
    id: "flutter-2024",
    period: "March 2024 - July 2024",
    position: "Flutter Developer",
    company: "Private Client",
    location: "UK (Remote)",
    technologies: ["Flutter", "Dart", "Mobile Development"],
    achievements: [
      "Built imageMargin app for image margin & crop functionality",
      "Developed SongSelector app with hymn-image management",
      "Implemented keyword search and in-app annotations",
    ],
    type: "work",
  },
  {
    id: "acclivity-2023",
    period: "August 2023 - December 2023",
    position: "Web Developer",
    company: "Acclivity.me",
    location: "UK (Remote)",
    technologies: ["PHP", "JavaScript", "HTML", "CSS"],
    achievements: [
      "Built dynamic file-upload & download system",
      "Added multimedia playback support (audio, video, images, text)",
      "Optimized user experience and file management",
    ],
    type: "work",
  },
  {
    id: "alx-2024",
    period: "February 2022 - June 2024",
    position: "Software Engineering Certification",
    company: "ALX",
    location: "Nairobi (Remote)",
    technologies: ["C", "Python", "JavaScript", "SQL", "System Design"],
    achievements: [
      "Completed comprehensive software engineering program",
      "Mastered low-level and high-level programming",
      "Gained expertise in database management and testing",
    ],
    type: "education",
  },
  {
    id: "university-2021",
    period: "October 2021 - Present",
    position: "B.A. English Linguistics",
    company: "University of Lomé",
    location: "Togo",
    technologies: ["Linguistics", "Research", "Analysis"],
    achievements: [
      "Studying phonetics, morphology, and psycholinguistics",
      "Developing analytical and research skills",
      "Exploring sociolinguistics and semantics",
    ],
    type: "education",
  },
]

export function ExperienceTimeline() {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null)

  const getTypeColor = (type: Experience["type"]) => {
    switch (type) {
      case "work":
        return "bg-primary"
      case "education":
        return "bg-accent"
      case "project":
        return "bg-secondary"
      default:
        return "bg-muted"
    }
  }

  const getTypeIcon = (type: Experience["type"]) => {
    switch (type) {
      case "work":
        return "💼"
      case "education":
        return "🎓"
      case "project":
        return "🚀"
      default:
        return "📍"
    }
  }

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div key={experience.id} className="relative flex items-start gap-8">
            {/* Timeline Dot */}
            <div className="relative z-10 flex-shrink-0">
              <div
                className={`w-16 h-16 rounded-full ${getTypeColor(
                  experience.type,
                )} flex items-center justify-center text-white text-xl shadow-lg`}
              >
                {getTypeIcon(experience.type)}
              </div>
            </div>

            {/* Experience Card */}
            <div className="flex-1 pb-8">
              <Card3D>
                <div
                  className={`bg-card border rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                    selectedExperience === experience.id ? "ring-2 ring-primary shadow-lg" : "hover:shadow-md"
                  }`}
                  onClick={() => setSelectedExperience(selectedExperience === experience.id ? null : experience.id)}
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{experience.period}</span>
                      </div>

                      <h3 className="text-xl font-semibold text-card-foreground">{experience.position}</h3>

                      <div className="flex items-center gap-2 text-primary font-medium">
                        <span>{experience.company}</span>
                        <ExternalLinkIcon className="h-4 w-4" />
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPinIcon className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Achievements (Expandable) */}
                    {selectedExperience === experience.id && (
                      <div className="space-y-3 animate-slide-in-up">
                        <h4 className="font-medium text-card-foreground">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Click to expand indicator */}
                    <div className="text-xs text-muted-foreground text-center pt-2 border-t border-border">
                      {selectedExperience === experience.id ? "Click to collapse" : "Click to view details"}
                    </div>
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
