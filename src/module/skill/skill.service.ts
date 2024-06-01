import { TSkill } from './skill.interface'
import { SkillModel } from './skill.model'

const skillCreate = async (skill: TSkill) => {
  const result = await SkillModel.create(skill)
  return result
}

const allSkillsGet = async () => {
  const result = await SkillModel.find()
  return result
}

export const skillService = {
  skillCreate,
  allSkillsGet,
}
