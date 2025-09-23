/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { skillService } from './skill.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'

const createSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await skillService.skillCreate(req)
  sendResponse(res, {
    statusCode: 200,
    message: 'Skill created successfully! 🎉',
    data: result,
  })
})

const getAllSkills = catchAsync(async (req: Request, res: Response) => {
  const result = await skillService.allSkillsGet(req.query)
  sendResponse(res, {
    statusCode: 200,
    message: 'Skill retrieved successfully! 🎉',
    meta: result.meta,
    data: result.data,
  })
})

const skillCount = catchAsync(async (req: Request, res: Response) => {
  const result = await skillService.skillCount()
  sendResponse(res, {
    statusCode: 200,
    message: 'Skill count retrieved successfully! 🎉',
    data: result,
  })
})

export const skillController = {
  createSkill,
  getAllSkills,
  skillCount,
}
