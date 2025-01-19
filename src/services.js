import React from 'react'

function Services() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-gray-900">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-medium mb-2">My Services</p>
          <h2 className="text-4xl font-bold text-white">What I Do</h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Web Developer Card */}
          <div className="group p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm 
                        border border-gray-700 hover:border-emerald-400 
                        transition-all duration-300">
            <div className="text-emerald-400 w-12 h-12 mb-6">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 5h16v10H4V5m16 12H4v2h16v-2m0-14H4c-1.11 0-2 .89-2 2v10c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Web Developer</h3>
            <p className="text-gray-400">
              Development of custom web pages. Using current technologies 
              and libraries of the labor field.
            </p>
          </div>

          {/* UI/UX Designer Card */}
          <div className="group p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm 
                        border border-gray-700 hover:border-emerald-400 
                        transition-all duration-300">
            <div className="text-emerald-400 w-12 h-12 mb-6">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-8-4h2v2h-2v-2zm-1-3V9h4v2h-2v2h-2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">UI/UX Designer</h3>
            <p className="text-gray-400">
              I offer design of web interfaces and mobile applications, 
              design made in figma, adobe xd and sketch.
            </p>
          </div>

          {/* Graphic Design Card */}
          <div className="group p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm 
                        border border-gray-700 hover:border-emerald-400 
                        transition-all duration-300">
            <div className="text-emerald-400 w-12 h-12 mb-6">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Graphic Design</h3>
            <p className="text-gray-400">
              I make designs at the client's request, banner design, 
              posters, digital designs among others.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Services;