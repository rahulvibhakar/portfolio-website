import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-muted/40 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/rahulvibhakar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/rahul-vibhakar-879a1b27a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>

              <a href="mailto:rahul.vibhakar04@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground italic">
            © {currentYear} — "Engineers like to solve problems. If there are no problems handily available, they will create their own." – Scott Adams
          </p>
        </div>
      </div>
    </footer>
  );
}
