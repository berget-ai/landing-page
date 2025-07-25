import { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight, File, Folder } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FileNode {
  name: string
  path: string
  type: 'file' | 'directory'
  children?: FileNode[]
  anchor?: string
}

interface FileStructureNavProps {
  content: string
}

export function FileStructureNav({ content }: FileStructureNavProps) {
  const [fileStructure, setFileStructure] = useState<FileNode[]>([])
  const [expandedDirs, setExpandedDirs] = useState<Set<string>>(new Set())

  useEffect(() => {
    const extractFileStructure = () => {
      // Extract code blocks with file paths
      const codeBlockRegex = /```[\w]*\n# ([^\n]+)\n/g
      const files: string[] = []
      let match

      while ((match = codeBlockRegex.exec(content)) !== null) {
        const filePath = match[1].trim()
        if (filePath && !files.includes(filePath)) {
          files.push(filePath)
        }
      }

      // Build tree structure
      const root: { [key: string]: FileNode } = {}

      files.forEach(filePath => {
        const parts = filePath.split('/')
        let current = root

        parts.forEach((part, index) => {
          if (!current[part]) {
            const isFile = index === parts.length - 1
            const fullPath = parts.slice(0, index + 1).join('/')
            
            current[part] = {
              name: part,
              path: fullPath,
              type: isFile ? 'file' : 'directory',
              children: isFile ? undefined : [],
              anchor: isFile ? `file-${filePath.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}` : undefined
            }
          }

          if (current[part].type === 'directory') {
            const childrenObj: { [key: string]: FileNode } = {}
            current[part].children?.forEach(child => {
              childrenObj[child.name] = child
            })
            current = childrenObj
          }
        })
      })

      // Convert to array and sort
      const sortNodes = (nodes: FileNode[]): FileNode[] => {
        return nodes.sort((a, b) => {
          if (a.type !== b.type) {
            return a.type === 'directory' ? -1 : 1
          }
          return a.name.localeCompare(b.name)
        }).map(node => ({
          ...node,
          children: node.children ? sortNodes(node.children) : undefined
        }))
      }

      const structure = sortNodes(Object.values(root))
      setFileStructure(structure)

      // Auto-expand directories with files
      const autoExpand = new Set<string>()
      const addExpandedPaths = (nodes: FileNode[], parentPath = '') => {
        nodes.forEach(node => {
          const fullPath = parentPath ? `${parentPath}/${node.name}` : node.name
          if (node.type === 'directory' && node.children && node.children.length > 0) {
            autoExpand.add(fullPath)
            addExpandedPaths(node.children, fullPath)
          }
        })
      }
      addExpandedPaths(structure)
      setExpandedDirs(autoExpand)
    }

    extractFileStructure()
  }, [content])

  const toggleDirectory = (path: string) => {
    setExpandedDirs(prev => {
      const newSet = new Set(prev)
      if (newSet.has(path)) {
        newSet.delete(path)
      } else {
        newSet.add(path)
      }
      return newSet
    })
  }

  const scrollToFile = (anchor: string) => {
    const element = document.getElementById(anchor)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const renderNode = (node: FileNode, level = 0) => {
    const isExpanded = expandedDirs.has(node.path)
    const hasChildren = node.children && node.children.length > 0

    return (
      <div key={node.path}>
        <div
          className={`flex items-center py-1 px-2 rounded cursor-pointer hover:bg-white/5 transition-colors ${
            level > 0 ? `ml-${level * 4}` : ''
          }`}
          onClick={() => {
            if (node.type === 'directory') {
              toggleDirectory(node.path)
            } else if (node.anchor) {
              scrollToFile(node.anchor)
            }
          }}
          style={{ paddingLeft: `${level * 16 + 8}px` }}
        >
          {node.type === 'directory' ? (
            <>
              {hasChildren ? (
                isExpanded ? (
                  <ChevronDown className="w-4 h-4 mr-1 text-white/60" />
                ) : (
                  <ChevronRight className="w-4 h-4 mr-1 text-white/60" />
                )
              ) : (
                <div className="w-4 h-4 mr-1" />
              )}
              <Folder className="w-4 h-4 mr-2 text-[#52B788]" />
              <span className="text-sm text-white/80">{node.name}</span>
            </>
          ) : (
            <>
              <div className="w-4 h-4 mr-1" />
              <File className="w-4 h-4 mr-2 text-[#74C69D]" />
              <span className="text-sm text-white/90 hover:text-[#52B788] transition-colors">
                {node.name}
              </span>
            </>
          )}
        </div>

        <AnimatePresence>
          {node.type === 'directory' && isExpanded && hasChildren && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              {node.children!.map(child => renderNode(child, level + 1))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  if (fileStructure.length === 0) {
    return null
  }

  return (
    <div className="sticky top-24 w-64 h-fit">
      <div className="bg-white/[0.02] backdrop-blur-sm border border-[#74C69D]/20 rounded-lg p-4">
        <h3 className="text-lg font-medium mb-4 text-white flex items-center">
          <Folder className="w-5 h-5 mr-2 text-[#52B788]" />
          File Structure
        </h3>
        <div className="space-y-1 max-h-96 overflow-y-auto">
          {fileStructure.map(node => renderNode(node))}
        </div>
      </div>
    </div>
  )
}
