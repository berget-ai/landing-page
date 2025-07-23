import { useMemo } from 'react'

export function useEnvironment() {
  const isStage = useMemo(() => {
    if (typeof window === 'undefined') {
      return false
    }
    const hostname = window.location.hostname
    return hostname === 'stage.berget.ai' || hostname === 'localhost' || hostname === '127.0.0.1'
  }, [])

  const urls = useMemo(() => {
    if (typeof window === 'undefined') {
      return {
        console: 'https://console.berget.ai',
        api: 'https://api.berget.ai',
        docs: 'https://docs.berget.ai'
      }
    }
    
    const hostname = window.location.hostname
    const isStageEnv = hostname === 'stage.berget.ai' || hostname === 'localhost' || hostname === '127.0.0.1'
    
    if (isStageEnv) {
      return {
        console: 'https://console.stage.berget.ai',
        api: 'https://api.stage.berget.ai',
        docs: 'https://docs.stage.berget.ai'
      }
    }
    
    return {
      console: 'https://console.berget.ai',
      api: 'https://api.berget.ai',
      docs: 'https://docs.berget.ai'
    }
  }, [])

  return {
    isStage,
    isProd: !isStage,
    urls,
    // Bakåtkompatibilitet
    consoleUrl: urls.console
  }
}
