import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
// import { useAuthStore } from '@/store/authStore';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // const { isAuthenticated } = useAuthStore();

    return (
        <header className="bg-transparent shadow-sm lg:static lg:overflow-y-visible ml-4">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex lg:gap-8 xl:grid xl:grid-cols-12">
                    <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                        <div className="flex flex-shrink-0 items-center">
                            <a href="#" className="text-2xl font-bold text-blue-600">
                                Logo
                            </a>
                        </div>
                    </div>
                    <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6 flex justify-center ml-20">
                        <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                            <nav className="hidden md:flex space-x-10">
                                <Link to='' className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Home
                                </Link>
                                <a href="#features" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Features
                                </a>
                                <a href="#how-it-works" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    How It Works
                                </a>
                                <a href="#contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Contact
                                </a>
                            </nav>
                        </div>
                    </div>
                    <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">

                        <Link
                            to='/login'
                            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 py-1 px-4 text-white hover:bg-indigo-700 text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mr-2"
                        >
                            Sign in
                        </Link>


                        <button
                            type="button"
                            className="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open menu</span>
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">

                        <Link
                            to='/login'
                            className="ml-6 inline-flex items-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700 text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Sign in
                        </Link>

                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden">
                    <div className="fixed inset-0 z-40 flex">
                        <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true" />
                        <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                            <div className="absolute top-0 right-0 -mr-12 pt-2">
                                <button
                                    type="button"
                                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close sidebar</span>
                                    <X className="h-6 w-6 text-white" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="flex flex-shrink-0 items-center px-4">
                                <span className="text-2xl font-bold text-blue-600">Logo</span>
                            </div>
                            <nav
                                className="mt-5 flex-shrink-0 h-full divide-y divide-gray-200 overflow-y-auto"
                                aria-label="Sidebar"
                            >
                                <div className="space-y-1 px-2">
                                    <Link
                                        to="/"
                                        className="group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                    >
                                        Home
                                    </Link>
                                    <a
                                        href="#features"
                                        className="group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                    >
                                        Features
                                    </a>
                                    <a
                                        href="#how-it-works"
                                        className="group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                    >
                                        How It Works
                                    </a>
                                    <a
                                        href="#contact"
                                        className="group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                    >
                                        Contact
                                    </a>
                                    <Link
                                        to="/dashboard"
                                        className="group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                    >
                                        Dashboard
                                    </Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
