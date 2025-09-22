import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon, MailIcon, HeartIcon } from "./icons"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm">
                A
              </div>
              <span className="font-semibold text-lg">Abel Kodjo ATSOU</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Backend Developer specializing in Python, PHP, and AWS. Passionate about creating efficient, scalable
              solutions.
            </p>
            <div className="flex gap-2">
              <Badge variant="secondary" className="text-xs">
                Python
              </Badge>
              <Badge variant="secondary" className="text-xs">
                PHP
              </Badge>
              <Badge variant="secondary" className="text-xs">
                AWS
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a
                href="#experience"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Experience
              </a>
              <a href="#skills" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold">Connect</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>aatsou12@gmail.com</p>
              <p>+228 96 24 53 51</p>
              <p>Lomé, Togo</p>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <GithubIcon className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <LinkedinIcon className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <MailIcon className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {currentYear} Abel Kodjo ATSOU. All rights reserved.</p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <HeartIcon className="h-4 w-4 text-red-500" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
