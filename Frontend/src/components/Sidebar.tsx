'use client';

// import { useState } from 'react';
import { Users, Shield, CreditCard, Home, User2, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';

export default function Sidebar({ isMobileMenuOpen, setIsMobileMenuOpen }:any) {
  const location = useLocation();
  const { user } = useAuthStore();

  // Define navigation items dynamically based on the user's role
  const navigation = [
    { name: 'Home', href: '', icon: Home },
    ...(user?.role === 'admin'
      ? [
          { name: 'Users', href: 'users', icon: Users },
          { name: 'Roles', href: 'roles', icon: Shield },
        ]
      : []),
    { name: 'Tasks', href: 'tasks', icon: CreditCard },
    { name: 'Profile', href: 'profile', icon: User2 },
  ];

  return (
    <>
      {/* Sidebar for mobile and desktop */}
      <div
        className={`${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 z-50 w-64 transition duration-300 ease-in-out transform md:relative md:translate-x-0`}
      >
        <div className="flex h-full w-64 flex-col bg-white border-r border-gray-200 shadow-lg">
          <Link to="/" className="flex h-16 items-center justify-center border-b border-gray-200">
            <Shield className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              RBAC {user?.role === 'admin' ? <>Admin</> : <>User</>}
            </span>
          </Link>
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => {
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
                  onClick={() => setIsMobileMenuOpen(false)} // Close mobile menu when a link is clicked
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
          {/* Logout Button */}
          <div className="p-4 mt-auto">
            <button
              className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-md shadow-lg bg-gradient-to-r from-blue-500 to-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => console.log('Logout clicked')}
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}