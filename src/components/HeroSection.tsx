import { ArrowDown, Github, Linkedin, Mail, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  // Calculate duration since internship started (Jan 2025)
  const startDate = new Date(2025, 0, 1);
  const now = new Date();
  const months = (now.getFullYear() - startDate.getFullYear()) * 6 + (now.getMonth() - startDate.getMonth());
  const handleScrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Profile Image with Tilt Effect */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative profile-tilt">
              <img
                src={profileImage}
                alt="Naveen Yadav"
                className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-2 border-background shadow-3xl"
              />
            </div>
            {/* Live Status Indicator */}
            <div className="absolute bottom-2 right-2 flex items-center gap-2 bg-card px-3 py-1.5 rounded-full border border-border shadow-lg">
              <div className="relative w-2 h-2">
                <div className="live-pulse w-2 h-2 rounded-full bg-primary"></div>
              </div>
              <span className="text-xs font-medium text-foreground">Open to Work</span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-6 max-w-3xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {/* Current Work Status Badge */}
            <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full border border-primary/30">
              <div className="relative w-2 h-2">
                <div className="live-pulse w-2 h-2 rounded-full bg-primary"></div>
              </div>
              <Briefcase size={14} className="text-primary" />
              <span className="text-sm text-foreground/90">
                Currently working as <span className="text-primary font-semibold">MERN Developer Intern</span>
                <span className="text-muted-foreground ml-2">• {months}+ months</span>
              </span>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-primary text-sm font-medium">
              <span className="w-8 h-px bg-primary"></span>
              <span>MERN Stack Developer</span>
              <span className="w-8 h-px bg-primary"></span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Naveen Yadav</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Results-driven Software Developer specializing in the MERN stack with expertise in building scalable, high-performance web applications.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <a
                href="https://github.com/NaviiYadav"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary border border-border hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/naveen-yadav-031990210/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary border border-border hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:naveeny7890@gmail.com"
                className="p-3 rounded-full bg-secondary border border-border hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:border-primary hover:text-primary font-medium px-8"
                asChild
              >
                <a href="#contact">Let's Talk</a>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={handleScrollToAbout}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 floating text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
