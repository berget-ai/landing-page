interface GradientBackgroundProps {
  children: React.ReactNode
  className?: string
}

export function GradientBackground({
  children,
  className = '',
}: GradientBackgroundProps) {
  return (
    <div
      className={`relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#3a3a3a] ${className}`}
    >
      {children}
    </div>
  )
}
