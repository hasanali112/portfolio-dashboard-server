import { TProjct } from './project.interface'
import { ProjectModel } from './project.model'

const projectCreate = async (project: TProjct) => {
  const result = await ProjectModel.create(project)
  return result
}

const allProjectsGet = async () => {
  const result = await ProjectModel.find()
  return result
}
const projectsById = async (id: string) => {
  const result = await ProjectModel.findById({ _id: id })
  return result
}

export const projectService = {
  projectCreate,
  allProjectsGet,
  projectsById,
}
