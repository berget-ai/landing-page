import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Custom theme colors
export const themeColors = {
  primary: '#52B788',
  secondary: '#74C69D',
  accent: '#FFB700',
  background: '#1A1A1A',
  foreground: '#FFFFFF',
  muted: '#2D6A4F',
  border: '#40916C'
}
