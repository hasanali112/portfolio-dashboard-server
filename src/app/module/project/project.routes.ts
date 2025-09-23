import express from 'express'
import { projectController } from './project.controller'
import { uploadMultipleImages } from '../../config/cloudinary/multer.config'

const route = express.Router()

route.post(
  '/',
  uploadMultipleImages([
    { name: 'projectImages', maxCount: 10 },
    { name: 'technologyImages', maxCount: 20 }
  ]),
  projectController.createProject
)
route.get('/', projectController.getAllProjects)
route.get('/:id', projectController.getProjectsById)
route.put('/:id', projectController.updateProject)
route.delete('/:id', projectController.deleteProject)

export const projectRoute = route
