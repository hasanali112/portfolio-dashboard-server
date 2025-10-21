import { Schema, model } from 'mongoose';
import { TTask, TTaskDetail, TTimerEntry, TWeekendSchedule, IDailySchedule } from './timeManagement.interface';

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

const weekendScheduleSchema = new Schema<TWeekendSchedule>({
  day: { type: String, required: true },
  focus: { type: String, required: true },
  type: { type: String, required: true },
  topic: { type: String, required: true },
}, { timestamps: true });

const dailyScheduleSchema = new Schema<IDailySchedule>({
  time: { type: String, required: true },
  icon: { type: String, required: true },
  task: { type: String, required: true },
  description: { type: String, required: true },
  startTime: { type: String },
  endTime: { type: String },
  duration: { type: Number },
  status: { 
    type: String, 
    enum: ['Pending', 'Running', 'Complete'], 
    default: 'Pending' 
  }
}, { timestamps: true });

export const Task = model<TTask>('Task', taskSchema);
export const WeekendSchedule = model<TWeekendSchedule>('WeekendSchedule', weekendScheduleSchema);
export const DailySchedule = model<IDailySchedule>('DailySchedule', dailyScheduleSchema);
