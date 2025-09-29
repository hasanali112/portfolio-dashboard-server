export type TBlog = {
  blogImage: string
  topic: string
  title: string
  description: string
  content: string
  category: 'All' | 'Web Dev' | 'Mobile Dev' | 'AI/ML' | 'DevOps' | 'UI/UX'

  // SEO & Metadata
  slug: string
  metaTitle?: string
  metaDescription?: string
  tags: string[]

  // Author Info
  author: {
    name: string
    profileImage?: string
    bio?: string
  }

  // Engagement & Status
  views?: number
  likes?: number
  comments?: number
  recent: boolean
  popular: boolean
  featured?: boolean

  // Time & Update
  createdAt: Date
  updatedAt?: Date
  readTime?: string
}
