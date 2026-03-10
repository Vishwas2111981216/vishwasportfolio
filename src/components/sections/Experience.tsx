import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Product Management Course",
    company: "Internshala",
    period: "Dec 2025 - Ongoing",
    description: "Comprehensive training in product lifecycle, ideation, market research, MVP development, user-centric thinking, and data-driven decision-making.",
    achievements: [
      "Certified in Product Management Fundamentals (Nov 2025)",
      "Certified in Product Design (Jan 2026)",
      "Completed case studies on consumer research and feature design",
    ],
  },
  {
    type: "work",
    title: "COE Training Program",
    company: "Tech Mahindra",
    period: "2024",
    description: "Developed Android mobile app components using React Native with focus on UI consistency, performance optimization, and quality assurance.",
    achievements: [
      "Built reusable React Native components",
      "Manual testing and bug documentation",
      "Collaborated with cross-functional teams",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Chitkara University",
    period: "Aug 2021 - Sept 2025",
    score: "CGPA: 8.88",
  },
  {
    degree: "Intermediate",
    institution: "Nurture International School, Kanpur",
    period: "2019-2020",
    score: "80%",
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary mb-4 block">Journey</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Training & <span className="gradient-text">Courses</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Experience Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                    <div className="glass-card rounded-xl p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h4 className="font-semibold">{exp.title}</h4>
                        <span className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-primary font-medium mb-3">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement) => (
                          <li key={achievement} className="text-sm text-muted-foreground flex items-start gap-2">
                            <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="glass-card rounded-xl p-6"
                  >
                    <h4 className="font-semibold mb-1">{edu.degree}</h4>
                    <p className="text-sm text-primary font-medium mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span>{edu.period}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                      <span className="font-medium text-foreground">{edu.score}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Leadership */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8"
              >
                <h4 className="font-semibold mb-4 text-lg">Leadership & Activities</h4>
                <div className="space-y-3">
                  {[
                    { role: "Core Committee Member", event: "NAAC Cultural Event" },
                    { role: "Volunteer", event: "BAJA SAE India" },
                    { role: "Media Team Member", event: "Office of Students Affairs" },
                    { role: "Top 5 Team", event: "Yamaha Hackathon" },
                  ].map((item) => (
                    <div key={item.event} className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-medium">{item.role}</span>
                      <span className="text-muted-foreground">• {item.event}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
