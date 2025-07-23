import { useMemo } from 'react'

export function useEnvironment() {
  const isStage = useMemo(() => {
    if (typeof window === 'undefined') {
      return false
    }
    const hostname = window.location.hostname
    return hostname === 'stage.berget.ai' || hostname === 'localhost' || hostname === '127.0.0.1'
  }, [])

  const consoleUrl = useMemo(() => {
    if (typeof window === 'undefined') {
      return 'https://console.berget.ai'
    }
    
    const hostname = window.location.hostname
    if (hostname === 'stage.berget.ai' || hostname === 'localhost' || hostname === '127.0.0.1') {
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
