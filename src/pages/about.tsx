import { motion } from 'framer-motion'
import { Mountain, Globe, Shield, Leaf, Users, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-5xl font-medium text-center mb-12">Our Story</h1>
            <p className="text-lg text-white/60 leading-relaxed">
              Berget AI was born out of the realization that many organizations are hindered in their pursuit of AI driven innovation - be it legal and regulatory concerns, not having the skills or capital to run train and host your own AI models, not wanting to invest upfront in GPUs, or simply not having access to relevant local language capable LLMs.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              That is why we started Berget AI. The name is Swedish for "mountain", which we have plenty of in Sweden, many of which host underground Data Centers. So why have your data in the cloud when you can have in "Berget"?
            </p>
          </motion.div>

          {/* Open Source */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-medium">Open Source & Community</h2>
            <p className="text-white/60 leading-relaxed">
              We are passionate about Open Source and Community Driven Innovation and are true believers that open source is key for safe, transparent and cost efficient AI in the future. History has plenty of examples where a determined community can overcome seemingly impossible obstacles, innovate new tools and create worldwide standards, that are open, interoperable and accessible and affordable for all.
            </p>
          </motion.div>

          {/* European Innovation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-medium">European Innovation</h2>
            <p className="text-white/60 leading-relaxed">
              We are also passionate about European competitiveness overall, and in particular in the field of AI. Europe needs to have its own AI agenda, innovation system and sovereignty, especially in an increasingly volatile geopolitical context. It needs to be enabled by EU and its members states, and driven by businesses, organizations and communities.
            </p>
          </motion.div>

          {/* Integrity & Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-medium">Integrity & Privacy</h2>
            <p className="text-white/60 leading-relaxed">
              We think integrity, data privacy and regulations are good as long as it ensures a level playing field, fosters simplicity over complexity and ensures openness and broad participation. We want to be a key enabler for European organizations and unlock AI innovations in a safe and responsible way.
            </p>
          </motion.div>

          {/* Customer Promises */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-medium">Our Customer Promises</h2>
            <p className="text-white/60 mb-6">This all boils down to our customer promises - we are ...</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-violet-400" />
                <span>... an easy way to build AI applications</span>
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-purple-400" />
                <span>... affordable and fair, no lock-ins, no hidden fees</span>
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-fuchsia-400" />
                <span>... a simple way to be compliant to key regulatory frameworks</span>
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-violet-400" />
                <span>... developer friendly, built by developers for developers</span>
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-purple-400" />
                <span>... in constant state of innovation and listen to what our customers need</span>
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-fuchsia-400" />
                <span>... contributing to positive and sustainable societal progress</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-medium mb-12 text-center">Our Team</h2>
          <p className="text-lg text-white/60 mb-12 text-center">
            We are entrepreneurs and founders with deep expertise in AI, infrastructure, and enterprise technology.
          </p>

          <div className="space-y-8">
            {/* Christian */}
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-white/5 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&auto=format"
                  alt="Christian"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-medium mb-2">Christian</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  30 years of experience helping organizations with digitalization and AI, passionate about AI and software development, deeply engaged in open source and open innovations, trusted advisor to government and public sector, challenger and technology optimist
                </p>
              </div>
            </div>

            {/* Andreas */}
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-white/5 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format"
                  alt="Andreas"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-medium mb-2">Andreas</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Was an integral part of building the AI capabilities at Boston Consulting Group (BCG Gamma) where he led the Nordic team and was globally responsible for the "AI at Scale" topic, and led multiple large scale data and AI transformations at leading global companies
                </p>
              </div>
            </div>

            {/* John */}
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-white/5 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format"
                  alt="John"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-medium mb-2">John</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  A networking and kubernetes wizard that brings deep expertise in infrastructure and cloud technologies
                </p>
              </div>
            </div>

            {/* Johan */}
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-white/5 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&auto=format"
                  alt="Johan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-medium mb-2">Johan</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  A leading Data Center network designer and builder and has helped leading enterprises and scale-ups build global multi-site compute and storage platforms
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-medium mb-6">Join Us on Our Mission</h2>
          <p className="text-lg text-white/60 mb-8">
            Help us build the future of European AI infrastructure.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="secondary">Contact Us</Button>
          </div>
        </motion.div>
      </div>
    </main>
  )
}