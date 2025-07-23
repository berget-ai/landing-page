import { useMemo } from 'react'

export function useEnvironment() {
  const isStage = useMemo(() => {
    if (typeof window === 'undefined') {
      return false
    }
    return window.location.hostname === 'stage.berget.ai'
  }, [])

  const consoleUrl = useMemo(() => {
    if (typeof window === 'undefined') {
      return 'https://console.berget.ai'
    }
    
    if (window.location.hostname === 'stage.berget.ai') {
      return 'https://console.stage.berget.ai'
    }
    
    return 'https://console.berget.ai'
  }, [])

  return {
    isStage,
    consoleUrl,
    isProd: !isStage
  }
}
