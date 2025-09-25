import { Schema, model } from 'mongoose';
import { TContact, TContactInfo } from './contact.interface';

const contactSchema = new Schema<TContact>({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, trim: true },
  subject: { type: String, required: false, trim: true },
  message: { type: String, required: true, trim: true },
  status: { 
    type: String, 
    enum: ['unread', 'read', 'replied'], 
    default: 'unread' 
  },
  priority: { 
    type: String, 
    enum: ['low', 'medium', 'high'], 
    default: 'medium' 
  },
  source: { 
    type: String, 
    enum: ['website', 'email', 'phone', 'social'], 
    default: 'website' 
  },
  isArchived: { type: Boolean, default: false },
  tags: [{ type: String, trim: true }],
  notes: { type: String, trim: true, default: '' },
  repliedAt: { type: Date }
}, {
  timestamps: true
});

const contactInfoSchema = new Schema<TContactInfo>({
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  country: { type: String, required: true, trim: true },
  website: { type: String, trim: true },
  socialLinks: {
    facebook: { type: String, trim: true },
    twitter: { type: String, trim: true },
    linkedin: { type: String, trim: true },
    instagram: { type: String, trim: true },
    github: { type: String, trim: true }
  },
  businessHours: {
    monday: { type: String, default: '9:00 AM - 5:00 PM' },
    tuesday: { type: String, default: '9:00 AM - 5:00 PM' },
    wednesday: { type: String, default: '9:00 AM - 5:00 PM' },
    thursday: { type: String, default: '9:00 AM - 5:00 PM' },
    friday: { type: String, default: '9:00 AM - 5:00 PM' },
    saturday: { type: String, default: 'Closed' },
    sunday: { type: String, default: 'Closed' }
  },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

export const Contact = model<TContact>('Contact', contactSchema);
export const ContactInfo = model<TContactInfo>('ContactInfo', contactInfoSchema);
