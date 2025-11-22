import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Telehealth for remote",
      description:
        "I built Nabha Telemedicine as a low-bandwidth healthcare platform to help rural patients access consultations and basic medical support without traveling long distances. It works even under <200 kbps connectivity and supports multiple local languages for easy symptom sharing and follow-ups.",
      tags: ["Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/vinodkadli7022/nabha-rural-telehealth",
      live: "https://nabha-rural-telehealth-theta.vercel.app/",
    },
    {
      title: "DSA Practice Tracker",
      description:
        "A web application to track DSA problem-solving progress. Includes categorized problems, difficulty levels, and personal notes for each solution.",
      tags: ["React", "Node.js", "PostgreSQL"],
      github: "https://github.com/vinodkadli7022",
      live: "https://example.com",
    },
    {
      title: "ChesssMaster",
      description:
        "The Chess Game is a full-stack web application built with Node.js, Express, and EJS that provides an interactive, responsive chessboard for player-vs-player gameplay with basic move validation and real-time board updates.",
      tags: ["Express", "MongoDB", "Node.js"],
      github: "https://github.com/vinodkadli7022/Chessgame",
    },
    {
      title: "Array Algorithm Visualizer",
      description:
        "Interactive visualizations of common array algorithms including sorting, searching, and manipulation techniques. Built to deepen DSA understanding.",
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/vinodkadli7022",
      live: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-h2 font-heading font-bold text-heading">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my backend development and algorithmic problem-solving work
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-[1.02] group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-heading group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-secondary text-secondary-foreground hover:bg-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border hover:border-primary hover:text-primary"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.live && (
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
