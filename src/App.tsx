import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ChatWidget } from '@/components/chat/ChatWidget'

// Pages
import HomePage from '@/pages/index'
import PricingPage from '@/pages/pricing'
import TermsPage from '@/pages/terms'
import PrivacyPage from '@/pages/privacy'
import SecurityPage from '@/pages/security'
import AcceptableUsePage from '@/pages/acceptable-use'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-white antialiased">
        <div className="fixed inset-0 bg-[linear-gradient(to_bottom,rgba(229,221,213,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(229,221,213,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="flex justify-end p-4">
          <LanguageSwitcher />
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/acceptable-use" element={<AcceptableUsePage />} />
        </Routes>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  )
}

export default App
