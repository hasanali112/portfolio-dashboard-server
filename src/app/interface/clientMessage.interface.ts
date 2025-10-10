export interface IClientMessage {
  fullName: string;
  email: string;
  company?: string;
  phone?: string;
  timeline?: string;
  description: string;
  selectedServices: Record<string, boolean>;
  selectedBudget: string;
  status?: 'new' | 'read' | 'replied';
  createdAt?: Date;
  updatedAt?: Date;
}
