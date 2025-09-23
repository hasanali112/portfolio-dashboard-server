import express from 'express'
import { aboutController } from './about.controller'
import { uploadMultipleImages } from '../../config/cloudinary/multer.config'

const route = express.Router()

route.post(
  '/',
  uploadMultipleImages([
    { name: 'profileImage', maxCount: 1 },
    { name: 'resume', maxCount: 1 }
  ]),
  aboutController.createAbout
)
route.get('/', aboutController.getAbout)
route.get('/public', aboutController.getPublicAbout)
route.get('/:id', aboutController.getAboutById)
route.put('/:id', aboutController.updateAbout)
route.delete('/:id', aboutController.deleteAbout)

export const aboutRoute = route
