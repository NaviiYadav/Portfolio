import { Code2, Laptop, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices",
  },
  {
    icon: Laptop,
    title: "Full Stack",
    description: "End-to-end development from UI to database architecture",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold section-heading mb-8">
            About Me
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            I'm a passionate Software Developer with an M.Tech in Artificial Intelligence and Machine Learning. 
            I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and have a strong track record 
            of building scalable, high-performance web applications. I'm dedicated to writing clean code, 
            optimizing performance, and delivering reliable real-world software solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card-gradient p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
