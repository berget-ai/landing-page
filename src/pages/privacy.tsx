import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-medium mb-8">Privacy Policy & DPA</h1>
          
          <div className="prose prose-invert max-w-none">
            <h2>Privacy Policy</h2>
            
            <h3>1. Data Collection</h3>
            <p>Information about what data we collect and why.</p>

            <h3>2. Data Processing</h3>
            <p>How we process and protect your data.</p>

            <h3>3. Data Storage</h3>
            <p>Where and how we store your data.</p>

            <h2>Data Processing Agreement</h2>

            <h3>1. Scope</h3>
            <p>The scope of data processing activities.</p>

            <h3>2. Data Protection</h3>
            <p>Our commitments to protecting your data.</p>

            <h3>3. EU Data Transfers</h3>
            <p>How we handle data within the EU.</p>

            <h3>4. Security Measures</h3>
            <p>Technical and organizational measures we implement.</p>

            <h3>5. Breach Notification</h3>
            <p>Our process for handling and notifying of data breaches.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
