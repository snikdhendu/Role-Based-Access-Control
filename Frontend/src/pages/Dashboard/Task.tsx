import { User } from '@/types/index';
import { MoreVertical, Edit2, Trash2 } from 'lucide-react';
import { useAuthStore } from '@/store/authStore'

interface UserListProps {
    users: User[];
}

export default function UserList({ users }: UserListProps) {
    const { user } = useAuthStore();
    return (

        <div className="overflow-x-auto">
            <>
            {user?.role === "admin" && (
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                User
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Role
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Tasks
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 flex-shrink-0">
                                            <img
                                                className="h-10 w-10 rounded-full object-cover"
                                                src={user.avatar}
                                                alt={user.name}
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                            <div className="text-sm text-gray-500">{user.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                                        {user.role.name}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {user.tasks.length > 0 ? (
                                        <ul className="list-none p-0 space-y-2">
                                            {user.tasks.map((task) => (
                                                <li key={task.id}>
                                                    <span
                                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${task.status === 'complete'
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-red-100 text-red-800'
                                                            }`}
                                                    >
                                                        {task.status === 'complete' ? 'Completed' : 'Pending'}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <span className="text-sm text-gray-500">No tasks assigned</span>
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="max-w-xs overflow-hidden">
                                        {user.tasks.length > 0 ? (
                                            <ul className="list-none p-0 space-y-2">
                                                {user.tasks.map((task) => (
                                                    <li
                                                        key={task.id}
                                                        className="text-sm text-gray-700 bg-gray-100 rounded-lg p-2 shadow-sm"
                                                    >
                                                        <span className="font-semibold block mb-1">{task.title}</span>
                                                        <span className="text-xs text-gray-600">{task.description}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <span className="text-sm text-gray-500">No tasks assigned</span>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex items-center justify-end space-x-2">
                                        <button className="text-indigo-600 hover:text-indigo-900">
                                            <Edit2 className="h-4 w-4" />
                                        </button>
                                        <button className="text-red-600 hover:text-red-900">
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <MoreVertical className="h-4 w-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            )}

            {/* only for user */}
            {
            user?.role === "user" && (
                    <div className="bg-white rounded-xl shadow-sm p-6 w-full">
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
            )}
           
            </>
        </div>

    );
}

