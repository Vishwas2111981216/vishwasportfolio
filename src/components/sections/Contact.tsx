import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vishwassaxena46@gmail.com",
    href: "mailto:vishwassaxena46@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8953056797",
    href: "tel:+918953056797",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Baddi, Himachal Pradesh, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/vishwas2111981216",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/vishwassaxena",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary mb-4 block">Get in Touch</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              I'm actively looking for Product Management opportunities. 
              Let's discuss how I can contribute to your team!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-2xl p-8"
            >
              <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent flex items-center justify-center transition-colors group"
                    >
                      <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card rounded-2xl p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20"
            >
              <h3 className="text-lg font-semibold mb-4">Ready to Work Together?</h3>
              <p className="text-muted-foreground mb-6">
                Whether you're looking for a Product Manager who understands technology 
                or want to discuss a potential collaboration, I'd love to hear from you.
              </p>

              <div className="space-y-4">
                <Button variant="gradient" size="lg" className="w-full" asChild>
                  <a href="mailto:vishwassaxena46@gmail.com">
                    <Mail className="h-5 w-5" />
                    Send me an Email
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>

                <Button variant="hero-outline" size="lg" className="w-full" asChild>
                  <a href="#" download>
                    <Download className="h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-background/50">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Availability:</span> Open to 
                  full-time PM roles, internships, and freelance product consulting.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
