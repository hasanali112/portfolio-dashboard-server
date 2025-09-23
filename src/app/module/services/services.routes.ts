import express from 'express'
import { serviceController } from './services.controller'
import { uploadMultipleImages } from '../../config/cloudinary/multer.config'

const route = express.Router()

route.post(
  '/',
  uploadMultipleImages([
    { name: 'serviceIcon', maxCount: 1 },
    { name: 'serviceImage', maxCount: 1 }
  ]),
  serviceController.createService
)
route.get('/', serviceController.getAllServices)
route.get('/featured', serviceController.getFeaturedServices)
route.get('/popular', serviceController.getPopularServices)
route.get('/public', serviceController.getPublicServices)
route.get('/category/:category', serviceController.getServicesByCategory)
route.get('/:id', serviceController.getServiceById)
route.get('/slug/:slug', serviceController.getServiceBySlug)
route.put('/:id', 
  uploadMultipleImages([
    { name: 'serviceIcon', maxCount: 1 },
    { name: 'serviceImage', maxCount: 1 }
  ]),
  serviceController.updateService
)
route.delete('/:id', serviceController.deleteService)

export const serviceRoute = route
