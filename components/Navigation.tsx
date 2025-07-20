import React from 'react'

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      {/* Navigation content will be implemented in task 2.2 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-neutral-900">Xavier Walton</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation links will be added here */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 