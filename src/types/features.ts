export interface Feature {
  title: string;
  description: string;
  category: 'ai' | 'infrastructure' | 'security' | 'developer';
  highlights: string[];
}