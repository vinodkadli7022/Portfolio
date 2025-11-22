import { Code2, Database, Trophy, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Fullstack Development",
      description: "Building robust APIs with Node.js and Express, focusing on scalability and performance.",
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Data Structures",
      description: "Deep diving into DSA, currently mastering arrays with plans to expand to advanced topics.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: "Problem Solver",
      description: "Passionate about solving complex algorithmic challenges and optimizing code efficiency.",
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Placement Ready",
      description: "Preparing for tech placements in July 2026 with structured learning and project building.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-h2 font-heading font-bold text-heading">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate B.Tech student on a journey to master Fullstack development and data structures
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-heading">{item.title}</h3>
                  <p className="text-body text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card border border-border rounded-lg p-8 space-y-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-h3 font-heading font-semibold text-heading">My Journey</h3>
            <div className="space-y-4 text-body text-muted-foreground">
              <p>
                I'm currently pursuing my B.Tech degree with a strong focus on Fullstack development and software
                engineering principles. My passion lies in building efficient, scalable server-side applications using
                modern technologies like Node.js and Express.
              </p>
              <p>
                Alongside development, I'm deeply committed to mastering Data Structures and Algorithms. I believe that
                a solid understanding of DSA is crucial for writing optimized code and solving complex problems
                efficiently. Currently, I'm working through array-based problems and planning to expand to trees,
                graphs, and dynamic programming.
              </p>
              <p>
                With placements scheduled for July 2026, I'm dedicating my time to building a strong portfolio,
                contributing to open-source projects, and continuously learning new technologies. My goal is to secure
                a position at a top tech company where I can contribute to meaningful projects and grow as a software
                engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
