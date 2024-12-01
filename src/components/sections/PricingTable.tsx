interface PricingRowProps {
  name: string;
  sek?: string;
  eur?: string;
  description?: string;
}

function PricingRow({ name, sek, eur, description }: PricingRowProps) {
  return (
    <div className="grid grid-cols-3 gap-4 py-4 border-b border-white/5">
      <div className="text-sm">{name}</div>
      <div className="text-sm text-white/60">{sek || '—'}</div>
      <div className="text-sm text-white/60">{eur || '—'}</div>
      {description && (
        <div className="col-span-3 mt-1 text-sm text-white/40">{description}</div>
      )}
    </div>
  );
}

export function PricingTable() {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-lg font-medium mb-6">Serverless inference</h3>
        <div className="grid grid-cols-3 gap-4 pb-2 border-b border-white/10">
          <div className="text-sm text-white/60">Model</div>
          <div className="text-sm text-white/60">SEK</div>
          <div className="text-sm text-white/60">EUR</div>
        </div>
        <PricingRow
          name="Llama 3.1 405B Instruct"
          sek="Input: 49 / M tokens, Output: 149 / M tokens"
          eur="Input: 5 / M tokens, Output: 15 / M tokens"
        />
        <PricingRow
          name="Llama 3.1 70B Nemotron"
          sek="Input: 20 / M tokens, Output: 80 / M tokens"
          eur="Input: 1.99 / M tokens, Output: 7.99 / M tokens"
        />
      </div>

      <div>
        <h3 className="text-lg font-medium mb-6">Network & Connectivity</h3>
        <PricingRow
          name="Shared IPv4 address"
          description="Always included"
        />
        <PricingRow
          name="Dedicated IPv4 address"
          sek="XX / month"
          eur="XX / month"
        />
        <PricingRow
          name="Egress traffic"
          description="Free of charge, Fair Use"
        />
      </div>

      <div>
        <h3 className="text-lg font-medium mb-6">Custom Services</h3>
        <PricingRow
          name="Dedicated Inference"
          description="Billed based on GPU resource use"
        />
        <PricingRow
          name="Model fine-tuning"
          description="Billed based on GPU resource use"
        />
      </div>
    </div>
  );
}