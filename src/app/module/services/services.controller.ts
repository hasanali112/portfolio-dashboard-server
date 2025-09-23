import { Request, Response } from 'express'
import { serviceService } from './services.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'

const createService = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceService.serviceCreate(req)
  sendResponse(res, {
    statusCode: 200,
    message: 'Service created successfully! 🎉',
    data: result,
  })
})

const getAllServices = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceService.allServicesGet()
  sendResponse(res, {
    statusCode: 200,
    message: 'Services retrieved successfully! 🎉',
    data: result,
  })
})

const getServiceById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await serviceService.serviceById(id)
  sendResponse(res, {
    statusCode: 200,
    message: 'Service retrieved successfully! 🎉',
    data: result,
  })
})

const getServiceBySlug = catchAsync(async (req: Request, res: Response) => {
  const slug = req.params.slug
  const result = await serviceService.serviceBySlug(slug)
  sendResponse(res, {
    statusCode: 200,
    message: 'Service retrieved successfully! 🎉',
    data: result,
  })
})

const updateService = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await serviceService.updateService(req, id)
  sendResponse(res, {
    statusCode: 200,
    message: 'Service updated successfully! 🎉',
    data: result,
  })
})

const deleteService = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await serviceService.deleteService(id)
  sendResponse(res, {
    statusCode: 200,
    message: 'Service deleted successfully! 🎉',
    data: result,
  })
})

const getFeaturedServices = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceService.getFeaturedServices()
  sendResponse(res, {
    statusCode: 200,
    message: 'Featured services retrieved successfully! 🎉',
    data: result,
  })
})

const getPopularServices = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceService.getPopularServices()
  sendResponse(res, {
    statusCode: 200,
    message: 'Popular services retrieved successfully! 🎉',
    data: result,
  })
})

const getServicesByCategory = catchAsync(async (req: Request, res: Response) => {
  const category = req.params.category
  const result = await serviceService.getServicesByCategory(category)
  sendResponse(res, {
    statusCode: 200,
    message: 'Services by category retrieved successfully! 🎉',
    data: result,
  })
})

const getPublicServices = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceService.getPublicServices()
  sendResponse(res, {
    statusCode: 200,
    message: 'Public services retrieved successfully! 🎉',
    data: result,
  })
})

export const serviceController = {
  createService,
  getAllServices,
  getServiceById,
  getServiceBySlug,
  updateService,
  deleteService,
  getFeaturedServices,
  getPopularServices,
  getServicesByCategory,
  getPublicServices,
}
