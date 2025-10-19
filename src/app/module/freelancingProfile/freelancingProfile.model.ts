import { Schema, model } from 'mongoose';
import { IFreelancingProfile } from './freelancingProfile.interface';

const packageSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  deliveryTime: { type: Number, required: true },
  revisions: { type: Number, required: true },
  features: [{ type: String, required: true }]
});

const faqSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true }
});

const freelancingProfileSchema = new Schema<IFreelancingProfile>(
  {
    serviceName: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    subcategory: { type: String, required: true },
    gigImage: { type: String, required: true },
    platformLogo: { type: String },
    fiverr_link: { type: String },
    upwork_link: { type: String },
    serviceType: { 
      type: String, 
      enum: ['hourly', 'fixed', 'both'], 
      required: true 
    },
    deliveryTime: { type: Number, required: true },
    revisions: { type: Number, required: true },
    packages: {
      basic: { type: packageSchema, required: true },
      standard: { type: packageSchema },
      premium: { type: packageSchema }
    },
    faqs: [faqSchema],
    requirements: [{ type: String }],
    isActive: { type: Boolean, default: true },
    featured: { type: Boolean, default: false },
    totalOrders: { type: Number, default: 0 },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviews: { type: Number, default: 0 }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

// Indexes for better query performance
freelancingProfileSchema.index({ category: 1, subcategory: 1 });
freelancingProfileSchema.index({ rating: -1 });
freelancingProfileSchema.index({ featured: -1, createdAt: -1 });

export const FreelancingProfile = model<IFreelancingProfile>('FreelancingProfile', freelancingProfileSchema);
