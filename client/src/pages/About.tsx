import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

/**
 * ARM Agency About/Mission Page
 * Design: Dark institutional modernism with premium typography
 * Typography: Playfair Display (headers) + Outfit (body)
 */

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const pillars = [
    {
      title: "Visionary Strategy",
      description: "Facilitated by Mason's foresight, we pursue growth that others overlook, utilizing a disciplined approach to identify the future of global capital.",
      icon: "🎯",
    },
    {
      title: "Operational Excellence",
      description: "Directed by Avery Lane, our infrastructure is built for agility, leveraging advanced systems to manage extensive portfolios with precision and speed.",
      icon: "⚙️",
    },
    {
      title: "Strategic Growth",
      description: "Through the alliances spearheaded by John Williams, we cultivate a network of partners who share our dedication to innovated solutions and principled leadership.",
      icon: "🌱",
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
            <a href="/about" className="text-sm text-accent">
              Mission
            </a>
            <a href="/leadership" className="text-sm hover:text-accent transition-colors">
              Leadership
            </a>
            <a href="/blog" className="text-sm hover:text-accent transition-colors">
              Blog
            </a>
            <Button variant="default" size="sm">
              Contact
            </Button>
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
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              The Foundation of Our Vision
            </h1>
            <p className="text-2xl text-accent font-semibold mb-6">
              We did not build this firm to simply inhabit the industry; we built it to redefine it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 border-b border-border">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Core Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At the core of our partnership is a shared record across global finance and a collective ability to see beyond the immediate horizon. Spearheaded by our commitment to transparency and character, we have innovated a model of investment that prioritizes long-term impact over fleeting trends.
              </p>
            </div>

            <div className="bg-card/50 border border-border rounded-lg p-8">
              <blockquote className="text-2xl font-bold text-accent italic">
                "We don't just manage assets; we manage the future of the industry through a record across excellence and a dedication to innovated growth."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 border-b border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Three Pillars of Leadership</h2>
            <p className="text-lg text-muted-foreground">
              The foundation of our success rests on three interconnected pillars that define our approach
            </p>
          </motion.div>

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
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                className="p-8 border border-border rounded-lg hover:border-accent/50 transition-all duration-300 group"
                variants={fadeInUp}
              >
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Path Forward */}
      <section className="py-20 border-b border-border">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">The Path Forward</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We believe that true leadership is utilizing every resource at our disposal—our capital, our network, and our character—to create detailed and lasting value. By leveraging our physical and mental discipline, we remain ready to navigate the complexities of a changing world, directing our firm toward a future we have facilitated together.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Commitment to transparency and authentic partnership",
                "Disciplined approach to identifying market opportunities",
                "Focus on long-term value creation over short-term gains",
                "Leveraging collective expertise and global network",
                "Maintaining character and integrity in all endeavors",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-lg text-muted-foreground">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 border-b border-border bg-card/50">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">What Sets Us Apart</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3">Extensive Market Knowledge</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our leadership team brings decades of combined experience navigating global financial markets, emerging technologies, and complex organizational challenges. This depth of knowledge informs every strategic decision we make.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Principled Leadership</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We operate with unwavering commitment to authenticity and character. Our reputation is built on delivering results with integrity, maintaining transparent communication, and fostering lasting relationships with partners and stakeholders.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Innovative Infrastructure</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our operational backbone is designed for agility and precision. We leverage cutting-edge systems and methodologies to manage complex portfolios efficiently while maintaining the flexibility to adapt to market dynamics.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Explore Partnership?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how ARM Agency's principled approach to leadership and innovation can drive transformation for your organization
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Schedule a Consultation <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
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
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
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
