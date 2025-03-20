import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import type { BlogPost } from '@/types/blog'
import MarkdownIt from 'markdown-it'

// Configure markdown parser
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

// Import all blog posts at build time
const postModules = import.meta.glob('./**/*.md', {
  eager: true,
  as: 'raw',
})

// Helper function to parse YAML frontmatter
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
          .map((t) => t.trim())
          .filter(Boolean)
      } else {
        metadata[key] = value.trim().replace(/^["']|["']$/g, '')
      }
    }
  })

  return metadata
}

// Loading placeholder component
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

export default function BlogPostPage() {
  const { id } = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    const loadPost = async () => {
      // Find the post content by ID
      const postPath = Object.keys(postModules).find((path) =>
        path.includes(`/${id}.md`)
      )

      if (!postPath || !postModules[postPath]) {
        return
      }

      const content = postModules[postPath]

      // Extract metadata from frontmatter
      const metadataMatch = content.match(/^---\n([\s\S]*?)\n---\n/)
      const metadata = metadataMatch ? parseYamlMetadata(metadataMatch[1]) : {}

      const markdownContent = content.replace(/^---\n[\s\S]*?\n---\n/, '') // Remove frontmatter
      const htmlContent = md.render(markdownContent)

      setPost({
        id: id || '',
        title: metadata.title || '',
        description: metadata.description || '',
        date: metadata.date || '',
        author: metadata.author || 'Berget Team',
        content: htmlContent,
        tags: metadata.tags || [],
        image: metadata.image || '',
        imageAlt: metadata.imageAlt || '',
      })
    }

    loadPost()
  }, [id])

  if (!post) return <LoadingPlaceholder />

  return (
    <main className="min-h-screen pt-24">
      <article className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Button
              variant="ghost"
              size="sm"
              className="mb-8"
              asChild
            >
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            {post.image && (
              <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
                <img
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            )}

            <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString()}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-medium mb-6">{post.title}</h1>

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

            <div 
              className="prose prose-invert max-w-none
                prose-headings:font-medium 
                prose-h1:text-4xl prose-h1:mb-8
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-white/80 prose-p:leading-relaxed
                prose-a:text-[#52B788] hover:prose-a:text-[#74C69D] prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-[#52B788] prose-blockquote:bg-[#2D6A4F]/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
                prose-code:text-[#52B788] prose-code:bg-[#2D6A4F]/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
                prose-pre:bg-[#1A1A1A] prose-pre:border prose-pre:border-white/10"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>
        </div>
      </article>
    </main>
  )
}