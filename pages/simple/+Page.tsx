export default function Page() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl font-medium mb-4 text-white">🚀 SSR Test</h1>
          <p className="text-xl text-white/60 mb-8">
            This is a simple test page to verify that Vike SSR is working.
          </p>
          <div className="bg-white/10 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-medium mb-4 text-white">Features:</h2>
            <ul className="text-left space-y-2 text-white/80">
              <li>✅ Server-side rendering</li>
              <li>✅ Vike framework</li>
              <li>✅ TypeScript</li>
              <li>✅ Tailwind CSS</li>
            </ul>
          </div>
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </main>
  )
}