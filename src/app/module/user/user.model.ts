import { Schema, model } from 'mongoose'
import { TUser, UserRole } from './user.interface'

const userSchema = new Schema<TUser>({
  userId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  contactNumber: { type: String, required: true },
  password: { type: String, required: true },
  needPasswordChange: { type: Boolean, default: true },
  role: { type: String, enum: Object.values(UserRole), required: true },
  status: { type: String, enum: ['ACTIVE', 'BLOCKED'], default: 'ACTIVE' },
  isDeleted: { type: Boolean, default: false }
})

export const User = model<TUser>('User', userSchema)
