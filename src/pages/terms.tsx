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
            className="prose prose-invert 
              max-w-none
              prose-headings:font-medium 
              prose-h1:text-4xl prose-h1:mb-8
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-base prose-p:leading-relaxed prose-p:text-white/80
              prose-ul:my-6 prose-ul:list-disc
              prose-li:text-white/80
              prose-strong:text-white prose-strong:font-medium
              prose-a:text-blue-400 hover:prose-a:text-blue-300
              prose-blockquote:border-l-2 prose-blockquote:border-white/20 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-white/60"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
