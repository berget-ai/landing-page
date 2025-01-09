import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { attributes, html } from '../../content/terms.md'

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-12">
          <div
            className="prose prose-invert prose-headings:font-medium prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl max-w-none"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
