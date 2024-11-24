import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from "@/components/Sidebar";
import UserList from "./UserList";
import RoleList from "./RoleList";
import DashboardHome from './DashboardHome';
import { useAuthStore } from "@/store/authStore";
// import { ProtectedRoute } from "@/components/ProtectedRoute"; // Assuming you have a `ProtectedRoute` component
import { roles, users } from '@/data/mock';
import UserSidebar from "@/components/UserSidebar";
import { PlusCircle } from 'lucide-react';

const Dashboard = () => {
    const { user, isAuthenticated } = useAuthStore();

    // Redirect to login if not authenticated
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="flex h-screen bg-gray-100">
            {user?.role === "admin" && (
                <>
                    <Sidebar />
                    <main className="flex-1 overflow-y-auto">
                        <div className="py-6">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                                <Routes>
                                    {/* Default Dashboard Home */}
                                    <Route path="/" element={<DashboardHome />} />

                                    {/* Admin Role-Based Routes */}

                                    <>
                                        <Route
                                            path="roles"
                                            element={
                                                <>
                                                    <div className=' w-full justify-between flex px-4'>
                                                        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Roles</h1>
                                                        <button  className=' flex  justify-center items-center gap-3  bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-5 mb-3 rounded-md'> Assign Roles  <PlusCircle/></button>
                                                    </div>
                                                    <RoleList roles={roles} />
                                                </>
                                            }
                                        />
                                        <Route
                                            path="users"
                                            element={
                                                <>
                                                    <div className=' w-full justify-between flex px-4'>
                                                        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Roles</h1>
                                                        <button  className=' flex  justify-center items-center gap-3  bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-5 mb-3 rounded-md'> Add User <PlusCircle/></button>
                                                    </div>
                                                    <UserList users={users} />
                                                </>
                                            }
                                        />
                                         <Route
                                            path="profile"
                                            element={
                                                <>
                                                    <div className=' w-full justify-between flex px-4'>
                                                        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Roles</h1>
                                                        <button  className=' flex  justify-center items-center gap-3  bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-5 mb-3 rounded-md'> Add User <PlusCircle/></button>
                                                    </div>
                                                    <UserList users={users} />
                                                </>
                                            }
                                        />
                                    </>


                                    {/* Catch-All Route */}
                                    <Route path="*" element={<Navigate to="/" replace />} />
                                </Routes>
                            </div>
                        </div>
                    </main>
                </>
            )}
            {user?.role === "user" && (
                <>
                    <UserSidebar />
                    <main className="flex-1 overflow-y-auto">
                        <div className="py-6">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                                <Routes>
                                    {/* Default Dashboard Home */}
                                    <Route path="/" element={<DashboardHome />} />

                                    {/* Admin Role-Based Routes */}

                                    <>
                                        <Route
                                            path="roles"
                                            element={
                                                <>
                                                    <h1 className="text-2xl font-semibold text-gray-900 mb-6">Roles</h1>
                                                    <RoleList roles={roles} />
                                                </>
                                            }
                                        />
                                        <Route
                                            path="users"
                                            element={
                                                <>
                                                    <h1 className="text-2xl font-semibold text-gray-900 mb-6">Users</h1>
                                                    <UserList users={users} />
                                                </>
                                            }
                                        />
                                    </>


                                    {/* Catch-All Route */}
                                    <Route path="*" element={<Navigate to="/" replace />} />
                                </Routes>
                            </div>
                        </div>
                    </main>
                </>
            )}



        </div>
    );
};

export default Dashboard;
