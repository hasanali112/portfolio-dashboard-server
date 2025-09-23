export type TAbout = {
  // Personal Info
  fullName: string
  title: string
  bio: string
  profileImage: string

  // Contact Info
  email: string
  phone?: string
  location: string
  website?: string

  // Social Links
  socialLinks: {
    platform: string
    url: string
    icon?: string
  }[]

  // Professional Info
  yearsOfExperience: number
  specializations: string[]
  currentStatus: string

  // Skills Summary
  topSkills: string[]
  languages: {
    name: string
    proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Native'
  }[]

  // Additional Info
  resume?: string // Resume file URL
  coverLetter?: string
  hobbies: string[]

  // SEO & Meta
  metaTitle?: string
  metaDescription?: string

  createdAt: Date
  updatedAt?: Date
}
