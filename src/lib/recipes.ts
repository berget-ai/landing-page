import { MessageSquare, Workflow, FileSearch, Blocks, Globe, Braces } from 'lucide-react';
import type { Recipe } from '@/types/recipes';

export const recipes: Recipe[] = [
  {
    id: 'chat-docs',
    title: 'Chat with Documents',
    description: 'Build a ChatGPT-like interface for your documents',
    stack: ['ChromaDB', 'Llama', 'Next.js'],
    gradient: 'from-[#4361EE] via-[#7209B7] to-[#22C55E]',
    accent: 'border-[#4361EE]',
    icon: MessageSquare,
    estimate: '15 min setup',
    features: [
      'Document chunking and embedding',
      'Semantic search',
      'Conversational memory',
      'Citation support'
    ]
  },
  {
    id: 'n8n-workflow',
    title: 'n8n RAG Workflow',
    description: 'Automated document processing pipeline',
    stack: ['n8n', 'Milvus', 'FastAPI'],
    gradient: 'from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1]',
    accent: 'border-[#FF6B6B]',
    icon: Workflow,
    estimate: '20 min setup',
    features: [
      'Automated document ingestion',
      'Multi-format support',
      'Metadata extraction',
      'Webhook integration'
    ]
  },
  {
    id: 'search-api',
    title: 'Search API',
    description: 'Create a powerful document search endpoint',
    stack: ['FastAPI', 'PostgreSQL', 'pgvector'],
    gradient: 'from-[#22C55E] via-[#4361EE] to-[#7209B7]',
    accent: 'border-[#22C55E]',
    icon: FileSearch,
    estimate: '25 min setup',
    features: [
      'Vector similarity search',
      'Hybrid ranking',
      'Query expansion',
      'Rate limiting'
    ]
  },
  {
    id: 'langchain-agents',
    title: 'LangChain Agents',
    description: 'Multi-agent RAG system with tools',
    stack: ['LangChain', 'Redis', 'FastAPI'],
    gradient: 'from-[#7209B7] via-[#22C55E] to-[#4361EE]',
    accent: 'border-[#7209B7]',
    icon: Blocks,
    estimate: '30 min setup',
    features: [
      'Tool-using agents',
      'Memory management',
      'Parallel processing',
      'Custom tools'
    ]
  },
  {
    id: 'multi-modal',
    title: 'Multi-Modal RAG',
    description: 'Process text, images, and PDFs together',
    stack: ['Unstructured', 'Weaviate', 'FastAPI'],
    gradient: 'from-[#4ECDC4] via-[#FF6B6B] to-[#45B7D1]',
    accent: 'border-[#4ECDC4]',
    icon: Globe,
    estimate: '35 min setup',
    features: [
      'Image understanding',
      'PDF extraction',
      'Cross-modal search',
      'Format conversion'
    ]
  },
  {
    id: 'streaming-rag',
    title: 'Streaming RAG',
    description: 'Real-time document processing pipeline',
    stack: ['Kafka', 'Qdrant', 'FastAPI'],
    gradient: 'from-[#45B7D1] via-[#4ECDC4] to-[#FF6B6B]',
    accent: 'border-[#45B7D1]',
    icon: Braces,
    estimate: '40 min setup',
    features: [
      'Real-time indexing',
      'Stream processing',
      'Live updates',
      'Scalable architecture'
    ]
  }
];