import { Header } from '@/components/layout/Header'
import { CodeBlock } from '@/components/common/CodeBlock'
import { GetStarted } from '@/components/sections/GetStarted'
import { ModelInference } from '@/components/sections/ModelInference'
import { NetworkConnectivity } from '@/components/sections/NetworkConnectivity'

export default function DevelopersPage() {
  return (
    <main className="min-h-screen pt-24">
      <GetStarted />
      <ModelInference />
      <NetworkConnectivity />
    </main>
  )
}
