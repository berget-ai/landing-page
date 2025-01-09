import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-medium mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using Berget AI's services, you agree to be bound by these Terms of Service.</p>

            <h2>2. Service Description</h2>
            <p>Berget AI provides cloud infrastructure and AI services within the European Union.</p>

            <h2>3. User Obligations</h2>
            <p>Users must comply with all applicable laws and regulations when using our services.</p>

            <h2>4. Service Level Agreement</h2>
            <p>Details of our service commitments and availability guarantees.</p>

            <h2>5. Intellectual Property</h2>
            <p>Rights and responsibilities regarding intellectual property.</p>

            <h2>6. Limitation of Liability</h2>
            <p>Scope and limits of Berget AI's liability.</p>

            <h2>7. Termination</h2>
            <p>Conditions under which services may be terminated.</p>

            <h2>8. Governing Law</h2>
            <p>These terms are governed by Swedish law.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
