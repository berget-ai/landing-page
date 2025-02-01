import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BlogPost } from '@/types/blog'
import { MarkdownPage } from '@/components/common/MarkdownPage'

export default function BlogPostPage() {
  const router = useRouter()
  const { id } = router.query
  const { t } = useTranslation()
  const [post, setPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    const loadPost = async () => {
      if (!id) return

      try {
        // Import the specific post markdown file
        const response = await fetch(`/blog/posts/${id}.md`)
        const content = await response.text()

        // Extract metadata from frontmatter
        const metadataMatch = content.match(/^---\n([\s\S]*?)\n---\n/)
        const metadata = metadataMatch
          ? parseYamlMetadata(metadataMatch[1])
          : {}

        setPost({
          id: id as string,
          title: metadata.title || '',
          description: metadata.description || '',
          date: metadata.date || '',
          author: metadata.author || 'Berget Team',
          content: content.replace(/^---\n[\s\S]*?\n---\n/, ''), // Remove frontmatter
          tags: metadata.tags || [],
          image: metadata.image || '',
          imageAlt: metadata.imageAlt || ''
        })
      } catch (error) {
        console.error('Failed to load blog post:', error)
        router.push('/blog')
      }
    }

    loadPost()
  }, [id, router])

  const parseYamlMetadata = (yaml: string) => {
    const metadata: Record<string, any> = {}
    const lines = yaml.split('\n')

    lines.forEach((line) => {
      const match = line.match(/^(\w+):\s*(.+)$/)
      if (match) {
        const [_, key, value] = match
        if (key === 'tags') {
          metadata[key] = value
            .trim()
            .replace(/^\[|\]$/g, '')
            .split(',')
            .map(t => t.trim())
            .filter(Boolean)
        } else {
          metadata[key] = value.trim().replace(/^["']|["']$/g, '')
        }
      }
    })

    return metadata
  }

  if (!post) {
    return (
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-white/10 rounded w-2/3 mb-4"></div>
            <div className="h-4 bg-white/10 rounded w-1/3 mb-8"></div>
            <div className="space-y-3">
              <div className="h-4 bg-white/10 rounded"></div>
              <div className="h-4 bg-white/10 rounded"></div>
              <div className="h-4 bg-white/10 rounded"></div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-24">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {post.image && (
          <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
            <img
              src={post.image}
              alt={post.imageAlt || post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString()}
            </time>
            <span>•</span>
            <span>{post.author}</span>
          </div>

          <h1 className="text-4xl font-medium mb-4">{post.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-full bg-white/10 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div 
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </main>
  )
}
