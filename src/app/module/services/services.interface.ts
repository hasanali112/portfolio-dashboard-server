export type TService = {
  // Service Info
  serviceName: string
  description: string
  serviceIcon?: string
  serviceImage?: string
  
  // Pricing
  pricing: {
    type: 'Fixed' | 'Hourly' | 'Project-based' | 'Custom'
    amount?: number
    currency: string
    period?: string // e.g., "per hour", "per project"
  }
  
  // Service Details
  features: string[]
  deliverables: string[]
  duration: string // e.g., "1-2 weeks", "3-5 days"
  
  // Categories & Tags
  category: string
  tags: string[]
  
  // Requirements
  requirements?: string[]
  processSteps?: string[]
  
  // Display Options
  featured: boolean
  popular: boolean
  isActive: boolean
  displayOrder: number
  
  // SEO & Meta
  slug: string
  metaTitle?: string
  metaDescription?: string
  
  createdAt: Date
  updatedAt?: Date
}
