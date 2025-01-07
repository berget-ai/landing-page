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
    sek: "Input: 49 / M tokens\nOutput: 149 / M tokens",
    eur: "Input: 5 / M tokens\nOutput: 15 / M tokens",
    badge: "Popular",
    tooltip: "Mest använda modellen för generell text generation"
  },
  {
    name: "Llama 3.1 70B Nemotron",
    sek: "Input: 20 / M tokens\nOutput: 80 / M tokens",
    eur: "Input: 1.99 / M tokens\nOutput: 7.99 / M tokens",
    tooltip: "Optimerad för svenska språket"
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
    sek: "XX / month",
    eur: "XX / month"
  },
  {
    name: "Egress traffic",
    description: "Free of charge, Fair Use",
    badge: "Free"
  }
];

const customServices: PricingRow[] = [
  {
    name: "Dedicated Inference",
    description: "Billed based on GPU resource use",
    tooltip: "Dedikerade GPU-resurser för dina modeller"
  },
  {
    name: "Model fine-tuning",
    description: "Billed based on GPU resource use",
    tooltip: "Anpassa modeller för dina specifika behov"
  }
];

function PricingSection({ title, rows }: { title: string; rows: PricingRow[] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{title}</h3>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[300px]">Service</TableHead>
            <TableHead>SEK</TableHead>
            <TableHead>EUR</TableHead>
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
              <TableCell>{row.sek || "—"}</TableCell>
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
    <div className="space-y-12">
      <PricingSection title="Serverless inference" rows={inferenceModels} />
      <PricingSection title="Network & Connectivity" rows={networkPricing} />
      <PricingSection title="Custom Services" rows={customServices} />
    </div>
  );
}
