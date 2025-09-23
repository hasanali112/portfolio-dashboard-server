import { Request, Response } from 'express'
import { testimonialService } from './testimonial.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'

const createTestimonial = catchAsync(async (req: Request, res: Response) => {
  const result = await testimonialService.testimonialCreate(req)
  sendResponse(res, {
    statusCode: 200,
    message: 'Testimonial created successfully! 🎉',
    data: result,
  })
})

const getAllTestimonials = catchAsync(async (req: Request, res: Response) => {
  const result = await testimonialService.allTestimonialsGet()
  sendResponse(res, {
    statusCode: 200,
    message: 'Testimonials retrieved successfully! 🎉',
    data: result,
  })
})

const getTestimonialById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await testimonialService.testimonialById(id)
  sendResponse(res, {
    statusCode: 200,
    message: 'Testimonial retrieved successfully! 🎉',
    data: result,
  })
})

const updateTestimonial = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const testimonialData = req.body
  const result = await testimonialService.updateTestimonial(id, testimonialData)
  sendResponse(res, {
    statusCode: 200,
    message: 'Testimonial updated successfully! 🎉',
    data: result,
  })
})

const deleteTestimonial = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await testimonialService.deleteTestimonial(id)
  sendResponse(res, {
    statusCode: 200,
    message: 'Testimonial deleted successfully! 🎉',
    data: result,
  })
})

const getFeaturedTestimonials = catchAsync(async (req: Request, res: Response) => {
  const result = await testimonialService.getFeaturedTestimonials()
  sendResponse(res, {
    statusCode: 200,
    message: 'Featured testimonials retrieved successfully! 🎉',
    data: result,
  })
})

const getHomepageTestimonials = catchAsync(async (req: Request, res: Response) => {
  const result = await testimonialService.getHomepageTestimonials()
  sendResponse(res, {
    statusCode: 200,
    message: 'Homepage testimonials retrieved successfully! 🎉',
    data: result,
  })
})

const getPublicTestimonials = catchAsync(async (req: Request, res: Response) => {
  const result = await testimonialService.getPublicTestimonials()
  sendResponse(res, {
    statusCode: 200,
    message: 'Public testimonials retrieved successfully! 🎉',
    data: result,
  })
})

const getTestimonialsByRating = catchAsync(async (req: Request, res: Response) => {
  const minRating = Number(req.params.rating) || 4
  const result = await testimonialService.getTestimonialsByRating(minRating)
  sendResponse(res, {
    statusCode: 200,
    message: 'Testimonials by rating retrieved successfully! 🎉',
    data: result,
  })
})

export const testimonialController = {
  createTestimonial,
  getAllTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial,
  getFeaturedTestimonials,
  getHomepageTestimonials,
  getPublicTestimonials,
  getTestimonialsByRating,
}
