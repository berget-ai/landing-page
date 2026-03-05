import { useMemo, useState, useEffect } from 'react'
import MarkdownIt from 'markdown-it'
import { fromHighlighter } from '@shikijs/markdown-it/core'
import { getHighlighter } from '@berget-ai/ui/shiki'

// Base markdown-it instance (no highlighting, used for initial render)
const baseMd = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

interface MarkdownRendererProps {
  content: string
}

// Singleton promise so we only init Shiki markdown-it once
let shikiMdPromise: Promise<MarkdownIt> | null = null

function getShikiMd(): Promise<MarkdownIt> {
  if (!shikiMdPromise) {
    shikiMdPromise = getHighlighter().then((highlighter) => {
      const md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
      })

      md.use(
        fromHighlighter(highlighter, {
          theme: 'berget',
          defaultLanguage: 'text',
        })
      )

      return md
    })
  }
  return shikiMdPromise
}

function preprocessLLMPrompts(markdown: string): string {
  return markdown.replace(
    /<LLMPrompt([^>]*)>([\s\S]*?)<\/LLMPrompt>/g,
    (_, attributes, innerContent) => {
      const titleMatch = attributes.match(/title="([^"]*)"/)
      const defaultExpandedMatch = attributes.match(/defaultExpanded={([^}]*)}/)

      const title = titleMatch ? titleMatch[1] : 'LLM Prompt'
      const isOpen = defaultExpandedMatch ? defaultExpandedMatch[1] === 'true' : false

      const chevron = '<svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>'
      return `<details class="llm-prompt"${isOpen ? ' open' : ''}>\n<summary><span>${title}</span>${chevron}</summary>\n\n\`\`\`\n${innerContent.trim()}\n\`\`\`\n\n</details>`
    }
  )
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const [md, setMd] = useState<MarkdownIt>(baseMd)

  useEffect(() => {
    getShikiMd().then(setMd)
  }, [])

  const html = useMemo(() => {
    const processed = preprocessLLMPrompts(content)
    return md.render(processed)
  }, [content, md])

  return (
    <div
      className="prose prose-invert prose-lg
        max-w-none
        prose-headings:font-medium
        prose-h1:text-4xl prose-h1:mb-8 prose-h1:font-normal
        prose-h2:text-3xl prose-h2:mt-14 prose-h2:mb-6
        prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
        prose-p:text-base prose-p:leading-7 prose-p:text-white/85
        prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
        prose-ol:my-6 prose-ol:pl-6
        prose-li:text-base prose-li:text-white/85 prose-li:my-2 prose-li:leading-7
        prose-strong:text-white prose-strong:font-medium
        prose-a:text-moss hover:prose-a:text-lichen prose-a:no-underline hover:prose-a:underline
        prose-blockquote:border-l-moss prose-blockquote:bg-spruce/5 prose-blockquote:py-3 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:text-base prose-blockquote:text-white/80
        prose-code:text-moss prose-code:bg-spruce/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm
        prose-pre:bg-slate prose-pre:border prose-pre:border-white/10 prose-pre:p-0
        prose-img:rounded-lg prose-img:my-8
        [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-inherit
        [&_.shiki]:p-4 [&_.shiki]:overflow-x-auto [&_.shiki]:text-sm [&_.shiki]:leading-relaxed
        [&_.llm-prompt]:my-6 [&_.llm-prompt]:border [&_.llm-prompt]:border-moss/30 [&_.llm-prompt]:rounded-lg [&_.llm-prompt]:bg-gradient-to-r [&_.llm-prompt]:from-moss/5 [&_.llm-prompt]:to-lichen/5 [&_.llm-prompt]:overflow-hidden
        [&_.llm-prompt_summary]:cursor-pointer [&_.llm-prompt_summary]:p-4 [&_.llm-prompt_summary]:font-medium [&_.llm-prompt_summary]:text-white [&_.llm-prompt_summary]:list-none [&_.llm-prompt_summary]:hover:bg-white/5 [&_.llm-prompt_summary]:transition-colors [&_.llm-prompt_summary]:flex [&_.llm-prompt_summary]:items-center [&_.llm-prompt_summary]:justify-between
        [&_.llm-prompt_summary::-webkit-details-marker]:hidden
        [&_.llm-prompt[open]_summary]:border-b [&_.llm-prompt[open]_summary]:border-moss/20
        [&_.llm-prompt_summary_.chevron]:transition-transform [&_.llm-prompt_summary_.chevron]:duration-200 [&_.llm-prompt_summary_.chevron]:text-white/60
        [&_.llm-prompt[open]_summary_.chevron]:rotate-180
        [&_.llm-prompt_pre]:my-0 [&_.llm-prompt_pre]:border-0 [&_.llm-prompt_pre]:rounded-none [&_.llm-prompt_pre]:rounded-b-lg"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
