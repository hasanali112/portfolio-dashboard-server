import { Schema, model } from 'mongoose'
import { TTestimonial } from './testimonial.interface'

const testimonialSchema = new Schema<TTestimonial>(
  {
    clientName: { type: String, required: true },
    clientTitle: { type: String, required: true },
    clientCompany: { type: String, required: true },
    clientImage: { type: String },

    testimonialText: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },

    projectName: { type: String },
    serviceType: { type: String, required: true },
    projectDuration: { type: String },

    clientEmail: { type: String },
    clientLinkedIn: { type: String },
    clientWebsite: { type: String },

    featured: { type: Boolean, default: false },
    showOnHomepage: { type: Boolean, default: true },
    displayOrder: { type: Number, default: 0 },

    isApproved: { type: Boolean, default: true },
    isPublic: { type: Boolean, default: true },

    dateReceived: { type: Date, required: true },
  },
  { timestamps: true },
)

export const Testimonial = model<TTestimonial>('Testimonial', testimonialSchema)
