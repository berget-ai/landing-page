import terms from './terms.md'

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div 
          className="prose prose-invert prose-headings:font-medium prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: terms }}
        />
      </div>
    </main>
  )
}
