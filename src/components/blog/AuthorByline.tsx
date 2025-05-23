import { Link } from 'react-router-dom'
import { Calendar, Twitter, Linkedin } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface AuthorBylineProps {
  email?: string
  name: string
  date: string
  size?: 'sm' | 'md' | 'lg'
}

export function AuthorByline({ email, name, date, size = 'md' }: AuthorBylineProps) {
  const { t } = useTranslation()
  
  // Get team members from translations
  const teamMembers = t('about.team.members', { returnObjects: true }) as Record<string, any>
  
  // Find team member by name or email
  const memberKey = Object.keys(teamMembers).find(key => {
    const member = teamMembers[key]
    return member.name === name || (email && member.email === email)
  })
  
  const author = memberKey ? teamMembers[memberKey] : null
  
  const imageSize = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }[size]
  
  const nameSize = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }[size]
  
  const dateSize = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  }[size]

  return (
    <div className="flex items-center gap-4 mb-6">
      {author && (
        <div className="flex-shrink-0">
          <img 
            src={author.image} 
            alt={author.name} 
            className={`${imageSize} rounded-full object-cover`}
          />
        </div>
      )}
      <div>
        <div className="flex items-center gap-2">
          <span className={`font-medium ${nameSize}`}>{name}</span>
        </div>
        <div className={`flex items-center gap-2 ${dateSize} text-white/60`}>
          <Calendar className="w-4 h-4" />
          <time dateTime={date}>
            {new Date(date).toLocaleDateString()}
          </time>
        </div>
        {author?.social && (
          <div className="flex items-center gap-3 mt-1">
            {author.social.twitter && (
              <a 
                href={`https://twitter.com/${author.social.twitter}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#52B788] transition-colors"
                title="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
            {author.social.linkedin && (
              <a 
                href={`https://linkedin.com/in/${author.social.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#52B788] transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {author.social.bluesky && (
              <a 
                href={`https://bsky.app/profile/${author.social.bluesky}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#52B788] transition-colors"
                title="Bluesky"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 17.525 6.47598 22 12.001 22C17.526 22 22.001 17.525 22.001 12C22.001 6.475 17.526 2 12.001 2ZM15.501 15.5C14.851 16.15 14.001 16.5 13.001 16.5H9.00098C8.45098 16.5 8.00098 16.05 8.00098 15.5V8.5C8.00098 7.95 8.45098 7.5 9.00098 7.5H13.001C14.001 7.5 14.851 7.85 15.501 8.5C16.151 9.15 16.501 10 16.501 11C16.501 12 16.151 12.85 15.501 13.5C16.151 14.15 16.501 15 16.501 16C16.501 17 16.151 17.85 15.501 18.5V15.5Z" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
