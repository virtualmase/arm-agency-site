import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

/**
 * ARM Agency Leadership Page
 * Design: Dark institutional modernism with premium typography
 * Typography: Playfair Display (headers) + Outfit (body)
 */

interface LeaderProfile {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  email?: string;
  linkedin?: string;
}

const leaders: LeaderProfile[] = [
  {
    id: "mason",
    name: "Mason",
    title: "Chief Executive Officer",
    bio: "Mason has spearheaded the firm's strategic expansion, leveraging over two decades of experience to navigate complex global markets. Having innovated sustainable investment frameworks that have since become benchmarks within the industry, he is recognized for utilizing a unique blend of analytical rigor and visionary foresight. Throughout his tenure, Mason has facilitated multi-billion dollar acquisitions, always directing his teams with a commitment to authenticity and character. His record across global finance is a testament to his ability to deliver detailed results while maintaining an extensive focus on long-term value creation.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/91150550/ugrjWraOGCKcPJhR.png",
    email: "mason@arm-agency.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: "avery",
    name: "Avery Lane",
    title: "Chief Operating Officer",
    bio: "Avery Lane has directed the operational backbone of the organization, ensuring that every facet of the firm's infrastructure is optimized for peak performance. Known for leveraging a disciplined approach to organizational design, Avery has facilitated a culture of excellence that spans our extensive global offices. She has innovated internal protocols that have spearheaded a new standard for efficiency in the industry. With an ability to translate complex challenges into detailed operational roadmaps, Avery's leadership is defined by her transparency and her unwavering focus on utilizing the firm's collective talent to its highest potential.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/91150550/ckQmhXbkKHIWpCCX.jpeg",
    email: "avery@arm-agency.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: "john",
    name: "John Williams",
    title: "Managing Director, Strategic Partnerships",
    bio: "John Williams has facilitated some of the most significant alliances in the industry, utilizing a deep network and a sophisticated understanding of market dynamics. Having spearheaded the firm's entry into emerging sectors, John is credited with innovated partnership models that prioritize mutual growth and stability. He is known for leveraging his extensive knowledge to secure high-stakes agreements, directing negotiations with a calm, principled authority. John's record across the private equity sector highlights his ability to build lasting trust, consistently utilizing his expertise to bridge the gap between ambitious capital and transformative opportunities.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/91150550/DOuJnjMxAzgxMLYQ.jpeg",
    email: "john@arm-agency.com",
    linkedin: "https://linkedin.com",
  },
]

export default function Leadership() {
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
            <a href="/leadership" className="text-sm text-accent">
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
      <section className="pt-32 pb-16 border-b border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl font-bold mb-4">Our Leadership</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A collective of visionary strategists, operational experts, and industry architects united by a shared commitment to excellence and innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-12 border-b border-border">
        <div className="container">
          <motion.div
            className="relative h-96 rounded-lg overflow-hidden border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/dY22poh38qSZhLTtv26MI6/sandbox/VTK88iPmq4nQiTsuE4GBco-img-1_1771890193000_na1fn_bWlzc2lvbi1oZXJvLWxlYWRlcnM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZFkyMnBvaDM4cVNaaExUdHYyNk1JNi9zYW5kYm94L1ZUSzg4aVBtcTRuUWlUc3VFNEdCY28taW1nLTFfMTc3MTg5MDE5MzAwMF9uYTFmbl9iV2x6YzJsdmJpMW9aWEp2TFd4bFlXUmxjbk0ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BwgO3l7mihLXezSYEGs6Df0nu1Y~rOftl0rqAQ6VC6UC21aN~FfEg7EkqvZYob4djXrxnQd09NVBWjg8iwcZr7trlKdpQ9-KJimP0uMSpdvUNp9S7~B8bXwU1nA88rHMf07Ti5OdYFpyWL~9m3nzG-PlVJz~BYZdePVG2Ivllaqc3hBsUhw~GRRNvUYM1au70i6-097scb1~x2wAdPB4SsNOxNzuqKte7Jjme-bSVAbAZFEVqnpsDqEIVI49-LaVQBgMkn3RgusATF~bbxNrIh53WDJ1DvI14oMk1jk3G62RC3jrvJiK4fqW5i1byJMq3Y4ZLqMk0onH2tSa1zuP6g__"
              alt="ARM Agency Leadership Team"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Leadership Profiles */}
      <section className="py-20">
        <div className="container">
          <motion.div
            className="space-y-24"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.id}
                className={`grid grid-cols-2 gap-12 items-start ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
                variants={fadeInUp}
              >
                {/* Image */}
                <div className={`relative h-96 rounded-lg overflow-hidden border border-border ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
                </div>

                {/* Bio */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="mb-6">
                    <h2 className="text-4xl font-bold mb-2">{leader.name}</h2>
                    <p className="text-accent text-lg font-semibold">{leader.title}</p>
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {leader.bio}
                  </p>

                  <div className="flex gap-4">
                    {leader.email && (
                      <a
                        href={`mailto:${leader.email}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">Email</span>
                      </a>
                    )}
                    {leader.linkedin && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span className="text-sm">LinkedIn</span>
                      </a>
                    )}
                  </div>
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
            <h2 className="text-4xl font-bold mb-6">Connect With Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore partnership opportunities and discover how ARM Agency can transform your organization
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Schedule a Meeting <ArrowRight className="w-4 h-4" />
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
