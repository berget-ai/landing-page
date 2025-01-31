import { useTranslation } from 'react-i18next'
import { BlogPost } from '@/types/blog'
import { useEffect, useState } from 'react'

export default function BlogPage() {
  const { t } = useTranslation()
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    // This would typically be an API call
    const loadPosts = async () => {
      const postModules = import.meta.glob('./posts/**/*.md', { eager: true })

      // Filter out argument files
      const blogPosts = Object.entries(postModules)
        .filter(([path]) => !path.includes('/arguments/'))
        .map(([path, module]: [string, any]) => {
          const fileName = path.split('/').pop()?.replace('.md', '') || ''
          const id = fileName

          // Extract metadata from frontmatter
          const content = module.html
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
            content: content.replace(/^---\n[\s\S]*?\n---\n/, ''), // Remove frontmatter
            tags: metadata.tags || [],
          }
        })

      // Load argument files for reference/linking
      const argumentFiles = Object.entries(postModules)
        .filter(([path]) => path.includes('/arguments/'))
        .reduce((acc, [path, module]: [string, any]) => {
          const fileName = path.split('/').pop()?.replace('.md', '') || ''
          acc[fileName] = {
            content: module.html,
            path,
          }
          return acc
        }, {} as Record<string, { content: string; path: string }>)

      const loadedPosts = blogPosts

      // Sort by date descending
      setPosts(
        loadedPosts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
      )
    }

    loadPosts()
  }, [])

  const parseYamlMetadata = (yaml: string) => {
    const metadata: Record<string, any> = {}
    const lines = yaml.split('\n')

    lines.forEach((line) => {
      const match = line.match(/^(\w+):\s*"?([^"]*)"?$/)
      if (match) {
        const [_, key, value] = match
        if (key === 'tags') {
          metadata[key] = value
            .replace(/[\[\]]/g, '')
            .split(',')
            .map((t) => t.trim())
        } else {
          metadata[key] = value
        }
      }
    })

    return metadata
  }

  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-medium mb-4">
            {t('blog.title', 'Blog')}
          </h1>
          <p className="text-lg text-white/60">
            {t(
              'blog.description',
              'Latest news and insights from the Berget team'
            )}
          </p>
        </div>

        <div className="grid gap-8 max-w-3xl mx-auto">
          {posts.map((post) => (
            <article
              key={post.id}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
            >
              <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString()}
                </time>
                <span>•</span>
                <span>{post.author}</span>
              </div>
              <h2 className="text-2xl font-medium mb-2">{post.title}</h2>
              <p className="text-white/80 mb-4">{post.description}</p>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-full bg-white/10 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
