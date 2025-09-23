import { Request } from 'express'
import { TAbout } from './about.interface'
import { About } from './about.model'

const aboutCreate = async (req: Request) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] }
  const payload = JSON.parse(req.body.data)

  if (files?.profileImage) {
    payload.profileImage = files.profileImage[0].path
  }

  if (files?.resume) {
    payload.resume = files.resume[0].path
  }

  const result = await About.create(payload)
  return result
}

const aboutGet = async () => {
  const result = await About.findOne().sort({ createdAt: -1 })
  return result
}

const aboutById = async (id: string) => {
  const result = await About.findById(id)
  return result
}

const updateAbout = async (id: string, about: Partial<TAbout>) => {
  const result = await About.findByIdAndUpdate(id, about, { new: true })
  return result
}

const deleteAbout = async (id: string) => {
  const result = await About.findByIdAndDelete(id)
  return result
}

const getPublicAbout = async () => {
  const result = await About.findOne()
    .select('-createdAt -updatedAt -__v')
    .sort({ createdAt: -1 })
  return result
}

export const aboutService = {
  aboutCreate,
  aboutGet,
  aboutById,
  updateAbout,
  deleteAbout,
  getPublicAbout,
}
