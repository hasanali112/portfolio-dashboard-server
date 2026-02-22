import { Schema, model } from 'mongoose'
import { TCaseStudy } from './caseStudy.interface'

const caseStudySchema = new Schema<TCaseStudy>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true },
    category: { type: String, required: true },
    challenge: { type: String, required: true },
    solution: { type: String, required: true },
    outcome: { type: String, required: true },
    technologies: { type: [String], required: true },
    link: { type: String },
    githubLink: { type: String },
    images: { type: [String] },
    isPublished: { type: Boolean, default: false },
    publishedAt: { type: Date },
  },
  { timestamps: true },
)

export const CaseStudy = model<TCaseStudy>('CaseStudy', caseStudySchema)
