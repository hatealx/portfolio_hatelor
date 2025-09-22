'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card3D } from '@/components/3d-card';
import { Badge } from '@/components/ui/badge';

const skills = [
  {
    category: "Backend Development",
    items: [
      { name: "Python", level: "Advanced", badge: "90%" },
      { name: "Flask", level: "Advanced", badge: "85%" },
      { name: "PHP", level: "Advanced", badge: "85%" },
      { name: "RESTful APIs", level: "Advanced", badge: "90%" },
      { name: "SQL", level: "Intermediate", badge: "80%" },
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", level: "Intermediate", badge: "75%" },
      { name: "Docker", level: "Basic", badge: "60%" },
      { name: "Git", level: "Advanced", badge: "90%" },
      { name: "CI/CD", level: "Intermediate", badge: "70%" },
    ]
  },
  {
    category: "Mobile Development",
    items: [
      { name: "Flutter", level: "Intermediate", badge: "75%" },
      { name: "Dart", level: "Intermediate", badge: "75%" },
      { name: "Mobile UI/UX", level: "Intermediate", badge: "70%" },
    ]
  },
  {
    category: "Frontend Technologies",
    items: [
      { name: "HTML/CSS", level: "Advanced", badge: "85%" },
      { name: "JavaScript", level: "Intermediate", badge: "75%" },
      { name: "React", level: "Basic", badge: "60%" },
      { name: "Responsive Design", level: "Advanced", badge: "85%" },
    ]
  }
];

export const SkillsGrid: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {skills.map((category, index) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Card3D>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {skill.level}
                        </Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.badge}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.badge }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card3D>
        </motion.div>
      ))}
    </div>
  );
};