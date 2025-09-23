import { Request } from 'express'
import { Service } from './services.model'

const serviceCreate = async (req: Request) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] }
  const payload = JSON.parse(req.body.data)

  if (files?.serviceIcon) {
    payload.serviceIcon = files.serviceIcon[0].path
  }

  if (files?.serviceImage) {
    payload.serviceImage = files.serviceImage[0].path
  }

  const result = await Service.create(payload)
  return result
}

const allServicesGet = async () => {
  const result = await Service.find({ isActive: true }).sort({
    displayOrder: 1,
    createdAt: -1,
  })
  return result
}

const serviceById = async (id: string) => {
  const result = await Service.findById(id)
  return result
}

const serviceBySlug = async (slug: string) => {
  const result = await Service.findOne({ slug, isActive: true })
  return result
}

const updateService = async (req: Request, id: string) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] }
  const payload = req.body.data ? JSON.parse(req.body.data) : req.body

  if (files?.serviceIcon) {
    payload.serviceIcon = files.serviceIcon[0].path
  }

  if (files?.serviceImage) {
    payload.serviceImage = files.serviceImage[0].path
  }

  const result = await Service.findByIdAndUpdate(id, payload, { new: true })
  return result
}

const deleteService = async (id: string) => {
  const result = await Service.findByIdAndDelete(id)
  return result
}

const getFeaturedServices = async () => {
  const result = await Service.find({ featured: true, isActive: true })
    .sort({ displayOrder: 1 })
    .limit(6)
  return result
}

const getPopularServices = async () => {
  const result = await Service.find({ popular: true, isActive: true })
    .sort({ displayOrder: 1 })
    .limit(3)
  return result
}

const getServicesByCategory = async (category: string) => {
  const result = await Service.find({ category, isActive: true }).sort({
    displayOrder: 1,
  })
  return result
}

const getPublicServices = async () => {
  const result = await Service.find({ isActive: true })
    .select('-createdAt -updatedAt -__v')
    .sort({ displayOrder: 1, createdAt: -1 })
  return result
}

export const serviceService = {
  serviceCreate,
  allServicesGet,
  serviceById,
  serviceBySlug,
  updateService,
  deleteService,
  getFeaturedServices,
  getPopularServices,
  getServicesByCategory,
  getPublicServices,
}
