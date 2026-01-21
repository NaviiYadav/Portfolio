import { ExternalLink, Github, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Website",
    subtitle: "AI-Enabled Full-Stack Web Application",
    description:
      "Full-featured e-commerce platform with product listing, cart, and checkout. Integrated Google Gemini AI API for automated product title and description generation.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Clerk", "Inngest"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    github: "https://github.com/NaviiYadav/next_cart.git",
    live: "#",
  },
  {
    title: "Startup Portal",
    subtitle: "MERN Stack Web Application",
    description:
      "Full-stack startup portal connecting entrepreneurs, investors, and mentors. Features secure authentication and role-based access control using JWT.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    github: "https://github.com/NaviiYadav/Url_Shortner.git",
    live: "#",
  },
  {
    title: "Digital Showcase – Portfolio Platform",
    subtitle: "Frontend Web Application",
    description:
      "Personal portfolio website to showcase projects, skills, and achievements. Built with React.js featuring reusable components and clean UI/UX design.",
    tech: ["React.js", "HTML5", "CSS3", "JavaScript", "Vercel"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
    github: "https://github.com/NaviiYadav/Portfolio.git",
    live: "#",
  },
  {
    title: "URL Shortener Application",
    subtitle: "Backend-Driven Service",
    description:
      "URL shortening service with unique short code generation and efficient redirection logic. Includes click analytics and secure database operations.",
    tech: ["Node.js", "Express.js", "MongoDB", "REST API","JWT"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    github: "https://github.com/NaviiYadav/Startup_Portal.git",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold section-heading">
              Featured Projects
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A selection of projects I've worked on, showcasing my expertise in full-stack development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group card-gradient rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                  
                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60 backdrop-blur-sm">
                    <a
                      href={project.github}
                      className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Layers className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-primary/80">{project.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
