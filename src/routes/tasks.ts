import { Router } from 'express';
import { TaskController } from '../controllers/taskController';
import { createTaskValidation, updateTaskValidation } from '../middleware/validation';

const router = Router();
const taskController = new TaskController();

router.get('/', taskController.getTasks);
router.get('/search/:q', taskController.searchTasks);
router.post('/', createTaskValidation, taskController.createTask);
router.put('/:id', updateTaskValidation, taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

export default router;

