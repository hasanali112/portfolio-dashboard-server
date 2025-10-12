import { Schema, model } from 'mongoose';
import { TTask, TTaskDetail, TTimerEntry } from './timeManagement.interface';

const taskDetailSchema = new Schema<TTaskDetail>({
  id: { type: String, required: true },
  text: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

const timerEntrySchema = new Schema<TTimerEntry>({
  taskName: { type: String, required: true },
  duration: { type: Number, required: true }, // in minutes
  completedAt: { type: Date, default: Date.now }
});

const taskSchema = new Schema<TTask>({
  name: { type: String, required: true },
  date: { type: String, required: true },
  priority: { type: String, enum: ['High', 'Medium', 'Low'], required: true },
  status: { type: String, enum: ['Pending', 'Started', 'Completed'], default: 'Pending' },
  details: [taskDetailSchema],
  timers: [timerEntrySchema]
}, { timestamps: true });

export const Task = model<TTask>('Task', taskSchema);
