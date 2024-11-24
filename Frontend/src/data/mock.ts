import { User, Role, Permission } from '../types/index';

export const permissions: Permission[] = [
  {
    id: '1',
    name: 'read:users',
    description: 'View user information',
    module: 'users'
  },
  {
    id: '2',
    name: 'write:users',
    description: 'Create and edit users',
    module: 'users'
  },
  {
    id: '3',
    name: 'delete:users',
    description: 'Delete users',
    module: 'users'
  },
  {
    id: '4',
    name: 'manage:roles',
    description: 'Manage roles and permissions',
    module: 'roles'
  },
  {
    id: '5',
    name: 'read:reports',
    description: 'View reports',
    module: 'reports'
  }
];

export const roles: Role[] = [
  {
    id: '1',
    name: 'Admin',
    description: 'Full system access',
    permissions: permissions
  },
  {
    id: '2',
    name: 'Manager',
    description: 'Can manage users and view reports',
    permissions: [permissions[0], permissions[1], permissions[4]]
  },
  {
    id: '3',
    name: 'User',
    description: 'Basic user access',
    permissions: [permissions[0], permissions[4]]
  }
];

export const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    role: roles[0],
    status: 'active',
    lastActive: '2024-03-10T10:30:00Z'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    role: roles[1],
    status: 'active',
    lastActive: '2024-03-10T09:15:00Z'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    role: roles[2],
    status: 'inactive',
    lastActive: '2024-03-09T15:45:00Z'
  }
];