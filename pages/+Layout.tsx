import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { HeaderVike } from '@/components/layout/HeaderVike'
import { Footer } from '@/components/layout/Footer'
import '@/index.css'
import '@/i18n'

export default function Layout({ children }: { children: React.ReactNode }) {
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
