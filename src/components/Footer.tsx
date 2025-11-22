import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-heading font-heading font-bold text-xl">&lt;Vinodkumar/&gt;</h3>
              <p className="text-muted-foreground text-body">
                Fullstack Developer & DSA Enthusiast building scalable solutions and solving complex problems.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-heading font-heading font-semibold">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </a>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="text-heading font-heading font-semibold">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/vinodkadli7022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vinodkumar-kadli-b40b91293/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:vinodkumarkadli7022@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
              <p className="text-muted-foreground text-sm">vinodkumarkadli7022@gmail.com</p>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground text-body flex items-center justify-center gap-2">
              © {currentYear} Vinod. Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using React &
              Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
