import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { BlogPost } from '@/types/blog'
import { AuthorByline } from './AuthorByline'

interface BlogCardProps {
  post: BlogPost
  index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative p-6 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-[#74C69D]/20 h-full">
        <Link to={`/blog/${post.id}`}>
          {post.image && (
            <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
              <img 
                src={post.image} 
                alt={post.imageAlt || post.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}

          <h2 className="text-2xl font-medium mb-3 group-hover:text-[#52B788] transition-colors">
            {post.title}
          </h2>
          
          <p className="text-white/60 mb-4 line-clamp-3">
            {post.description}
          </p>
          
          {post.language && (
            <div className="mb-4">
              <span className="px-2 py-1 text-xs rounded-full bg-[#52B788]/20 text-white/80">
                {post.language === 'en' ? '🇬🇧 English' : '🇸🇪 Svenska'}
              </span>
            </div>
          )}
        </Link>
        
        <AuthorByline 
          name={post.author} 
          email={post.email} 
          date={post.date}
          size="sm"
        />
      </div>
    </motion.article>
  )
}
