export interface BlogPost {
  id: string
  title: string
  description: string
  date: string
  author: string
  email?: string
  content: string
  tags: string[]
  image?: string
  imageAlt?: string
}
