import { Request, Response } from 'express'
import { aboutService } from './about.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'

const createAbout = catchAsync(async (req: Request, res: Response) => {
  const result = await aboutService.aboutCreate(req)
  sendResponse(res, {
    statusCode: 200,
    message: 'About information created successfully! 🎉',
    data: result,
  })
})

const getAbout = catchAsync(async (req: Request, res: Response) => {
  const result = await aboutService.aboutGet()
  sendResponse(res, {
    statusCode: 200,
    message: 'About information retrieved successfully! 🎉',
    data: result,
  })
})

const getAboutById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await aboutService.aboutById(id)
  sendResponse(res, {
    statusCode: 200,
    message: 'About information retrieved successfully! 🎉',
    data: result,
  })
})

const updateAbout = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const aboutData = req.body
  const result = await aboutService.updateAbout(id, aboutData)
  sendResponse(res, {
    statusCode: 200,
    message: 'About information updated successfully! 🎉',
    data: result,
  })
})

const deleteAbout = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await aboutService.deleteAbout(id)
  sendResponse(res, {
    statusCode: 200,
    message: 'About information deleted successfully! 🎉',
    data: result,
  })
})

const getPublicAbout = catchAsync(async (req: Request, res: Response) => {
  const result = await aboutService.getPublicAbout()
  sendResponse(res, {
    statusCode: 200,
    message: 'Public about information retrieved successfully! 🎉',
    data: result,
  })
})

export const aboutController = {
  createAbout,
  getAbout,
  getAboutById,
  updateAbout,
  deleteAbout,
  getPublicAbout,
}
