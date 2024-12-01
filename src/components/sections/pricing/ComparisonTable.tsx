import { Check, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Feature {
  name: string;
  description?: string;
  berget: boolean;
  aws: boolean;
  azure: boolean;
  gcp: boolean;
}

const features: Feature[] = [
  {
    name: 'EU Data Residency',
    description: 'All data stays within EU borders',
    berget: true,
    aws: true,
    azure: true,
    gcp: true
  },
  {
    name: 'No US Cloud Act Exposure',
    description: 'Data protected from US jurisdiction',
    berget: true,
    aws: false,
    azure: false,
    gcp: false
  },
  {
    name: 'Serverless Inference',
    description: 'Pay-per-use model inference',
    berget: true,
    aws: true,
    azure: true,
    gcp: true
  },
  {
    name: 'Open Source Models',
    description: 'Access to latest open-source LLMs',
    berget: true,
    aws: false,
    azure: false,
    gcp: true
  },
  {
    name: 'Custom Model Deployment',
    description: 'Deploy your own fine-tuned models',
    berget: true,
    aws: true,
    azure: true,
    gcp: true
  },
  {
    name: 'Dedicated GPU Resources',
    description: 'Reserved GPU instances',
    berget: true,
    aws: true,
    azure: true,
    gcp: true
  },
  {
    name: 'Green Energy Powered',
    description: '100% renewable energy infrastructure',
    berget: true,
    aws: false,
    azure: true,
    gcp: true
  },
  {
    name: 'GDPR Compliant',
    description: 'Full GDPR compliance out of the box',
    berget: true,
    aws: true,
    azure: true,
    gcp: true
  },
  {
    name: 'NIS-2 Ready',
    description: 'Compliant with NIS-2 directive',
    berget: true,
    aws: false,
    azure: false,
    gcp: false
  }
];

export function ComparisonTable() {
  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left p-4 bg-white/5">Features</th>
              <th className="p-4 bg-white/5">
                <div className="text-center">
                  <div className="font-medium">Berget AI</div>
                  <div className="text-sm text-white/60">Native EU Cloud</div>
                </div>
              </th>
              <th className="p-4">
                <div className="text-center">
                  <div className="font-medium">AWS</div>
                  <div className="text-sm text-white/60">US Cloud</div>
                </div>
              </th>
              <th className="p-4">
                <div className="text-center">
                  <div className="font-medium">Azure</div>
                  <div className="text-sm text-white/60">US Cloud</div>
                </div>
              </th>
              <th className="p-4">
                <div className="text-center">
                  <div className="font-medium">GCP</div>
                  <div className="text-sm text-white/60">US Cloud</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr
                key={feature.name}
                className={cn(
                  "border-b border-white/5 hover:bg-white/[0.02] transition-colors",
                  index % 2 === 0 && "bg-white/[0.01]"
                )}
              >
                <td className="p-4">
                  <div className="font-medium">{feature.name}</div>
                  {feature.description && (
                    <div className="text-sm text-white/60">{feature.description}</div>
                  )}
                </td>
                <td className="p-4">
                  <div className="flex justify-center">
                    {feature.berget ? (
                      <Check className="w-5 h-5 text-[#22C55E]" />
                    ) : (
                      <Minus className="w-5 h-5 text-white/20" />
                    )}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex justify-center">
                    {feature.aws ? (
                      <Check className="w-5 h-5 text-white/60" />
                    ) : (
                      <Minus className="w-5 h-5 text-white/20" />
                    )}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex justify-center">
                    {feature.azure ? (
                      <Check className="w-5 h-5 text-white/60" />
                    ) : (
                      <Minus className="w-5 h-5 text-white/20" />
                    )}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex justify-center">
                    {feature.gcp ? (
                      <Check className="w-5 h-5 text-white/60" />
                    ) : (
                      <Minus className="w-5 h-5 text-white/20" />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}