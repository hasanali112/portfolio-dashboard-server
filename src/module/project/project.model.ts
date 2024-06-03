import { Schema, model } from 'mongoose'
import { TProjct } from './project.interface'

const projectSchema = new Schema<TProjct>({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  liveLink: { type: String, required: true },
  gitRepoLink: { type: String, required: true },
  useTechnology: { type: [String], required: true },
})

export const ProjectModel = model<TProjct>('Project', projectSchema)
