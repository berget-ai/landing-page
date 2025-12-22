import { SEOHelmet } from '@/components/common/Helmet'

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Test Page',
    description: 'Test page for SSR verification'
  };

  return (
    <>
      <SEOHelmet
        title="Test - Berget AI"
        description="Test page to verify SSR works correctly"
        language="sv"
        type="website"
        path="/test"
        keywords={['Test', 'SSR', 'Vike']}
        jsonLd={jsonLd}
      />
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-5xl font-medium mb-4">SSR Test Page</h1>
            <p className="text-xl text-white/60 mb-8">
              This is a test page to verify that SSR is working correctly.
            </p>
            <div className="bg-white/10 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-medium mb-4">✅ SSR Features Working:</h2>
              <ul className="text-left space-y-2 text-white/80">
                <li>✅ Server-side rendering</li>
                <li>✅ Helmet meta tags</li>
                <li>✅ JSON-LD structured data</li>
                <li>✅ Canonical URLs</li>
                <li>✅ Language tags</li>
              </ul>
            </div>
            <a 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-colors"
            >
              Tillbaka till startsidan
            </a>
          </div>
        </div>
      </main>
    </>
  )
}