import express from 'express'
import { skillController } from './skill.controller'
import { updloadSingleImage } from '../../config/cloudinary/multer.config'

const route = express.Router()

route.post(
  '/create-skill',
  updloadSingleImage('skill-image'),
  skillController.createSkill,
)
route.get('/', skillController.getAllSkills)

route.get('/count', skillController.skillCount)

export const skillRoutes = route
