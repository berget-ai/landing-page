import { useTranslation } from 'react-i18next'
import { BlogPost } from '@/types/blog'
import { html as introducingBergetAI } from './posts/introducing-berget-ai.md'
import { html as sverigesAIRevolution } from './posts/sveriges-ai-revolution.md'
import { html as openSourceRevolution } from './posts/open-source-revolution.md'
import { html as swedishDevelopers } from './posts/swedish-developers-ai-era.md'
import { html as fineTuningSweden } from './posts/fine-tuning-swedish-way.md'

// This would typically come from an API or CMS
const posts: BlogPost[] = [
  {
    id: '5',
    title: 'Fine-tuning: Sveriges väg till AI-framgång',
    description: 'Hur KB och AI Sweden kan samarbeta för att skapa världsledande AI-modeller',
    date: '2024-02-03',
    author: 'Berget Team',
    content: fineTuningSweden,
    tags: ['fine-tuning', 'kb', 'ai-sweden', 'strategy']
  },
  {
    id: '4',
    title: 'Svenska utvecklare i AI-eran: Utmaningar och möjligheter',
    description: 'Hur Sveriges största yrkesgrupp kan dra nytta av AI-revolutionen',
    date: '2024-02-02',
    author: 'Berget Team',
    content: swedishDevelopers,
    tags: ['developers', 'ai-impact', 'future-of-work']
  },
  {
    id: '3',
    title: 'Open Source revolutionerar AI-utvecklingen',
    description: 'Hur öppna AI-modeller förändrar spelplanen och skapar nya möjligheter',
    date: '2024-02-01',
    author: 'Berget Team',
    content: openSourceRevolution,
    tags: ['open-source', 'ai-development', 'innovation']
  },
  {
    id: '2',
    title: 'Sveriges AI-revolution: En strategi för framtiden',
    description: 'Hur Sverige kan leda utvecklingen av ansvarsfull AI i Europa',
    date: '2024-01-31',
    author: 'Berget Team',
    content: sverigesAIRevolution,
    tags: ['strategy', 'sweden', 'ai-policy']
  },
  {
    id: '1',
    title: 'Introducing Berget AI',
    description: 'The next generation of AI infrastructure for European enterprises',
    date: '2024-01-30',
    author: 'Berget Team',
    content: introducingBergetAI,
    tags: ['announcement', 'product']
  }
]

export default function BlogPage() {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-medium mb-4">{t('blog.title', 'Blog')}</h1>
          <p className="text-lg text-white/60">
            {t('blog.description', 'Latest news and insights from the Berget team')}
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
