import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-muted/40 py-12">
      <div className="container mx-auto px-4">
        {/* Centered Connect Section */}
        <div className="flex justify-center mb-8">
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/rahulvibhakar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>

              <a
                href="linkedin.com/in/rahul-vibhakar-879a1b27a"
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

        
      </div>
    </footer>
  );
}
