import { usePageContext } from 'vike-react/usePageContext'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@berget-ai/ui'
import { AuthorByline } from '@/components/blog/AuthorByline'
import type { BlogPost } from '@/types/blog'
import { MarkdownRenderer } from '@/components/blog/MarkdownRenderer'

const postModules = import.meta.glob('/src/pages/blog/posts/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

function parseYamlMetadata(yaml: string) {
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
          .map((t: string) => t.trim())
          .filter(Boolean)
      } else {
        metadata[key] = value.trim().replace(/^["']|["']$/g, '')
      }
    }
  })

  return metadata
}

function LoadingPlaceholder() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="animate-pulse max-w-3xl mx-auto">
          <div className="h-8 bg-[#2D6A4F]/10 rounded w-2/3 mb-4"></div>
          <div className="h-4 bg-[#2D6A4F]/10 rounded w-1/3 mb-8"></div>
          <div className="space-y-3">
            <div className="h-4 bg-[#2D6A4F]/10 rounded"></div>
            <div className="h-4 bg-[#2D6A4F]/10 rounded"></div>
            <div className="h-4 bg-[#2D6A4F]/10 rounded"></div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function Page() {
  const pageContext = usePageContext()
  const id = pageContext.routeParams?.id
  const [post, setPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    const postPath = Object.keys(postModules).find((path) =>
      path.includes(`/${id}.md`)
    )

    if (!postPath || !postModules[postPath]) return

    const content = postModules[postPath] as string
    const metadataMatch = content.match(/^---\n([\s\S]*?)\n---\n/)
    const metadata = metadataMatch ? parseYamlMetadata(metadataMatch[1]) : {}
    const markdownContent = content.replace(/^---\n[\s\S]*?\n---\n/, '')
    const language = metadata.language === 'en' ? ('en' as const) : ('sv' as const)

    setPost({
      id: id || '',
      title: metadata.title || '',
      description: metadata.description || '',
      date: metadata.date || '',
      author: metadata.author || 'Berget Team',
      email: metadata.email || '',
      content: markdownContent,
      tags: metadata.tags || [],
      image: metadata.image || '',
      imageAlt: metadata.imageAlt || '',
      language,
    })
  }, [id])

  if (!post) return <LoadingPlaceholder />

  return (
    <main className="min-h-screen">
      <article className={post?.image ? '' : 'container mx-auto px-4 py-8'}>
        <div className={post?.image ? '' : 'max-w-3xl mx-auto'}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {!post.image && (
              <Button variant="ghost" size="sm" className="mb-8" asChild>
                <a href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </a>
              </Button>
            )}

            {post.image && (
              <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[70vh] mb-12 overflow-hidden">
                <div className="absolute top-6 left-6 z-20">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white border-white/20"
                    asChild
                  >
                    <a href="/blog">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Blog
                    </a>
                  </Button>
                </div>
                <img
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex items-end">
                  <div className="container mx-auto px-4 pb-16">
                    <div className="max-w-3xl mx-auto">
                      <AuthorByline
                        name={post.author}
                        email={post.email}
                        date={post.date}
                        size="lg"
                      />
                      <h1 className="text-4xl md:text-6xl font-medium text-white drop-shadow-lg">
                        {post.title}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!post.image && (
              <>
                <AuthorByline
                  name={post.author}
                  email={post.email}
                  date={post.date}
                  size="lg"
                />
                <h1 className="text-4xl md:text-5xl font-medium mb-6">
                  {post.title}
                </h1>
              </>
            )}

            <div className={post.image ? 'container mx-auto px-4' : ''}>
              <div className={post.image ? 'max-w-3xl mx-auto' : ''}>
                {post.tags.length ? (
                  <div className="flex flex-wrap gap-2 mb-12">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-[#52B788]/20 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}

                <MarkdownRenderer content={post.content} />
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </main>
  )
}
