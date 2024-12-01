import { motion } from 'framer-motion';
import { Quote, Shield, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: "Berget AI has transformed how we handle sensitive medical data. Their EU-compliant infrastructure gives us peace of mind.",
    author: "Dr. Anna Bergström",
    role: "CTO, HealthTech Nordic",
    company: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=128&h=128&fit=crop&auto=format"
  },
  {
    quote: "The performance and reliability of Berget's infrastructure has been crucial for our AI-powered financial services.",
    author: "Marcus Lindholm",
    role: "Head of AI, FinanceAI Solutions",
    company: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=128&h=128&fit=crop&auto=format"
  }
];

const certifications = [
  {
    name: "ISO 27001",
    description: "Information Security Management",
    icon: Shield
  },
  {
    name: "GDPR Compliant",
    description: "EU Data Protection",
    icon: CheckCircle
  },
  {
    name: "NIS-2 Ready",
    description: "Network Security",
    icon: Award
  }
];

const stats = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "50ms", label: "Avg. Latency" },
  { value: "24/7", label: "Monitoring" }
];

export function Success() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Testimonials */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-medium mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-white/60">
              See how companies across Europe are building the future with Berget AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent group-hover:from-white/10 transition-colors" />
                
                <div className="relative p-8 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors">
                  <Quote className="w-8 h-8 text-white/20 mb-6" />
                  <blockquote className="text-lg mb-6">{testimonial.quote}</blockquote>
                  
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.company}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-sm text-white/60">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Signals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium">Security & Compliance</h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5"
                >
                  <cert.icon className="w-5 h-5 text-white/60" />
                  <div>
                    <div className="font-medium">{cert.name}</div>
                    <div className="text-sm text-white/60">{cert.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Performance Stats */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium">System Performance</h3>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl bg-white/5 text-center"
                >
                  <div className="text-2xl font-medium mb-1">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="p-4 rounded-xl bg-white/5">
              <div className="mb-2 flex justify-between items-center">
                <span className="text-sm text-white/60">System Status</span>
                <span className="inline-flex items-center px-2 py-1 rounded-full bg-[#22C55E]/10 text-[#22C55E] text-sm">
                  All Systems Operational
                </span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-[99.99%] bg-[#22C55E] rounded-full" />
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium">Ready to Get Started?</h3>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-lg font-medium mb-2">Schedule a Demo</h4>
              <p className="text-white/60 mb-6">
                See how Berget AI can transform your AI infrastructure with a personalized demo.
              </p>
              <Button className="w-full">Book a Demo</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}