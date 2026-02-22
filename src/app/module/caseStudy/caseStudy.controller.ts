import { Request, Response } from 'express'
import { caseStudyService } from './caseStudy.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'

const createCaseStudy = catchAsync(async (req: Request, res: Response) => {
  const result = await caseStudyService.caseStudyCreate(req)
  sendResponse(res, {
    statusCode: 200,
    message: 'Case study created successfully! 🎉',
    data: result,
  })
})

const getAllCaseStudies = catchAsync(async (req: Request, res: Response) => {
  const result = await caseStudyService.allCaseStudiesGet()
  sendResponse(res, {
    statusCode: 200,
    message: 'Case studies retrieved successfully! 🎉',
    data: result,
  })
})

const getCaseStudyById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await caseStudyService.caseStudyById(id)
  sendResponse(res, {
    statusCode: 200,
    message: 'Case study retrieved successfully! 🎉',
    data: result,
  })
})

const updateCaseStudy = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const caseStudyData = req.body
  const result = await caseStudyService.updateCaseStudy(id, caseStudyData)
  sendResponse(res, {
    statusCode: 200,
    message: 'Case study updated successfully! 🎉',
    data: result,
  })
})

const deleteCaseStudy = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await caseStudyService.deleteCaseStudy(id)
  sendResponse(res, {
    statusCode: 200,
    message: 'Case study deleted successfully! 🎉',
    data: result,
  })
})

export const caseStudyController = {
  createCaseStudy,
  getAllCaseStudies,
  getCaseStudyById,
  updateCaseStudy,
  deleteCaseStudy,
}
