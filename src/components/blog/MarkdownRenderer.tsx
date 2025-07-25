import { useMemo } from 'react'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import { LLMPrompt } from './LLMPrompt'

// Configure markdown parser
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
    }
    return md.utils.escapeHtml(str)
  }
})

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const processedContent = useMemo(() => {
    // Process LLMPrompt components first
    let processedMarkdown = content.replace(
      /<LLMPrompt([^>]*)>([\s\S]*?)<\/LLMPrompt>/g,
      (_, attributes, innerContent) => {
        // Parse attributes
        const titleMatch = attributes.match(/title="([^"]*)"/)
        const defaultExpandedMatch = attributes.match(/defaultExpanded={([^}]*)}/)
        
        const title = titleMatch ? titleMatch[1] : '🤖 LLM Prompt'
        const defaultExpanded = defaultExpandedMatch ? defaultExpandedMatch[1] === 'true' : false
        
        // Create a unique ID for this prompt
        const promptId = Math.random().toString(36).substr(2, 9)
        
        return `<div data-llm-prompt="${promptId}" data-title="${title}" data-default-expanded="${defaultExpanded}">${innerContent.trim()}</div>`
      }
    )

    // Add anchors and titles to code blocks with file paths using :filename syntax
    processedMarkdown = processedMarkdown.replace(
      /```(\w*):([^\n]+)\n/g,
      (match, language, filePath) => {
        const anchor = `file-${filePath.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`
        // Determine language from file extension if not provided
        const detectedLang = language || detectLanguageFromFilename(filePath)
        return `<div id="${anchor}" class="code-block-anchor"></div>\n<div class="code-title">${filePath}</div>\n\`\`\`${detectedLang}\n`
      }
    )
    
    // Helper function to detect language from filename
    function detectLanguageFromFilename(filename: string): string {
      const ext = filename.split('.').pop()?.toLowerCase()
      const langMap: { [key: string]: string } = {
        'js': 'javascript',
        'ts': 'typescript',
        'jsx': 'javascript',
        'tsx': 'typescript',
        'py': 'python',
        'yaml': 'yaml',
        'yml': 'yaml',
        'json': 'json',
        'md': 'markdown',
        'sh': 'bash',
        'bash': 'bash',
        'dockerfile': 'dockerfile',
        'go': 'go',
        'rs': 'rust',
        'java': 'java',
        'php': 'php',
        'rb': 'ruby',
        'css': 'css',
        'scss': 'scss',
        'html': 'html',
        'xml': 'xml',
        'sql': 'sql'
      }
      
      
      return langMap[ext || ''] || 'text'
    }
    
    // Render markdown with proper syntax highlighting
    return md.render(processedMarkdown)
  }, [content])

  // After rendering, we need to replace the placeholder divs with actual React components
  const renderWithComponents = (html: string) => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    const promptElements = doc.querySelectorAll('[data-llm-prompt]')
    
    const components: JSX.Element[] = []
    
    promptElements.forEach((element, index) => {
      const title = element.getAttribute('data-title') || '🤖 LLM Prompt'
      const defaultExpanded = element.getAttribute('data-default-expanded') === 'true'
      const content = element.textContent || ''
      
      components.push(
        <LLMPrompt key={index} title={title} defaultExpanded={defaultExpanded}>
          {content}
        </LLMPrompt>
      )
      
      // Replace the element with a placeholder
      element.outerHTML = `<div data-component-placeholder="${index}"></div>`
    })
    
    // Split HTML by component placeholders and interleave with components
    const finalHtml = doc.body.innerHTML
    const parts = finalHtml.split(/<div data-component-placeholder="(\d+)"><\/div>/)
    
    const result: (string | JSX.Element)[] = []
    for (let i = 0; i < parts.length; i++) {
      if (i % 2 === 0) {
        // HTML part
        if (parts[i].trim()) {
          result.push(parts[i])
        }
      } else {
        // Component placeholder - add the corresponding component
        const componentIndex = parseInt(parts[i])
        if (components[componentIndex]) {
          result.push(components[componentIndex])
        }
      }
    }
    
    return result
  }

  const renderedContent = renderWithComponents(processedContent)

  return (
    <div className="prose prose-invert 
      max-w-none
      prose-headings:font-medium 
      prose-h1:text-6xl prose-h1:mb-12 prose-h1:font-normal
      prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
      prose-p:text-sm prose-p:leading-relaxed prose-p:text-white/80
      prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
      prose-ol:my-6 prose-ol:pl-6
      prose-li:text-sm prose-li:text-white/80 prose-li:my-2
      prose-strong:text-white prose-strong:font-medium
      prose-a:text-[#52B788] hover:prose-a:text-[#74C69D] prose-a:no-underline hover:prose-a:underline
      prose-blockquote:border-l-[#52B788] prose-blockquote:bg-[#2D6A4F]/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
      prose-code:text-[#52B788] prose-code:bg-[#2D6A4F]/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
      prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-white/10 prose-pre:text-sm prose-pre:overflow-x-auto prose-pre:rounded-b-lg prose-pre:m-0 prose-pre:p-4
      [&_.code-title]:bg-[#2D6A4F] [&_.code-title]:text-white [&_.code-title]:px-4 [&_.code-title]:py-2 [&_.code-title]:text-sm [&_.code-title]:font-mono [&_.code-title]:rounded-t-lg [&_.code-title]:border-b [&_.code-title]:border-white/10 [&_.code-title]:mb-0 [&_.code-title]:block [&_.code-title]:font-medium
      [&_.code-block-anchor]:scroll-mt-24
      [&_pre+.code-title]:hidden
      [&_code]:text-[#52B788] [&_code]:bg-[#2D6A4F]/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded-md [&_code]:text-sm"
    >
      {renderedContent.map((item, index) => 
        typeof item === 'string' ? (
          <div key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ) : (
          item
        )
      )}
    </div>
  )
}
