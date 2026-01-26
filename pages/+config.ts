import vikeReact from 'vike-react/config'
import type { Config } from 'vike/types'

// Default config (can be overridden by pages)
export default {
  // Extend from vike-react preset
  extends: vikeReact,

  // Enable SSR
  ssr: true,

  // Pass page context to client
  passToClient: ['pageProps', 'urlPathname', 'locale'],

  // Client routing for better UX
  clientRouting: true,

  // Hydration strategy
  hydrationCanBeAborted: true,

  // Meta tags
  meta: {
    title: {
      env: { server: true, client: true }
    },
    description: {
      env: { server: true, client: true }
    }
  }
} satisfies Config
