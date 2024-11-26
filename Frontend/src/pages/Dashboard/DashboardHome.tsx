"use client"
import { useState } from 'react'
import { Bell, ChevronDown, Search, Users, UserCheck, ShieldCheck, Key, Menu } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { PieChart, Pie, Cell } from "recharts"
import { LineChart, Line } from "recharts"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts"
import UserList from "./UserList"
import { users } from '@/data/mock'
import { useAuthStore } from '@/store/authStore'



// Sample data (unchanged)
const userRoleData = [
  { name: 'Admin', count: 1 },
  { name: 'Manager', count: 2 },
  { name: 'User', count: 6 },
]

const userStatusData = [
  { name: 'Active', value: 2 },
  { name: 'Inactive', value: 1 },
]

const userActivityData = [
  { name: '2024-03-09', activeUsers: 1 },
  { name: '2024-03-10', activeUsers: 2 },
]

const permissionsRadarData = [
  { subject: 'read:users', Admin: 1, Manager: 1, User: 0 },
  { subject: 'write:users', Admin: 1, Manager: 1, User: 0 },
  { subject: 'delete:users', Admin: 1, Manager: 0, User: 0 },
  { subject: 'manage:roles', Admin: 1, Manager: 0, User: 0 },
  { subject: 'read:reports', Admin: 1, Manager: 1, User: 0 },
]

