import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ChatWidget } from '@/components/chat/ChatWidget'
import { MarkdownPage } from '@/components/common/MarkdownPage'

// Pages
import HomePage from '@/pages/index'
import PricingPage from '@/pages/pricing'
import DevelopersPage from '@/pages/developers'
import BlogPage from '@/pages/blog'
import BlogPostPage from '@/pages/blog/posts/[id]'

// Markdown content
import { html as termsHtml } from '@/pages/terms.md'
import { html as privacyHtml } from '@/pages/privacy.md'
import { html as acceptableUseHtml } from '@/pages/acceptable-use.md'
import { html as slaHtml } from '@/pages/sla.md'
import AboutPage from './pages/about'

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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/terms" element={<MarkdownPage html={termsHtml} />} />
          <Route
            path="/privacy"
            element={<MarkdownPage html={privacyHtml} />}
          />
          <Route
            path="/acceptable-use"
            element={<MarkdownPage html={acceptableUseHtml} />}
          />
          <Route path="/sla" element={<MarkdownPage html={slaHtml} />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
        </Routes>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  )
}

export default App
