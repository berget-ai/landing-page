import { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { visit } from 'unist-util-visit'
import { CodeBlock } from '@berget-ai/ui'
// Eagerly import getHighlighter so Vite traces and bundles the Shiki WASM engine
// and language grammars. CodeBlock calls this internally but its dynamic import()
// calls live inside a pre-bundled dependency that Vite can't trace on its own.
import { getHighlighter } from '@berget-ai/ui/shiki'
getHighlighter() // warm the singleton cache

function remarkCodeMeta() {
  return (tree: any) => {
    visit(tree, 'code', (node: any) => {
      if (node.meta) {
        node.data = node.data || {}
        node.data.hProperties = node.data.hProperties || {}
        node.data.hProperties['data-meta'] = node.meta
      }
    })
  }
}

interface MarkdownRendererProps {
  content: string
}

function preprocessLLMPrompts(markdown: string): string {
  return markdown.replace(
    /<LLMPrompt([^>]*)>([\s\S]*?)<\/LLMPrompt>/g,
    (_, attributes, innerContent) => {
      const titleMatch = attributes.match(/title="([^"]*)"/)
      const defaultExpandedMatch = attributes.match(/defaultExpanded={([^}]*)}/)

      const title = titleMatch ? titleMatch[1] : 'LLM Prompt'
      const isOpen = defaultExpandedMatch
        ? defaultExpandedMatch[1] === 'true'
        : false

      const chevron =
        '<svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>'
      return `<details class="llm-prompt"${isOpen ? ' open' : ''}>\n<summary><span>${title}</span>${chevron}</summary>\n\n\`\`\`\n${innerContent.trim()}\n\`\`\`\n\n</details>`
    },
  )
}

const components = {
  code({ className, children, node, ...props }: any) {
    const match = /language-(\w+)/.exec(className || '')
    const isInline = !match && !String(children).includes('\n')
    if (isInline)
      return (
        <code className={className} {...props}>
          {children}
        </code>
      )

    const meta = props['data-meta'] || ''
    const titleMatch = /title="([^"]*)"/.exec(meta)

    return (
      <CodeBlock
        code={String(children).replace(/\n$/, '')}
        language={match?.[1]}
        title={titleMatch?.[1]}
      />
    )
  },
  pre({ children }: React.ComponentProps<'pre'>) {
    return <>{children}</>
  },
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const processed = useMemo(() => preprocessLLMPrompts(content), [content])

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
        [&_.shiki_code]:bg-transparent [&_.shiki_code]:p-0 [&_.shiki_code]:rounded-none [&_.shiki_code]:text-inherit
        prose-img:rounded-lg prose-img:my-8
        [&_.llm-prompt]:my-6 [&_.llm-prompt]:border [&_.llm-prompt]:border-moss/30 [&_.llm-prompt]:rounded-lg [&_.llm-prompt]:bg-gradient-to-r [&_.llm-prompt]:from-moss/5 [&_.llm-prompt]:to-lichen/5 [&_.llm-prompt]:overflow-hidden
        [&_.llm-prompt_summary]:cursor-pointer [&_.llm-prompt_summary]:p-4 [&_.llm-prompt_summary]:font-medium [&_.llm-prompt_summary]:text-white [&_.llm-prompt_summary]:list-none [&_.llm-prompt_summary]:hover:bg-white/5 [&_.llm-prompt_summary]:transition-colors [&_.llm-prompt_summary]:flex [&_.llm-prompt_summary]:items-center [&_.llm-prompt_summary]:justify-between
        [&_.llm-prompt_summary::-webkit-details-marker]:hidden
        [&_.llm-prompt[open]_summary]:border-b [&_.llm-prompt[open]_summary]:border-moss/20
        [&_.llm-prompt_summary_.chevron]:transition-transform [&_.llm-prompt_summary_.chevron]:duration-200 [&_.llm-prompt_summary_.chevron]:text-white/60
        [&_.llm-prompt[open]_summary_.chevron]:rotate-180"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkCodeMeta]}
        rehypePlugins={[rehypeRaw]}
        components={components}
      >
        {processed}
      </ReactMarkdown>
    </div>
  )
}
