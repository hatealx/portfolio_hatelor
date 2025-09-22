'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card3D } from '@/components/3d-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, MessageSquare, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <MessageSquare className="mr-2 h-4 w-4" />
            Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Have a project in mind or want to discuss potential opportunities? I'm always open to new
            challenges and collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card3D>
              <div className="bg-card border rounded-lg p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        className="bg-muted"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="bg-muted"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="Subject"
                        className="bg-muted"
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        className="bg-muted min-h-[150px]"
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </Card3D>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card3D>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a
                      href="mailto:aatsou12@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      aatsou12@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </Card3D>

            <Card3D>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Quick Response</h3>
                <p className="text-muted-foreground">
                  I typically respond within 24 hours. For urgent inquiries, email is the fastest way to
                  reach me.
                </p>
              </div>
            </Card3D>

            <Card3D>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Work Availability</h3>
                <p className="text-muted-foreground">
                  Currently available for freelance projects and full-time opportunities. Let's discuss
                  how I can help bring your ideas to life.
                </p>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
