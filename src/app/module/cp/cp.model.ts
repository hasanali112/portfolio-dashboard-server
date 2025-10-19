import { Schema, model } from 'mongoose'
import { ICP } from './cp.interface'

const cpSchema = new Schema<ICP>(
  {
    date: {
      type: Date,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
    platform: {
      type: String,
      required: true,
    },
    revisionDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
)

export const CP = model<ICP>('CP', cpSchema)
