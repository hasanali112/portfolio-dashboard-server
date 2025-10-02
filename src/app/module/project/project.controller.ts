/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { projectService } from './project.service'

const createProject = async (req: Request, res: Response) => {
  try {
    const projectData = req.body
    const result = await projectService.projectCreate(projectData)
    res.status(200).json({
      success: true,
      message: 'Project created succesfully',
      data: result,
    })
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}
const getAllProjects = async (req: Request, res: Response) => {
  try {
    const result = await projectService.allProjectsGet()
    res.status(200).json({
      success: true,
      message: 'Project retrieved successfully! 🎉',
      data: result,
    })
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}
const getProjectsById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await projectService.projectsById(id)
    res.status(200).json({
      success: true,
      message: 'Single Project retrieved successfully! 🎉',
      data: result,
    })
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}

export const projectController = {
  createProject,
  getAllProjects,
  getProjectsById,
}
