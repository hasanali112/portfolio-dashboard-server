import { Schema, model } from 'mongoose'
import { TExperience } from './experience.interface'

const experienceSchema = new Schema<TExperience>(
  {
    jobTitle: { type: String, required: true },
    companyName: { type: String, required: true },
    companyLogo: { type: String },
    location: { type: String, required: true },
    employmentType: {
      type: String,
      enum: ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'],
      required: true,
    },

    startDate: { type: Date, required: true },
    endDate: { type: Date },
    isCurrentJob: { type: Boolean, default: false },

    description: { type: String, required: true },
    responsibilities: [{ type: String }],
    achievements: [{ type: String }],
    technologies: [{ type: String }],

    companyWebsite: { type: String },
    salary: {
      amount: { type: Number },
      currency: { type: String, default: 'USD' },
      period: {
        type: String,
        enum: ['hourly', 'monthly', 'yearly'],
        default: 'yearly',
      },
    },

    featured: { type: Boolean, default: false },
    showOnResume: { type: Boolean, default: true },
    displayOrder: { type: Number, default: 0 },
  },
  { timestamps: true },
)

export const Experience = model<TExperience>('Experience', experienceSchema)
