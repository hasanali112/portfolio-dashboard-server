import { Request, Response } from 'express'
import { projectService } from './project.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'

const createProject = catchAsync(async (req: Request, res: Response) => {
  const result = await projectService.projectCreate(req)
  sendResponse(res, {
    statusCode: 200,
    message: 'Project created successfully! 🎉',
    data: result,
  })
})

const getAllProjects = catchAsync(async (req: Request, res: Response) => {
  const result = await projectService.allProjectsGet()
  sendResponse(res, {
    statusCode: 200,
    message: 'Projects retrieved successfully! 🎉',
    data: result,
  })
})

const getProjectsById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await projectService.projectsById(id)
  sendResponse(res, {
    statusCode: 200,
    message: 'Project retrieved successfully! 🎉',
    data: result,
  })
})

const updateProject = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const projectData = req.body
  const result = await projectService.updateProject(id, projectData)
  sendResponse(res, {
    statusCode: 200,
    message: 'Project updated successfully! 🎉',
    data: result,
  })
})

const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await projectService.deleteProject(id)
  sendResponse(res, {
    statusCode: 200,
    message: 'Project deleted successfully! 🎉',
    data: result,
  })
})

export const projectController = {
  createProject,
  getAllProjects,
  getProjectsById,
  updateProject,
  deleteProject,
}
