export enum actionTypes{
}

export interface Task {
  createAt: string,
  isDone: false,
  list: string,
  taskName: string
}

export interface Tasks {
  tasks: Task[]
}