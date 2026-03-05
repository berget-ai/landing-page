import type { PageContextServer } from 'vike/types'

export function onBeforeRoute(pageContext: PageContextServer) {
  const headers = pageContext.headersOriginal as Record<string, string | string[] | undefined> | undefined
  const acceptLang = headers?.['accept-language']
  const langStr = typeof acceptLang === 'string' ? acceptLang : ''
  const locale = langStr.startsWith('sv') ? 'sv' : 'en'

  return {
    pageContext: {
      locale,
    },
  }
}
