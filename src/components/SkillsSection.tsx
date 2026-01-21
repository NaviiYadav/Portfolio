import { Code2, Database, Globe, Layers, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "PHP"],
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "React.js", "Node.js", "Express.js","JWT"],
    color: "from-green-500 to-teal-600",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
    color: "from-teal-500 to-cyan-600",
  },
  {
    title: "Architecture & APIs",
    icon: Layers,
    skills: ["Microservices", "RESTful APIs", "Scalability Design"],
    color: "from-cyan-500 to-emerald-600",
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify", "WordPress"],
    color: "from-emerald-400 to-green-500",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold section-heading">
              Technical Skills
            </h2>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
              Technologies and tools I work with to build amazing applications
            </p>
          </div>

          <div className="grid gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.title}
                  className="glass-card p-6 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 md:w-64 shrink-0">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-primary-foreground shadow-lg`}>
                        <IconComponent size={22} />
                      </div>
                      <h3 className="font-heading font-semibold text-lg text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    
                    {/* Skills Grid */}
                    <div className="flex flex-wrap gap-2.5 flex-1">
                      {category.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="skill-badge hover:scale-105 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
