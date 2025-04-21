import React from 'react'
import { useTheme } from 'next-themes'
import logoSvg from '@/assets/logo.svg'

interface LogoComponentProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | number
  inverted?: boolean
  variant?: 'icon' | 'full' | 'horizontal'
  withText?: boolean
  color?: string
  backgroundColor?: string
}

export function LogoComponent({ 
  className = '', 
  size = 'md', 
  inverted = false,
  variant = 'icon',
  withText = false,
  color,
  backgroundColor
}: LogoComponentProps) {
  const { theme } = useTheme()
  
  // If inverted is explicitly set, use that value
  // Otherwise, determine based on theme
  const shouldInvert = inverted !== undefined ? inverted : isDarkTheme(theme)
  
  // Calculate size in pixels
  const sizeInPx = typeof size === 'number' 
    ? size 
    : size === 'sm' ? 24 : size === 'md' ? 32 : 48
  
  // Calculate aspect ratio based on variant
  const aspectRatio = variant === 'horizontal' ? 3 : 0.9
  
  // Determine container style
  const containerStyle: React.CSSProperties = {
    width: sizeInPx,
    height: sizeInPx * aspectRatio,
    backgroundColor: backgroundColor || 'transparent',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: withText ? 'flex-start' : 'center',
    padding: withText ? '0.5rem' : 0
  }
  
  // Determine logo color
  const logoColor = color || (shouldInvert ? 'black' : 'white')
  
  return (
    <div 
      className={`inline-block ${className}`}
      style={containerStyle}
    >
      <img 
        src={logoSvg} 
        alt="Berget AI Logo" 
        className={`h-full ${shouldInvert ? 'filter invert' : ''}`}
        style={{ 
          height: '100%',
          width: 'auto',
          objectFit: 'contain'
        }}
      />
      
      {withText && (
        <span 
          className={`ml-2 font-medium ${shouldInvert ? 'text-black' : 'text-white'}`}
          style={{ color: logoColor }}
        >
          Berget AI
        </span>
      )}
    </div>
  )
}

// Helper function to determine if theme is dark
function isDarkTheme(theme: string | undefined): boolean {
  return theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
}
