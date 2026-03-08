import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

/**
 * ARM Agency Contact Page
 * Design: Dark institutional modernism with premium typography
 * Typography: Playfair Display (headers) + Outfit (body)
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast.success("Message sent successfully! We'll be in touch soon.");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Send us a message",
      value: "hello@arm-agency.com",
      link: "mailto:hello@arm-agency.com",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Call our team",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Office",
      description: "Visit us in person",
      value: "New York, NY 10001",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="https://private-us-east-1.manuscdn.com/sessionFile/dY22poh38qSZhLTtv26MI6/sandbox/arm-logo.jpg" alt="ARM Logo" className="h-8 w-auto" />
            <span className="font-bold text-lg">ARM Agency</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="/" className="text-sm hover:text-accent transition-colors">
              Home
            </a>
            <a href="/about" className="text-sm hover:text-accent transition-colors">
              Mission
            </a>
            <a href="/leadership" className="text-sm hover:text-accent transition-colors">
              Leadership
            </a>
            <a href="/blog" className="text-sm hover:text-accent transition-colors">
              Blog
            </a>
            <a href="/contact" className="text-sm text-accent">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 border-b border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Connect with our team to explore how ARM Agency can transform your organization
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 border-b border-border">
        <div className="container">
          <motion.div
            className="grid grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.link}
                  className="p-8 border border-border rounded-lg hover:border-accent/50 transition-all duration-300 group"
                  variants={fadeInUp}
                >
                  <Icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <p className="text-accent font-semibold">{method.value}</p>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 border-b border-border">
        <div className="container max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-card/50 border-border"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-card/50 border-border"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Company</label>
                <Input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="bg-card/50 border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  className="bg-card/50 border-border min-h-40"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"} {!isSubmitting && <ArrowRight className="w-4 h-4" />}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border bg-card/50">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Organization?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team is ready to discuss how ARM Agency's autonomous systems can drive innovation and efficiency
            </p>
            <Button size="lg" className="gap-2">
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-5 gap-8 mb-12">
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Architecture</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Capabilities</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Enterprise</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Autonomous Systems</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Workflow Optimization</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">AI Infrastructure</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/blog" className="hover:text-accent transition-colors">Blog & Insights</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Whitepapers</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="/leadership" className="hover:text-accent transition-colors">Leadership</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Security</a></li>
                <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex items-center justify-between text-sm text-muted-foreground">
            <p>&copy; 2026 Autonomous Resource Management Agency. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Twitter</a>
              <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-accent transition-colors">GitHub</a>
              <a href="#" className="hover:text-accent transition-colors">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
