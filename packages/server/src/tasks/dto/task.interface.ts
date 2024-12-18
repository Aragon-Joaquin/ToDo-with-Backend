export interface taskProps {
  id: number;
  name: string;
  description?: string;
  status: boolean;
  createdAt: Date;
  finishedAt?: Date | null;
}

export interface getTasksQuery {
  id?: number;
  limit?: number;
  offset?: number;
}
