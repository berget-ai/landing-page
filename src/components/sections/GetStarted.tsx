import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SocialProof } from './hero/SocialProof'
import { CodeBlock } from '@/components/common/CodeBlock'
import { ClientLogos } from './hero/ClientLogos'
import { useTranslation } from 'react-i18next'

export function GetStarted() {
  const { t } = useTranslation()

  return (
    <div className="container mx-auto px-4 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-medium leading-tight mb-6">
            {t('getStarted.title.part1')}
            <br />
            <span className="text-white">
              {t('getStarted.title.part2')}
            </span>{' '}
            {t('getStarted.title.part3')}
          </h1>

          <p className="text-xl text-white/60 mb-8 leading-relaxed">
            {t('getStarted.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="group">
              {t('getStarted.startBuilding')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="secondary">
              {t('getStarted.bookDemo')}
            </Button>
          </div>

          <SocialProof />

          <div className="mt-24 lg:hidden">
            <ClientLogos />
          </div>
        </div>

        <div className="lg:pl-8">
          <CodeBlock title="By devs for devs">
            <div className="text-white/60">
              $ <span className="text-white">npm i -g berget</span>
            </div>
            <div className="text-white/60">
              $ <span className="text-white">berget login</span>
            </div>
            <div className="text-emerald-400/80">... loggar in med BankID</div>
            <div className="text-white/60">
              $ <span className="text-white">berget create cluster</span>
            </div>
            <div className="text-emerald-400/80">Done! 5 nodes created.</div>
            <div className="text-emerald-400/80">
              Assigned DNS: ideal-palmtree.berget.cloud
            </div>
            <div className="text-white/60 mt-2">
              Nu är ditt kluster redo att användas. Nu kan du börja köra dina
              applikationer.
            </div>
            <div className="text-white/60">
              Du kan peka ett CNAME till klustret.
            </div>
            <div className="mt-2">
              <div className="text-white/60">
                ${' '}
                <span className="text-white">
                  berget apply -f deployment.yaml
                </span>
              </div>
              <div className="text-white/60 mt-2">
                Tips: använd fluxcd för att automatiskt hålla klustret
                uppdaterat.
              </div>
            </div>
          </CodeBlock>
        </div>
      </div>

      <div className="hidden lg:block mt-24">
        <ClientLogos />
      </div>
    </div>
  )
}
