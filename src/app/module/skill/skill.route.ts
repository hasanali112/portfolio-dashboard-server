import express from 'express'
import { skillController } from './skill.controller'

const route = express.Router()

route.post('/skills/create-skill', skillController.createSkill)
route.get('/skills', skillController.getAllSkills)

export const skillRoutes = route
