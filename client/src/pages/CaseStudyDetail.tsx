import { ArrowLeft, CheckCircle, TrendingUp, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

/**
 * ARM Agency Case Study Detail Page
 * Design: Hudson Yards institutional modernism
 * Typography: Space Grotesk (headers) + Inter (body)
 */

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: Array<{
    metric: string;
    value: string;
    description: string;
  }>;
  timeline: Array<{
    phase: string;
    duration: string;
    description: string;
  }>;
  testimonial: {
    quote: string;
    author: string;
    title: string;
    company: string;
  };
  keyTakeaways: string[];
}

const caseStudies: Record<string, CaseStudy> = {
  "vc-portfolio": {
    id: "vc-portfolio",
    title: "Autonomous VC Portfolio Optimization",
    client: "Venture Capital Partners",
    industry: "Venture Capital & Private Equity",
    challenge:
      "Managing a $50M+ portfolio across 200+ companies with traditional tools was inefficient. The firm struggled with real-time market analysis, deal flow prioritization, and portfolio risk assessment. Decision-making cycles took weeks, causing missed opportunities in fast-moving markets.",
    solution:
      "ARM Agency deployed an autonomous agent network that continuously monitors portfolio companies, market conditions, and emerging opportunities. The system provides real-time insights, predictive analytics, and automated recommendations for portfolio rebalancing and risk mitigation.",
    results: [
      {
        metric: "$50M+",
        value: "Portfolio Value Managed",
        description: "Autonomous systems now oversee comprehensive portfolio operations",
      },
      {
        metric: "85%",
        value: "Prediction Accuracy",
        description: "Market trend forecasting with machine learning models",
      },
      {
        metric: "60%",
        value: "Faster Decisions",
        description: "Reduced decision cycle time from weeks to days",
      },
      {
        metric: "3.2x",
        value: "ROI Improvement",
        description: "Enhanced returns through optimized portfolio allocation",
      },
    ],
    timeline: [
      {
        phase: "Discovery & Assessment",
        duration: "2 weeks",
        description:
          "Analyzed current portfolio management processes, identified bottlenecks, and mapped data sources.",
      },
      {
        phase: "Agent Architecture Design",
        duration: "3 weeks",
        description:
          "Designed autonomous agent network with specialized roles for market analysis, risk assessment, and opportunity identification.",
      },
      {
        phase: "Integration & Testing",
        duration: "4 weeks",
        description:
          "Integrated with portfolio management systems, conducted stress testing, and validated predictions against historical data.",
      },
      {
        phase: "Deployment & Optimization",
        duration: "2 weeks",
        description:
          "Rolled out to production with real-time monitoring, fine-tuned models based on live market data.",
      },
    ],
    testimonial: {
      quote:
        "ARM Agency transformed how we manage our portfolio. The autonomous agents provide insights we couldn't generate manually, and we're making better decisions faster. The 3.2x ROI improvement speaks for itself.",
      author: "Sarah Chen",
      title: "Managing Partner",
      company: "Venture Capital Partners",
    },
    keyTakeaways: [
      "Autonomous agents can process vast amounts of market data in real-time, enabling faster, more informed decisions",
      "Predictive analytics with 85%+ accuracy significantly improves portfolio performance and risk management",
      "Autonomous systems reduce operational overhead while improving decision quality and speed",
      "Integration with existing systems is seamless when properly architected",
    ],
  },
  "real-estate": {
    id: "real-estate",
    title: "Real Estate Market Intelligence Platform",
    client: "Global Real Estate Investment Trust",
    industry: "Real Estate & Property Management",
    challenge:
      "A major REIT needed to evaluate 500+ properties across multiple markets simultaneously. Traditional analysis took months and missed emerging opportunities. Property valuations, market trends, and investment recommendations required extensive manual research.",
    solution:
      "ARM Agency built an autonomous intelligence platform that analyzes property data, market conditions, demographic trends, and economic indicators. The system provides real-time property valuations, investment recommendations, and market opportunity alerts.",
    results: [
      {
        metric: "500+",
        value: "Properties Analyzed",
        description: "Real-time analysis across global portfolio",
      },
      {
        metric: "$2.3M",
        value: "Annual Savings",
        description: "Reduced analysis costs and improved capital allocation",
      },
      {
        metric: "92%",
        value: "Valuation Accuracy",
        description: "ML-powered property valuations vs. manual appraisals",
      },
      {
        metric: "45%",
        value: "Faster Acquisitions",
        description: "Accelerated deal identification and due diligence",
      },
    ],
    timeline: [
      {
        phase: "Data Integration",
        duration: "3 weeks",
        description:
          "Connected property databases, market data feeds, and economic indicators into unified platform.",
      },
      {
        phase: "Model Development",
        duration: "4 weeks",
        description:
          "Built ML models for property valuation, market analysis, and investment scoring.",
      },
      {
        phase: "Platform Build",
        duration: "5 weeks",
        description:
          "Developed autonomous agent system with real-time monitoring and alert capabilities.",
      },
      {
        phase: "Validation & Launch",
        duration: "2 weeks",
        description:
          "Validated predictions against actual market data, trained team, and deployed to production.",
      },
    ],
    testimonial: {
      quote:
        "The autonomous platform has become indispensable to our investment strategy. We're identifying opportunities faster, making smarter acquisitions, and saving millions annually. ARM Agency delivered exactly what we needed.",
      author: "Michael Rodriguez",
      title: "Chief Investment Officer",
      company: "Global Real Estate Investment Trust",
    },
    keyTakeaways: [
      "Autonomous systems excel at analyzing large datasets across multiple markets simultaneously",
      "Real-time market intelligence enables faster, more competitive deal identification",
      "ML-powered valuations provide consistent, data-driven assessments at scale",
      "Autonomous platforms reduce time-to-decision significantly, improving competitive advantage",
    ],
  },
  "construction": {
    id: "construction",
    title: "Construction Supply Chain Optimization",
    client: "Major Construction & Development Firm",
    industry: "Construction & Infrastructure",
    challenge:
      "A construction firm managing 50+ simultaneous projects struggled with supply chain coordination, material procurement, and equipment allocation. Project delays were common due to supply chain inefficiencies, costing millions annually.",
    solution:
      "ARM Agency deployed autonomous agents to optimize supply chain operations. The system manages inventory, predicts material needs, coordinates equipment allocation, and alerts teams to potential delays before they impact projects.",
    results: [
      {
        metric: "50+",
        value: "Projects Coordinated",
        description: "Real-time supply chain optimization across portfolio",
      },
      {
        metric: "38%",
        value: "Delay Reduction",
        description: "Fewer project delays through proactive supply management",
      },
      {
        metric: "22%",
        value: "Cost Savings",
        description: "Optimized procurement and inventory management",
      },
      {
        metric: "4.5M",
        value: "Annual Value",
        description: "Combined savings and efficiency gains",
      },
    ],
    timeline: [
      {
        phase: "Supply Chain Audit",
        duration: "2 weeks",
        description:
          "Analyzed current processes, identified bottlenecks, and mapped supplier relationships.",
      },
      {
        phase: "Agent System Design",
        duration: "3 weeks",
        description:
          "Designed autonomous agents for procurement, inventory, and equipment coordination.",
      },
      {
        phase: "Integration & Testing",
        duration: "4 weeks",
        description:
          "Integrated with project management and ERP systems, conducted pilot on 5 projects.",
      },
      {
        phase: "Full Rollout",
        duration: "2 weeks",
        description:
          "Deployed across all 50+ projects with continuous monitoring and optimization.",
      },
    ],
    testimonial: {
      quote:
        "ARM Agency's autonomous supply chain system has been transformative. We're completing projects on schedule, reducing costs, and our teams can focus on quality instead of logistics. The $4.5M annual value is just the beginning.",
      author: "James Patterson",
      title: "VP of Operations",
      company: "Major Construction & Development Firm",
    },
    keyTakeaways: [
      "Autonomous coordination across complex supply chains eliminates manual bottlenecks",
      "Predictive analytics prevent delays by identifying issues before they impact projects",
      "Autonomous systems enable better resource allocation and cost optimization",
      "Real-time visibility improves decision-making across entire project portfolio",
    ],
  },
};

