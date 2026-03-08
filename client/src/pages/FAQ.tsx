import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

/**
 * ARM Agency FAQ Page
 * Design: Dark institutional modernism with premium typography
 * Typography: Playfair Display (headers) + Outfit (body)
 */

interface FAQCategory {
  title: string;
  icon: string;
  questions: {
    id: string;
    question: string;
    answer: string;
  }[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "General Questions",
    icon: "❓",
    questions: [
      {
        id: "g1",
        question: "What is ARM Agency?",
        answer: "ARM Agency (Autonomous Resource Management Agency) is a leading provider of AI-driven autonomous systems that help organizations optimize resource allocation, improve operational efficiency, and make data-driven decisions at scale. We specialize in deploying intelligent systems that work 24/7 to manage complex business processes.",
      },
      {
        id: "g2",
        question: "How does ARM Agency differ from other consulting firms?",
        answer: "Unlike traditional consulting firms, ARM Agency focuses on deploying autonomous systems that continuously optimize your operations. Our approach combines deep industry expertise with cutting-edge AI technology to deliver measurable, ongoing results rather than one-time recommendations.",
      },
      {
        id: "g3",
        question: "What industries does ARM Agency serve?",
        answer: "We serve a wide range of industries including venture capital, real estate, construction, manufacturing, logistics, and financial services. Our autonomous systems are adaptable to any sector that requires resource optimization and data-driven decision-making.",
      },
      {
        id: "g4",
        question: "Is ARM Agency a startup or established company?",
        answer: "ARM Agency is led by a team of seasoned executives with decades of combined experience in global finance, operations, and technology. While we bring fresh innovation, we're backed by the expertise and credibility of industry veterans.",
      },
    ],
  },
  {
    title: "Technical & Implementation",
    icon: "⚙️",
    questions: [
      {
        id: "t1",
        question: "How long does it take to implement ARM's solutions?",
        answer: "Implementation timelines vary based on your specific needs and existing infrastructure. Typically, we can have a basic system operational within 4-8 weeks, with full optimization achieved within 3-6 months. We work closely with your team to minimize disruption.",
      },
      {
        id: "t2",
        question: "What data does ARM need to operate effectively?",
        answer: "ARM requires access to your operational data including resource inventories, transaction histories, market data, and performance metrics. We implement strict data governance and security protocols to ensure your information is protected while enabling our systems to deliver optimal results.",
      },
      {
        id: "t3",
        question: "Can ARM integrate with our existing systems?",
        answer: "Yes, absolutely. Our systems are designed to integrate seamlessly with existing enterprise software including ERP systems, CRM platforms, and custom applications. Our technical team will work with your IT department to ensure smooth integration.",
      },
      {
        id: "t4",
        question: "What kind of support do you provide post-implementation?",
        answer: "We provide comprehensive post-implementation support including 24/7 monitoring, regular optimization reviews, staff training, and continuous system updates. Our support team is always available to address issues and ensure your systems are performing optimally.",
      },
    ],
  },
  {
    title: "Pricing & ROI",
    icon: "💰",
    questions: [
      {
        id: "p1",
        question: "How is ARM Agency's pricing structured?",
        answer: "Our pricing is based on a combination of factors including implementation scope, system complexity, data volume, and ongoing support requirements. We offer flexible pricing models including fixed-price implementations, usage-based fees, and performance-based pricing where you pay based on results achieved.",
      },
      {
        id: "p2",
        question: "What is the typical ROI for ARM's solutions?",
        answer: "Our clients typically see ROI within 6-12 months. Average improvements include 30-50% reduction in operational costs, 40-60% improvement in decision accuracy, and 25-40% increase in resource utilization. Specific results vary based on your industry and initial operational efficiency.",
      },
      {
        id: "p3",
        question: "Do you offer a trial or pilot program?",
        answer: "Yes, we offer pilot programs where we can demonstrate our systems on a limited scope of your operations. This allows you to see tangible results before committing to a full implementation. Pilot programs typically run 4-8 weeks.",
      },
      {
        id: "p4",
        question: "What happens if we don't see the promised results?",
        answer: "We're confident in our solutions, which is why we offer performance guarantees. If you don't achieve the agreed-upon results within the specified timeframe, we'll work with you to optimize the system at no additional cost, or we can discuss alternative arrangements.",
      },
    ],
  },
  {
    title: "Security & Compliance",
    icon: "🔒",
    questions: [
      {
        id: "s1",
        question: "How does ARM Agency handle data security?",
        answer: "Security is paramount. We implement enterprise-grade encryption, multi-factor authentication, role-based access controls, and regular security audits. All data is stored in secure, redundant data centers with automatic backups and disaster recovery protocols.",
      },
      {
        id: "s2",
        question: "Is ARM Agency compliant with industry regulations?",
        answer: "Yes, we maintain compliance with major regulatory frameworks including SOC 2, ISO 27001, GDPR, HIPAA (where applicable), and industry-specific regulations. Our compliance team continuously monitors regulatory changes to ensure ongoing adherence.",
      },
      {
        id: "s3",
        question: "Can we audit ARM's systems?",
        answer: "Absolutely. We encourage regular audits and provide full transparency into our systems and processes. We can arrange third-party security audits and provide detailed audit reports to your compliance team.",
      },
      {
        id: "s4",
        question: "What happens to our data if we stop using ARM's services?",
        answer: "Upon contract termination, we provide a complete data export in your preferred format. All your data remains your property, and we securely delete our copies according to agreed-upon timelines and regulatory requirements.",
      },
    ],
  },
  {
    title: "Partnership & Support",
    icon: "🤝",
    questions: [
      {
        id: "b1",
        question: "How do we get started with ARM Agency?",
        answer: "Getting started is simple. Contact our team to schedule an initial consultation where we'll discuss your challenges, goals, and how our solutions can help. We'll then prepare a customized proposal and implementation plan.",
      },
      {
        id: "b2",
        question: "Who will be my primary point of contact?",
        answer: "You'll be assigned a dedicated Account Manager who serves as your primary point of contact. They'll coordinate with our technical team, ensure smooth communication, and be responsible for your overall success.",
      },
      {
        id: "b3",
        question: "Can we customize ARM's solutions for our specific needs?",
        answer: "Yes, customization is a core part of our approach. While we have proven frameworks and best practices, we work closely with each client to tailor solutions to their specific industry, challenges, and goals.",
      },
      {
        id: "b4",
        question: "What training do you provide to our team?",
        answer: "We provide comprehensive training including system operation, data interpretation, troubleshooting, and advanced optimization techniques. Training is delivered through workshops, documentation, and ongoing support sessions tailored to your team's needs.",
      },
    ],
  },
];

export default function FAQ() {
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
            <h1 className="text-6xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Find answers to common questions about ARM Agency's services, implementation, and support
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 border-b border-border">
        <div className="container max-w-4xl">
          <motion.div
            className="space-y-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {faqCategories.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} variants={fadeInUp}>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className="text-3xl font-bold">{category.title}</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, itemIndex) => (
                    <AccordionItem
                      key={item.id}
                      value={item.id}
                      className="border border-border rounded-lg px-6 data-[state=open]:border-accent/50 transition-colors"
                    >
                      <AccordionTrigger className="hover:text-accent transition-colors py-4">
                        <span className="text-left font-semibold">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
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
            <HelpCircle className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Didn't Find Your Answer?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team is here to help. Contact us directly for personalized assistance with any questions or concerns
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Contact Our Team <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Demo
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
