import { Schema, model } from 'mongoose'
import { TProjct } from './project.interface'

const projectSchema = new Schema<TProjct>(
  {
    projectTitle: { type: String, required: true },
    description: { type: String, required: true },
    projectImage: { type: [String], required: true },
    liveLink: { type: String, required: true },
    gitRepoLinkFrontend: { type: String },
    gitRepoLinkBackend: { type: String },
    technology: [
      {
        technologyName: { type: String, required: true },
        technologyImage: { type: String },
      },
    ],
  },
  { timestamps: true },
)

export const Project = model<TProjct>('Project', projectSchema)
