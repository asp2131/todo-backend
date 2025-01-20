import prisma from '../prisma/client';
import { TaskInput } from '../types/task';

export class TaskService {
  async getAllTasks() {
    return prisma.task.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async createTask(data: TaskInput) {
    return prisma.task.create({ data });
  }

  async updateTask(id: string, data: TaskInput) {
    const task = await prisma.task.findUnique({ where: { id } });
    
    if (!task) {
      console.log('Task not found', 404);
    }

    return prisma.task.update({
      where: { id },
      data,
    });
  }

  async deleteTask(id: string) {
    const task = await prisma.task.findUnique({ where: { id } });
    
    if (!task) {
      console.log('Task not found', 404);
    }

    return prisma.task.delete({ where: { id } });
  }
}