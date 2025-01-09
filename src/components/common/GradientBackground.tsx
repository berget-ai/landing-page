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
      className={`relative min-h-screen overflow-hidden bg-gradient-to-br from-[#2D6A4F] via-[#40916C] to-[#FFB700] ${className}`}
    >
      {children}
    </div>
  )
}
