import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Network, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import NewsletterSignup from "@/components/NewsletterSignup";

/**
 * ARM Agency Home Page
 * Design: Hudson Yards aesthetic with glassmorphism and architectural grids
 * Typography: Space Grotesk (headings) + Inter (body)
 * Color: Hudson dark (#05070a), steel (#1e293b), cyan accents (#38bdf8)
 */

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

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
            <a href="/about" className="text-sm hover:text-accent transition-colors">
              Mission
            </a>
            <a href="#services" className="text-sm hover:text-accent transition-colors">
              Services
            </a>
            <a href="/leadership" className="text-sm hover:text-accent transition-colors">
              Leadership
            </a>
            <a href="/blog" className="text-sm hover:text-accent transition-colors">
              Blog
            </a>
            <Button variant="default" size="sm">
              Contact Us
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/dY22poh38qSZhLTtv26MI6/sandbox/SyzHmmwKdBnIxW96NMgAMw-img-1_1771889187000_na1fn_aGVyby1kYXJrLXRlY2g.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZFkyMnBvaDM4cVNaaExUdHYyNk1JNi9zYW5kYm94L1N5ekhtbXdLZEJuSXhXOTZOTWdBTXctaW1nLTFfMTc3MTg4OTE4NzAwMF9uYTFmbl9hR1Z5Ynkxa1lYSnJMWFJsWTJnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qJH3ygvgw4iJu0rhSIkemMBr3SVkgnZzd3C~xLkUdJvdpsui5ufBb9~ot1HbtynL7f43wkA25mAYbtZLZQ9gsvN18GuTOyTG-P8SNheUzCiCAhROuzFxtENB4g8cj14jW6EbTCGp0v5D5A~tTGOY743pQxfRbq0iZ-H2-Ps~Soyyd-eVjZIvSy2jaZ4TEB-a6RQRwD5sKE17dculT-NUzV63piJQDqGQHQhcSf8R9cPru~HDz1S249b0siAMUYTns4mHW9~zLD6XQ7Kg-GcWDKFHoDophRJVtyKpKfG5e6ipPxOg9SSRKpMSBjnczNw-767Xgd3rvhXwRaHp8jYVow__')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-background/60"></div>
        </div>

        <div className="container relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg">
              <span className="text-accent text-sm font-medium">Autonomous Resource Management</span>
            </div>
            <h1 className="text-gradient text-7xl md:text-8xl font-bold mb-6 leading-[0.9]">
              DIRECTING THE AGENTIC SWARM
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              ARM Agency transforms how enterprises architect, deploy, and orchestrate autonomous systems at scale. We engineer the infrastructure that powers the next generation of intelligent organizations.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-3 gap-8">
            {[
              { label: "Enterprise Customers", value: "200+" },
              { label: "Agents Deployed", value: "50K+" },
              { label: "Uptime SLA", value: "99.99%" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Enterprise Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Purpose-built infrastructure for autonomous systems that scale with your ambition. From architecture to orchestration, we handle complexity so you can focus on innovation.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Network,
                title: "AI-Native Architecture",
                description: "Signal-based infrastructure engineered for machine-readable systems. We architect platforms where autonomous agents operate with precision and trust.",
              },
              {
                icon: Zap,
                title: "Agentic Orchestration",
                description: "Seamless coordination of autonomous workflows across distributed infrastructure. Syndicate, orchestrate, and optimize at enterprise scale.",
              },
              {
                icon: Shield,
                title: "Enterprise-Grade Security",
                description: "Multi-layered protection with Byzantine Fault Tolerance, cryptographic verification, and compliance-ready infrastructure for mission-critical systems.",
              },
              {
                icon: Users,
                title: "Strategic Partnership",
                description: "Dedicated guidance from industry architects and autonomous systems experts. We partner with you to unlock transformative value.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="card-hudson cursor-pointer group"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                variants={fadeInUp}
              >
                <div className="mb-4">
                  <service.icon
                    className={`w-8 h-8 transition-all duration-300 ${
                      hoveredCard === i ? "text-accent scale-110" : "text-muted-foreground"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">About ARM Agency</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We are architects of autonomous infrastructure. ARM Agency partners with enterprises to design, deploy, and optimize systems where intelligent agents operate with precision, autonomy, and trust.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                In an era of autonomous systems, we build the foundations that matter. Our infrastructure enables organizations to scale intelligence, automate complexity, and achieve what was previously impossible.
              </p>
              <Button size="lg" variant="default">
                Learn Our Mission
              </Button>
            </motion.div>
            <motion.div
              className="relative h-96 rounded-lg overflow-hidden border border-border"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/dY22poh38qSZhLTtv26MI6/sandbox/SyzHmmwKdBnIxW96NMgAMw-img-3_1771889189000_na1fn_ZGF0YS12aXN1YWxpemF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZFkyMnBvaDM4cVNaaExUdHYyNk1JNi9zYW5kYm94L1N5ekhtbXdLZEJuSXhXOTZOTWdBTXctaW1nLTNfMTc3MTg4OTE4OTAwMF9uYTFmbl9aR0YwWVMxMmFYTjFZV3hwZW1GMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=wFudjpoo3bS8cEne0yH8-yQhbtnFkhtzBXOyxScquBPTEgo5k-Opg5XEwsj8A-j-lwufONGp9~1zRCthmnjyyox30xOzQ~6h6ntBXVkGI3Rbjj0kcS0xjZ0lDuPYp24ZirD-f6HK9gvaz3Wl7ClZV~qbCZgUTgh0bQjAtCh~IARsNu0ONdfpIwlrSZkEa4nQLRsN41IK2Rm4zT-45FSAiMRWWy9UFZE8fnf1jyKqItGdcYEbOqBDAPG5c58z7UsUHBVSSeg55UXr2ahWI4~QXhEK7ccmH~WldZy3ErYEoT1a93qhLmig-Z32ViGcXJpM3~O~BO2gXXoQika65V4B7w__')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 border-t border-border">
        <div className="container">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Leadership</h2>
            <p className="text-lg text-muted-foreground">
              Visionary architects with decades of experience building autonomous systems and transforming enterprises
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Mason Nguyen",
                title: "Chief Executive Officer",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/91150550/ugrjWraOGCKcPJhR.png",
              },
              {
                name: "Avery Lane",
                title: "Chief Operating Officer",
                image: "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/91150550/RSDzpsALCQvlnDmX.jpeg?Expires=1804480772&Signature=eD1IA2oRcptdbU-ZA1AXeJIXx0OF2TcTuiKr2uhKfizUX1-9eV4dpofZs2n~ncT4IyN9KhB-KM6jBuT3KkDoHScPeLTVNC82pcoGOCT1z5QmWH97o-2qzwHlw9TLnbBfdGJ61Xn7epJprzRAdpVm1iLqe-ps8WzFEMtWoGKWzve3hv1RTky~lsKvEyEmy-7GMWtYoLgWmwoC35oB9ddVAUFc05tvDkcse1CpN-0JX8ACfJAFJLLK6q5Yib2XOiojRGEoz0OyEVGvW4c3d5UAk~8u2NYuR9QUBxAbJml5vQUfx6BEjON3rs4WDptvuyvYpwkIB206mZs1D~DYc4QyEw__&Key-Pair-Id=K2HSFNDJXOU9YS",
              },
              {
                name: "John Williams",
                title: "Managing Director, Strategic Partnerships",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/91150550/XexQsVuQsoolXSEW.jpeg",
              },
            ].map((leader, i) => (
              <motion.div
                key={i}
                className="text-center"
                variants={fadeInUp}
              >
                <div className="mb-6 rounded-lg overflow-hidden border border-white/10 h-64 glass-steel group">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                <p className="text-accent text-sm">{leader.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 border-t border-border bg-card/30">
        <div className="container max-w-3xl">
          <NewsletterSignup
            title="Stay Ahead of the Curve"
            subtitle="Get the latest insights on autonomous systems, AI infrastructure, and resource optimization"
            placeholder="your@company.com"
            buttonText="Subscribe"
          />
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
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Autonomous Future?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Partner with ARM Agency to architect the autonomous infrastructure that drives your competitive advantage. Let's build something transformative together.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Start Your Journey <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/50">
        <div className="container">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Platform</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Capabilities</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex items-center justify-between text-sm text-muted-foreground">
            <p>&copy; 2026 Autonomous Resource Management Agency. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">Twitter</a>
              <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-accent transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
