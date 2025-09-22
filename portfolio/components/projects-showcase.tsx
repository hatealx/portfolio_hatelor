'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card3D } from '@/components/3d-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "TaskTamer",
    description: "Flask-based task and project management dashboard with intuitive UI and comprehensive project tracking capabilities.",
    image: "/task-management-dashboard.png",
    technologies: ["Python", "Flask", "SQLAlchemy", "HTML", "CSS", "JavaScript"],
    features: [
      "Task creation and management",
      "Project timeline tracking",
      "Team collaboration features",
      "Progress visualization",
      "Deadline notifications"
    ],
    github: "https://github.com/hatealx/tasktamer",
    demo: "https://tasktamer.demo.com"
  },
  {
    title: "FileOps",
    description: "Telegram bot for file conversion and manipulation with support for multiple file formats and remote operations.",
    image: "/telegram-bot-file-conversion.jpg",
    technologies: ["Python", "Telegram Bot API", "OpenCV", "PIL"],
    features: [
      "Image to PDF conversion",
      "PDF to image conversion",
      "Color analysis of images",
      "Remote file downloads",
      "Batch processing support"
    ],
    github: "https://github.com/hatealx/fileops"
  }
];

export const ProjectsShowcase: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Card3D>
            <div className="bg-card border rounded-lg overflow-hidden">
              {/* Project Image */}
              <div className="relative h-48 bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-card-foreground">Key Features</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card3D>
        </motion.div>
      ))}
    </div>
  );
};