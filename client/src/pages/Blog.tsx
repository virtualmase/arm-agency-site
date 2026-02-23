import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Calendar, User, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";

/**
 * ARM Agency Blog & Resources Page
 * Design: Dark institutional modernism with cyan/purple accents
 * Showcases case studies, whitepapers, and thought leadership content
 */

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: "case-study" | "whitepaper" | "technical" | "insights";
  author: string;
  date: string;
  readTime: number;
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Autonomous Resource Allocation at Scale: A 50K Agent Case Study",
    excerpt: "How a Fortune 500 company deployed 50,000 autonomous agents to optimize resource allocation across distributed data centers, achieving 40% cost reduction.",
    category: "case-study",
    author: "Mason",
    date: "2026-02-20",
    readTime: 12,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    featured: true,
  },
  {
    id: "2",
    title: "Building Trust in Autonomous Systems: The Byzantine Fault Tolerance Approach",
    excerpt: "A technical deep-dive into how multi-model BFT consensus ensures reliability and security in autonomous agent networks, even under adversarial conditions.",
    category: "technical",
    author: "Avery Lane",
    date: "2026-02-18",
    readTime: 15,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800https://images.unsplash.com/photo-1526374965328-7f5ae4e8b08f?w=800&h=400&fit=croph=400https://images.unsplash.com/photo-1526374965328-7f5ae4e8b08f?w=800&h=400&fit=cropfit=crop",
    featured: true,
  },
  {
    id: "3",
    title: "The Signal Stack Blueprint: Making Your Brand AI-Readable",
    excerpt: "Discover how structured data and semantic architecture transform scattered brand presence into a high-confidence knowledge graph that AI systems trust.",
    category: "whitepaper",
    author: "John Williams",
    date: "2026-02-15",
    readTime: 18,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800https://images.unsplash.com/photo-1460925895917-adf4e565db13?w=800&h=400&fit=croph=400https://images.unsplash.com/photo-1460925895917-adf4e565db13?w=800&h=400&fit=cropfit=crop",
  },
  {
    id: "4",
    title: "Carbon-Aware Scheduling: Sustainable Autonomous Systems",
    excerpt: "Learn how ARM Agency integrates environmental impact tracking into autonomous workflows, enabling enterprises to meet ESG commitments while optimizing performance.",
    category: "insights",
    author: "Mason",
    date: "2026-02-12",
    readTime: 10,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
  },
  {
    id: "5",
    title: "From Monolith to Mesh: Migrating Legacy Systems to Agentic Architecture",
    excerpt: "A practical guide for enterprises transitioning from traditional monolithic systems to distributed autonomous agent networks without disrupting operations.",
    category: "technical",
    author: "Avery Lane",
    date: "2026-02-10",
    readTime: 14,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
  },
  {
    id: "6",
    title: "Agent-to-Agent Communication: The Future of Enterprise Integration",
    excerpt: "Exploring the A2A protocol stack and how it enables seamless, trustless communication between autonomous agents across organizational boundaries.",
    category: "whitepaper",
    author: "John Williams",
    date: "2026-02-08",
    readTime: 16,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
  },
  {
    id: "7",
    title: "Real-Time Attribution in Autonomous Systems: Challenges and Solutions",
    excerpt: "How ARM Agency solves the attribution problem in complex autonomous workflows, enabling real-time visibility into agent decisions and outcomes.",
    category: "case-study",
    author: "Mason",
    date: "2026-02-05",
    readTime: 13,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
  },
  {
    id: "8",
    title: "Privacy-Preserving AI: Differential Privacy in Autonomous Agents",
    excerpt: "An in-depth exploration of how differential privacy techniques protect sensitive data while maintaining the effectiveness of autonomous decision-making systems.",
    category: "technical",
    author: "Avery Lane",
    date: "2026-02-03",
    readTime: 17,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
  },
];

const categories = [
  { id: "all", label: "All Articles", count: 8 },
  { id: "case-study", label: "Case Studies", count: 2 },
  { id: "whitepaper", label: "Whitepapers", count: 2 },
  { id: "technical", label: "Technical", count: 3 },
  { id: "insights", label: "Insights", count: 1 },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPosts = blogPosts.filter((post) => post.featured);

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

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "case-study": "bg-accent/20 text-accent border-accent/30",
      whitepaper: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      technical: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      insights: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    };
    return colors[category] || colors["insights"];
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
            <a href="/blog" className="text-sm text-accent">
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
            <h1 className="text-5xl font-bold mb-4">Resources & Insights</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Explore case studies, technical deep-dives, and thought leadership from the ARM Agency team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20 border-b border-border">
          <div className="container">
            <motion.h2
              className="text-3xl font-bold mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Featured
            </motion.h2>

            <motion.div
              className="grid grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {featuredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  className="group cursor-pointer"
                  variants={fadeInUp}
                >
                  <div className="relative h-64 rounded-lg overflow-hidden border border-border mb-6 group-hover:border-accent/50 transition-all duration-300">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)}`}>
                        {categories.find((c) => c.id === post.category)?.label}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {post.readTime} min read
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="py-12 border-b border-border">
        <div className="container">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 bg-card border-border"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="text-right text-sm text-muted-foreground pt-2">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 border ${
                  selectedCategory === category.id
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-card border-border hover:border-accent/50"
                }`}
              >
                {category.label}
                <span className="ml-2 text-xs opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container">
          {filteredPosts.length > 0 ? (
            <motion.div
              className="grid grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  className="group cursor-pointer flex flex-col"
                  variants={fadeInUp}
                >
                  <div className="relative h-48 rounded-lg overflow-hidden border border-border mb-6 group-hover:border-accent/50 transition-all duration-300">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)}`}>
                        {categories.find((c) => c.id === post.category)?.label}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {post.readTime}m
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-lg text-muted-foreground">No articles found matching your search.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 border-t border-border bg-card/50">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest insights on autonomous systems, AI-native architecture, and enterprise transformation
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-background border-border"
              />
              <Button className="gap-2">
                Subscribe <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-background">
        <div className="container">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-accent transition-colors">Platform</a></li>
                <li><a href="/" className="hover:text-accent transition-colors">Capabilities</a></li>
                <li><a href="/" className="hover:text-accent transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="/blog" className="hover:text-accent transition-colors">Blog</a></li>
                <li><a href="/" className="hover:text-accent transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/blog" className="hover:text-accent transition-colors">Documentation</a></li>
                <li><a href="/blog" className="hover:text-accent transition-colors">Case Studies</a></li>
                <li><a href="/" className="hover:text-accent transition-colors">Support</a></li>
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
