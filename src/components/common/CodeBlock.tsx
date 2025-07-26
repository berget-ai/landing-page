import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

interface CodeBlockProps {
  children: React.ReactNode
  title?: string
  defaultExpanded?: boolean
}

export function CodeBlock({ children, title, defaultExpanded = false }: CodeBlockProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  // Om ingen titel finns, visa alltid expanderat (som tidigare)
  if (!title) {
    return (
      <div className="w-full max-w-md bg-black/50 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-1.5 border-b border-white/10 bg-white/5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
        </div>
        <div className="p-3 text-xs font-mono">
          <pre>{children}</pre>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md bg-black/50 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center gap-2 px-3 py-1.5 border-b border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
      >
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-white/40 flex-1 text-left">{title}</span>
        {isExpanded ? (
          <ChevronDown className="w-3 h-3 text-white/40" />
        ) : (
          <ChevronRight className="w-3 h-3 text-white/40" />
        )}
      </button>
      {isExpanded && (
        <div className="p-3 text-xs font-mono">
          <pre>{children}</pre>
        </div>
      )}
    </div>
  )
}
