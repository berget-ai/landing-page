import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function AcceptableUsePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-medium mb-8">Acceptable Use Policy</h1>
          
          <div className="prose prose-invert max-w-none">
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
