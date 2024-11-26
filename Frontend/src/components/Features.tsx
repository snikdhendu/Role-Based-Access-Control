import { Server, Share2, FileCode, Lock, Users, UserPlus } from 'lucide-react'
import { GridPatternLinearGradient } from "./demo/GridPatternLinearGradient"

const icons: Record<string, React.ComponentType> = {
  Server,
  Share2,
  FileCode,
  Lock,
  Users,
  UserPlus
}

export default function FeatureBoxes() {

  const features = [
    {
      title: "User Management",
      description: "Add, edit, delete, and manage users with intuitive controls.",
      icon: "UserPlus" // Adjusted to match a defined icon
    },
    {
      title: "Role Customization",
      description: "Create and modify roles to match your organization’s needs.",
      icon: "Users" // Existing key
    },
    {
      title: "Permission Control",
      description: "Assign and manage granular permissions for each role dynamically.",
      icon: "Lock" // Adjusted to match a defined icon
    },
    {
      title: "Interactive Dashboard",
      description: "View and manage users, roles, and permissions in a unified interface.",
      icon: "FileCode" // Adjusted to match a defined icon
    },
    {
      title: "Responsive Design",
      description: "Ensure seamless usability across devices and screen sizes.",
      icon: "Share2" // Adjusted to match a defined icon
    },
    {
      title: "Mock API Integration",
      description: "Simulate CRUD operations with mock API responses for testing.",
      icon: "Server" // Adjusted to match a defined icon
    }
  ];


  return (
    <>
      <GridPatternLinearGradient >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Enterprise-Grade Features
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Empower your organization with our comprehensive suite of advanced capabilities designed for modern, security-conscious enterprises.
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = icons[feature.icon]
              return (
                <div
                  key={index}
                  className="relative group bg-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg cursor-pointer"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-lg transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
                  <div className="flex items-start space-x-5">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg flex items-center justify-center shadow-inner">
                        <Icon />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-base text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </GridPatternLinearGradient>
    </>
  )
}

