export interface Task {
  userId: number | string;
  id?: number;
  title: string;
  completed: boolean;
}
