import React, { useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { HeaderVike } from '@/components/layout/HeaderVike'
import { Footer } from '@/components/layout/Footer'
import '@/index.css'
// SSR-safe: initialize SSR i18n synchronously for pre-rendering
import '@/i18n-ssr'

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // On the client, re-initialize with browser-aware i18n (language detection etc.)
    import('@/i18n').catch(() => {})
  }, [])

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background text-white antialiased">
        <div className="fixed inset-0 bg-[linear-gradient(to_bottom,rgba(229,221,213,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(229,221,213,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <HeaderVike />
        <main>{children}</main>
        <Footer />
      </div>
    </HelmetProvider>
  )
}
