import { Download, FileText, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="card-gradient p-8 md:p-12 rounded-2xl border border-border">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Download My Resume
            </h2>
            
            <p className="text-muted-foreground mb-8">
              Get a comprehensive overview of my skills, experience, and qualifications in a downloadable PDF format.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 gap-2"
                asChild
              >
                <a href="/resume.pdf" download="Naveen_Yadav_Resume.pdf">
                  <Download size={18} />
                  Download Resume
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:border-primary hover:text-secondary font-medium px-8 gap-2"
                asChild
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Eye size={18} />
                  View Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
