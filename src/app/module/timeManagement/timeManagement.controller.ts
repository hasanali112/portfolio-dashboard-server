import { Request, Response } from 'express';
import { TaskService } from './timeManagement.service';

const createTask = async (req: Request, res: Response) => {
  try {
    const result = await TaskService.createTask(req.body);
    res.status(201).json({
      success: true,
      message: 'Task created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create task',
      error,
    });
  }
};

const getAllTasks = async (req: Request, res: Response) => {
  try {
    const result = await TaskService.getAllTasks();
    res.status(200).json({
      success: true,
      message: 'Tasks retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve tasks',
      error,
    });
  }
};

const updateTask = async (req: Request, res: Response) => {
  try {
    const result = await TaskService.updateTask(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: 'Task updated successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update task',
      error,
    });
  }
};

const deleteTask = async (req: Request, res: Response) => {
  try {
    await TaskService.deleteTask(req.params.id);
    res.status(200).json({
      success: true,
      message: 'Task deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete task',
      error,
    });
  }
};

export const TaskController = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
};
