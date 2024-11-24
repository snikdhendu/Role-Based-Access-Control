import { Server, Share2, FileCode, Lock, Users, UserPlus } from 'lucide-react'

const icons:any = {
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
      title: "Self-hosting with air-gapped deployment options",
      description: "Run any edition of Appsmith in your infrastructure.",
      icon: "Server"
    },
    {
      title: "Embeddable within existing apps with shared logins",
      description: "Extend the functionality of your legacy and SaaS applications.",
      icon: "Share2"
    },
    {
      title: "Open source under Apache 2.0 license",
      description: "Build with high transparency and low vendor risk.",
      icon: "FileCode"
    },
    {
      title: "SAML and OIDC SSO",
      description: "Secure authentication and authorization with your login provider.",
      icon: "Lock"
    },
    {
      title: "Role-based access controls",
      description: "Customize granular roles, groups, and permissions.",
      icon: "Users"
    },
    {
      title: "SCIM-based user provisioning",
      description: "Import users and roles from your IdP.",
      icon: "UserPlus"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-12 min-h-svh">
      {features.map((feature, index) => {
        const Icon = icons[feature.icon]
        return (
          <div className=' '>
          <div
            key={index}
            className="group relative bg-gray-100 h-56 p-6 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg overflow-hidden"
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 blur-sm" />
              <div className="absolute inset-0.5 bg-white rounded-lg" /> {/* Adjust inset for border thickness */}
            </div>
            
            {/* Content */}
            <div className="relative">
              <div className="w-12 h-12 bg-indigo-500  rounded-full flex items-center justify-center text-white mb-4">
                <Icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          </div>
          </div>
        )
      })}
    </div>
  )
}

