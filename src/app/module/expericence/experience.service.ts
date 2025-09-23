import { Request } from 'express'
import { TExperience } from './experience.interface'
import { Experience } from './experience.model'

const experienceCreate = async (req: Request) => {
  const file = req.file
  const payload = JSON.parse(req.body.data)

  if (file) {
    payload.companyLogo = file.path
  }

  const result = await Experience.create(payload)
  return result
}

const allExperiencesGet = async () => {
  const result = await Experience.find().sort({
    displayOrder: 1,
    startDate: -1,
  })
  return result
}

const experienceById = async (id: string) => {
  const result = await Experience.findById(id)
  return result
}

const updateExperience = async (
  id: string,
  experience: Partial<TExperience>,
) => {
  const result = await Experience.findByIdAndUpdate(id, experience, {
    new: true,
  })
  return result
}

const deleteExperience = async (id: string) => {
  const result = await Experience.findByIdAndDelete(id)
  return result
}

const getFeaturedExperiences = async () => {
  const result = await Experience.find({ featured: true }).sort({
    displayOrder: 1,
  })
  return result
}

const getResumeExperiences = async () => {
  const result = await Experience.find({ showOnResume: true }).sort({
    displayOrder: 1,
    startDate: -1,
  })
  return result
}

const getCurrentJob = async () => {
  const result = await Experience.findOne({ isCurrentJob: true })
  return result
}

export const experienceService = {
  experienceCreate,
  allExperiencesGet,
  experienceById,
  updateExperience,
  deleteExperience,
  getFeaturedExperiences,
  getResumeExperiences,
  getCurrentJob,
}
