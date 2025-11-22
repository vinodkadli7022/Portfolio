import { Mail, Github, Linkedin, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "vinodkumarkadli7022@gmail.com",
      href: "mailto:vinodkumarkadli7022@gmail.com",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "https://github.com/vinodkadli7022",
      href: "https://github.com/vinodkadli7022",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/vinod",
      href: "https://www.linkedin.com/in/vinodkumar-kadli-b40b91293/",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Bengaluru, India",
      href: null,
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      label: "Availability",
      value: "Open for Placements July 2026",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-h2 font-heading font-bold text-heading">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, opportunities, and collaborations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-heading font-semibold mb-1">{item.label}</h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-primary hover:text-primary/80 transition-colors break-words"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground break-words">{item.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card border-border animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <CardContent className="p-8 text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-h3 font-heading font-semibold text-heading">Let's Build Something Great</h3>
                <p className="text-body text-muted-foreground">
                  Whether you have a project idea, want to collaborate, or just want to say hi, I'd love to hear from
                  you!
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border"
                  asChild
                >
                  <a href="mailto:vinod@example.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/vinodkumar-kadli-b40b91293/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
