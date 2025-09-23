import express from 'express'
import { testimonialController } from './testimonial.controller'
import { updloadSingleImage } from '../../config/cloudinary/multer.config'

const route = express.Router()

route.post(
  '/',
  updloadSingleImage('clientImage'),
  testimonialController.createTestimonial
)
route.get('/', testimonialController.getAllTestimonials)
route.get('/featured', testimonialController.getFeaturedTestimonials)
route.get('/homepage', testimonialController.getHomepageTestimonials)
route.get('/public', testimonialController.getPublicTestimonials)
route.get('/rating/:rating', testimonialController.getTestimonialsByRating)
route.get('/:id', testimonialController.getTestimonialById)
route.put('/:id', testimonialController.updateTestimonial)
route.delete('/:id', testimonialController.deleteTestimonial)

export const testimonialRoute = route
