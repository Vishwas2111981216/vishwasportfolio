import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Users, TrendingUp } from "lucide-react";

const highlights = [
  {
  icon: Code2,
  title: "Technical Foundation",
  description: "Strong foundation in React, React Native, and modern web technologies through academic projects and final-year industry training at Tech Mahindra.",
  },

  {
    icon: Lightbulb,
    title: "Product Thinking",
    description: "Trained in product lifecycle, user research, MVP development, and data-driven decision making.",
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Deep focus on understanding user needs through research, persona development, and journey mapping.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven",
    description: "Experience with market analysis, competitor research, and metrics-based product decisions.",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary mb-4 block">About Me</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Developer DNA, <span className="gradient-text">Product Mindset</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I bring a unique blend of technical expertise and product management skills, 
              allowing me to bridge the gap between engineering teams and business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                As a Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Built cross-platform applications with React & React Native, focusing on performance, 
                UI consistency, and user experience. Experience with API integrations, state management, 
                and responsive design. Contributed to real-world projects at Tech Mahindra's COE Training Program.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                As a Product Manager
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Certified in Product Management Fundamentals and Product Design through Internshala. 
                Completed case studies on consumer research, market analysis, and feature design 
                for platforms like LinkedIn. Skilled in user personas, journey mapping, and prioritization.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
