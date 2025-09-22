import { FloatingElements } from "@/components/floating-elements"
import { CodeAnimation } from "@/components/code-animation"
import { Card3D } from "@/components/3d-card"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { SkillsGrid } from "@/components/skills-grid"
import { ProjectsShowcase } from "@/components/projects-showcase"
import { Navigation } from "@/components/navigation"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin, Download, ExternalLink, User, Briefcase, Code, FolderOpen } from "lucide-react"

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <FloatingElements />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Main Content */}
              <div className="space-y-8 animate-slide-in-up">
                <div className="space-y-4">
                  <Badge variant="secondary" className="text-sm font-medium">
                    Available for new opportunities
                  </Badge>

                  <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                    <span className="text-foreground">Abel Kodjo</span> <span className="text-primary">ATSOU</span>
                  </h1>

                  <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                    Backend Developer | Python | PHP | AWS
                  </h2>

                  <p className="text-lg text-muted-foreground text-pretty max-w-lg">
                    Passionate software engineer and future NLP engineer driven by curiosity for how technological
                    systems work and eager to keep learning.
                  </p>
                </div>

                {/* Location and Contact Info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Lomé, Togo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>aatsou12@gmail.com</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="group">
                    <Mail className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    Get In Touch
                  </Button>

                  <Button variant="outline" size="lg" className="group bg-transparent">
                    <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                    Download CV
                  </Button>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  <Button variant="ghost" size="icon" className="hover:text-primary">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-primary">
                    <ExternalLink className="h-5 w-5" />
                    <span className="sr-only">Portfolio</span>
                  </Button>
                </div>
              </div>

              {/* Right Column - 3D Code Animation */}
              <div className="relative">
                <Card3D className="h-96 lg:h-[500px]">
                  <div className="h-full bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 overflow-hidden relative">
                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-sm text-muted-foreground ml-4">~/projects/backend-api</span>
                    </div>

                    {/* Animated Code */}
                    <div className="relative z-10">
                      <CodeAnimation />
                    </div>

                    {/* Background Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-lg"></div>
                  </div>
                </Card3D>

                {/* Floating Tech Stack Badges */}
                <div className="absolute -top-4 -right-4 animate-float" style={{ animationDelay: "1s" }}>
                  <Badge variant="secondary" className="shadow-lg">
                    Python
                  </Badge>
                </div>
                <div className="absolute top-1/3 -left-4 animate-float" style={{ animationDelay: "2s" }}>
                  <Badge variant="secondary" className="shadow-lg">
                    Flask
                  </Badge>
                </div>
                <div className="absolute bottom-1/4 -right-6 animate-float" style={{ animationDelay: "3s" }}>
                  <Badge variant="secondary" className="shadow-lg">
                    AWS
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-1/4 animate-float" style={{ animationDelay: "4s" }}>
                  <Badge variant="secondary" className="shadow-lg">
                    PHP
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground/30 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Quick Stats Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <Card3D hoverEffect={false}>
                <div className="text-center p-6 bg-card rounded-lg border">
                  <div className="text-3xl font-bold text-primary mb-2">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </Card3D>

              <Card3D hoverEffect={false}>
                <div className="text-center p-6 bg-card rounded-lg border">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </Card3D>

              <Card3D hoverEffect={false}>
                <div className="text-center p-6 bg-card rounded-lg border">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm text-muted-foreground">UK Clients</div>
                </div>
              </Card3D>

              <Card3D hoverEffect={false}>
                <div className="text-center p-6 bg-card rounded-lg border">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </Card3D>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <User className="mr-2 h-4 w-4" />
                About Me
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Passionate About <span className="text-primary">Technology</span> &{" "}
                <span className="text-accent">Innovation</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                I'm a dedicated backend developer with a strong foundation in Python, PHP, and cloud technologies. My
                journey spans from building robust APIs to creating mobile applications, always with a focus on clean
                code and optimal performance.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* About Content */}
              <div className="space-y-6">
                <Card3D>
                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-card-foreground">My Journey</h3>
                    <p className="text-muted-foreground mb-4">
                      Based in Lomé, Togo, I've had the privilege of working with clients across the UK, delivering
                      high-quality backend solutions and mobile applications. My experience spans from Flask APIs
                      deployed on AWS to Flutter mobile apps with complex functionality.
                    </p>
                    <p className="text-muted-foreground">
                      Currently pursuing a B.A. in English Linguistics while continuously expanding my technical skills,
                      I'm particularly interested in the intersection of language processing and software engineering,
                      aiming to become an NLP engineer.
                    </p>
                  </div>
                </Card3D>

                <Card3D>
                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-card-foreground">What Drives Me</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>Curiosity about how technological systems work and interact</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>Passion for creating efficient, scalable backend solutions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>Commitment to continuous learning and skill development</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>Interest in natural language processing and AI applications</span>
                      </li>
                    </ul>
                  </div>
                </Card3D>
              </div>

              {/* Skills Overview */}
              <div className="space-y-6">
                <Card3D>
                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-card-foreground">Technical Expertise</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Backend Development</span>
                          <span className="text-sm text-muted-foreground">90%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Python & Flask</span>
                          <span className="text-sm text-muted-foreground">85%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">PHP Development</span>
                          <span className="text-sm text-muted-foreground">80%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">AWS & Cloud</span>
                          <span className="text-sm text-muted-foreground">75%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Mobile Development</span>
                          <span className="text-sm text-muted-foreground">70%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "70%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card3D>

                <Card3D>
                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-card-foreground">Languages</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">French</span>
                        <Badge variant="secondary">Fluent</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">English</span>
                        <Badge variant="secondary">Fluent</Badge>
                      </div>
                    </div>
                  </div>
                </Card3D>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline Section */}
        <section id="experience" className="py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <Briefcase className="mr-2 h-4 w-4" />
                Experience
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Professional <span className="text-primary">Journey</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                From backend APIs to mobile applications, here's my professional journey building solutions for clients
                across different industries and technologies.
              </p>
            </div>

            <ExperienceTimeline />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <Code className="mr-2 h-4 w-4" />
                Skills
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Technical <span className="text-primary">Expertise</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                A comprehensive overview of my technical skills, from backend development to cloud deployment, with
                proficiency levels and practical applications.
              </p>
            </div>

            <SkillsGrid />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <FolderOpen className="mr-2 h-4 w-4" />
                Projects
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Featured <span className="text-primary">Projects</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                A showcase of my work ranging from personal projects to client solutions, demonstrating my ability to
                deliver high-quality software across different domains and technologies.
              </p>
            </div>

            <ProjectsShowcase />
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
