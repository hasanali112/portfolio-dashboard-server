import express from 'express'
import { experienceController } from './experience.controller'
import { updloadSingleImage } from '../../config/cloudinary/multer.config'

const route = express.Router()

route.post(
  '/',
  updloadSingleImage('companyLogo'),
  experienceController.createExperience
)
route.get('/', experienceController.getAllExperiences)
route.get('/featured', experienceController.getFeaturedExperiences)
route.get('/resume', experienceController.getResumeExperiences)
route.get('/current', experienceController.getCurrentJob)
route.get('/:id', experienceController.getExperienceById)
route.put('/:id', experienceController.updateExperience)
route.delete('/:id', experienceController.deleteExperience)

export const experienceRoute = route
