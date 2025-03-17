import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface TerminalExample {
  title: string
  description: string
  commands: {
    command: string
    output?: string[]
    delay?: number
  }[]
}

const examples: TerminalExample[] = [
  {
    title: 'Skapa ett kluster',
    description: 'Kom igång med ett nytt Berget-kluster på några sekunder',
    commands: [
      { command: 'npm i -g berget' },
      { command: 'berget login', output: ['... loggar in med BankID'] },
      {
        command: 'berget create cluster',
        output: [
          'Done! 5 nodes created.',
          'Assigned DNS: ideal-palmtree.berget.cloud',
          'Nu är ditt kluster redo att användas. Nu kan du börja köra dina applikationer. Du kan peka ett CNAME till klustret.',
        ],
      },
      { command: 'berget apply -f deployment.yaml' },
    ],
  },
  {
    title: 'Installera FluxCD för GitOps',
    description: 'Automatisera deployment med FluxCD och GitOps-workflow',
    commands: [
      { command: 'berget login', output: ['... loggar in med BankID'] },
      { 
        command: 'berget cluster list', 
        output: [
          'NAME                   STATUS    NODES    CREATED',
          'ideal-palmtree         Running   5        2 days ago'
        ] 
      },
      { 
        command: 'berget flux install --cluster ideal-palmtree', 
        output: [
          'Installing Flux components...',
          '✓ Flux components installed successfully',
          '',
          'Now you can bootstrap Flux with your Git repository:'
        ] 
      },
      { 
        command: 'berget flux bootstrap github --owner=myorg --repository=k8s-config --path=clusters/ideal-palmtree --personal', 
        output: [
          '► connecting to github.com',
          '► cloning repository',
          '► generating manifests',
          '► committing changes',
          '✓ bootstrap completed',
          '',
          'Now Flux will automatically sync your repository with your cluster.',
          'Any changes you push to the repository will be applied to your cluster.'
        ] 
      }
    ],
  },
  {
    title: 'Bjud in kollegor till klustret',
    description: 'Samarbeta med ditt team genom att bjuda in dem till ditt kluster',
    commands: [
      { command: 'berget login', output: ['... loggar in med BankID'] },
      { 
        command: 'berget cluster list', 
        output: [
          'NAME                   STATUS    NODES    CREATED',
          'ideal-palmtree         Running   5        2 days ago',
          'curious-elephant       Running   3        1 week ago'
        ] 
      },
      { 
        command: 'berget collaborator add --cluster ideal-palmtree --github-username kollega123', 
        output: [
          'Invitation sent to kollega123',
          'They will receive an email with instructions to accept the invitation',
          '',
          'Current collaborators on ideal-palmtree:',
          'USERNAME      ROLE       STATUS',
          'you           Owner      Active',
          'kollega123    Editor     Pending'
        ] 
      },
      { 
        command: 'berget collaborator list --cluster ideal-palmtree', 
        output: [
          'USERNAME      ROLE       STATUS',
          'you           Owner      Active',
          'kollega123    Editor     Pending'
        ] 
      }
    ],
  },
  {
    title: 'AI-anrop med OpenAI-kompatibelt API',
    description: 'Använd vårt API precis som du skulle använda OpenAI',
    commands: [
      {
        command: 'export OPENAI_API_KEY=berget_sk_xxxx',
        output: ['# Din API-nyckel från Berget Dashboard'],
      },
      {
        command:
          'curl -s -X POST https://api.berget.ai/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -H "Authorization: Bearer $OPENAI_API_KEY" \\\n  -d \'{"model": "gemma-3", "messages": [{"role": "user", "content": "Vad är Sveriges högsta berg?"}]}\' | jq -r \'.choices[0].message.content\'',
        output: [
          'Sveriges högsta berg är Kebnekaise med en höjd på 2096 meter över havet.',
        ],
      },
    ],
  },
  {
    title: 'Installera MongoDB med Helm',
    description:
      'Lägg till databaser och andra tjänster med ett enkelt kommando',
    commands: [
      { command: 'berget login', output: ['... loggar in med BankID'] },
      {
        command:
          'berget helm repo add bitnami https://charts.bitnami.com/bitnami',
        output: ['"bitnami" has been added to your repositories'],
      },
      {
        command:
          'berget helm install mongodb bitnami/mongodb --set auth.rootPassword=secretpassword',
        output: [
          'NAME: mongodb',
          'NAMESPACE: default',
          'STATUS: deployed',
          'REVISION: 1',
          'MongoDB can be accessed on the following DNS name from within your cluster:',
          'mongodb.default.svc.cluster.local',
        ],
      },
      {
        command: 'berget get pods',
        output: [
          'NAME                      READY   STATUS    RESTARTS   AGE',
          'mongodb-75f59d57c-xm7q9   1/1     Running   0          45s',
        ],
      },
    ],
  },
  {
    title: 'Installera Supabase',
    description: 'Sätt upp Supabase på ditt Berget-kluster',
    commands: [
      {
        command: 'berget create namespace supabase',
        output: ['namespace/supabase created'],
      },
      {
        command:
          'berget helm repo add supabase https://supabase.github.io/helm-charts',
        output: ['"supabase" has been added to your repositories'],
      },
      {
        command: 'berget helm install supabase supabase/supabase -n supabase',
        output: [
          'NAME: supabase',
          'NAMESPACE: supabase',
          'STATUS: deployed',
          'REVISION: 1',
          'NOTES:',
          'Supabase has been installed. Check its status by running:',
          '  kubectl --namespace supabase get pods',
        ],
      },
      {
        command: 'berget get svc -n supabase',
        output: [
          'NAME                TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE',
          'supabase-db         ClusterIP   10.100.158.24    <none>        5432/TCP         1m',
          'supabase-kong       ClusterIP   10.100.33.125    <none>        8000/TCP         1m',
          'supabase-studio     ClusterIP   10.100.107.238   <none>        3000/TCP         1m',
        ],
      },
    ],
  },
]

