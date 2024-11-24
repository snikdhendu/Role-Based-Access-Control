"use client"

// import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import { LineChart, Line } from "recharts";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import { Users, UserCheck, ShieldCheck, Key } from "lucide-react";
import UserList from "./UserList";
import { roles, users } from '@/data/mock';
// Sample data
const userRoleData = [
  { name: 'Admin', count: 1 },
  { name: 'Manager', count: 1 },
  { name: 'User', count: 1 },
];

const userStatusData = [
  { name: 'Active', value: 2 },
  { name: 'Inactive', value: 1 },
];

const userActivityData = [
  { name: '2024-03-09', activeUsers: 1 },
  { name: '2024-03-10', activeUsers: 2 },
];

const permissionsRadarData = [
  { subject: 'read:users', Admin: 1, Manager: 1, User: 0 },
  { subject: 'write:users', Admin: 1, Manager: 1, User: 0 },
  { subject: 'delete:users', Admin: 1, Manager: 0, User: 0 },
  { subject: 'manage:roles', Admin: 1, Manager: 0, User: 0 },
  { subject: 'read:reports', Admin: 1, Manager: 1, User: 0 },
];

const DashboardHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Dashboard</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
              {userRoleData.reduce((sum, role) => sum + role.count, 0)}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-700">Active Users</h2>
              <UserCheck className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">
              {userStatusData.find(status => status.name === 'Active')?.value}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-700">Roles</h2>
              <ShieldCheck className="w-8 h-8 text-purple-500" />
            </div>
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-600">
              {userRoleData.length}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-700">Permissions</h2>
              <Key className="w-8 h-8 text-orange-500" />
            </div>
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              {permissionsRadarData.length}
            </p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bar Chart: Users by Role */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Users by Role</h2>
            <div className="h-64"> {/* Adjusted height */}
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={userRoleData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" tick={{ fill: '#6B7280' }} />
                  <YAxis tick={{ fill: '#6B7280' }} />
                  <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px' }} />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                  <Bar dataKey="count" fill="#4F46E5" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart: Users by Status */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Users by Status</h2>
            <div className="h-64"> {/* Adjusted height */}
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={userStatusData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {userStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.name === "Active" ? "#10B981" : "#EF4444"} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px' }} />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Line Chart: User Activity */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">User Activity</h2>
            <div className="h-64"> {/* Adjusted height */}
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={userActivityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" tick={{ fill: '#6B7280' }} />
                  <YAxis tick={{ fill: '#6B7280' }} />
                  <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px' }} />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                  <Line type="monotone" dataKey="activeUsers" stroke="#3B82F6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Radar Chart: Permissions by Role */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Permissions by Role</h2>
            <div className="h-64"> {/* Adjusted height */}
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={permissionsRadarData}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#6B7280' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 1]} tick={{ fill: '#6B7280' }} />
                  <Radar name="Admin" dataKey="Admin" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.5} />
                  <Radar name="Manager" dataKey="Manager" stroke="#10B981" fill="#10B981" fillOpacity={0.5} />
                  <Radar name="User" dataKey="User" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.5} />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                  <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px' }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

      </div>
      <UserList users={users}/>
    </div>
  );
};

export default DashboardHome;

