import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { TaskService } from '../services/taskService';

const taskService = new TaskService();

export class TaskController {
  async getTasks(req: Request, res: Response) {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  }

  async createTask(req: Request, res: Response) {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      console.error('Validation error', 400);
    }

    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  }

  async updateTask(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.error('Validation error', 400);
    }

    const task = await taskService.updateTask(req.params.id, req.body);
    res.json(task);
  }

  async deleteTask(req: Request, res: Response) {
    await taskService.deleteTask(req.params.id);
    res.status(204).send();
  }
}