import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Next.js", level: 78 },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "Python", level: 80 },
        { name: "C++", level: 75 },
      ],
    },
    {
      category: "Data Structures & Algorithms",
      skills: [
        { name: "Arrays", level: 80 },
        { name: "Problem Solving", level: 75 },
        { name: "Time Complexity", level: 70 },
        { name: "Space Complexity", level: 70 },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Vercel", level: 75 },
        { name: "Figma", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-h2 font-heading font-bold text-heading">Technical Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              My technical expertise and proficiency levels across various technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              // Check if this is the last item in an odd-numbered list
              const isLastItem = categoryIndex === skillCategories.length - 1;
              
              return (
                <Card
                  key={categoryIndex}
                  className={`bg-card border-border hover:border-primary transition-all duration-300 animate-fade-in ${
                    isLastItem ? "md:col-span-2 md:w-[calc(50%-1rem)] md:mx-auto" : ""
                  }`}
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-heading text-xl">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-body font-medium">{skill.name}</span>
                          <span className="text-muted-foreground text-sm">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2 bg-muted" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-card border-border inline-block animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CardContent className="p-6">
                <p className="text-body-lg text-muted-foreground">
                  Currently learning:{" "}
                  <span className="text-primary font-semibold">GraphQL, Docker, Advanced DSA (Trees & Graphs)</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;