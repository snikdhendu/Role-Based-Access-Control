// import React from 'react';
import { Users, Shield, Settings, PieChart, CreditCard, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '', icon: Home },
  { name: 'Users', href: 'users', icon: Users },
  { name: 'Roles', href: 'roles', icon: Shield },
  { name: 'Reports', href: 'reports', icon: PieChart },
  { name: 'Billing', href: 'billing', icon: CreditCard },
  { name: 'Settings', href: 'settings', icon: Settings },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex h-full w-64 flex-col bg-white border-r border-gray-200 shadow-lg">
      <div className="flex h-16 items-center justify-center border-b border-gray-200">
        <Shield className="h-8 w-8 text-indigo-600" />
        <span className="ml-2 text-xl font-bold text-gray-900">RBAC Admin</span>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => {
          // Handle Home route explicitly
          const isActive =
            item.href === ''
              ? location.pathname === '/dashboard'
              : location.pathname === `/dashboard/${item.href}`;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`${
                isActive
                  ? 'bg-indigo-100 text-indigo-700 border-l-4 border-indigo-500'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              } group flex items-center px-2 py-2 text-sm font-medium`}
            >
              <item.icon
                className={`${
                  isActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600'
                } mr-3 h-5 w-5 flex-shrink-0`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
