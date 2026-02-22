export type TCaseStudy = {
  title: string
  description: string
  thumbnail: string
  category: string
  challenge: string
  solution: string
  outcome: string
  technologies: string[]
  link?: string
  githubLink?: string
  images?: string[]
  isPublished: boolean
  publishedAt?: Date
}
