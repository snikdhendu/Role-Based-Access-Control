// import Image from 'next/image'
import { GridPatternLinearGradient } from "./demo/GridPatternLinearGradient"
// import AnimatedGradientText from "./ui/animated-gradient-text"
import { AnimatedGradientTextDemo } from "./demo/AnimatedGradientTextDemo"
import { AvatarCirclesDemo } from "./demo/AvatarCirclesDemo"
import { HeroVideoDialogDemo } from "./demo/HeroVideoDialogDemo"
export default function Hero() {
  return (
    <>
      {/* <GridPatternLinearGradient /> */}
      <GridPatternLinearGradient >
        {/* <div className="min-h-screen bg-transparent  p-14"> */}


        <div className="container mx-auto px-4 sm:px-6 sm:py-8 lg:px-2">

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-8">
              <div className="">
                <div className="absolute top-1 left-2">
                  <AnimatedGradientTextDemo />
                </div>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  Role Based Access{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Control
                  </span>
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  Secure your application with enterprise-grade role-based access control. Fast, scalable, and easy to implement.
                </p>
              </div>


              <div className="grid gap-4 sm:grid-cols-2">
                {['Advanced Security', 'Multi-tenant Ready', 'Fine-grained Permissions', 'Access Policies'].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 ">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <a href="#" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Get Started
                </a>
                <a href="#" className="inline-flex items-center justify-center rounded-md bg-indigo-100 px-5 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  View Documentation
                </a>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white border rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <AvatarCirclesDemo />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold">100,000+</span>
                    <span className="text-yellow-500">★★★★★</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Active implementations</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center h-4/5 bg-gradient-to-r from-purple-600 to-orange-400 p-2 rounded-lg">
              {/* <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl ">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 ">
                    DEMO
                  </span>
                  <span className="text-xs text-gray-500 ">
                    Try it now
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="user.canAccess('admin-dashboard')"
                      className="w-full rounded-md border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 "
                    />
                  </div>
                  <button className="w-full rounded-md bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Check Permission
                  </button>
                  <div className="rounded-lg bg-gray-50 p-4 ">
                    <p className="font-mono text-sm text-gray-700 ">
                      Result will be shown here...
                    </p>
                  </div>
                </div>
              </div> */}
                 <HeroVideoDialogDemo/>
            </div>
          </div>
        </div>
        {/* </div> */}
      </GridPatternLinearGradient>
    </>
  )
}

