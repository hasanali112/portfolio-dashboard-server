import express from 'express'
import { caseStudyController } from './caseStudy.controller'
import { uploadMultipleImages } from '../../config/cloudinary/multer.config'

const route = express.Router()

route.post(
  '/',
  uploadMultipleImages([
    { name: 'thumbnail', maxCount: 1 },
    { name: 'images', maxCount: 10 }
  ]),
  caseStudyController.createCaseStudy
)
route.get('/', caseStudyController.getAllCaseStudies)
route.get('/:id', caseStudyController.getCaseStudyById)
route.put('/:id', caseStudyController.updateCaseStudy)
route.delete('/:id', caseStudyController.deleteCaseStudy)

export const caseStudyRoutes = route
