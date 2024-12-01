import { Users, Cpu, Database, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const metrics = [
  {
    icon: Users,
    value: '500+',
    label: 'Enterprise Clients'
  },
  {
    icon: Cpu,
    value: '1B+',
    label: 'Daily Requests'
  },
  {
    icon: Database,
    value: '99.99%',
    label: 'Uptime SLA'
  },
  {
    icon: Shield,
    value: 'ISO 27001',
    label: 'Certified'
  }
];

export function SocialProof() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
          className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm"
        >
          <metric.icon className="w-5 h-5 mb-2 text-white/60" />
          <div className="text-2xl font-medium mb-1">{metric.value}</div>
          <div className="text-sm text-white/60">{metric.label}</div>
        </motion.div>
      ))}
    </div>
  );
}