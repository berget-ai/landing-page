import React from 'react';
import { BlogPresentation, SlideTitle, SlideText, SlideList, SlideListItem, SlideCode, SlideTable, SlideTwoColumn } from './BlogPresentation';

interface PresentationTemplateProps {
  title: string;
  subtitle?: string;
  author?: string;
  theme?: 'white' | 'black' | 'night';
  children: React.ReactNode;
}

/**
 * A template component for creating blog presentations with consistent styling
 * 
 * Usage example:
 * 
 * ```tsx
 * <PresentationTemplate 
 *   title="My Presentation"
 *   subtitle="An amazing talk"
 *   author="John Doe"
 *   theme="white"
 * >
 *   <BlogPresentation
 *     title="My Presentation"
 *     slides={[
 *       {
 *         id: 'title',
 *         content: (
 *           <>
 *             <SlideTitle>My Presentation</SlideTitle>
 *             <SlideText>An amazing talk about something important</SlideText>
 *           </>
 *         )
 *       },
 *       {
 *         id: 'content',
 *         title: "Main Content",
 *         content: (
 *           <SlideList>
 *             <SlideListItem icon="🚀">Point one</SlideListItem>
 *             <SlideListItem icon="💡">Point two</SlideListItem>
 *           </SlideList>
 *         )
 *       }
 *     ]}
 *   />
 * </PresentationTemplate>
 * ```
 */
export const PresentationTemplate: React.FC<PresentationTemplateProps> = ({
  theme = 'white',
  children,
}) => {
  return (
    <div className={`presentation-template theme-${theme}`}>
      {children}
    </div>
  );
};

// Helper function to create common slide types
export const createTitleSlide = (title: string, subtitle?: string, author?: string) => ({
  id: 'title',
  center: true,
  content: (
    <>
      <SlideTitle>{title}</SlideTitle>
      {subtitle && <SlideText large>{subtitle}</SlideText>}
      {author && <SlideText>{author}</SlideText>}
    </>
  ),
});

export const createContentSlide = (title: string, content: React.ReactNode, center?: boolean) => ({
  id: title.toLowerCase().replace(/\s+/g, '-'),
  title,
  center,
  content,
});

export const createListSlide = (title: string, items: Array<{ text: string; icon?: string }>) => ({
  id: title.toLowerCase().replace(/\s+/g, '-'),
  title,
  content: (
    <SlideList>
      {items.map((item, index) => (
        <SlideListItem key={index} icon={item.icon}>
          {item.text}
        </SlideListItem>
      ))}
    </SlideList>
  ),
});

export const createCodeSlide = (title: string, code: string, language?: string) => ({
  id: title.toLowerCase().replace(/\s+/g, '-'),
  title,
  content: <SlideCode language={language}>{code}</SlideCode>,
});

export const createTableSlide = (title: string, headers: string[], rows: string[][]) => ({
  id: title.toLowerCase().replace(/\s+/g, '-'),
  title,
  content: (
    <SlideTable
      headers={headers}
      rows={rows}
    />
  ),
});

export const createTwoColumnSlide = (
  title: string, 
  left: React.ReactNode, 
  right: React.ReactNode,
  ratio?: '50-50' | '60-40' | '40-60'
) => ({
  id: title.toLowerCase().replace(/\s+/g, '-'),
  title,
  content: (
    <SlideTwoColumn left={left} right={right} ratio={ratio} />
  ),
});

// Example usage component
export const ExamplePresentation: React.FC = () => {
  const slides = [
    createTitleSlide(
      "CloudNativePG vs Bitnami",
      "Varför välja en native operator",
      "Christian Landgren"
    ),
    createListSlide("Key Benefits", [
      { text: "Automatic failover", icon: "🔄" },
      { text: "Built-in backup", icon: "💾" },
      { text: "Multi-version support", icon: "🔧" },
      { text: "Production ready", icon: "✅" },
    ]),
    createCodeSlide("Simple Setup", `apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: postgres-dev
spec:
  instances: 1
  bootstrap:
    initdb:
      database: app_dev
      owner: app_user`, 'yaml'),
    createTableSlide(
      "Comparison",
      ["Feature", "Bitnami", "CloudNativePG"],
      [
        ["HA", "Manual", "Automatic"],
        ["Backup", "Basic", "Enterprise"],
        ["Version Support", "Latest only", "Multi-version"],
      ]
    ),
  ];

  return (
    <PresentationTemplate 
      title="CloudNativePG vs Bitnami"
      subtitle="Varför välja en native operator"
      author="Christian Landgren"
    >
      <BlogPresentation
        title="CloudNativePG vs Bitnami PostgreSQL"
        subtitle="Varför välja en native operator för din databas"
        author="Christian Landgren"
        slides={slides}
        theme="white"
        transition="slide"
      />
    </PresentationTemplate>
  );
};

export default PresentationTemplate;