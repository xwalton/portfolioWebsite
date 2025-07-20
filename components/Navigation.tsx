'use client'

import React, { useState, useEffect } from 'react'
import { smoothScrollTo } from '@/lib/utils'

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect for navigation background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to section with offset for fixed navigation
  const scrollToSection = (sectionId: string) => {
    smoothScrollTo(sectionId, 80) // 80px offset for fixed navigation
    setIsMenuOpen(false) // Close mobile menu after navigation
  }

  // Navigation items
  const navItems = [
    { id: 'about', label: 'About Me' },
    { id: 'highlights', label: 'Highlights' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-medium' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold text-neutral-900 hover:text-primary-600 transition-colors duration-200"
            >
              Xavier Walton
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Contact Me Dropdown */}
            <div className="relative group">
              <button 
                className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
                aria-label="Contact options"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Contact Me
                <svg
                  className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right"
                role="menu"
                aria-label="Contact options"
              >
                <div className="py-1">
                  <a
                    href="mailto:xavier@example.com"
                    className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-primary-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                    role="menuitem"
                    aria-label="Send email to Xavier Walton"
                  >
                    Email
                  </a>
                  <a
                    href="https://linkedin.com/in/xavierwalton"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-primary-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                    role="menuitem"
                    aria-label="Visit Xavier Walton's LinkedIn profile"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-700 hover:text-primary-600 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
          role="navigation"
          aria-label="Mobile navigation"
          aria-hidden={!isMenuOpen}
        >
          <div className="py-4 space-y-2 border-t border-neutral-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-neutral-700 hover:bg-neutral-50 hover:text-primary-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Contact Links */}
            <div className="px-4 py-2 border-t border-neutral-200 mt-4">
              <p className="text-sm font-medium text-neutral-900 mb-2">Contact Me</p>
              <a
                href="mailto:xavier@example.com"
                className="block py-2 text-sm text-neutral-700 hover:text-primary-600 transition-colors duration-200"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/xavierwalton"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-sm text-neutral-700 hover:text-primary-600 transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 