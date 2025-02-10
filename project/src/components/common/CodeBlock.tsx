interface CodeBlockProps {
  children: React.ReactNode
  title?: string
}

export function CodeBlock({ children, title }: CodeBlockProps) {
  return (
    <div className="w-full max-w-md bg-black/50 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-1.5 border-b border-white/10 bg-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        {title && <span className="text-xs text-white/40">{title}</span>}
      </div>
      <div className="p-3 text-xs font-mono">
        <pre>{children}</pre>
      </div>
    </div>
  )
}
