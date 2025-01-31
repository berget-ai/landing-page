export interface BlogPost {
  id: string
  title: string
  description: string
  date: string
  author: string
  content: string
  tags: string[]
  image?: string
  imageAlt?: string
}
