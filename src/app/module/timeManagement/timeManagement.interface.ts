export interface TTaskDetail {
  id: string;
  text: string;
  completed: boolean;
}

export interface TTimerEntry {
  taskName: string;
  duration: number; // in minutes
  completedAt: Date;
}

export interface TTask {
  name: string;
  date: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Pending' | 'Started' | 'Completed';
  details: TTaskDetail[];
  timers: TTimerEntry[];
}
