'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const codeSnippets = [
  {
    language: 'python',
    code: `from flask import Flask, jsonify
from models import Species

app = Flask(__name__)

@app.route('/api/species')
def get_species():
    species = Species.query.all()
    return jsonify([{
        'id': s.id,
        'name': s.name,
        'location': s.location
    } for s in species])`,
  },
  {
    language: 'php',
    code: `<?php
class ImageGallery {
    private $db;
    
    public function __construct($db) {
        $this->db = $db;
    }
    
    public function getImages($limit = 10) {
        $stmt = $this->db->prepare(
            "SELECT * FROM images 
             ORDER BY created_at DESC 
             LIMIT ?"
        );
        $stmt->execute([$limit]);
        return $stmt->fetchAll();
    }
}`,
  },
  {
    language: 'dart',
    code: `class ImageProcessor {
  final File image;
  
  ImageProcessor(this.image);
  
  Future<void> addMargin({
    double margin = 20,
    Color color = Colors.white,
  }) async {
    final img = await decodeImageFile(image.path);
    final processed = await img.pad(margin, color);
    await processed.save(image.path);
  }
}`,
  },
];

export const CodeAnimation: React.FC = () => {
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSnippet = codeSnippets[currentSnippetIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="font-mono text-sm"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
        <span className="text-muted-foreground">{currentSnippet.language}</span>
      </div>
      <pre className="whitespace-pre-wrap break-words">
        <code className="text-primary">{currentSnippet.code}</code>
      </pre>
    </motion.div>
  );
};