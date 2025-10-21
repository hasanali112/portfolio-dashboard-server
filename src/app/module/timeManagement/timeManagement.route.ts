import { Router } from 'express';
import { TaskController } from './timeManagement.controller';

const router = Router();

router.post('/', TaskController.createTask);
router.get('/', TaskController.getAllTasks);
router.put('/:id', TaskController.updateTask);
router.delete('/:id', TaskController.deleteTask);
router.post('/weekend-schedule', TaskController.createWeekendSchedule);
router.get('/weekend-schedule', TaskController.getWeekendSchedules);
router.put('/weekend-schedule/:id', TaskController.updateWeekendSchedule);
router.delete('/weekend-schedule/:id', TaskController.deleteWeekendSchedule);
router.post('/daily-schedule', TaskController.createDailySchedule);
router.get('/daily-schedule', TaskController.getDailySchedules);
router.put('/daily-schedule/:id', TaskController.updateDailySchedule);
router.delete('/daily-schedule/:id', TaskController.deleteDailySchedule);

export const TaskRoutes = router;