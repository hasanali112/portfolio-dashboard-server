import { Schema, model } from 'mongoose'
import { TSkill } from './skill.interface'

const skillSchema = new Schema<TSkill>({
  image: { type: String, required: true },
  title: { type: String, required: true },
  skillProficiency: { type: Number, required: true },
})

export const SkillModel = model<TSkill>('Skill', skillSchema)
