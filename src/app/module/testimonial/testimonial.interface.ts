export type TTestimonial = {
  // Client Info
  clientName: string
  clientTitle: string
  clientCompany: string
  clientImage?: string
  
  // Testimonial Content
  testimonialText: string
  rating: number // 1-5 stars
  
  // Project/Service Info
  projectName?: string
  serviceType: string
  projectDuration?: string
  
  // Contact & Social
  clientEmail?: string
  clientLinkedIn?: string
  clientWebsite?: string
  
  // Display Options
  featured: boolean
  showOnHomepage: boolean
  displayOrder: number
  
  // Status
  isApproved: boolean
  isPublic: boolean
  
  // Metadata
  dateReceived: Date
  
  createdAt: Date
  updatedAt?: Date
}
