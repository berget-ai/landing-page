import { motion } from 'framer-motion';

const logos = [
  {
    name: 'Company 1',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=128&h=128&fit=crop&auto=format'
  },
  {
    name: 'Company 2',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=128&h=128&fit=crop&auto=format'
  },
  {
    name: 'Company 3',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=128&h=128&fit=crop&auto=format'
  },
  {
    name: 'Company 4',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=128&h=128&fit=crop&auto=format'
  }
];

export function ClientLogos() {
  return (
    <div className="space-y-6">
      <p className="text-center text-sm text-white/40">
        Trusted by leading companies across Europe
      </p>
      
      <div className="flex justify-center items-center gap-12">
        {logos.map((logo, index) => (
          <motion.div
            key={logo.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
            className="relative w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm p-3"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-full" />
            <img
              src={logo.url}
              alt={logo.name}
              className="w-full h-full object-contain opacity-50 grayscale"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}