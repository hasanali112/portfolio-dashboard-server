import { Schema, model } from 'mongoose';
import { TLinkedInConnection } from './linkedinConnection.interface';

const linkedinConnectionSchema = new Schema<TLinkedInConnection>({
  name: { type: String, required: true, trim: true },
  designation: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  phoneNumber: { type: String, trim: true },
  website: { type: String, trim: true },
  link: { type: String, required: true, trim: true },
  reqStatus: { 
    type: String, 
    enum: ['pending', 'accepted', 'declined', 'withdrawn'], 
    default: 'pending' 
  },
  dmStatus: { 
    type: String, 
    enum: ['not_sent', 'sent', 'replied', 'no_response'], 
    default: 'not_sent' 
  },
  dmSentDate: { type: Date },
  outreachStatus: {
    type: String,
    enum: ['not_started', 'in_progress', 'completed', 'paused'],
    default: 'not_started'
  },
  outreachDate: { type: Date }
}, {
  timestamps: true
});

export const LinkedInConnection = model<TLinkedInConnection>('LinkedInConnection', linkedinConnectionSchema);
