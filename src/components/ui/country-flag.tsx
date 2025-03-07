import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface CountryFlagProps extends React.HTMLAttributes<HTMLDivElement> {
  /** ISO 3166-1 alpha-2 country code */
  code: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * A component that displays a country flag using static images
 * instead of SVG components from react-world-flags
 */
export function CountryFlag({ 
  code, 
  size = 'md', 
  className,
  ...props 
}: CountryFlagProps) {
  // Convert country code to lowercase for file naming
  const countryCode = code.toLowerCase();
  
  // Define sizes
  const sizeMap = {
    sm: 16,
    md: 24,
    lg: 32,
  };
  
  const pixelSize = sizeMap[size];
  
  return (
    <div 
      className={cn('relative inline-block overflow-hidden', className)}
      style={{ width: pixelSize, height: pixelSize }}
      {...props}
    >
      <Image
        src={`/flags/${countryCode}.svg`}
        alt={`Flag of ${code}`}
        width={pixelSize}
        height={pixelSize}
        className="object-cover"
        onError={(e) => {
          // Fallback to a placeholder if the flag image doesn't exist
          (e.target as HTMLImageElement).src = '/flags/placeholder.svg';
        }}
      />
    </div>
  );
}
