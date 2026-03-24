/**
 * Newsletter Signup Component
 * Design: Hudson Yards institutional modernism
 * Purpose: Capture email leads for thought leadership distribution
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

interface NewsletterSignupProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  variant?: "default" | "compact" | "hero";
  className?: string;
}

export default function NewsletterSignup({
  title = "Stay Updated on ARM Agency Insights",
  subtitle = "Get the latest research, case studies, and industry trends delivered to your inbox",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  variant = "default",
  className = "",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    // Simulate API call - in production, connect to Mailchimp/ConvertKit
    setTimeout(() => {
      console.log("Newsletter signup:", { email, timestamp: new Date() });
      setSubmitted(true);
      setEmail("");
      setLoading(false);

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`glass-steel rounded-lg p-6 border border-white/10 ${className}`}
      >
        <div className="flex items-center gap-4">
          <Mail className="w-5 h-5 text-accent flex-shrink-0" />
          <form onSubmit={handleSubmit} className="flex-1 flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:border-accent outline-none transition-colors text-sm"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || submitted}
              className="px-4 py-2 bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-background rounded-lg transition-colors text-sm font-semibold flex items-center gap-2"
            >
              {submitted ? <CheckCircle className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              {submitted ? "Subscribed" : buttonText}
            </button>
          </form>
        </div>
        {error && <p className="text-destructive text-xs mt-2">{error}</p>}
      </motion.div>
    );
  }

  if (variant === "hero") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`${className}`}
      >
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:border-accent outline-none transition-colors"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || submitted}
            className="px-6 py-3 bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-background rounded-lg transition-colors font-semibold flex items-center gap-2 whitespace-nowrap"
          >
            {submitted ? <CheckCircle className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            {submitted ? "Subscribed!" : buttonText}
          </button>
        </form>

        {error && <p className="text-destructive text-sm text-center mt-3">{error}</p>}
        {submitted && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent text-sm text-center mt-3 font-semibold"
          >
            ✓ Thanks for subscribing! Check your email for confirmation.
          </motion.p>
        )}
      </motion.div>
    );
  }

  // Default variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`glass-steel rounded-lg p-8 border border-white/10 ${className}`}
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent outline-none transition-colors"
            disabled={loading}
          />
          {error && <p className="text-destructive text-sm mt-2">{error}</p>}
        </div>

        <button
          type="submit"
          disabled={loading || submitted}
          className="w-full px-4 py-3 bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-background rounded-lg transition-colors font-semibold flex items-center justify-center gap-2"
        >
          {submitted ? <CheckCircle className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
          {submitted ? "Successfully Subscribed!" : buttonText}
        </button>
      </form>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 rounded-lg bg-accent/10 border border-accent/30"
        >
          <p className="text-accent text-sm">
            Welcome to the ARM Agency community! You'll receive our latest insights, case studies, and industry research.
          </p>
        </motion.div>
      )}

      <p className="text-xs text-muted-foreground mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </motion.div>
  );
}
