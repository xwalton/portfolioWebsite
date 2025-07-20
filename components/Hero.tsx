'use client'

import React, { useMemo } from 'react'
import { smoothScrollTo } from '@/lib/utils'

const Hero: React.FC = () => {
  // Memoize particle positions to prevent recalculation on every render
  const particles = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 4}s`,
      duration: `${3 + Math.random() * 2}s`
    }))
  }, [])
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-ocean-50 via-primary-50 to-ocean-100 overflow-hidden will-change-auto">
      {/* Ocean wave background */}
      <div className="absolute inset-0">
        {/* Subtle wave pattern - optimized SVG */}
        <svg
          className="absolute bottom-0 left-0 w-full h-32 text-primary-200 opacity-20 pointer-events-none"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="currentColor"
          />
        </svg>
        
        {/* Floating particles for ocean effect */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-300 rounded-full opacity-20 animate-pulse"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration
              }}
            />
          ))}
        </div>
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl mx-auto">
        {/* Greeting */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-600 font-medium mb-3 sm:mb-4 lg:mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Hello, I&apos;m
        </p>
        
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-neutral-900 mb-4 sm:mb-6 lg:mb-8 leading-tight tracking-tight opacity-0 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Xavier Walton
        </h1>
        
        {/* Title and Description */}
        <div className="space-y-3 sm:space-y-4 lg:space-y-6 mb-6 sm:mb-8 lg:mb-12">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-neutral-700 font-semibold leading-tight opacity-0 animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Product Manager & Consultant
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed sm:leading-relaxed lg:leading-relaxed px-2 sm:px-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            Passionate about building products that make a difference. 
            Experienced in consulting, analytics, and product strategy 
            with a focus on user-centered design and data-driven decisions.
          </p>
        </div>
        
        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center mb-8 sm:mb-12 lg:mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          <button
            onClick={() => smoothScrollTo('projects', 80)}
            className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 ease-out shadow-medium hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 will-change-transform"
            aria-label="View Xavier's projects and work"
          >
            View My Work
          </button>
          <button
            onClick={() => smoothScrollTo('resume', 80)}
            className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 ease-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 will-change-transform"
            aria-label="Download Xavier's resume"
          >
            Download Resume
          </button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-neutral-400 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-neutral-400 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 