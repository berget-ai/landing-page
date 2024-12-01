import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-white/0 group-hover:from-white/10 transition-colors" />
      
      <div className="relative space-y-4 p-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
          <Icon className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-medium">{title}</h3>
        
        <p className="text-white/60 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}