const DashboardHome = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const { user } = useAuthStore();

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-transparent">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="md:hidden">
            <button
              onClick={toggleMobileSidebar}
              className="flex h-9 w-9 items-center justify-center hover:bg-slate-100 rounded-md"
            >
              <Menu className="h-6 w-6 text-slate-600" />
            </button>
          </div>

          <div className="relative w-full max-w-md lg:block hidden">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <input
              type="search"
              placeholder="Search"
              className="h-9 w-full rounded-md border border-slate-200 bg-white pl-8 pr-4 text-sm placeholder:text-slate-500 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="flex h-9 w-9 items-center justify-center  hover:bg-slate-100 rounded-md">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAmVBMVEX/mTMSiAf///8AfgD/kA8AAIgAAIUAAIAAAH8AAIMAAHnu7vbf3+7k5PEAAHy1tdUAAHL19fuiospfX6d/f7eTk8L7+//R0eYrK5Lz8/rDw+FKSp7ExN6trdHh4e8hIY89PZpFRZ1QUKGamsVqaq57e7ULC4vOzueJibwzM5eQkMEwMJW2ttqrq9NeXqs5OZsYGI10dLIlJZGhPdZ+AAAErElEQVR4nO3bW1fiSBSGYbtmqirnQBECCYmBcAioNOj//3G9K1Gnx62zpm9SrsX39AKDeFG+nTPl3R0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwB/6Gz66E/ARmnBowqEJhyYcmnDfoUmcHmfr5XK5nh3T2PVgxDdoEh2bRPtKSSmV8nXSHCPXQ3LcpFt5vo0hlac9ZRek7606t4Ny2iRuqYPU/uw52IRRuAmeZ76mRF7rdBNy2WRr1wxfz8VUpKFYiLCkpS1tSFIlW4fjctckbz363TPzGIrSvn6yT6UIH02WKKnb3NnInDUJG1odNtHULp/tk3lfmkYbeq8JXQ3NVZPwoGhvuh1Wkcoeao70iCr7sqStypfq4CqKoyY5rSXa7GMxtWtGOKenn/SY2wz1VMT7s6Y1xdHm46hJq6TXryJiaw8xK3pcXr/G/UYkSorSuhmcmyZbLf162KuKlh4zCnOlHLPX13aPW/tSz52MzkmT+4TOQbJhFyIMrRdmLnKZi7kZXvbvZHSkTu5dDM9Jk5VSK7vryHf2sCPp3GQpCl2IJZ2jSPrOdJfbnYz9MRfDc9Gk8qQ3XNQUJypTr0QexGEQxpNcrGqqcSr6dyP6ucrB+Fw0WSt1nJb9QSWUFEelojHUxDQiVZRC9gfhvCyOSq0djM9BkyiRmtaGc7/jiIKFqL18f4mD+LLPvVosgn4dMia3u9nEwVWygyYZnZrY//77lsqIbpKKw64KFvSv2h1EOrFXxXVr965rOh5n4w/QQZOr9LfDKaqRVCWdmGoS6c7vdDSpzpRIpHK4BAy3vryOP8Dxm9Cmo96Www3tS8ykzLKsOlX0XE4MFdm8n9UrFxvP+E1qX+2K8lwNv3edXKs0iE6d2ZvuMQrS7prU/TthdS6LnfLr0Uc4fpNM9fuI6GEzM4tc5LNJFr1E2WV9yaImyiYzOmdZmN3mYfHPD49r/CZ0qRMMZx3x/CVosirKTtHa3kjy19FpH1XZMmgehhPYKnBx0TN+kxepVsXbi9hcAj/rjr60+qXgZN7vPBYrJV9GH+H4TQ7Se0uSF2EYL7rKXFTfRF1M2S3iMCze7hIUnjyMPsLxm0ipw8XT+fhz3UgdEP/x+SQHl+yi7Lc8dT21e/PUxVrK0Uf4PdaT042vJ9ifcP/vuDOcqd3KcQfnJ9wfnsfqWziPxfXOJ65S47r4A9w/4XCf7RO/3Y+N/+t+7PR27sd+fd8+uN379vbznQ0+3/k3fA74ieHz4rRfbsXXnxe7ma2EeQWc8/kn9hwF8096mKf0Ccxn+8Qw73H/xbxH7xbnPYr3+bHb9/mxKS3Nb3l+rLDzqBM7mVz/No9a3/g8arJoMd+eu39oEq1e/y5D4e8yXuHvd74/NOHQhEMTDk04NOHu/oKP7n7AR2jCoQmHJhyacGjCoQmHJhyacGjCoQmHJhyacGjCoQmHJhyacGjCoQmHJhyacGjCoQmHJhyacGjCoQmHJhyacGjCoQmHJhyacGjCoQmHJhyacGjCoQmHJhyacGjCoQmHJhyacGjCoQmHJhyacGjCoQmHJhyacGjCoQmHJhyacGjCoQmHJtwvt1sneWkqncMAAAAASUVORK5CYII=" alt="English" className="h-5 w-5" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-slate-100">
              <Bell className="h-5 w-5 text-slate-600" />
            </button>
            <button className="flex items-center gap-2 rounded-full hover:bg-slate-100 p-1">
              <img
                src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww"
                alt="Avatar"
                className="h-8 w-8 rounded-full object-cover"
              />
              <ChevronDown className="h-4 w-4 text-slate-600" />
            </button>
          </div>
        </div>
      </header>

      {isMobileSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}
      <div className="container py-8">
        <h1 className="text-2xl font-semibold text-slate-800 mb-8">Dashboard Overview</h1>


        {/* specific for normal user */}

        {user?.role === "user" &&
          <div className="bg-gradient-to-r from-textmain to-yellow-300 text-white font-bold text-3xl w-full rounded-md bg-teal-600 h-36 flex justify-left p-8 items-center flex-col gap-3 ">
            <h1>Hello , <span className=" text-white  text-4xl font-extrabold">RBAC USER</span>. 👋</h1>
            <p className=" lg:text-base text-sm font-royal4">
              Welcome to your Dashboard!
              Check your latest progress and insights on today.</p>
          </div>
        }
        {user?.role === "user" &&
          <div className=" flex  flex-wrap gap-3 mt-5">
            {/* Bar Chart: Users by Role */}
            <div className="bg-white rounded-xl shadow-sm p-6 w-[800px]">
              <h2 className="text-lg font-semibold text-slate-800 mb-6">Assign Tasks</h2>

              {/* Task List */}
              <ul className="space-y-4">
                {[
                  { id: 1, name: "Complete project documentation", status: "Pending" },
                  { id: 2, name: "Review team code submissions", status: "Complete" },
                  { id: 3, name: "Prepare for client meeting", status: "Pending" },
                  { id: 4, name: "Update sprint backlog", status: "Complete" },
                ].map((task) => (
                  <li
                    key={task.id}
                    className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm"
                  >
                    <span className="text-slate-700 font-medium">{task.name}</span>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        defaultChecked={task.status === "Complete"}
                        className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      <span className="text-sm text-gray-600">
                        {task.status === "Complete" ? "Complete" : "Pending"}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>


            {/* profile */}

            <div className="bg-white rounded-xl w-96 shadow-sm p-6">
              <div className="flex flex-col items-center">
                {/* Avatar */}
                <div className="w-32 h-32 bg-slate-100 rounded-full mb-4 flex items-center justify-center relative">
                  {/* Image */}
                  <img
                    className="w-full h-full rounded-full border-4 border-white object-cover"
                    src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww"
                    alt="User Avatar"
                  />
                </div>

                {/* Name */}
                <h2 className="text-xl font-semibold text-slate-800 mb-1">Charles Robbie</h2>

                {/* Location */}
                <div className="flex items-center text-slate-500 mb-6">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm">New York, USA</span>
                </div>

                {/* Stats */}
                <div className="flex justify-center items-center w-full px-4 mb-4">

                  {user?.role === "user" && <h1 className=' text-2xl font-bold font-royal2'>RBAC User</h1>
                  }
                </div>

                {/* Edit Profile Button */}
                <button className="px-8 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

        }
        {/* specific for normal admin */}

        {/* Summary Cards */}
        {user?.role === "admin" &&
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: "Total Users", icon: Users, value: userRoleData.reduce((sum, role) => sum + role.count, 0), color: "blue", trend: "+12%" },
              { title: "Active Users", icon: UserCheck, value: userStatusData.find(status => status.name === 'Active')?.value, color: "emerald", trend: "+5%" },
              { title: "Roles", icon: ShieldCheck, value: userRoleData.length, color: "violet", trend: "0%" },
              { title: "Permissions", icon: Key, value: permissionsRadarData.length, color: "indigo", trend: "+2%" },
            ].map((card, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-slate-500">{card.title}</p>
                    <h2 className="text-2xl font-semibold text-slate-800">{card.value}</h2>
                  </div>
                  <div className={`rounded-lg bg-${card.color}-50 p-3 bg-indigo-300  rounded-md`}>
                    <card.icon className={`w-5 h-5 text-${card.color}-500`} />
                  </div>
                </div>
                <div className="flex items-center text-sm ">
                  <span className={`text-${card.color}-500 font-medium bg-green-500 p-1 text-white rounded-full `}>{card.trend}</span>
                  <span className="text-slate-500 ml-1">vs last month</span>
                </div>
              </div>
            ))}
          </div>
        }

        {/* Charts Grid */}
        {user?.role === "admin" &&
          <div className=" flex  flex-wrap gap-3 ">
            {/* Bar Chart: Users by Role */}
            <div className="bg-white rounded-xl shadow-sm p-6 w-[800px]">
              <h2 className="text-lg font-semibold text-slate-800 mb-6">Users by Role</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={userRoleData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#D1D5DB" /> {/* Lighter grid */}
                    <XAxis dataKey="name" tick={{ fill: '#1E3A8A' }} /> {/* Darker axis text */}
                    <YAxis tick={{ fill: '#1E3A8A' }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#F9FAFB', // Lighter background
                        borderRadius: '0.5rem',
                        border: '1px solid #D1D5DB',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)' // Slightly darker shadow
                      }}
                    />
                    <Legend
                      wrapperStyle={{
                        paddingTop: '1.25rem',
                        color: '#1E40AF' // New legend text color
                      }}
                    />
                    <Bar
                      dataKey="count"
                      fill="#10B981" // Changed bar color
                      radius={[4, 4, 0, 0]}
                      barSize={20} // Decreased bar width
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* profile */}

            <div className="bg-white rounded-xl w-96 shadow-sm p-6">
              <div className="flex flex-col items-center">
                {/* Avatar */}
                <div className="w-32 h-32 bg-slate-100 rounded-full mb-4 flex items-center justify-center relative">
                  {/* Image */}
                  <img
                    className="w-full h-full rounded-full border-4 border-white object-cover"
                    src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww"
                    alt="User Avatar"
                  />
                </div>

                {/* Name */}
                <h2 className="text-xl font-semibold text-slate-800 mb-1">Charles Robbie</h2>

                {/* Location */}
                <div className="flex items-center text-slate-500 mb-6">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm">New York, USA</span>
                </div>

                {/* Stats */}
                <div className="flex justify-center items-center w-full px-4 mb-4">
                  {user?.role === "admin" && <h1 className=' text-2xl font-bold font-royal2'>RBAC Admin</h1>
                  }
                </div>

                {/* Edit Profile Button */}
                <button className="px-8 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600">
                  Edit Profile
                </button>
              </div>
            </div>


            {/* Line Chart: User Activity */}
            <div className="bg-white rounded-xl shadow-sm p-6 w-[390px]">
              <h2 className="text-lg font-semibold text-slate-800 mb-6">User Activity</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={userActivityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis dataKey="name" tick={{ fill: '#64748B' }} />
                    <YAxis tick={{ fill: '#64748B' }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '0.5rem',
                        border: '1px solid #E2E8F0',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                      }}
                    />
                    <Legend wrapperStyle={{ paddingTop: '1.25rem' }} />
                    <Line
                      type="monotone"
                      dataKey="activeUsers"
                      stroke="#6366F1"
                      strokeWidth={2}
                      dot={{ r: 4, fill: "#6366F1" }}
                      activeDot={{ r: 6, fill: "#6366F1" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Radar Chart: Permissions by Role */}
            <div className="bg-white rounded-xl shadow-sm p-6 w-[400px]">
              <h2 className="text-lg font-semibold text-slate-800 mb-6">Permissions by Role</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={permissionsRadarData}>
                    <PolarGrid stroke="#E2E8F0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748B' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 1]} tick={{ fill: '#64748B' }} />
                    <Radar name="Admin" dataKey="Admin" stroke="#6366F1" fill="#6366F1" fillOpacity={0.3} />
                    <Radar name="Manager" dataKey="Manager" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} />
                    <Radar name="User" dataKey="User" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
                    <Legend wrapperStyle={{ paddingTop: '1.25rem' }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '0.5rem',
                        border: '1px solid #E2E8F0',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Pie Chart: Users by Status */}
            <div className="bg-white rounded-xl w-96 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-6">Users by Status</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={userStatusData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#22c55e"
                      label
                    >
                      {userStatusData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.name === "Active" ? "#22C55E" : "#EF4444"} // Set "Active" to green
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '0.5rem',
                        border: '1px solid #E2E8F0',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      }}
                    />
                    <Legend wrapperStyle={{ paddingTop: '1.25rem' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        }

        {/* User List */}
        {user?.role === "admin" &&
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">User List</h2>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <UserList users={users} />
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default DashboardHome

