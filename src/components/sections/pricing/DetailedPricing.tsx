import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PricingRow {
  name: string;
  description?: string;
  sek?: string;
  eur?: string;
  badge?: string;
  tooltip?: string;
}

const inferenceModels: PricingRow[] = [
  {
    name: "Llama 3.1 405B Instruct",
    eur: "Input: €5 / M tokens\nOutput: €15 / M tokens",
    badge: "Popular",
    tooltip: "Most used model for general text generation"
  },
  {
    name: "Llama 3.1 70B Nemotron",
    eur: "Input: €1.99 / M tokens\nOutput: €7.99 / M tokens",
    tooltip: "Optimized for Swedish language"
  },
  {
    name: "Mixtral 8x7B Instruct",
    eur: "Input: €3 / M tokens\nOutput: €9 / M tokens",
    tooltip: "High performance mixture-of-experts model"
  },
  {
    name: "Whisper Large v3",
    eur: "€19.99 / hour of audio",
    tooltip: "Speech recognition and translation"
  },
  {
    name: "Stable Diffusion XL",
    eur: "€0.29 / image",
    tooltip: "High quality image generation"
  }
];

const networkPricing: PricingRow[] = [
  {
    name: "Shared IPv4 address",
    description: "Always included",
    badge: "Included"
  },
  {
    name: "Dedicated IPv4 address",
    eur: "€49 / month",
    tooltip: "Static IP for whitelisting"
  },
  {
    name: "VPN Connection",
    eur: "€99 / month",
    tooltip: "Secure private network connection"
  },
  {
    name: "AWS Direct Connect",
    eur: "€499 / month",
    tooltip: "Dedicated connection to AWS"
  },
  {
    name: "Azure ExpressRoute",
    sek: "4999 / month",
    eur: "499 / month",
    tooltip: "Dedicated connection to Azure"
  },
  {
    name: "Egress traffic",
    description: "Free up to 1TB/month, then €0.009/GB",
    badge: "Free tier"
  }
];

const storageOptions: PricingRow[] = [
  {
    name: "Standard Storage",
    sek: "0.19 / GB / month",
    eur: "0.019 / GB / month",
    tooltip: "General purpose storage"
  },
  {
    name: "High-Performance Storage",
    sek: "0.49 / GB / month",
    eur: "0.049 / GB / month",
    tooltip: "SSD-backed storage for high IOPS"
  },
  {
    name: "Vector Database",
    sek: "0.99 / GB / month",
    eur: "0.099 / GB / month",
    tooltip: "Optimized for embeddings storage"
  },
  {
    name: "Backup Storage",
    sek: "0.09 / GB / month",
    eur: "0.009 / GB / month",
    tooltip: "Long-term data retention"
  }
];

const supportTiers: PricingRow[] = [
  {
    name: "Community Support",
    description: "Forum & Documentation",
    badge: "Free",
    tooltip: "Community-based support"
  },
  {
    name: "Developer Support",
    sek: "4999 / month",
    eur: "499 / month",
    tooltip: "Email support with 24h response time"
  },
  {
    name: "Business Support",
    sek: "19999 / month",
    eur: "1999 / month",
    tooltip: "24/7 support with 1h response time"
  },
  {
    name: "Enterprise Support",
    description: "Custom SLA & Dedicated TAM",
    tooltip: "Tailored support package"
  }
];

const computeResources: PricingRow[] = [
  {
    name: "CPU Allocation",
    eur: "€0.04 / vCPU / hour",
    tooltip: "Virtual CPU core allocation"
  },
  {
    name: "Memory Allocation",
    eur: "€0.005 / GB / hour",
    tooltip: "RAM allocation"
  },
  {
    name: "AMD MI300 GPU",
    eur: "€4.99 / hour",
    tooltip: "192GB HBM3 memory GPU"
  },
  {
    name: "Multi-GPU Instance",
    eur: "From €18.99 / hour",
    tooltip: "4x AMD MI300 GPUs with NVLink"
  },
  {
    name: "Reserved GPU Instance",
    description: "1-year commitment",
    eur: "From €2.99 / hour",
    tooltip: "Discounted rate with 1-year commitment"
  }
];

const customServices: PricingRow[] = [
  {
    name: "Dedicated GPU Instances",
    description: "From 9999 SEK/month per A100",
    tooltip: "Dedicated GPU resources for your models"
  },
  {
    name: "Model Fine-tuning",
    description: "From 4999 SEK per training job",
    tooltip: "Customize models for your needs"
  },
  {
    name: "Custom Model Deployment",
    description: "From 1999 SEK per model",
    tooltip: "Deploy your own models"
  },
  {
    name: "Consulting Services",
    description: "1499 SEK/hour",
    tooltip: "Expert guidance and implementation"
  }
];

function PricingSection({ title, rows }: { title: string; rows: PricingRow[] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{title}</h3>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[400px]">Service</TableHead>
            <TableHead>Price (EUR)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} className="group">
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  {row.name}
                  {row.badge && (
                    <Badge variant="secondary" className="group-hover:bg-white/15">
                      {row.badge}
                    </Badge>
                  )}
                  {row.tooltip && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-4 h-4 text-white/40" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{row.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
                {row.description && (
                  <div className="text-sm text-white/60 mt-1">{row.description}</div>
                )}
              </TableCell>
              <TableCell>{row.eur || "—"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export function DetailedPricing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <PricingSection title="Serverless Inference" rows={inferenceModels} />
      <PricingSection title="Compute Resources" rows={computeResources} />
      <PricingSection title="Network & Connectivity" rows={networkPricing} />
      <PricingSection title="Storage Options" rows={storageOptions} />
      <PricingSection title="Support Plans" rows={supportTiers} />
      <PricingSection title="Professional Services" rows={customServices} />
    </div>
  );
}
