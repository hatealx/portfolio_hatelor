"use client"

import { useState } from "react"
import { Card3D } from "./3d-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Calendar, Users, Star } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: "Personal" | "Client" | "Open Source"
  status: "Completed" | "In Progress" | "Planned"
  image: string
  githubUrl?: string
  liveUrl?: string
  features: string[]
  impact?: string
  duration: string
  teamSize?: number
}

const projects: Project[] = [
  {
    id: "tasktamer",
    title: "TaskTamer",
    description: "Flask-based task and project management dashboard with intuitive UI",
    longDescription:
      "A comprehensive task management system built with Flask, featuring user authentication, project organization, deadline tracking, and progress visualization. Designed to help teams and individuals stay organized and productive.",
    technologies: ["Python", "Flask", "SQLAlchemy", "HTML", "CSS", "JavaScript"],
    category: "Personal",
    status: "Completed",
    image: "/task-management-dashboard.png",
    githubUrl: "https://github.com/hatealx/tasktamer",
    features: [
      "User authentication and authorization",
      "Project and task organization",
      "Deadline tracking and notifications",
      "Progress visualization with charts",
      "Team collaboration features",
    ],
    impact: "Improved personal productivity by 40%",
    duration: "3 months",
    teamSize: 1,
  },
  {
    id: "fileops-bot",
    title: "FileOps Telegram Bot",
    description: "Telegram bot for file conversion, image processing, and remote downloads",
    longDescription:
      "An intelligent Telegram bot that handles various file operations including image-to-PDF conversion, color analysis, remote file downloads, and image processing. Built with Python and integrated with multiple APIs for enhanced functionality.",
    technologies: ["Python", "Telegram Bot API", "OpenCV", "PIL", "Requests"],
    category: "Personal",
    status: "Completed",
    image: "/telegram-bot-file-conversion.jpg",
    githubUrl: "https://github.com/hatealx/fileops-bot",
    features: [
      "Image to PDF conversion",
      "Color analysis and extraction",
      "Remote file downloads",
      "Image processing and filters",
      "Multi-format support",
    ],
    impact: "Used by 200+ users daily",
    duration: "2 months",
    teamSize: 1,
  },
  {
    id: "species-api",
    title: "Species Occurrence API",
    description: "Flask API for species data management deployed on AWS",
    longDescription:
      "A robust REST API built for the Seaford Natural History Society to manage species occurrence data. Features include data validation, search functionality, and integration with external databases. Successfully deployed on AWS with high availability.",
    technologies: ["Python", "Flask", "AWS", "PostgreSQL", "Docker"],
    category: "Client",
    status: "Completed",
    image: "/nature-species-database-api.jpg",
    liveUrl: "https://api.seafordnhs.org.uk",
    features: [
      "RESTful API design",
      "Species data management",
      "Advanced search and filtering",
      "Data validation and sanitization",
      "AWS deployment with auto-scaling",
    ],
    impact: "30% increase in data accessibility",
    duration: "4 months",
    teamSize: 2,
  },
  {
    id: "imagemargin-app",
    title: "ImageMargin Mobile App",
    description: "Flutter app for image margin adjustment and cropping functionality",
    longDescription:
      "A mobile application developed for a UK client that provides advanced image editing capabilities, specifically focused on margin adjustment and cropping. Features an intuitive interface and real-time preview functionality.",
    technologies: ["Flutter", "Dart", "Image Processing", "Mobile UI"],
    category: "Client",
    status: "Completed",
    image: "/mobile-image-editing-app.jpg",
    features: [
      "Real-time image preview",
      "Precision margin adjustment",
      "Multiple crop ratios",
      "Batch processing",
      "Export in multiple formats",
    ],
    impact: "Streamlined client's workflow by 50%",
    duration: "2 months",
    teamSize: 1,
  },
  {
    id: "songselector-app",
    title: "SongSelector App",
    description: "Hymn management app with keyword search and annotation features",
    longDescription:
      "A specialized mobile application for managing hymn collections with advanced search capabilities, in-app annotations, and image management. Designed to help religious organizations efficiently organize and access their musical resources.",
    technologies: ["Flutter", "Dart", "SQLite", "Search Algorithms"],
    category: "Client",
    status: "Completed",
    image: "/placeholder-vo7qb.png",
    features: [
      "Keyword-based search",
      "In-app annotations",
      "Image-text association",
      "Offline functionality",
      "Custom categorization",
    ],
    impact: "Reduced song selection time by 60%",
    duration: "3 months",
    teamSize: 1,
  },
  {
    id: "nlp-research",
    title: "NLP Research Project",
    description: "Natural Language Processing research combining linguistics and AI",
    longDescription:
      "An ongoing research project exploring the intersection of computational linguistics and natural language processing, focusing on morphological analysis and semantic understanding in multilingual contexts.",
    technologies: ["Python", "NLTK", "spaCy", "TensorFlow", "Research"],
    category: "Personal",
    status: "In Progress",
    image: "/natural-language-processing-research.jpg",
    features: [
      "Morphological analysis",
      "Semantic understanding",
      "Multilingual support",
      "Machine learning models",
      "Research documentation",
    ],
    duration: "Ongoing",
    teamSize: 1,
  },
]

export function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const categories = ["All", "Personal", "Client", "Open Source"]

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory,
  )

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "Completed":
        return "bg-green-500"
      case "In Progress":
        return "bg-yellow-500"
      case "Planned":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className="transition-all duration-300"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <Card3D key={project.id}>
            <div
              className="bg-card border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(project.status)}`} title={project.status} />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{project.duration}</span>
                    </div>
                    {project.teamSize && (
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>
                          {project.teamSize} member{project.teamSize > 1 ? "s" : ""}
                        </span>
                      </div>
                    )}
                    {project.impact && (
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        <span className="text-primary">Impact</span>
                      </div>
                    )}
                  </div>

                  {/* Expanded Details */}
                  {selectedProject === project.id && (
                    <div className="space-y-4 animate-slide-in-up border-t border-border pt-4">
                      <p className="text-sm text-muted-foreground">{project.longDescription}</p>

                      <div>
                        <h4 className="font-medium text-sm mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {project.impact && (
                        <div className="bg-primary/10 rounded-lg p-3">
                          <p className="text-sm font-medium text-primary">{project.impact}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-border mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                    className="text-xs"
                  >
                    {selectedProject === project.id ? "Show Less" : "Learn More"}
                  </Button>

                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">Live Demo</span>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card3D>
        ))}
      </div>
    </div>
  )
}
