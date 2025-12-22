export default function Page() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl font-medium mb-4 text-white">🎉 Vike SSR Works!</h1>
          <p className="text-xl text-white/60 mb-8">
            Berget AI - Server-Side Rendering is now active!
          </p>
          <div className="bg-white/10 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-medium mb-4 text-white">✅ Features:</h2>
            <ul className="text-left space-y-2 text-white/80">
              <li>✅ Server-side rendering (SSR)</li>
              <li>✅ Vike framework</li>
              <li>✅ TypeScript support</li>
              <li>✅ Tailwind CSS</li>
              <li>✅ Fast page loads</li>
              <li>✅ SEO optimized</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="font-medium mb-2 text-white">🚀 Performance</h3>
              <p className="text-white/60 text-sm">Pre-rendered HTML for instant page loads</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="font-medium mb-2 text-white">🔍 SEO Ready</h3>
              <p className="text-white/60 text-sm">Perfect for search engines and social sharing</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}