import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} Naveen Yadav. Made with</span>
            <Heart size={14} className="text-primary fill-primary" />
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/NaviiYadav"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary hover:text-primary transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/naveen-yadav-031990210/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary hover:text-primary transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:naveeny7890@gmail.com"
              className="p-2 rounded-lg hover:bg-secondary hover:text-primary transition-all"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
