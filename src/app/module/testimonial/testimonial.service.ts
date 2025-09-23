import { Request } from 'express'
import { TTestimonial } from './testimonial.interface'
import { Testimonial } from './testimonial.model'

const testimonialCreate = async (req: Request) => {
  const file = req.file
  const payload = JSON.parse(req.body.data)

  if (file) {
    payload.clientImage = file.path
  }

  const result = await Testimonial.create(payload)
  return result
}

const allTestimonialsGet = async () => {
  const result = await Testimonial.find().sort({
    displayOrder: 1,
    dateReceived: -1,
  })
  return result
}

const testimonialById = async (id: string) => {
  const result = await Testimonial.findById(id)
  return result
}

const updateTestimonial = async (
  id: string,
  testimonial: Partial<TTestimonial>,
) => {
  const result = await Testimonial.findByIdAndUpdate(id, testimonial, {
    new: true,
  })
  return result
}

const deleteTestimonial = async (id: string) => {
  const result = await Testimonial.findByIdAndDelete(id)
  return result
}

const getFeaturedTestimonials = async () => {
  const result = await Testimonial.find({
    featured: true,
    isApproved: true,
    isPublic: true,
  })
    .sort({ displayOrder: 1 })
    .limit(6)
  return result
}

const getHomepageTestimonials = async () => {
  const result = await Testimonial.find({
    showOnHomepage: true,
    isApproved: true,
    isPublic: true,
  })
    .sort({ displayOrder: 1 })
    .limit(3)
  return result
}

const getPublicTestimonials = async () => {
  const result = await Testimonial.find({
    isApproved: true,
    isPublic: true,
  }).sort({ displayOrder: 1, dateReceived: -1 })
  return result
}

const getTestimonialsByRating = async (minRating: number) => {
  const result = await Testimonial.find({
    rating: { $gte: minRating },
    isApproved: true,
    isPublic: true,
  }).sort({ rating: -1, dateReceived: -1 })
  return result
}

export const testimonialService = {
  testimonialCreate,
  allTestimonialsGet,
  testimonialById,
  updateTestimonial,
  deleteTestimonial,
  getFeaturedTestimonials,
  getHomepageTestimonials,
  getPublicTestimonials,
  getTestimonialsByRating,
}
