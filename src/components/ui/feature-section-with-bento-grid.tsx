import { ReactNode } from "react";
import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FeatureProps {
  title?: string;
  description?: string;
  badge?: string;
  items?: {
    icon: ReactNode;
    title: string;
    description: string;
    span?: "col" | "row" | "both" | "none";
  }[];
}

function Feature({ title = "Something new!", description = "Managing a small business today is already tough.", badge = "Platform", items = [] }: FeatureProps) {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>{badge}</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                {title}
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                {description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div 
                key={index}
                className={`bg-muted rounded-md p-6 flex justify-between flex-col ${
                  item.span === "col" || item.span === "both" 
                    ? "lg:col-span-2" 
                    : ""
                } ${
                  item.span === "row" || item.span === "both"
                    ? "lg:row-span-2"
                    : ""
                } ${
                  item.span === "none" ? "aspect-square" : "aspect-square lg:aspect-auto"
                }`}
              >
                {item.icon || <User className="w-8 h-8 stroke-1" />}
                <div className="flex flex-col">
                  <h3 className="text-xl tracking-tight">{item.title}</h3>
                  <p className="text-muted-foreground max-w-xs text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
