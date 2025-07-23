import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Dynamiskt bestämmer rätt console URL baserat på den aktuella miljön
 * @deprecated Använd useEnvironment() hook istället
 */
export function getConsoleUrl(): string {
  if (typeof window === 'undefined') {
    // Server-side rendering - returnera production URL som fallback
    return 'https://console.berget.ai'
  }
  
  const hostname = window.location.hostname
  
  if (hostname === 'stage.berget.ai' || hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'https://console.stage.berget.ai'
  }
  
  // Production eller andra miljöer
  return 'https://console.berget.ai'
}

/**
 * Kontrollerar om vi är i stage-miljön
 * @deprecated Använd useEnvironment() hook istället
 */
export function isStageEnvironment(): boolean {
  if (typeof window === 'undefined') {
    return false
  }
  
  const hostname = window.location.hostname
  return hostname === 'stage.berget.ai' || hostname === 'localhost' || hostname === '127.0.0.1'
}
