import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { AuthorByline } from '@/components/blog/AuthorByline'
import { Helmet } from '@/components/common/Helmet'
import type { BlogPost } from '@/types/blog'
import { MarkdownRenderer } from '@/components/blog/MarkdownRenderer'

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

      // Use language from metadata or default to 'sv'
      const language = metadata.language === 'en' ? 'en' as const : 'sv' as const;
      
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
        language
      })
    }

    loadPost()
  }, [id])

  if (!post) return <LoadingPlaceholder />

  return (
    <main className="min-h-screen pt-24">
      {post && (
        <Helmet 
          title={post.title}
          description={post.description}
          image={post.image}
          author={post.author}
          language={post.language}
        />
      )}
      <article className={post?.image ? "" : "container mx-auto px-4 py-8"}>
        <div className={post?.image ? "" : "max-w-3xl mx-auto"}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {!post.image && (
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
                    <Link to="/blog">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Blog
                    </Link>
                  </Button>
                </div>
                <img
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex items-end justify-center">
                  <div className="container mx-auto px-4 pb-16">
                    <div className="max-w-3xl mx-auto text-center">
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
                <h1 className="text-4xl md:text-5xl font-medium mb-6">{post.title}</h1>
              </>
            )}

            <div className={post.image ? "container mx-auto px-4" : ""}>
              <div className={post.image ? "max-w-3xl mx-auto" : ""}>
                <div className="flex flex-wrap gap-2 mb-12">
                  {post.language && (
                    <span className="px-3 py-1 rounded-full bg-[#52B788]/30 text-sm font-medium">
                      {post.language === 'en' ? '🇬🇧 English' : '🇸🇪 Svenska'}
                    </span>
                  )}
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#52B788]/20 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <MarkdownRenderer content={post.content} />
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </main>
  )
}
