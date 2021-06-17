export enum actionTypes{
}

export interface TaskType {
  createAt: string,
  isDone: false,
  list: string,
  taskName: string
}

export interface TasksType {
  tasks: TaskType[]
}