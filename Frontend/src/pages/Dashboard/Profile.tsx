// import React from 'react';

// import { div } from "framer-motion/client";
import { GridPatternLinearGradient } from "../../components/demo/GridPatternLinearGradient"
import { useAuthStore } from '@/store/authStore'

const Profile = () => {
    const { user } = useAuthStore();
    return (
        <GridPatternLinearGradient>
            <div className=" h-[500px] w-full flex justify-center items-center">

                <div className="bg-white rounded-xl w-96 shadow-lg p-6">
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
                        {user?.role === "admin" && (<h1 className=' text-2xl font-bold font-royal2'>RBAC ADMIN</h1>)}
                        {user?.role === "user" && (<h1 className=' text-2xl font-bold font-royal2'>RBAC User</h1>)}
                        </div>

                        {/* Edit Profile Button */}
                        <div className=' flex gap-2'>
                        <button className="px-8 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600">
                            Edit Profile
                        </button>
                        <button className="px-8 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600">
                           Log out
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </GridPatternLinearGradient>
    );
}

export default Profile;
