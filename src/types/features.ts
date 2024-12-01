export type FeatureCategory = 'ai' | 'infrastructure' | 'security' | 'developer';

export interface Feature {
  id: string;
  title: string;
  description: string;
  category: FeatureCategory;
  icon: string;
  highlights: {
    title: string;
    description: string;
  }[];
  cta?: {
    label: string;
    href: string;
  };
}

export interface FeatureSection {
  category: FeatureCategory;
  title: string;
  description: string;
  features: Feature[];
}
