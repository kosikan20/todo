export enum Status {
  Pending = 'Pending',
  InProgress = 'InProgress',
  Completed = 'Completed',
}

export class Todo {
  id: number;
  title: string;
  description?: string;
  status: Status;
  created_at: Date;
  updated_at: Date;
}
