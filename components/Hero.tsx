import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-ocean-50 to-primary-50">
      {/* Ocean pattern background will be added in task 3.2 */}
      <div className="absolute inset-0 bg-ocean-pattern opacity-5"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
          Xavier Walton
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
          {/* Hero intro text will be added in task 3.1 */}
          Product Manager & Consultant
        </p>
      </div>
    </section>
  )
}

export default Hero 