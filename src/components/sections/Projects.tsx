import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Smartphone, Globe, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProjectCategory = "all" | "development" | "mobile";

const projects = [
  {
    id: 1,
    title: "TravelBuddy",
    description: "Cross-platform travel companion app with real-time travel data, API integrations, and responsive UI design.",
    category: "mobile",
    tags: ["React Native", "React.js", "API Integration", "State Management"],
    icon: Globe,
    gradient: "from-[hsl(172_66%_40%)] to-[hsl(199_89%_48%)]",
    features: ["Mobile App (React Native)", "Web Platform (React.js)", "Real-time Data", "Cross-platform UX"],
  },
  {
    id: 2,
    title: "Purple TV",
    description: "Video streaming platform with intuitive UI, cross-platform compatibility, and seamless playback experience.",
    category: "development",
    tags: ["React", "React Player", "RapidAPI", "Responsive Design"],
    icon: Play,
    gradient: "from-[hsl(280_80%_60%)] to-[hsl(320_80%_50%)]",
    features: ["Video Streaming", "API Integration", "Cross-platform", "Intuitive UI"],
  },
  {
    id: 3,
    title: "Summarize-up",
    description: "AI-powered summarization tool that condenses long content into concise, meaningful summaries.",
    category: "development",
    tags: ["AI/ML", "React.js", "NLP", "API Integration"],
    icon: Sparkles,
    gradient: "from-[hsl(45_93%_47%)] to-[hsl(36_100%_50%)]",
    features: ["AI Summarization", "Content Processing", "Modern UI", "Fast Results"],
  },
  {
    id: 4,
    title: "Personal Portfolio",
    description: "Modern, responsive portfolio website built with cutting-edge technologies and clean design.",
    category: "development",
    tags: ["React.js", "Tailwind CSS", "Shadcn UI", "Framer Motion"],
    icon: Smartphone,
    gradient: "from-[hsl(220_90%_56%)] to-[hsl(260_80%_60%)]",
    features: ["Responsive Design", "Modern Stack", "Animations", "Dark Mode"],
    link: "https://portfolio-eta-steel-24.vercel.app/",
  },
];

const filters = [
  { id: "all", label: "All Projects" },
  { id: "development", label: "Web Development" },
  { id: "mobile", label: "Mobile Apps" },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary mb-4 block">Development Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              A showcase of my development projects demonstrating technical skills across web and mobile platforms.
            </p>

            {/* Filter Tabs */}
            <div className="inline-flex items-center gap-2 p-1.5 rounded-xl bg-muted">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id as ProjectCategory)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    activeFilter === filter.id
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                layout
                className="group glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Gradient Header */}
                <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute bottom-4 left-6">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    {project.link && (
                      <Button variant="default" size="sm" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/vishwas2111981216" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
