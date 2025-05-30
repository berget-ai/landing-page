import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MarkdownPage } from '@/components/common/MarkdownPage'
import { ScrollToTop } from '@/components/common/ScrollToTop'

// Pages
import HomePage from '@/pages/index'
import PricingPage from '@/pages/pricing'
import ProductsPage from '@/pages/products'
import WhyBergetPage from '@/pages/why-berget'
import DevelopersPage from '@/pages/developers'
import BlogPage from './pages/blog'
import BlogPostPage from './pages/blog/posts/[id]'
import AboutPage from './pages/about'
import SignupPage from './pages/signup'
import ContactPage from './pages/contact'
import ModelsPage from './pages/models'
import StatusPage from './pages/status'
import VisualIdentityGuide from './pages/VisualIdentityGuide'
import OpenSourcePage from './pages/open-source'

// Markdown content
import { html as termsHtml } from '@/pages/terms.md'
import { html as privacyHtml } from '@/pages/privacy.md'
import { html as acceptableUseHtml } from '@/pages/acceptable-use.md'
import { html as dpaHtml } from '@/pages/dpa.md'
import { html as slaHtml } from '@/pages/sla.md'
import ResponsibleDisclosurePage from './pages/responsible-disclosure'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
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
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/why-berget" element={<WhyBergetPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/models" element={<ModelsPage />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/security" element={<ResponsibleDisclosurePage />} />
          <Route path="/terms" element={<MarkdownPage html={termsHtml} />} />
          <Route path="/privacy" element={<MarkdownPage html={privacyHtml} />} />
          <Route path="/acceptable-use" element={<MarkdownPage html={acceptableUseHtml} />} />
          <Route path="/sla" element={<MarkdownPage html={slaHtml} />} />
          <Route path="/dpa" element={<MarkdownPage html={dpaHtml} />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/vig" element={<VisualIdentityGuide />} />
          <Route path="/open-source" element={<OpenSourcePage />} />
        </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App