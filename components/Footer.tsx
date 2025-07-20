'use client'

import React from 'react'
import { smoothScrollTo } from '@/lib/utils'

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12" role="contentinfo">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Xavier Walton</h3>
            <p className="text-neutral-300 text-sm">
              Product Manager & Consultant
            </p>
            <p className="text-neutral-400 text-xs mt-2">
              Passionate about building products that make a difference
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-sm font-semibold mb-3 text-neutral-200">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => smoothScrollTo('about', 80)}
                className="block w-full text-left text-sm text-neutral-300 hover:text-white transition-colors duration-200"
              >
                About Me
              </button>
              <button
                onClick={() => smoothScrollTo('projects', 80)}
                className="block w-full text-left text-sm text-neutral-300 hover:text-white transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => smoothScrollTo('resume', 80)}
                className="block w-full text-left text-sm text-neutral-300 hover:text-white transition-colors duration-200"
              >
                Resume
              </button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-right">
            <h4 className="text-sm font-semibold mb-3 text-neutral-200">Get In Touch</h4>
            <div className="space-y-2">
              <a
                href="mailto:xavier@example.com"
                className="flex items-center justify-center md:justify-end space-x-2 text-sm text-neutral-300 hover:text-white transition-colors duration-200"
                aria-label="Send email to Xavier Walton"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email</span>
              </a>
              <a
                href="https://linkedin.com/in/xavierwalton"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end space-x-2 text-sm text-neutral-300 hover:text-white transition-colors duration-200"
                aria-label="Visit Xavier Walton's LinkedIn profile"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
          <p className="text-neutral-400 text-sm">
            © 2024 Xavier Walton. All rights reserved.
          </p>
          <p className="text-neutral-500 text-xs mt-1">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 