export function TerminalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [typingIndex, setTypingIndex] = useState(0)
  const [commandIndex, setCommandIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [showOutput, setShowOutput] = useState(false)
  const [outputIndex, setOutputIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const currentExample = examples[currentIndex]
  const currentCommand =
    currentExample.commands[commandIndex] || examples[0].commands[0]

  useEffect(() => {
    // Reset state when changing examples
    setTypingIndex(0)
    setCommandIndex(0)
    setTypedText('')
    setShowOutput(false)
    setOutputIndex(0)
    setIsTyping(true)
  }, [currentIndex])

  useEffect(() => {
    if (isTyping && typingIndex < currentCommand.command.length) {
      // Type the command character by character
      const typingTimeout = setTimeout(() => {
        setTypedText((prev) => prev + currentCommand.command[typingIndex])
        setTypingIndex((prev) => prev + 1)
      }, 30) // Typing speed

      return () => clearTimeout(typingTimeout)
    }

    if (typingIndex >= currentCommand.command.length && isTyping) {
      // Command fully typed
      const finishTypingTimeout = setTimeout(() => {
        setIsTyping(false)
        setShowOutput(true)
      }, 300)

      return () => clearTimeout(finishTypingTimeout)
    }

    if (showOutput && !isTyping) {
      // After showing output, move to next command
      const nextCommandTimeout = setTimeout(
        () => {
          if (commandIndex < currentExample.commands.length - 1) {
            setCommandIndex((prev) => prev + 1)
            setTypingIndex(0)
            setTypedText('')
            setShowOutput(false)
            setIsTyping(true)
          } else {
            // All commands completed, wait before looping
            const resetTimeout = setTimeout(() => {
              setCommandIndex(0)
              setTypingIndex(0)
              setTypedText('')
              setShowOutput(false)
              setIsTyping(true)
            }, 6000) // Longer pause (6 seconds) before restarting the example

            return () => clearTimeout(resetTimeout)
          }
        },
        currentCommand.output ? 2000 : 1000
      ) // Wait longer if there's output

      return () => clearTimeout(nextCommandTimeout)
    }
  }, [
    typingIndex,
    isTyping,
    showOutput,
    commandIndex,
    currentCommand,
    currentExample.commands.length,
  ])

  const nextExample = () => {
    setCurrentIndex((prev) => (prev + 1) % examples.length)
  }

  const prevExample = () => {
    setCurrentIndex((prev) => (prev - 1 + examples.length) % examples.length)
  }

  return (
    <div className="relative">
      <div className="max-w-3xl mx-auto bg-[#1A1A1A] rounded-xl border border-[#40916C]/20 overflow-hidden shadow-xl">
        {/* Terminal header */}
        <div className="bg-[#2D2D2D] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <div className="text-sm text-white/60 font-mono">
            {currentExample.title}
          </div>
          <div className="w-16"></div> {/* Spacer for balance */}
        </div>

        {/* Terminal content */}
        <div className="p-6 font-mono text-sm h-[320px] overflow-hidden">
          <div className="mb-4 text-[#52B788]">
            {currentExample.description}
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-[#52B788] mr-2">$</span>
              <span className="text-white">{typedText}</span>
              {isTyping && (
                <span className="inline-block w-2 h-4 bg-white/70 ml-0.5 animate-pulse"></span>
              )}
            </div>

            {showOutput && currentCommand.output && (
              <div className="pl-4 text-white/70">
                {currentCommand.output.map((line, idx) => (
                  <div key={idx} className="whitespace-pre-wrap">
                    {line}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="flex justify-center mt-6 space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevExample}
          className="rounded-full"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="flex space-x-2">
          {examples.map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full ${
                idx === currentIndex ? 'bg-[#52B788]' : 'bg-white/20'
              }`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={nextExample}
          className="rounded-full"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
