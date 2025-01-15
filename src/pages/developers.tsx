import { useTranslation } from 'react-i18next'
import { Code, Cloud, Lock, Git, BarChart3, Cpu } from 'lucide-react'
import { Typewriter } from '@/components/ui/typewriter'

export default function DevelopersPage() {
  const { t } = useTranslation()

  const sections = [
    {
      icon: Code,
      title: t('developers.byDevsForDevs.title'),
      description: t('developers.byDevsForDevs.description'),
      typewriterWords: [
        'Build',
        'Deploy',
        'Scale',
        'Innovate'
      ]
    },
    {
      icon: Cloud,
      title: t('developers.modelInference.title'),
      description: t('developers.modelInference.description'),
    },
    {
      icon: Cpu,
      title: t('developers.kubernetes.title'),
      description: t('developers.kubernetes.description'),
    },
    {
      icon: Lock,
      title: t('developers.secureInfra.title'),
      description: t('developers.secureInfra.description'),
    },
    {
      icon: Git,
      title: t('developers.gitops.title'),
      description: t('developers.gitops.description'),
    },
    {
      icon: BarChart3,
      title: t('developers.costControl.title'),
      description: t('developers.costControl.description'),
    },
  ]

  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors duration-300"
            >
              <section.icon className="w-8 h-8 mb-4 text-[#40916C]" />
              <h3 className="text-xl font-medium mb-2">
                {section.title}
                {section.typewriterWords && (
                  <div className="mt-2">
                    <Typewriter
                      text={section.typewriterWords}
                      speed={70}
                      className="text-[#40916C]"
                      waitTime={1500}
                      deleteSpeed={40}
                      cursorChar="_"
                    />
                  </div>
                )}
              </h3>
              <p className="text-white/60">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
