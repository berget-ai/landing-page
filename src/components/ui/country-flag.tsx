import { cn } from '@/lib/utils';
import React from 'react';

interface CountryFlagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** 
   * ISO 3166-1 alpha-2 country code, or special codes like 'eu' for European Union
   */
  code: string;
  size?: 'sm' | 'md' | 'lg' | number;
}

/**
 * A component that displays a country flag using emoji characters
 */
export function CountryFlag({ 
  code, 
  size = 'md', 
  className,
  ...props 
}: CountryFlagProps) {
  // Convert country code to uppercase for regional indicator symbols
  const countryCode = code.toUpperCase();
  
  // Define sizes
  const sizeMap = {
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
  };
  
  // Handle both string sizes and custom numeric sizes
  const fontSize = typeof size === 'number' ? `${size / 16}rem` : sizeMap[size as keyof typeof sizeMap];
  
  // Special case for EU flag (no emoji available)
  if (countryCode === 'EU') {
    return (
      <span
        className={cn('inline-flex items-center justify-center', className)}
        style={{ fontSize }}
        title="European Union"
        {...props}
      >
        🇪🇺
      </span>
    );
  }
  
  // Convert country code to regional indicator symbols (emoji flags)
  // Each letter A-Z is represented by a regional indicator symbol 🇦-🇿
  // Two regional indicators together form a flag emoji
  if (countryCode.length === 2 && /^[A-Z]{2}$/.test(countryCode)) {
    const firstLetter = String.fromCodePoint(countryCode.charCodeAt(0) - 65 + 0x1F1E6);
    const secondLetter = String.fromCodePoint(countryCode.charCodeAt(1) - 65 + 0x1F1E6);
    const flagEmoji = firstLetter + secondLetter;
    
    return (
      <span
        className={cn('inline-flex items-center justify-center', className)}
        style={{ fontSize }}
        title={`Flag of ${countryCode}`}
        {...props}
      >
        {flagEmoji}
      </span>
    );
  }
  
  // Fallback for invalid country codes
  return (
    <span
      className={cn('inline-flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-sm px-1', className)}
      style={{ fontSize: `${parseInt(fontSize) * 0.7}px` }}
      title={`Unknown country code: ${code}`}
      {...props}
    >
      {countryCode}
    </span>
  );
}
