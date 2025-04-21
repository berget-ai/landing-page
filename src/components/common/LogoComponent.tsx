import React from 'react'
import { useTheme } from 'next-themes'
import logoSvg from '@/assets/logo.svg'

interface LogoComponentProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | number
  inverted?: boolean
}

export function LogoComponent({ 
  className = '', 
  size = 'md', 
  inverted = false 
}: LogoComponentProps) {
  const { theme } = useTheme()
  
  // Determine if we should invert the logo based on theme and inverted prop
  const shouldInvert = inverted ? !isDarkTheme(theme) : isDarkTheme(theme)
  
  // Calculate size in pixels
  const sizeInPx = typeof size === 'number' 
    ? size 
    : size === 'sm' ? 24 : size === 'md' ? 32 : 48
  
  return (
    <div 
      className={`inline-block ${className}`}
      style={{ 
        width: sizeInPx, 
        height: sizeInPx * 0.9 // Maintain aspect ratio
      }}
    >
      <img 
        src={logoSvg} 
        alt="Berget AI Logo" 
        className={`w-full h-full ${shouldInvert ? 'filter invert' : ''}`}
      />
    </div>
  )
}

// Helper function to determine if theme is dark
function isDarkTheme(theme: string | undefined): boolean {
  return theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
}
