import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Search, Users, Target, Lightbulb, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: 1,
    title: "Metaverse in Education",
    subtitle: "Consumer & Market Research",
    category: "Market Research",
    objective: "Research and validate if Metaverse is the future of education",
    image: "/placeholder.svg",
    color: "from-[hsl(172_66%_40%)] to-[hsl(199_89%_48%)]",
    areas: [
      { icon: Search, label: "Consumer Research", desc: "In-depth user behavior analysis" },
      { icon: Target, label: "Market Trends", desc: "Competitive landscape mapping" },
      { icon: Users, label: "Pain Points", desc: "Opportunity identification" },
      { icon: Lightbulb, label: "Insights", desc: "Data-driven recommendations" },
    ],
    details: "Conducted comprehensive research on the intersection of metaverse technology and education. Analyzed user behavior patterns, identified key pain points in current online education, and evaluated market readiness for immersive learning experiences. Delivered actionable insights backed by primary and secondary research.",
  },
  {
    id: 2,
    title: "LinkedIn Mentorship Feature",
    subtitle: "End-to-End Product Design",
    category: "Product Design",
    objective: "Design a mentorship feature for LinkedIn to connect professionals",
    image: "/placeholder.svg",
    color: "from-[hsl(220_90%_56%)] to-[hsl(280_80%_60%)]",
    areas: [
      { icon: Users, label: "User Research", desc: "Persona development" },
      { icon: Lightbulb, label: "Ideation", desc: "Feature prioritization" },
      { icon: Target, label: "Design Thinking", desc: "Wireframing & prototyping" },
      { icon: Search, label: "User Journey", desc: "Success metrics definition" },
    ],
    details: "Designed a comprehensive mentorship feature for LinkedIn from scratch. Started with user research to understand the needs of both mentors and mentees. Created detailed user personas, mapped user journeys, and developed wireframes. Defined success metrics and KPIs to measure feature adoption and impact.",
  },
];

export function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="case-studies" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary mb-4 block">Product Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              PM <span className="gradient-text">Case Studies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hands-on product management work demonstrating research, design thinking, and strategic analysis.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                {/* Header */}
                <div className={`h-2 bg-gradient-to-r ${study.color}`} />
                
                <div className="p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="text-xs font-medium text-primary px-3 py-1 rounded-full bg-accent mb-3 inline-block">
                        {study.category}
                      </span>
                      <h3 className="text-2xl font-bold mb-1">{study.title}</h3>
                      <p className="text-muted-foreground">{study.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    <span className="font-medium text-foreground">Objective:</span> {study.objective}
                  </p>

                  {/* Key Areas Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {study.areas.map((area) => (
                      <div key={area.label} className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                        <area.icon className="h-5 w-5 text-primary mb-2" />
                        <h4 className="font-medium text-sm mb-1">{area.label}</h4>
                        <p className="text-xs text-muted-foreground">{area.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Details */}
                  <div className="border-t border-border pt-4">
                    <button
                      onClick={() => setExpandedId(expandedId === study.id ? null : study.id)}
                      className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      {expandedId === study.id ? (
                        <>
                          <ChevronUp className="h-4 w-4" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-4 w-4" />
                          View Details
                        </>
                      )}
                    </button>

                    {expandedId === study.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4"
                      >
                        <p className="text-muted-foreground leading-relaxed">{study.details}</p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button variant="hero-outline" asChild>
              <a href="#contact">
                Request Full Case Studies
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
