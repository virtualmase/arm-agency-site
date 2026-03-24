import { ArrowLeft, Share2, Twitter, Linkedin, Mail, Calendar, User, Clock, Send, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getRecommendedArticles } from "@/lib/recommendations";

/**
 * ARM Agency Blog Post Detail Page
 * Design: Hudson Yards institutional modernism
 * Typography: Space Grotesk (headers) + Inter (body)
 */

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    title: string;
    bio: string;
    image: string;
  };
  category: string;
  publishedDate: string;
  readTime: number;
  image: string;
  tags: string[];
}

interface Comment {
  id: string;
  author: string;
  email: string;
  content: string;
  timestamp: string;
  avatar: string;
}

const blogPosts: Record<string, BlogPost> = {
  "byzantine-fault-tolerance": {
    id: "byzantine-fault-tolerance",
    title: "Byzantine Fault Tolerance in Autonomous Agent Networks",
    excerpt:
      "Understanding how autonomous systems maintain consensus and reliability in distributed environments with potential adversarial conditions.",
    content: `
# Byzantine Fault Tolerance in Autonomous Agent Networks

Byzantine Fault Tolerance (BFT) is a critical concept in distributed systems, particularly when dealing with autonomous agents that must coordinate without a central authority. In this comprehensive guide, we'll explore how ARM Agency implements BFT principles to ensure reliable autonomous resource management.

## The Byzantine Generals Problem

The Byzantine Generals Problem, first described by Lamport, Shostak, and Pease in 1982, illustrates the challenges of achieving agreement among distributed parties when some may be faulty or malicious. Imagine a group of generals coordinating an attack on a city, communicating only through messengers. Some generals might be traitors sending conflicting messages.

In autonomous agent networks, this translates to: How can a swarm of autonomous agents reach consensus on resource allocation decisions when some agents might fail or provide incorrect information?

## Key Principles

### 1. Quorum-Based Decision Making
Rather than requiring unanimous agreement, BFT systems use quorum thresholds. ARM Agency's autonomous agents operate on a principle where decisions require agreement from at least 2/3 + 1 of the agent network, ensuring that even if 1/3 of agents fail, the system maintains consensus.

### 2. Cryptographic Verification
Each agent digitally signs its messages using cryptographic keys. This ensures that:
- Messages cannot be forged
- The origin of each message is verifiable
- The integrity of messages is guaranteed

### 3. Multi-Round Consensus
The consensus process occurs in multiple rounds:
- **Round 1**: Each agent broadcasts its initial proposal
- **Round 2**: Agents collect proposals and broadcast their received values
- **Round 3**: Final consensus is reached based on the majority of received proposals

## Implementation in ARM Agency

Our autonomous resource management platform implements BFT through several mechanisms:

### Agent Validation Layer
Every agent in the network maintains a validation layer that:
- Verifies the digital signatures of incoming messages
- Checks the consistency of proposals against historical data
- Flags suspicious patterns that might indicate faulty agents

### Adaptive Quorum Sizing
Rather than using a fixed quorum size, ARM Agency's system adapts based on:
- Network size and health
- Historical reliability of individual agents
- Current system load and criticality

### Fault Detection and Isolation
When an agent is detected as faulty:
1. Its voting weight is temporarily reduced
2. Its proposals are subjected to additional scrutiny
3. If the fault persists, the agent is isolated from critical decisions

## Real-World Impact

In a recent engagement with a major VC firm managing a $50M portfolio, Byzantine Fault Tolerance enabled:
- **99.99% uptime** despite multiple agent failures
- **Consistent decision quality** even when 15% of agents were temporarily offline
- **Rapid recovery** from transient faults without manual intervention

## Best Practices

1. **Monitor Agent Health**: Continuously track agent performance metrics
2. **Implement Gradual Degradation**: System should gracefully degrade rather than fail catastrophically
3. **Use Diverse Agent Types**: Different agent implementations reduce the risk of systematic failures
4. **Regular Audits**: Periodically verify consensus decisions against external data sources

## Conclusion

Byzantine Fault Tolerance is not just a theoretical concept—it's essential for building reliable autonomous systems. By implementing robust BFT mechanisms, ARM Agency ensures that autonomous resource management systems remain reliable, consistent, and trustworthy even in challenging conditions.

The future of autonomous systems depends on our ability to build networks that can coordinate effectively despite failures and adversarial conditions. BFT provides the foundation for this reliability.
    `,
    author: {
      name: "Dr. Sarah Chen",
      title: "Chief Technology Officer",
      bio: "Dr. Chen leads ARM Agency's technical innovation, with 15+ years of experience in distributed systems and autonomous networks.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    },
    category: "Technical",
    publishedDate: "March 15, 2026",
    readTime: 12,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop",
    tags: ["Byzantine Fault Tolerance", "Distributed Systems", "Autonomous Agents", "Consensus"],
  },
  "digital-twins-resource-optimization": {
    id: "digital-twins-resource-optimization",
    title: "Digital Twins: The Future of Resource Optimization",
    excerpt:
      "How digital twin technology enables real-time simulation and optimization of complex resource management scenarios.",
    content: `
# Digital Twins: The Future of Resource Optimization

Digital twin technology represents a paradigm shift in how organizations approach resource management. By creating virtual replicas of physical systems, companies can simulate, analyze, and optimize operations before implementing changes in the real world.

## What is a Digital Twin?

A digital twin is a virtual representation of a physical asset, process, or system that:
- Mirrors the real-world entity in real-time
- Incorporates data from multiple sensors and systems
- Enables simulation and predictive analysis
- Supports decision-making through "what-if" scenarios

## The ARM Agency Approach

Our digital twin platform integrates:

### Real-Time Data Integration
- Continuous data feeds from operational systems
- IoT sensor networks for physical asset monitoring
- Market data and external indicators
- Historical performance data

### Simulation Engine
- Physics-based modeling for accurate simulations
- Machine learning models for pattern recognition
- Scenario planning capabilities
- Predictive analytics for future states

### Optimization Layer
- Autonomous agents that test strategies in the digital environment
- Identification of optimal resource allocation patterns
- Risk assessment and mitigation strategies
- Continuous improvement recommendations

## Real-World Applications

### Real Estate Portfolio Management
A major REIT used ARM's digital twin platform to:
- Simulate property valuations across 500+ assets
- Test acquisition strategies before committing capital
- Identify market opportunities 3-6 months ahead of competitors
- Reduce valuation errors by 92%

### Construction Project Coordination
A construction firm deployed digital twins to:
- Simulate supply chain scenarios for 50+ concurrent projects
- Optimize equipment allocation across job sites
- Predict and prevent delays before they occur
- Reduce project delays by 38%

## Key Benefits

1. **Risk Reduction**: Test strategies in a safe virtual environment
2. **Cost Optimization**: Identify inefficiencies before they impact operations
3. **Faster Decision-Making**: Simulate scenarios in minutes instead of weeks
4. **Continuous Improvement**: Autonomous agents continuously optimize operations
5. **Competitive Advantage**: Make better decisions faster than competitors

## Implementation Considerations

- **Data Quality**: Digital twins are only as good as the data feeding them
- **Model Validation**: Continuously validate simulations against real-world outcomes
- **Stakeholder Buy-In**: Teams need to trust the digital twin's recommendations
- **Scalability**: Systems must scale as complexity increases

## The Future

As autonomous systems become more sophisticated, digital twins will become the standard tool for complex resource management. Organizations that master this technology will have a significant competitive advantage.
    `,
    author: {
      name: "James Patterson",
      title: "VP of Operations",
      bio: "James brings 20+ years of operations experience and leads ARM Agency's customer success initiatives.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
    category: "Whitepapers",
    publishedDate: "March 10, 2026",
    readTime: 10,
    image: "https://images.unsplash.com/photo-1460925895917-adf4e565db13?w=1200&h=600&fit=crop",
    tags: ["Digital Twins", "Optimization", "Simulation", "Resource Management"],
  },
  "autonomous-systems-carbon-aware-scheduling": {
    id: "autonomous-systems-carbon-aware-scheduling",
    title: "Carbon-Aware Scheduling in Autonomous Systems",
    excerpt:
      "How autonomous resource management can reduce carbon footprint while maintaining operational efficiency.",
    content: `
# Carbon-Aware Scheduling in Autonomous Systems

As organizations face increasing pressure to reduce their environmental impact, autonomous systems offer a unique opportunity: the ability to optimize operations for both efficiency and sustainability simultaneously.

## The Challenge

Traditional resource scheduling optimizes for:
- Cost minimization
- Time efficiency
- Capacity utilization

But it often ignores:
- Energy consumption patterns
- Carbon intensity of power sources
- Environmental impact of decisions

## Carbon-Aware Optimization

ARM Agency's autonomous systems incorporate carbon awareness through:

### 1. Real-Time Grid Data Integration
- Connection to energy grid carbon intensity feeds
- Real-time pricing of carbon-intensive energy
- Forecasting of future carbon intensity

### 2. Flexible Scheduling
Autonomous agents can shift non-critical tasks to times when:
- Renewable energy is abundant
- Grid carbon intensity is low
- Energy costs are minimal

### 3. Multi-Objective Optimization
The system balances:
- Operational efficiency (primary goal)
- Cost optimization (secondary goal)
- Carbon reduction (tertiary goal)

## Real-World Results

A major construction firm implementing carbon-aware scheduling achieved:
- **22% reduction in carbon emissions** from operations
- **15% reduction in energy costs** through optimized scheduling
- **Zero impact on project timelines** or quality
- **Positive brand impact** from sustainability leadership

## Implementation Strategy

### Phase 1: Baseline Assessment
- Measure current carbon footprint
- Identify flexible vs. fixed operations
- Establish carbon reduction targets

### Phase 2: System Integration
- Connect to carbon intensity data feeds
- Configure autonomous agents for carbon awareness
- Implement monitoring and reporting

### Phase 3: Optimization
- Autonomous agents learn optimal scheduling patterns
- Continuous improvement of carbon efficiency
- Regular reporting and stakeholder communication

## The Business Case

Beyond environmental benefits, carbon-aware scheduling delivers:
- **Cost savings** through optimized energy consumption
- **Regulatory compliance** with emerging carbon regulations
- **Brand differentiation** in sustainability-conscious markets
- **Employee attraction** for sustainability-focused talent

## Looking Forward

As carbon pricing becomes more prevalent and environmental regulations tighten, carbon-aware autonomous systems will become a competitive necessity. Organizations that implement these systems early will gain significant advantages in both cost and brand positioning.
    `,
    author: {
      name: "Emily Rodriguez",
      title: "Sustainability Director",
      bio: "Emily leads ARM Agency's sustainability initiatives and advises clients on environmental optimization strategies.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    },
    category: "Insights",
    publishedDate: "March 5, 2026",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    tags: ["Sustainability", "Carbon", "Autonomous Systems", "Green Technology"],
  },
};

const sampleComments: Comment[] = [
  {
    id: "1",
    author: "Alex Johnson",
    email: "alex@techventures.com",
    content: "Excellent breakdown of BFT principles. We're implementing similar consensus mechanisms. This article clarified several edge cases we were struggling with.",
    timestamp: "2 days ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    author: "Sarah Chen",
    email: "sarah@buildtech.com",
    content: "The multi-round consensus explanation was particularly helpful. We're evaluating ARM Agency for our construction resource optimization project.",
    timestamp: "1 day ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
];

export default function BlogPost() {
  const [location] = useLocation();
  const postId = location.split("/").pop() || "byzantine-fault-tolerance";
  const post = blogPosts[postId] || blogPosts["byzantine-fault-tolerance"];

  
  const [comments, setComments] = useState<Comment[]>(sampleComments);
  const [newComment, setNewComment] = useState({ author: "", email: "", content: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.author && newComment.email && newComment.content) {
      const comment: Comment = {
        id: String(comments.length + 1),
        author: newComment.author,
        email: newComment.email,
        content: newComment.content,
        timestamp: "just now",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      };
      setComments([comment, ...comments]);
      setNewComment({ author: "", email: "", content: "" });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = post.title;

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
            <a href="/blog" className="text-sm text-accent">
              Blog
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
          <a href="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Blog</span>
          </a>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 border-b border-border">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold">
                {post.category}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center gap-8 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{post.publishedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{post.readTime} min read</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 rounded-lg overflow-hidden border border-white/10 mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 border-b border-border">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="prose prose-invert max-w-none"
              >
                <div
                  className="text-lg text-muted-foreground leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{
                    __html: post.content
                      .split("\n\n")
                      .map((para) => {
                        if (para.startsWith("#")) {
                          const match = para.match(/^#+/);
                          const level = match ? match[0].length : 1;
                          const text = para.replace(/^#+\s/, "");
                          return `<h${level} class="text-${4 - Math.min(level - 1, 2)}xl font-bold mt-8 mb-4">${text}</h${level}>`;
                        }
                        return `<p>${para}</p>`;
                      })
                      .join(""),
                  }}
                />
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-1"
            >
              {/* Author Card */}
              <div className="glass-steel rounded-lg p-6 border border-white/10 mb-8">
                <h3 className="font-bold mb-4">About the Author</h3>
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <p className="font-bold mb-1">{post.author.name}</p>
                <p className="text-sm text-accent mb-3">{post.author.title}</p>
                <p className="text-sm text-muted-foreground">{post.author.bio}</p>
              </div>

              {/* Social Share */}
              <div className="glass-steel rounded-lg p-6 border border-white/10 mb-8">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share Article
                </h3>
                <div className="space-y-3">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:border-accent/30 hover:bg-accent/5 transition-all"
                  >
                    <Twitter className="w-4 h-4 text-accent" />
                    <span className="text-sm">Share on Twitter</span>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:border-accent/30 hover:bg-accent/5 transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-accent" />
                    <span className="text-sm">Share on LinkedIn</span>
                  </a>
                  <a
                    href={`mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`}
                    className="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:border-accent/30 hover:bg-accent/5 transition-all"
                  >
                    <Mail className="w-4 h-4 text-accent" />
                    <span className="text-sm">Share via Email</span>
                  </a>
                </div>
              </div>

              {/* Tags */}
              <div className="glass-steel rounded-lg p-6 border border-white/10">
                <h3 className="font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <a
                      key={index}
                      href={`/blog?tag=${encodeURIComponent(tag)}`}
                      className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs hover:bg-accent/20 transition-colors"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI-Powered Related Articles */}
      <section className="py-20 border-b border-border bg-card/30">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                <h2 className="text-3xl font-bold">AI-Recommended Articles</h2>
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">Personalized</span>
            </div>
            <p className="text-muted-foreground">
              Based on your interests in <span className="text-accent font-semibold">{post.category}</span> and related topics
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8">
            {getRecommendedArticles(post, Object.values(blogPosts), 2).map((relatedPost, index) => (
              <motion.a
                key={relatedPost.id}
                href={`/blog-post/${relatedPost.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group glass-steel rounded-lg overflow-hidden border border-white/10 hover:border-accent/30 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-accent border border-accent/30">
                    {relatedPost.relevanceScore}% Match
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-accent text-sm font-semibold mb-2">{relatedPost.category}</p>
                  <h3 className="font-bold mb-2 group-hover:text-accent transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{relatedPost.excerpt}</p>
                  {relatedPost.matchingTags && relatedPost.matchingTags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {relatedPost.matchingTags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-accent text-sm">
                    <span>Read More</span>
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-20 border-t border-border">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Comments ({comments.length})</h2>
            <p className="text-muted-foreground">
              Join the discussion and share your thoughts on autonomous resource management
            </p>
          </motion.div>

          {/* Comment Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-steel rounded-lg p-8 border border-white/10 mb-12"
          >
            <h3 className="font-bold mb-6">Leave a Comment</h3>
            <form onSubmit={handleCommentSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={newComment.author}
                  onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
                  className="px-4 py-2 rounded-lg bg-background border border-border focus:border-accent outline-none transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={newComment.email}
                  onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
                  className="px-4 py-2 rounded-lg bg-background border border-border focus:border-accent outline-none transition-colors"
                  required
                />
              </div>
              <textarea
                placeholder="Your Comment"
                value={newComment.content}
                onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-accent outline-none transition-colors resize-none h-32"
                required
              />
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-accent hover:bg-accent/90 text-background rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Post Comment
                </button>
                {submitted && (
                  <span className="text-accent text-sm">✓ Comment posted successfully!</span>
                )}
              </div>
            </form>
          </motion.div>

          {/* Comments List */}
          <motion.div
            className="space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {comments.map((comment) => (
              <motion.div
                key={comment.id}
                className="glass-steel rounded-lg p-6 border border-white/10"
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                }}
              >
                <div className="flex items-start gap-4">
                  <img
                    src={comment.avatar}
                    alt={comment.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-bold">{comment.author}</p>
                      <p className="text-xs text-muted-foreground">{comment.timestamp}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{comment.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border bg-card/50">
        <div className="container text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest insights on autonomous resource management
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:border-accent outline-none transition-colors"
              />
              <Button className="bg-accent hover:bg-accent/90">Subscribe</Button>
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