export default function CaseStudyDetail() {
  const [location] = useLocation();
  const caseStudyId = location.split("/").pop() || "vc-portfolio";
  const caseStudy = caseStudies[caseStudyId] || caseStudies["vc-portfolio"];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/dY22poh38qSZhLTtv26MI6/sandbox/arm-logo.jpg"
              alt="ARM Logo"
              className="h-8 w-auto"
            />
            <span className="font-bold text-lg">ARM Agency</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="/" className="text-sm hover:text-accent transition-colors">
              Home
            </a>
            <a href="/testimonials" className="text-sm hover:text-accent transition-colors">
              Case Studies
            </a>
            <a href="/contact" className="text-sm hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <section className="pt-32 pb-8">
        <div className="container">
          <a href="/testimonials" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Case Studies</span>
          </a>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 border-b border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                {caseStudy.industry}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">{caseStudy.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              How {caseStudy.client} transformed their operations with autonomous resource management
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {caseStudy.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {caseStudy.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Metrics */}
      <section className="py-20 border-b border-border bg-card/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Measurable Results</h2>
            <p className="text-lg text-muted-foreground">
              Quantifiable impact delivered to {caseStudy.client}
            </p>
          </motion.div>

          <div className="grid grid-cols-4 gap-6">
            {caseStudy.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-steel rounded-lg p-6 border border-white/10 hover:border-accent/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl font-bold mb-2">{result.metric}</div>
                <div className="text-sm font-semibold text-accent mb-2">{result.value}</div>
                <p className="text-sm text-muted-foreground">{result.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 border-b border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Implementation Timeline</h2>
            <p className="text-lg text-muted-foreground">
              Phased approach to deployment and optimization
            </p>
          </motion.div>

          <div className="space-y-6">
            {caseStudy.timeline.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-steel rounded-lg p-6 border border-white/10 hover:border-accent/30 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10 border border-accent/30">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold mb-2">{phase.phase}</h3>
                    <p className="text-sm text-accent font-semibold mb-2">{phase.duration}</p>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 border-b border-border bg-card/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="mb-6">
              <Users className="w-12 h-12 text-accent mx-auto" />
            </div>
            <blockquote className="text-2xl font-bold mb-6">
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <div>
              <p className="font-semibold text-lg">{caseStudy.testimonial.author}</p>
              <p className="text-accent text-sm mb-1">{caseStudy.testimonial.title}</p>
              <p className="text-muted-foreground text-sm">{caseStudy.testimonial.company}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20 border-b border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Key Takeaways</h2>
            <p className="text-lg text-muted-foreground">
              Lessons learned and best practices from this engagement
            </p>
          </motion.div>

          <div className="space-y-4">
            {caseStudy.keyTakeaways.map((takeaway, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground leading-relaxed">{takeaway}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how ARM Agency can deliver similar results for your organization
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline">
                View More Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/30">
        <div className="container">
          <div className="grid grid-cols-5 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Architecture</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Capabilities</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Leadership</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="mailto:hello@arm-agency.com" className="hover:text-accent transition-colors">Email</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 ARM Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
