import { Header } from '@/components/layout/Header'
import { CodeBlock } from '@/components/common/CodeBlock'
import { GetStarted } from '@/components/sections/GetStarted'
import { ModelInference } from '@/components/sections/ModelInference'
import { NetworkConnectivity } from '@/components/sections/NetworkConnectivity'
import { Overview } from '@/components/sections/Overview'

export default function DevelopersPage() {
  return (
    <main className="min-h-screen pt-24">
      <GetStarted />
      <ModelInference />
      <NetworkConnectivity />
      <Overview />
      <RagRecipes />
    </main>
  )
}
