export type TExperience = {
  jobTitle: string
  companyName: string
  companyLogo?: string
  location: string
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Internship'
  
  // Duration
  startDate: Date
  endDate?: Date
  isCurrentJob: boolean
  
  // Job Details
  description: string
  responsibilities: string[]
  achievements: string[]
  technologies: string[]
  
  // Additional Info
  companyWebsite?: string
  salary?: {
    amount: number
    currency: string
    period: 'hourly' | 'monthly' | 'yearly'
  }
  
  // Display Options
  featured: boolean
  showOnResume: boolean
  displayOrder: number
  
  createdAt: Date
  updatedAt?: Date
}
