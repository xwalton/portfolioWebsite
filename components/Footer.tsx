import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-neutral-300">
              © 2024 Xavier Walton. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="mailto:xavier@example.com"
              className="text-neutral-300 hover:text-white transition-colors duration-200"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/xavierwalton"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 