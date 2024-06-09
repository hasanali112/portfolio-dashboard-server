import express from 'express'
import { projectController } from './project.controller'

const route = express.Router()

route.post('/projects/create-project', projectController.createProject)
route.get('/projects', projectController.getAllProjects)
route.get('/projects/:id', projectController.getProjectsById)

export const projectRoute = route
