import { Schema, model } from 'mongoose';
import { IVisitor } from './visitor.interface';

const visitorSchema = new Schema<IVisitor>({
  ipAddress: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  userAgent: {
    type: String,
    default: ''
  },
  country: {
    type: String,
    default: ''
  },
  city: {
    type: String,
    default: ''
  },
  visitedAt: {
    type: Date,
    default: Date.now,
    index: true
  },
  page: {
    type: String,
    default: '/'
  },
  browser: {
    type: String,
    default: ''
  },
  os: {
    type: String,
    default: ''
  },
  device: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

export const Visitor = model<IVisitor>('Visitor', visitorSchema);
