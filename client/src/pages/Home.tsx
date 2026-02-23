import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Network, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

/**
 * ARM Agency Home Page
 * Design: Dark institutional modernism with cyan/purple accents
 * Typography: Sora (display) + Inter (body)
 * Color: Deep charcoal bg, cyan/purple accents, off-white text
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
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Architect AI-Native Systems That Understand
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The Autonomous Resource Management Agency transforms how organizations deploy, monitor, and optimize autonomous systems. We architect infrastructure for the agentic era.
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
            <h2 className="text-4xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We provide comprehensive infrastructure and services for autonomous resource management
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
                description: "Signal-based infrastructure designed for machine-readable systems and autonomous agents",
              },
              {
                icon: Zap,
                title: "Agentic Workflows",
                description: "Syndication and orchestration of autonomous workflows across distributed systems",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Multi-layer security with Byzantine Fault Tolerance and mandate chain verification",
              },
              {
                icon: Users,
                title: "Leadership & Support",
                description: "Expert guidance from industry veterans in autonomous systems and resource optimization",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="p-8 border border-border rounded-lg hover:border-accent/50 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                variants={fadeInUp}
              >
                <div className="mb-4">
                  <service.icon
                    className={`w-8 h-8 transition-colors duration-300 ${
                      hoveredCard === i ? "text-accent" : "text-muted-foreground"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
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
                Autonomous Resource Management Agency is a premier business administration conglomerate with a product portfolio of generative search optimization, agentic workflow syndication, and educational infrastructure for all entities, institutions, and individuals.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We architect brands and systems that AI can read, trust, and amplify. In a world of noise, we make your data resonate as a source of truth.
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
              Architects of trust in an AI-shaped world
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
                name: "Mason",
                title: "President",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
              },
              {
                name: "Avery Lane",
                title: "Founder & Strategy",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
              },
              {
                name: "John Williams",
                title: "Chief Investment Officer",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
              },
            ].map((leader, i) => (
              <motion.div
                key={i}
                className="text-center"
                variants={fadeInUp}
              >
                <div className="mb-6 rounded-lg overflow-hidden border border-border h-64">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                <p className="text-accent text-sm">{leader.title}</p>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Infrastructure?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join leading enterprises that trust ARM Agency to architect their autonomous systems
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
