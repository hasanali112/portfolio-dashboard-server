import { TTask } from './timeManagement.interface';
import { Task } from './timeManagement.model';

const createTask = async (payload: TTask) => {
  const result = await Task.create(payload);
  return result;
};

const getAllTasks = async () => {
  const result = await Task.find().sort({ createdAt: -1 });
  return result;
};

const updateTask = async (id: string, payload: Partial<TTask>) => {
  const result = await Task.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteTask = async (id: string) => {
  const result = await Task.findByIdAndDelete(id);
  return result;
};

export const TaskService = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
};
