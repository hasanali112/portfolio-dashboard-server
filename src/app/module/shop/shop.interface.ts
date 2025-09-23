export type TShop = {
  productName: string
  description: string
  price: number
  discountPrice?: number
  category: string
  productImages: string[]
  inStock: boolean
  stockQuantity: number

  // Product Details
  features: string[]
  specifications?: {
    key: string
    value: string
  }[]

  // SEO & Metadata
  slug: string
  metaTitle?: string
  metaDescription?: string
  tags: string[]

  // Status & Visibility
  featured: boolean
  popular: boolean
  isActive: boolean

  // Ratings & Reviews
  rating?: number
  totalReviews?: number
}
