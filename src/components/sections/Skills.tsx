import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, BarChart3, Wrench, MessageSquare } from "lucide-react";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Code,
    color: "from-[hsl(172_66%_40%)] to-[hsl(199_89%_48%)]",
    skills: ["Java", "JavaScript", "SQL", "React.js", "React Native", "HTML/CSS", "Power BI"],
  },
  {
    title: "Product Management",
    icon: BarChart3,
    color: "from-[hsl(280_80%_60%)] to-[hsl(320_80%_50%)]",
    skills: ["User Research", "Market Analysis", "Design Thinking", "MVP Development", "Feature Prioritization", "Data-Driven Decisions"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    color: "from-[hsl(45_93%_47%)] to-[hsl(36_100%_50%)]",
    skills: ["VS Code", "IntelliJ IDEA", "Figma", "Git/GitHub", "Postman", "Jira"],
  },
  {
    title: "Soft Skills",
    icon: MessageSquare,
    color: "from-[hsl(220_90%_56%)] to-[hsl(260_80%_60%)]",
    skills: ["Communication", "Leadership", "Team Collaboration", "Public Speaking", "Problem Solving", "Adaptability"],
  },
];

const certifications = [
  { name: "Product Design Training", issuer: "Internshala", date: "Jan 2026" },
  { name: "Product Management Fundamentals", issuer: "Internshala", date: "Nov 2025" },
  { name: "Generative AI Mastermind", issuer: "Outskill", date: "2024" },
  { name: "AI Tools & ChatGPT Workshop", issuer: "be10X", date: "2024" },
  { name: "Frontend Development", issuer: "One Road Map", date: "2023" },
  { name: "Web Technologies", issuer: "Coding Ninjas", date: "2023" },
  { name: "Responsive Web Design", issuer: "FreeCodeCamp", date: "2022" },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary mb-4 block">Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Skills & <span className="gradient-text">Certifications</span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-full bg-muted text-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-center mb-8">Certifications & Training</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  className="p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors group"
                >
                  <h4 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{cert.issuer}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span>{cert.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
