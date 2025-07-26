import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

interface CodeBlockProps {
  children: React.ReactNode
  title?: string
  defaultExpanded?: boolean
}

interface ExpandableCodeBlockProps {
  filename: string
  code: string
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

export function ExpandableCodeBlock({ filename, code, defaultExpanded = false }: ExpandableCodeBlockProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  // Extract first few lines for preview
  const getPreviewCode = () => {
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = code
    const textContent = tempDiv.textContent || tempDiv.innerText || ''
    const lines = textContent.split('\n')
    return lines.slice(0, 3).join('\n') // Show first 3 lines
  }

  const previewCode = getPreviewCode()

  return (
    <div className="my-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center gap-2 px-4 py-2 bg-[#2D6A4F] text-white text-sm font-mono rounded-t-lg border-b border-white/10 hover:bg-[#2D6A4F]/80 transition-colors"
      >
        <span className="flex-1 text-left font-medium">{filename}</span>
        {isExpanded ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </button>
      
      {/* Preview when collapsed */}
      {!isExpanded && (
        <div className="relative bg-[#0d1117] border border-white/10 rounded-b-lg overflow-hidden">
          <pre className="hljs text-sm m-0 p-4 pb-8">
            <code className="text-white/60">{previewCode}</code>
          </pre>
          {/* Fade overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0d1117] to-transparent pointer-events-none" />
          {/* Show more indicator */}
          <div className="absolute bottom-2 right-4 text-xs text-white/40 font-mono">
            ⋯ klicka för att visa mer
          </div>
        </div>
      )}
      
      {/* Full code when expanded */}
      {isExpanded && (
        <pre className="hljs bg-[#0d1117] border border-white/10 text-sm overflow-x-auto rounded-b-lg m-0 p-4">
          <code dangerouslySetInnerHTML={{ __html: code }} />
        </pre>
      )}
    </div>
  )
}
