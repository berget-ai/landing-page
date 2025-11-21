import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import '@/index.css'
import '@/i18n'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background text-white antialiased">
        <div className="fixed inset-0 bg-[linear-gradient(to_bottom,rgba(229,221,213,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(229,221,213,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="flex justify-end p-4">
          <LanguageSwitcher />
        </div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </HelmetProvider>
  )
}
