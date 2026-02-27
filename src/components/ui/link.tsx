import React from 'react'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string
  children: React.ReactNode
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, children, ...props }, ref) => {
    return (
      <a ref={ref} href={to} {...props}>
        {children}
      </a>
    )
  }
)

Link.displayName = 'Link'
