import { BlogGrid } from '@berget-ai/ui'
import type { BlogPost } from '@/types/blog'
import { useTranslation } from 'react-i18next'

interface BlogListProps {
  posts: BlogPost[]
}

export function BlogList({ posts }: BlogListProps) {
  const { t } = useTranslation()
  const teamMembers = t('about.team.members', { returnObjects: true }) as Record<string, { name: string; email?: string; image?: string }>

  const findAuthorImage = (name: string, email?: string): string | undefined => {
    const key = Object.keys(teamMembers).find((k) => {
      const member = teamMembers[k]
      return member.name === name || (email && member.email === email)
    })
    return key ? teamMembers[key].image : undefined
  }

  const uiPosts = posts.map((post) => ({
    id: post.id,
    title: post.title,
    excerpt: post.description,
    author: post.author,
    email: post.email,
    authorImage: findAuthorImage(post.author, post.email),
    date: post.date,
    image: post.image,
    imageAlt: post.imageAlt || post.title,
    language: post.language,
    tags: post.tags,
    onClick: () => { window.location.href = `/blog/${post.id}` },
  }))

  return <BlogGrid posts={uiPosts} columns={3} />
}
