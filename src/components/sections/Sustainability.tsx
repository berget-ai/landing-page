import { Leaf, Recycle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const sustainabilityPoints = [
  {
    icon: Leaf,
    title: "100% Clean Energy",
    description: "All our data centers are powered by renewable energy sources, primarily from wind and solar power in the Nordic region."
  },
  {
    icon: Recycle,
    title: "Refurbished Hardware",
    description: "We extend hardware lifecycle by using certified refurbished servers, reducing e-waste while maintaining performance."
  },
  {
    icon: Zap,
    title: "Zero Fossil Fuels",
    description: "Our commitment to sustainability means completely avoiding fossil fuel energy sources in our operations."
  }
];

export function Sustainability() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-medium mb-6">Our Sustainability Pledge</h2>
          <p className="text-lg text-white/60">
            We believe in responsible AI infrastructure. Our commitment to sustainability goes beyond words - it's built into everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sustainabilityPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="mb-4">
                <point.icon className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-medium mb-3">{point.title}</h3>
              <p className="text-white/60">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
