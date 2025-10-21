import {
  TTask,
  TWeekendSchedule,
  IDailySchedule,
} from './timeManagement.interface'
import { Task, WeekendSchedule, DailySchedule } from './timeManagement.model'

const createTask = async (payload: TTask) => {
  const result = await Task.create(payload)
  return result
}

const getAllTasks = async () => {
  const result = await Task.find().sort({ createdAt: 1 })
  return result
}

const updateTask = async (id: string, payload: Partial<TTask>) => {
  const result = await Task.findByIdAndUpdate(id, payload, { new: true })
  return result
}

const deleteTask = async (id: string) => {
  const result = await Task.findByIdAndDelete(id)
  return result
}

const createWeekendSchedule = async (payload: TWeekendSchedule) => {
  const result = await WeekendSchedule.create(payload)
  return result
}

const getWeekendSchedules = async () => {
  const result = await WeekendSchedule.find().sort({ createdAt: 1 })
  return result
}

const updateWeekendSchedule = async (
  id: string,
  payload: Partial<TWeekendSchedule>,
) => {
  const result = await WeekendSchedule.findByIdAndUpdate(id, payload, {
    new: true,
  })
  return result
}

const deleteWeekendSchedule = async (id: string) => {
  const result = await WeekendSchedule.findByIdAndDelete(id)
  return result
}

const createDailySchedule = async (payload: IDailySchedule) => {
  const result = await DailySchedule.create(payload)
  return result
}

const getDailySchedules = async () => {
  const result = await DailySchedule.find().sort({ createdAt: 1 })
  return result
}

const updateDailySchedule = async (
  id: string,
  payload: Partial<IDailySchedule>,
) => {
  const result = await DailySchedule.findByIdAndUpdate(id, payload, {
    new: true,
  })
  return result
}

const deleteDailySchedule = async (id: string) => {
  const result = await DailySchedule.findByIdAndDelete(id)
  return result
}

export const TaskService = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
  createWeekendSchedule,
  getWeekendSchedules,
  updateWeekendSchedule,
  deleteWeekendSchedule,
  createDailySchedule,
  getDailySchedules,
  updateDailySchedule,
  deleteDailySchedule,
}
