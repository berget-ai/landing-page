import { BlogGrid } from '@berget-ai/ui'
import type { BlogPost } from '@/types/blog'
import { useNavigate } from 'react-router-dom'

interface BlogListProps {
  posts: BlogPost[]
}

export function BlogList({ posts }: BlogListProps) {
  const navigate = useNavigate()

  const uiPosts = posts.map((post) => ({
    id: post.id,
    title: post.title,
    excerpt: post.description,
    author: post.author,
    email: post.email,
    date: post.date,
    image: post.image,
    imageAlt: post.imageAlt || post.title,
    language: post.language,
    tags: post.tags,
    onClick: () => navigate(`/blog/${post.id}`),
  }))

  return <BlogGrid posts={uiPosts} columns={3} />
}
