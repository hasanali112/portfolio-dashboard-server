import { Schema, model } from 'mongoose'
import { TAbout } from './about.interface'

const aboutSchema = new Schema<TAbout>(
  {
    fullName: { type: String, required: true },
    title: { type: String, required: true },
    bio: { type: String, required: true },
    profileImage: { type: String, required: true },

    email: { type: String, required: true },
    phone: { type: String },
    location: { type: String, required: true },
    website: { type: String },

    socialLinks: [
      {
        platform: { type: String, required: true },
        url: { type: String, required: true },
        icon: { type: String },
      },
    ],

    yearsOfExperience: { type: Number, required: true },
    specializations: [{ type: String }],
    currentStatus: { type: String, required: true },

    topSkills: [{ type: String }],
    languages: [
      {
        name: { type: String, required: true },
        proficiency: {
          type: String,
          enum: ['Beginner', 'Intermediate', 'Advanced', 'Native'],
          required: true,
        },
      },
    ],

    resume: { type: String },
    coverLetter: { type: String },
    hobbies: [{ type: String }],

    metaTitle: { type: String },
    metaDescription: { type: String },
  },
  { timestamps: true },
)

export const About = model<TAbout>('About', aboutSchema)
