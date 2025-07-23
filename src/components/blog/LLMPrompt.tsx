import { useState } from 'react'
import { ChevronDown, ChevronRight, Bot, Copy, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface LLMPromptProps {
  title?: string
  children: React.ReactNode
  defaultExpanded?: boolean
}

export function LLMPrompt({ title = "🤖 LLM Prompt", children, defaultExpanded = false }: LLMPromptProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    const textContent = typeof children === 'string' ? children : 
      (children as any)?.props?.children || 'Prompt content'
    
    try {
      await navigator.clipboard.writeText(textContent)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="my-6 border border-[#52B788]/30 rounded-lg bg-gradient-to-r from-[#52B788]/5 to-[#74C69D]/5 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Bot className="w-5 h-5 text-[#52B788]" />
          <span className="font-medium text-white">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          {isExpanded && (
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                handleCopy()
              }}
              className="text-white/60 hover:text-white"
            >
              {isCopied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          )}
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-white/60" />
          ) : (
            <ChevronRight className="w-5 h-5 text-white/60" />
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 border-t border-[#52B788]/20">
              <div className="bg-black/20 rounded-md p-4 mt-3">
                <pre className="text-sm text-white/80 whitespace-pre-wrap font-mono leading-relaxed">
                  {children}
                </pre>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
