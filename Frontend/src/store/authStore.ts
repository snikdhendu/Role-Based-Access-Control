import { create } from 'zustand';
import { User } from '@/types/auth';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Mock users data
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@gmail.com',
    name: 'Admin User',
    role: 'admin',
    permissions: ['read', 'write', 'delete'],
    status: 'active',
  },
  {
    id: '2',
    email: 'user@gmail.com',
    name: 'Regular User',
    role: 'user',
    permissions: ['read'],
    status: 'active',
  },
];

export const useAuthStore = create<AuthState>((set:any) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    // Simulate API call
    const user = mockUsers.find((u) => u.email === email);
    
    if (user && password === '1234') {
      set({ user, isAuthenticated: true });
      return true;
    }
    return false;
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));