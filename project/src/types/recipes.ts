import { LucideIcon } from 'lucide-react'

export interface Recipe {
  id: string
  title: string
  description: string
  stack: string[]
  gradient: string
  accent: string
  icon: LucideIcon
  estimate: string
  features: string[]
}
