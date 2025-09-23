import { Request } from 'express'
import QueryBuilder from '../../builder/QueryBuilder'
import { Skill } from './skill.model'

const skillCreate = async (req: Request) => {
  const file = req.file
  const payload = JSON.parse(req.body.data)
  payload.image = file?.path
  const result = await Skill.create(payload)
  return result
}

const allSkillsGet = async (query: Record<string, unknown>) => {
  const queryResult = await new QueryBuilder(Skill.find(), query)
    .search(['title'])
    .sort()
    .filter()
    .fields().modelQuery

  const count = await new QueryBuilder(Skill.find(), query)
    .pagination()
    .countTotal()

  return {
    data: queryResult,
    meta: count,
  }
}

//totalcount of skill
const skillCount = async () => {
  const result = await Skill.countDocuments()
  return result
}

export const skillService = {
  skillCreate,
  allSkillsGet,
  skillCount,
}
