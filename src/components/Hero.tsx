import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(14, 17, 22, 0.85), rgba(14, 17, 22, 0.85)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-primary text-lg font-medium animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Hi, I'm
            </p>
            <h1
              className="text-display font-heading font-bold text-heading glow-text animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Vinod
            </h1>
            <h2
              className="text-h2 font-heading font-semibold text-body animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              Backend Developer | DSA Enthusiast
            </h2>
            <p
              className="text-body-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              B.Tech Student specializing in Node.js/Express, mastering Data Structures & Algorithms, and preparing
              for placements in 2026. Building scalable backend solutions with clean, efficient code.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "1s" }}>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border font-semibold"
              onClick={() => scrollToSection("#projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-semibold"
              onClick={() => scrollToSection("#contact")}
            >
              Contact Me
            </Button>
          </div>

          <div className="flex gap-6 justify-center animate-fade-in" style={{ animationDelay: "1.2s" }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:vinod@example.com"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce cursor-pointer"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
