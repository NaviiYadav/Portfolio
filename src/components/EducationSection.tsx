import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "M.Tech – Artificial Intelligence and Machine Learning",
    institution: "NIMS University, Jaipur",
    period: "2022 – 2024",
    grade: "CGPA: 9",
  },
  {
    degree: "B.Tech – Computer Science & Information Technology",
    institution: "Dronacharya College of Engineering, Gurgaon",
    period: "2017 – 2021",
    grade: "Percentage: 61% ",
  },
   {
    degree: "Class XII - CBSE(PCM)",
    institution: "Kerala Public School , Rewari",
    period: "2016 – 2017",
    grade: "Percentage: 68%",
  },
   {
    degree: "Class X- CBSE",
    institution: "Kerala Public School , Rewari",
    period: "2014 – 2015",
    grade: "CGPA: 9",
  },
];

const EducationSection = () => {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold section-heading">
              Education
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className="card-gradient p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{edu.period}</span>
                      <div className="flex items-center gap-1.5 text-primary">
                        <Award size={14} />
                        <span className="font-medium">{edu.grade}</span>
                      </div>
                    </div>
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

export default EducationSection;
