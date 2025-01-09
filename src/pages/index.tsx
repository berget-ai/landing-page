import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { Compliance } from '@/components/sections/Compliance'
import { Sustainability } from '@/components/sections/Sustainability'
import { Testimonials } from '@/components/sections/Testimonials'
import { RagRecipes } from '@/components/sections/RagRecipes'
import { Success } from '@/components/sections/Success'

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
