import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { ModelInference } from '@/components/sections/ModelInference';
import { Compliance } from '@/components/sections/Compliance';
import { Sustainability } from '@/components/sections/Sustainability';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { ChatWidget } from '@/components/chat/ChatWidget';
import { RagRecipes } from './components/sections/RagRecipes';
import { Success } from './components/sections/Success';

function App() {
  return (
    <div className="min-h-screen bg-background text-white antialiased">
      <div className="fixed inset-0 bg-[linear-gradient(to_bottom,rgba(229,221,213,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(229,221,213,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <Header />
      <main>
        <Hero />
        <Features />
        <ModelInference />
        <Compliance />
        <Sustainability />
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
