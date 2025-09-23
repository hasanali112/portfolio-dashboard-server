import express from 'express'
import { shopController } from './shop.controller'
import { uploadMultipleImages } from '../../config/cloudinary/multer.config'

const route = express.Router()

route.post(
  '/',
  uploadMultipleImages([
    { name: 'productImages', maxCount: 10 }
  ]),
  shopController.createProduct
)
route.get('/', shopController.getAllProducts)
route.get('/featured', shopController.getFeaturedProducts)
route.get('/category/:category', shopController.getProductsByCategory)
route.get('/:id', shopController.getProductById)
route.get('/slug/:slug', shopController.getProductBySlug)
route.put('/:id', shopController.updateProduct)
route.delete('/:id', shopController.deleteProduct)

export const shopRoute = route
