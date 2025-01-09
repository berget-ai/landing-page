import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Pricing } from '@/components/sections/Pricing'
import { ComparisonTable } from '@/components/sections/pricing/ComparisonTable'

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <Pricing />
        <section className="py-24 bg-white/[0.02]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-medium mb-12">Compare with Alternatives</h2>
            <ComparisonTable />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
