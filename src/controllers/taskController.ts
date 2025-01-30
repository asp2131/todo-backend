import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { TaskService } from '../services/taskService';
import Fuse from 'fuse.js'

const taskService = new TaskService();

const fuseOptions = {
	// isCaseSensitive: false,
	// includeScore: false,
	// shouldSort: true,
	// includeMatches: false,
	// findAllMatches: false,
	// minMatchCharLength: 1,
	// location: 0,
	// threshold: 0.6,
	// distance: 100,
	// useExtendedSearch: false,
	// ignoreLocation: false,
	// ignoreFieldNorm: false,
	// fieldNormWeight: 1,
	keys: [
		"title",
	]
};

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

  async searchTasks(req: Request, res: Response){
    const { q } = req.params;
    // set the collection to search
    const tasks = await taskService.getAllTasks();
    const fuse = new Fuse(tasks, fuseOptions);

    const foundTasks = fuse.search(q).map((result) => result.item);
    // set the search options
    // respond the search results
    res.json(foundTasks);
  }
}