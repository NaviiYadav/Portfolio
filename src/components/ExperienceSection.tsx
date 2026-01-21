import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "MERN Stack Intern",
    company: "Panacea Infosec Pvt. Ltd.",
    period: "July 2025 – Present",
    isOngoing: true,
    responsibilities: [
      "Developing and maintaining scalable web applications using the MERN stack",
      "Building responsive UI components with React.js, JavaScript, and Tailwind CSS",
      "Designing RESTful APIs and integrating MongoDB for efficient data handling",
      "Debugged and resolved frontend and backend issues, improving application stability",
      "Conducted functional and manual testing to ensure quality before production deployment",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Techoxa Technologies Pvt. Ltd.",
    period: "July 2024 – Jan 2025",
    isOngoing: false,
    responsibilities: [
      "Contributed to a single-vendor e-commerce web application",
      "Built responsive interfaces using HTML, CSS, Bootstrap, and jQuery",
      "Integrated backend logic using PHP and MySQL",
      "Worked with senior developers to improve performance and usability",
    ],
  },
];

// Calculate real-time duration for ongoing internship
const calculateDuration = (startDate: string) => {
  const start = new Date("2025-07-01");
  const now = new Date();
  const months = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor(((now.getTime() - start.getTime()) % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  
  if (months > 0) {
    return `${months} month${months > 1 ? 's' : ''}, ${days} day${days !== 1 ? 's' : ''}`;
  }
  return `${days} day${days !== 1 ? 's' : ''}`;
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold section-heading">
              Work Experience
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="timeline-line hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot - Centered */}
                  <div className="timeline-dot hidden md:block top-6"></div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Content Card */}
                  <div className="md:w-1/2 card-gradient p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Real-time duration for ongoing internship */}
                    {exp.isOngoing && (
                      <div className="flex items-center gap-2 mb-4 text-sm">
                        <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                          <div className="relative w-2 h-2">
                            <div className="live-pulse w-2 h-2 rounded-full bg-primary"></div>
                          </div>
                          <span className="font-medium">Ongoing</span>
                          <span className="text-primary/80">• {calculateDuration(exp.period)}</span>
                        </div>
                      </div>
                    )}

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
