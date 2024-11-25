'use client'

import React, { useState } from 'react';
import { Users, Shield, Settings, PieChart, CreditCard, Home, MoreVertical, User2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '', icon: Home },
  { name: 'Users', href: 'users', icon: Users },
  { name: 'Roles', href: 'roles', icon: Shield },
  { name: 'Billing', href: 'billing', icon: CreditCard },
  { name: 'Profile', href: 'profile', icon: User2 },
];

export default function Sidebar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 left-4 z-20">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <MoreVertical className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }  fixed inset-y-0 left-0 z-10 w-64 transition duration-300 ease-in-out transform md:relative md:translate-x-0`}
      >
        <div className="flex h-full w-64 flex-col bg-white border-r border-gray-200 shadow-lg">
          <Link to='/' className="flex h-16 items-center justify-center border-b border-gray-200">
            <Shield className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">RBAC Admin</span>
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
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-5 bg-gray-600 bg-opacity-75"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
}

