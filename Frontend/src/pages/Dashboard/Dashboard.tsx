import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from "@/components/Sidebar";
import UserList from "./UserList";
import RoleList from "./RoleList";
import DashboardHome from './DashboardHome';
import { useAuthStore } from "@/store/authStore";
// import { ProtectedRoute } from "@/components/ProtectedRoute"; // Assuming you have a `ProtectedRoute` component
import { roles, users } from '@/data/mock';

const Dashboard = () => {
    const { user, isAuthenticated } = useAuthStore();

    // Redirect to login if not authenticated
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
                <div className="py-6">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        <Routes>
                            {/* Default Dashboard Home */}
                            <Route path="/" element={<DashboardHome />} />
                            
                            {/* Admin Role-Based Routes */}
                            {user?.role === "admin" && (
                                <>
                                    <Route
                                        path="roles"
                                        element={
                                            <>
                                                <h1 className="text-2xl font-semibold text-gray-900 mb-6">Roles</h1>
                                                <RoleList roles={roles}/>
                                            </>
                                        }
                                    />
                                    <Route
                                        path="users"
                                        element={
                                            <>
                                                <h1 className="text-2xl font-semibold text-gray-900 mb-6">Users</h1>
                                                <UserList users={users}/>
                                            </>
                                        }
                                    />
                                </>
                            )}

                            {/* Catch-All Route */}
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
