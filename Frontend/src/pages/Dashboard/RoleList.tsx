// import React from 'react';
import { Role } from '@/types/index';
import { Shield, Trash ,Pen } from 'lucide-react';

interface RoleListProps {
  roles: Role[];
}

export default function RoleList({ roles }: RoleListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {roles.map((role) => (
        <div
          key={role.id}
          className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-sky-200 p-5 rounded-full">
              <Shield className="h-8 w-8 text-indigo-600 text-3xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">{role.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{role.description}</p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-900">Permissions</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {role.permissions.map((permission) => (
                <span
                  key={permission.id}
                  className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-xs font-medium text-indigo-800"
                >
                  {permission.name}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-end space-x-2">
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
              <Pen/>
            </button>
            <button className="text-sm font-medium text-red-600 hover:text-red-500">
              <Trash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}