import { Request, Response } from 'express'
import { experienceService } from './experience.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'

const createExperience = catchAsync(async (req: Request, res: Response) => {
  const result = await experienceService.experienceCreate(req)
  sendResponse(res, {
    statusCode: 200,
    message: 'Experience created successfully! 🎉',
    data: result,
  })
})

const getAllExperiences = catchAsync(async (req: Request, res: Response) => {
  const result = await experienceService.allExperiencesGet()
  sendResponse(res, {
    statusCode: 200,
    message: 'Experiences retrieved successfully! 🎉',
    data: result,
  })
})

const getExperienceById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await experienceService.experienceById(id)
  sendResponse(res, {
    statusCode: 200,
    message: 'Experience retrieved successfully! 🎉',
    data: result,
  })
})

const updateExperience = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const experienceData = req.body
  const result = await experienceService.updateExperience(id, experienceData)
  sendResponse(res, {
    statusCode: 200,
    message: 'Experience updated successfully! 🎉',
    data: result,
  })
})

const deleteExperience = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await experienceService.deleteExperience(id)
  sendResponse(res, {
    statusCode: 200,
    message: 'Experience deleted successfully! 🎉',
    data: result,
  })
})

const getFeaturedExperiences = catchAsync(async (req: Request, res: Response) => {
  const result = await experienceService.getFeaturedExperiences()
  sendResponse(res, {
    statusCode: 200,
    message: 'Featured experiences retrieved successfully! 🎉',
    data: result,
  })
})

const getResumeExperiences = catchAsync(async (req: Request, res: Response) => {
  const result = await experienceService.getResumeExperiences()
  sendResponse(res, {
    statusCode: 200,
    message: 'Resume experiences retrieved successfully! 🎉',
    data: result,
  })
})

const getCurrentJob = catchAsync(async (req: Request, res: Response) => {
  const result = await experienceService.getCurrentJob()
  sendResponse(res, {
    statusCode: 200,
    message: 'Current job retrieved successfully! 🎉',
    data: result,
  })
})

export const experienceController = {
  createExperience,
  getAllExperiences,
  getExperienceById,
  updateExperience,
  deleteExperience,
  getFeaturedExperiences,
  getResumeExperiences,
  getCurrentJob,
}
