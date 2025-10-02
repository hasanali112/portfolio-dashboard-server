/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { skillService } from './skill.service'

const createSkill = async (req: Request, res: Response) => {
  try {
    const skillData = req.body
    const result = await skillService.skillCreate(skillData)
    res.status(200).json({
      success: true,
      message: 'Skill created succesfully',
      data: result,
    })
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}
const getAllSkills = async (req: Request, res: Response) => {
  try {
    const result = await skillService.allSkillsGet()
    res.status(200).json({
      success: true,
      message: 'Skill retrieved successfully! 🎉',
      data: result,
    })
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}

export const skillController = {
  createSkill,
  getAllSkills,
}
