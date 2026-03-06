import { useState, useEffect } from 'react'

function isStageHostname(hostname: string) {
  return (
    hostname === 'stage.berget.ai' ||
    hostname === 'localhost' ||
    hostname === '127.0.0.1'
  )
}

export function useEnvironment() {
  const [isStage, setIsStage] = useState(false)
  const [consoleUrl, setConsoleUrl] = useState('https://console.berget.ai')

  useEffect(() => {
    const hostname = window.location.hostname
    if (isStageHostname(hostname)) {
      setIsStage(true)
      setConsoleUrl('https://console.stage.berget.ai')
    }
  }, [])

  return {
    isStage,
    consoleUrl,
    isProd: !isStage,
  }
}
