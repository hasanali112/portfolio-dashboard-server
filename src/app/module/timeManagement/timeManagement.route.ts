import { Router } from 'express';
import { TaskController } from './timeManagement.controller';

const router = Router();

router.post('/', TaskController.createTask);
router.get('/', TaskController.getAllTasks);
router.put('/:id', TaskController.updateTask);
router.delete('/:id', TaskController.deleteTask);

export const TaskRoutes = router;
