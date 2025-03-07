import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface CountryFlagProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 
   * ISO 3166-1 alpha-2 country code, or special codes like 'eu' for European Union
   */
  code: string;
  size?: 'sm' | 'md' | 'lg' | number;
  fallbackText?: string;
}

/**
 * A component that displays a country flag using static images
 * instead of SVG components from react-world-flags
 */
export function CountryFlag({ 
  code, 
  size = 'md', 
  fallbackText,
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
  
  // Handle both string sizes and custom numeric sizes
  const pixelSize = typeof size === 'number' ? size : sizeMap[size as keyof typeof sizeMap];
  
  // Handle error state
  const [hasError, setHasError] = React.useState(false);
  
  return (
    <div 
      className={cn('relative inline-block overflow-hidden rounded-sm', className)}
      style={{ width: pixelSize, height: pixelSize * 0.75 }}
      {...props}
    >
      {hasError ? (
        <div 
          className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-[8px] font-mono"
          style={{ fontSize: Math.max(8, pixelSize / 3) }}
        >
          {fallbackText || code.toUpperCase()}
        </div>
      ) : (
        <Image
          src={`/flags/${countryCode}.svg`}
          alt={`Flag of ${code}`}
          width={pixelSize}
          height={pixelSize * 0.75}
          className="object-cover"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
