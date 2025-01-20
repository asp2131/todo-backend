export interface TaskInput {
    title: string;
    color?: string;
    completed?: boolean;
  }
  
  export interface Task extends TaskInput {
    id: string;
    createdAt: Date;
    updatedAt: Date;
  }