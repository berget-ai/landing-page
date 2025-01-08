import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { GetStarted } from './GetStarted'

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-[#2D6A4F] via-[#40916C] to-[#FFB700]">
      <div className="container mx-auto px-4 py-32">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold text-white mb-6">
            A <span className="text-yellow-300">Symphony</span> of AI Agents
          </h1>
          <div className="text-2xl text-white/80 mb-8 space-y-4">
            <p>
              Discover how AI agents collaborate to solve complex tasks,
              providing a seamless and efficient AI experience.
            </p>
            <h2 className="text-4xl font-bold text-yellow-300">
              Revolutionary AI Collaboration
            </h2>
            <p>
              The "Symphony of AI Agents" is a revolutionary approach where
              multiple AI agents work together harmoniously to solve complex
              tasks, much like musicians in an orchestra.
            </p>
            <h2 className="text-4xl font-bold text-yellow-300">
              Efficient and Sustainable AI
            </h2>
            <p>
              Instead of building larger AI models for every task, we focus on
              using a combination of smaller, expert models. This approach is
              not only more efficient but also more sustainable, reducing the
              environmental impact and resource consumption.
            </p>
            <h2 className="text-4xl font-bold text-yellow-300">
              Empower Your AI Journey
            </h2>
            <p>
              Start creating your own AI agents at Berget AI. Use our recipes,
              start a new cluster, or utilize our hosted models via API
              endpoints to build powerful AI applications.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="accent" className="transition-transform hover:scale-105">
              Learn More
            </Button>
            <Button size="lg" variant="secondary" className="transition-transform hover:scale-105">
              Get Started
            </Button>
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  )
}
