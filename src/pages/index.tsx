import { Hero } from '@/components/sections/Hero'
import { Overview } from '@/components/sections/Overview'
import { Features } from '@/components/sections/Features'
import { ModelInference } from '@/components/sections/ModelInference'
import { Compliance } from '@/components/sections/Compliance'
import { Sustainability } from '@/components/sections/Sustainability'
import { Testimonials } from '@/components/sections/Testimonials'
import { RagRecipes } from '@/components/sections/RagRecipes'
import { Success } from '@/components/sections/Success'
import { About } from '@/components/sections/About'
import { GetStarted } from '@/components/sections/GetStarted'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Compliance />
      <Sustainability />
      <RagRecipes />
      <RagRecipes />
      <Testimonials />
      <Success />
    </main>
  )
}
