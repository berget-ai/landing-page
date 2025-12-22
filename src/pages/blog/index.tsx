import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { BlogList } from '@/components/blog/BlogList'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { SEOHelmet } from '@/components/common/Helmet'
import type { BlogPost } from '@/types/blog'

// Import all blog posts
const postModules = import.meta.glob('./posts/**/*.md', { 
  eager: true,
  as: 'raw'
})

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const loadPosts = async () => {
      // Filter out argument files
      const blogPosts = Object.entries(postModules)
        .filter(([path]) => !path.includes('/arguments/'))
        .map(([path, content]: [string, string]) => {
          const fileName = path.split('/').pop()?.replace('.md', '') || ''
          const id = fileName

          // Extract metadata from frontmatter
          const metadataMatch = content.match(/^---\n([\s\S]*?)\n---\n/)
          const metadata = metadataMatch
            ? parseYamlMetadata(metadataMatch[1])
            : {}

          return {
            id,
            title: metadata.title || '',
            description: metadata.description || '',
            date: metadata.date || '',
            author: metadata.author || 'Berget Team',
            email: metadata.email || '',
            content: content.replace(/^---\n[\s\S]*?\n---\n/, ''), // Remove frontmatter
            tags: metadata.tags || [],
            image: metadata.image || '',
            imageAlt: metadata.imageAlt || '',
            language: metadata.language === 'en' ? 'en' : 'sv' as 'en' | 'sv'
          }
        })

      // Sort by date descending
      const sortedPosts = blogPosts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )

      setPosts(sortedPosts)
    }

    loadPosts()
  }, [])

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

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  return (
    <main className="min-h-screen pt-24">
      <SEOHelmet 
        title="Berget AI Blog"
        description="Insights and updates about AI infrastructure, European tech innovation, and industry best practices"
        image="/logos/berget-logo-white.png"
        type="website"
      />
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-medium mb-4">
            Berget AI Blog
          </h1>
          <p className="text-lg text-white/60">
            Insights and updates about AI infrastructure, European tech innovation, and industry best practices
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-white/40" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <BlogList posts={filteredPosts} />
          ) : (
            <div className="text-center py-12">
              <p className="text-white/60">No posts found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
