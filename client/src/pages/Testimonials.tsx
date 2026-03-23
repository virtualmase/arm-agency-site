import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

/**
 * ARM Agency Testimonials & Case Studies Page
 * Design: Dark institutional modernism with premium typography
 * Typography: Playfair Display (headers) + Outfit (body)
 */

interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  result: string;
  image: string;
  rating: number;
}

interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    title: "VP of Operations",
    company: "TechVentures Capital",
    quote: "ARM Agency transformed how we manage our portfolio. The autonomous systems reduced our operational overhead by 40% while improving decision accuracy. It's been a game-changer for our firm.",
    result: "40% reduction in operational overhead",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    title: "Chief Technology Officer",
    company: "BuildTech Solutions",
    quote: "The precision and speed of ARM's autonomous resource management is unmatched. We've been able to scale our operations without proportional increases in staff. Highly recommended.",
    result: "3x operational scaling with same team size",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    rating: 5,
  },
  {
    id: "3",
    name: "Jennifer Park",
    title: "Director of Strategy",
    company: "Global Real Estate Partners",
    quote: "ARM's digital twin models gave us insights we never had before. We can now predict market trends with 85% accuracy. The ROI has been exceptional.",
    result: "85% accuracy in market predictions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    rating: 5,
  },
  {
    id: "4",
    name: "David Thompson",
    title: "CEO",
    company: "InnovateLabs",
    quote: "Working with ARM Agency was one of the best decisions we made. Their team understood our complex requirements and delivered a solution that exceeded expectations.",
    result: "30% faster project delivery",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    rating: 5,
  },
];

const caseStudies: CaseStudy[] = [
  {
    id: "vc-portfolio",
    title: "Autonomous VC Portfolio Optimization",
    company: "Venture Capital Partners",
    industry: "Venture Capital",
    challenge: "Managing 200+ portfolio companies with manual processes, leading to delayed decision-making and missed opportunities",
    solution: "Implemented ARM's autonomous resource management system with AI-driven portfolio analytics and real-time monitoring",
    results: [
      "Reduced portfolio review time from 2 weeks to 2 days",
      "Identified $50M in optimization opportunities",
      "Improved decision accuracy by 35%",
    ],
    metrics: [
      { label: "Time Saved", value: "85%" },
      { label: "Opportunities Found", value: "$50M" },
      { label: "Accuracy Improvement", value: "+35%" },
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800https://images.unsplash.com/photo-1460925895917-adf4e565db13?w=800&h=400&fit=croph=400https://images.unsplash.com/photo-1460925895917-adf4e565db13?w=800&h=400&fit=cropfit=crop",
  },
  {
    id: "real-estate",
    title: "Real Estate Market Intelligence Platform",
    company: "Global Real Estate Investment Trust",
    industry: "Real Estate",
    challenge: "Manual market analysis across 15 cities was time-consuming and prone to human error, affecting investment decisions",
    solution: "Deployed ARM's digital twin models to analyze real estate markets in real-time across multiple geographies",
    results: [
      "Achieved 85% prediction accuracy for market trends",
      "Reduced analysis time by 70%",
      "Increased investment success rate from 62% to 89%",
    ],
    metrics: [
      { label: "Prediction Accuracy", value: "85%" },
      { label: "Analysis Time Saved", value: "70%" },
      { label: "Success Rate Increase", value: "+27%" },
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop",
  },
  {
    id: "construction",
    title: "Construction Supply Chain Optimization",
    company: "Major Construction & Development Firm",
    industry: "Construction",
    challenge: "Complex multi-site projects with resource allocation inefficiencies leading to delays and cost overruns",
    solution: "Implemented ARM's autonomous resource allocation system with predictive scheduling and real-time optimization",
    results: [
      "Reduced project delays by 45%",
      "Cut resource waste by $2.3M annually",
      "Improved team productivity by 38%",
    ],
    metrics: [
      { label: "Delays Reduced", value: "45%" },
      { label: "Annual Savings", value: "$2.3M" },
      { label: "Productivity Gain", value: "+38%" },
    ],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop",
  },
];

export default function Testimonials() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
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
            <a href="/contact" className="text-sm hover:text-accent transition-colors">
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
            <h1 className="text-6xl font-bold mb-4">Client Success Stories</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              See how leading organizations have transformed their operations with ARM Agency's autonomous resource management solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 border-b border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg text-muted-foreground">
              Hear directly from our partners about their experience working with ARM Agency
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="p-8 border border-border rounded-lg hover:border-accent/50 transition-all duration-300 bg-card/50"
                variants={fadeInUp}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title} at {testimonial.company}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-accent font-semibold">{testimonial.result}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 border-b border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Case Studies</h2>
            <p className="text-lg text-muted-foreground">
              In-depth analysis of how ARM Agency delivered transformative results
            </p>
          </motion.div>

          <motion.div
            className="space-y-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className={`grid grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
                variants={fadeInUp}
              >
                {/* Image */}
                <div className={`relative h-80 rounded-lg overflow-hidden border border-border ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="mb-6">
                    <p className="text-accent text-sm font-semibold mb-2">{study.industry}</p>
                    <h3 className="text-3xl font-bold mb-2">{study.title}</h3>
                    <p className="text-muted-foreground">{study.company}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="font-bold mb-2 text-sm">Challenge</h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-sm">Solution</h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-bold mb-4 text-sm">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex gap-2 text-muted-foreground">
                          <span className="text-accent">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-4 bg-card/50 rounded-lg border border-border mb-6">
                    {study.metrics.map((metric, i) => (
                      <div key={i}>
                        <p className="text-accent font-bold text-lg">{metric.value}</p>
                        <p className="text-xs text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  <a href={`/case-study/${study.id}`} className="inline-flex items-center gap-2 px-6 py-2 bg-accent hover:bg-accent/90 text-background rounded-lg transition-colors">
                    Read Full Case Study <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold mb-6">Ready to Achieve Similar Results?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how ARM Agency can help your organization unlock new levels of efficiency and growth
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Schedule a Consultation <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Download Case Studies
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
