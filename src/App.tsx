import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { ModelInference } from '@/components/sections/ModelInference';
import { NetworkConnectivity } from '@/components/sections/NetworkConnectivity';
import { RagRecipes } from '@/components/sections/RagRecipes';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { Success } from '@/components/sections/Success';
import { ChatWidget } from '@/components/chat/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-background text-white antialiased">
      <div className="fixed inset-0 bg-[linear-gradient(to_bottom,rgba(229,221,213,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(229,221,213,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <Header />
      <main>
        <Hero />
        <Features />
        <ModelInference />
        <NetworkConnectivity />
        <RagRecipes />
        <Testimonials />
        <Success />
        <Pricing />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;