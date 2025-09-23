/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express'
import { TProjct } from './project.interface'
import { Project } from './project.model'

const projectCreate = async (req: Request) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] }
  const payload = JSON.parse(req.body.data)

  if (files?.projectImages) {
    payload.projectImage = files.projectImages.map(
      (file: Express.Multer.File) => file.path,
    )
  }

  if (files?.technologyImages && payload.technology) {
    payload.technology = payload.technology.map((tech: any, index: number) => ({
      technologyName: tech.technologyName,
      technologyImage: files.technologyImages[index]?.path || '',
    }))
  }

  const result = await Project.create(payload)
  return result
}

const allProjectsGet = async () => {
  const result = await Project.find()
  return result
}

const projectsById = async (id: string) => {
  const result = await Project.findById(id)
  return result
}

const updateProject = async (id: string, project: Partial<TProjct>) => {
  const result = await Project.findByIdAndUpdate(id, project, {
    new: true,
  })
  return result
}

const deleteProject = async (id: string) => {
  const result = await Project.findByIdAndDelete(id)
  return result
}

export const projectService = {
  projectCreate,
  allProjectsGet,
  projectsById,
  updateProject,
  deleteProject,
}
