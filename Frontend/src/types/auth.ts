export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  permissions: string[];
  status: 'active' | 'inactive';
}

export interface LoginCredentials {
  email: string;
  password: string;
}