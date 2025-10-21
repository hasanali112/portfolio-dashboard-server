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

const createWeekendSchedule = async (req: Request, res: Response) => {
    try {
        const result = await TaskService.createWeekendSchedule(req.body);
        res.status(201).json({
            success: true,
            message: 'Weekend schedule created successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create weekend schedule',
            error,
        });
    }
}

const getWeekendSchedules = async (req: Request, res: Response) => {
    try {
        const result = await TaskService.getWeekendSchedules();
        res.status(200).json({
            success: true,
            message: 'Weekend schedules retrieved successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve weekend schedules',
            error,
        });
    }
}

const updateWeekendSchedule = async (req: Request, res: Response) => {
    try {
        const result = await TaskService.updateWeekendSchedule(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: 'Weekend schedule updated successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update weekend schedule',
            error,
        });
    }
}

const deleteWeekendSchedule = async (req: Request, res: Response) => {
    try {
        await TaskService.deleteWeekendSchedule(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Weekend schedule deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete weekend schedule',
            error,
        });
    }
}

const createDailySchedule = async (req: Request, res: Response) => {
    try {
        const result = await TaskService.createDailySchedule(req.body);
        res.status(201).json({
            success: true,
            message: 'Daily schedule created successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create daily schedule',
            error,
        });
    }
}

const getDailySchedules = async (req: Request, res: Response) => {
    try {
        const result = await TaskService.getDailySchedules();
        res.status(200).json({
            success: true,
            message: 'Daily schedules retrieved successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve daily schedules',
            error,
        });
    }
}

const updateDailySchedule = async (req: Request, res: Response) => {
    try {
        const result = await TaskService.updateDailySchedule(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: 'Daily schedule updated successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update daily schedule',
            error,
        });
    }
}

const deleteDailySchedule = async (req: Request, res: Response) => {
    try {
        await TaskService.deleteDailySchedule(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Daily schedule deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete daily schedule',
            error,
        });
    }
}

export const TaskController = {
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
  deleteDailySchedule
};
