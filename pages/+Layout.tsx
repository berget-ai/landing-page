import '@/index.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-white antialiased">
      <div className="flex justify-end p-4">
        <LanguageSwitcher />
      </div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
