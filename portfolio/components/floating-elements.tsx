'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const FloatingElements: React.FC = () => {
  const elements = [
    { size: 'w-16 h-16', color: 'bg-primary/5', delay: 0 },
    { size: 'w-24 h-24', color: 'bg-secondary/5', delay: 1 },
    { size: 'w-20 h-20', color: 'bg-accent/5', delay: 2 },
    { size: 'w-32 h-32', color: 'bg-primary/5', delay: 3 },
    { size: 'w-28 h-28', color: 'bg-secondary/5', delay: 4 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${element.size} ${element.color} backdrop-blur-3xl`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
          }}
          transition={{
            duration: 20,
            delay: element.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};