export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: Role;
  status: 'active' | 'inactive';
  lastActive: string;
  tasks: Task[]; // Added tasks property to store assigned tasks
}

export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
}

export interface Permission {
  id: string;
  name: string;
  description: string;
  module: Module;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  assignedAt: string; 
  status: string;// Timestamp when the task was assigned
}

export type Module = 'users' | 'roles' | 'settings' | 'reports' | 'billing';
