import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { useTranslation } from 'react-i18next'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { t } = useTranslation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const mailtoLink = `mailto:info@berget.ai?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`
      window.location.href = mailtoLink

      toast({
        title: t('contact.success.title'),
        description: t('contact.success.description'),
      })

      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      toast({
        title: t('contact.error.title'),
        description: t('contact.error.description'),
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-sm mb-6">
              <Mail className="w-4 h-4" />
              <span>{t('contact.hero.getInTouch')}</span>
            </div>
            <h1 className="text-4xl font-medium mb-4">{t('contact.hero.title')}</h1>
            <p className="text-lg text-white/60">
              {t('contact.hero.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Christian */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 rounded-2xl border border-[#74C69D]/20 bg-black/20 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <img
                      src="/team/christian.png"
                      alt="Christian Landgren"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Christian Landgren</h3>
                    <p className="text-white/60">{t('contact.team.cpto')}</p>
                  </div>
                </div>
                <a
                  href="mailto:christian@berget.ai"
                  className="inline-flex items-center gap-2 text-[#52B788] hover:text-[#74C69D] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {t('contact.team.emailCpto')}
                </a>
              </div>
            </motion.div>

            {/* Andreas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 rounded-2xl border border-[#74C69D]/20 bg-black/20 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <img
                      src="/team/andreas.png"
                      alt="Andreas Lundmark"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Andreas Lundmark</h3>
                    <p className="text-white/60">{t('contact.team.ceo')}</p>
                  </div>
                </div>
                <a
                  href="mailto:andreas@berget.ai"
                  className="inline-flex items-center gap-2 text-[#52B788] hover:text-[#74C69D] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {t('contact.team.emailCeo')}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative p-8 rounded-2xl border border-[#74C69D]/20 bg-black/20 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">{t('contact.form.name')}</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={t('contact.form.namePlaceholder')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact.form.email')}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('contact.form.emailPlaceholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.form.message')}</Label>
                  <Textarea
                    id="message"
                    placeholder={t('contact.form.messagePlaceholder')}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-[150px]"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full group"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}