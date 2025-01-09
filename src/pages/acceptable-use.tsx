import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function AcceptableUsePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-medium mb-8">Acceptable Use Policy</h1>
          
          <div className="prose prose-invert 
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
              prose-blockquote:border-l-2 prose-blockquote:border-white/20 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-white/60">
            <h2>1. Purpose</h2>
            <p>This policy outlines acceptable use of Berget AI's services.</p>

            <h2>2. Prohibited Activities</h2>
            <ul>
              <li>Illegal activities</li>
              <li>Unauthorized access attempts</li>
              <li>Distribution of malware</li>
              <li>Network abuse</li>
            </ul>

            <h2>3. Data Usage</h2>
            <p>Guidelines for appropriate data usage and storage.</p>

            <h2>4. Resource Usage</h2>
            <p>Acceptable limits for resource consumption.</p>

            <h2>5. Content Guidelines</h2>
            <p>Types of content that may not be processed or stored.</p>

            <h2>6. Monitoring</h2>
            <p>Our monitoring practices and user privacy.</p>

            <h2>7. Enforcement</h2>
            <p>How we enforce this policy and handle violations.</p>

            <h2>8. Reporting Violations</h2>
            <p>How to report suspected violations of this policy.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
