/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express'
import { TCaseStudy } from './caseStudy.interface'
import { CaseStudy } from './caseStudy.model'

const caseStudyCreate = async (req: Request) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] }
  const payload = JSON.parse(req.body.data)

  if (files?.thumbnail) {
    payload.thumbnail = files.thumbnail[0].path
  }

  if (files?.images) {
    payload.images = files.images.map((file: Express.Multer.File) => file.path)
  }

  if (payload.isPublished && !payload.publishedAt) {
    payload.publishedAt = new Date()
  }

  const result = await CaseStudy.create(payload)
  return result
}

const allCaseStudiesGet = async () => {
  const result = await CaseStudy.find().sort({ createdAt: -1 })
  return result
}

const caseStudyById = async (id: string) => {
  const result = await CaseStudy.findById(id)
  return result
}

const updateCaseStudy = async (id: string, caseStudy: Partial<TCaseStudy>) => {
  if (caseStudy.isPublished && !caseStudy.publishedAt) {
    caseStudy.publishedAt = new Date()
  }

  const result = await CaseStudy.findByIdAndUpdate(id, caseStudy, {
    new: true,
  })
  return result
}

const deleteCaseStudy = async (id: string) => {
  const result = await CaseStudy.findByIdAndDelete(id)
  return result
}

export const caseStudyService = {
  caseStudyCreate,
  allCaseStudiesGet,
  caseStudyById,
  updateCaseStudy,
  deleteCaseStudy,
}
