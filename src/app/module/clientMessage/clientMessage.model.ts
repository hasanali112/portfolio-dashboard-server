import { Schema, model } from 'mongoose';
import { IClientMessage } from '../../interface/clientMessage.interface';

const clientMessageSchema = new Schema<IClientMessage>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String },
    phone: { type: String },
    timeline: { type: String },
    description: { type: String, required: true },
    selectedServices: { type: Object, required: true },
    selectedBudget: { type: String, required: true },
    status: { type: String, enum: ['new', 'read', 'replied'], default: 'new' },
  },
  {
    timestamps: true,
  }
);

export const ClientMessage = model<IClientMessage>('ClientMessage', clientMessageSchema);
