'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card3D } from '@/components/3d-card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    period: "Since July 2023",
    role: "Backend & Front-end Developer",
    company: "Seaford Natural History Society",
    location: "UK",
    technologies: ["Python", "Flask", "PHP", "AWS"],
    achievements: [
      "Built image gallery boosting engagement by 30%",
      "Deployed species-occurrence Flask API on AWS",
      "Re-implemented API in PHP for cost & speed optimization",
      "Designed responsive dashboard"
    ]
  },
  {
    period: "Mar 2024 – Jul 2024",
    role: "Flutter Developer",
    company: "Private Client",
    location: "UK",
    technologies: ["Flutter", "Dart"],
    achievements: [
      "imageMargin app – margin & crop images functionality",
      "SongSelector app – hymn-image management with keyword search",
      "Implemented in-app annotations system"
    ]
  },
  {
    period: "Aug 2023 – Dec 2023",
    role: "Web Developer",
    company: "Acclivity.me",
    location: "UK",
    technologies: ["PHP", "JavaScript", "HTML", "CSS"],
    achievements: [
      "Dynamic file-upload & download system",
      "Multimedia playback support (audio, video, images, text)"
    ]
  }
];

export const ExperienceTimeline: React.FC = () => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent"></div>

      {/* Experience Cards */}
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative flex items-start ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background"></div>

            {/* Card */}
            <div className={`ml-12 md:ml-0 ${
              index % 2 === 0 ? 'md:mr-auto md:pr-12 md:w-[calc(50%-3rem)]' : 'md:ml-auto md:pl-12 md:w-[calc(50%-3rem)]'
            }`}>
              <Card3D>
                <div className="bg-card border rounded-lg p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-xl font-semibold text-card-foreground mb-1">{experience.role}</h3>
                  <p className="text-muted-foreground mb-4">{experience.company}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card3D>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};