import { Schema, model } from 'mongoose'
import { TService } from './services.interface'

const serviceSchema = new Schema<TService>(
  {
    serviceName: { type: String, required: true },
    description: { type: String, required: true },
    serviceIcon: { type: String },
    serviceImage: { type: String },

    pricing: {
      type: {
        type: String,
        enum: ['Fixed', 'Hourly', 'Project-based', 'Custom'],
        required: true,
      },
      amount: { type: Number },
      currency: { type: String, default: 'USD' },
      period: { type: String },
    },

    features: [{ type: String }],
    deliverables: [{ type: String }],
    duration: { type: String, required: true },

    category: { type: String, required: true },
    tags: [{ type: String }],

    requirements: [{ type: String }],
    processSteps: [{ type: String }],

    featured: { type: Boolean, default: false },
    popular: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    displayOrder: { type: Number, default: 0 },

    slug: { type: String, required: true, unique: true },
    metaTitle: { type: String },
    metaDescription: { type: String },
  },
  { timestamps: true },
)

export const Service = model<TService>('Service', serviceSchema)
