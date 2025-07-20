'use client'

import React from 'react'

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform Redesign',
      description: 'Led complete redesign of B2B e-commerce platform, resulting in 40% increase in conversion rates and 60% improvement in user engagement.',
      category: 'Product Strategy',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      image: '/images/project-1.jpg',
      link: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Mobile App Analytics Dashboard',
      description: 'Designed and implemented comprehensive analytics dashboard for mobile app, providing real-time insights that drove 35% increase in user retention.',
      category: 'Data Analytics',
      technologies: ['React Native', 'Python', 'PostgreSQL', 'D3.js'],
      image: '/images/project-2.jpg',
      link: '#',
      featured: false
    },
    {
      id: 3,
      title: 'SaaS Product Launch',
      description: 'Managed end-to-end product launch for SaaS platform, achieving 150% growth in first year with 95% customer satisfaction score.',
      category: 'Product Management',
      technologies: ['Vue.js', 'Django', 'Redis', 'Docker'],
      image: '/images/project-3.jpg',
      link: '#',
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            A selection of projects that showcase my expertise in product strategy, 
            user experience design, and data-driven decision making.
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-white rounded-xl shadow-medium hover:shadow-lg transition-all duration-300 ease-out transform hover:-translate-y-2 border border-gray-100 overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-primary-100 to-ocean-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-primary-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <p className="text-primary-600 font-medium">Project {project.id}</p>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8">
                <div className="space-y-4 sm:space-y-6">
                  {/* Category */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-neutral-500">
                      Project {project.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs sm:text-sm bg-neutral-100 text-neutral-700 px-2 py-1 rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="pt-2 sm:pt-4">
                    <button
                      onClick={() => {
                        // Placeholder for future project deep-dive functionality
                        console.log(`Viewing project: ${project.title}`)
                      }}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm sm:text-base transition-colors duration-200 group"
                    >
                      View Case Study
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="bg-gradient-to-r from-primary-50 to-ocean-50 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 sm:mb-6">
              Want to See More?
            </h3>
            <p className="text-lg text-neutral-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              I&apos;m constantly working on new projects and case studies. 
              Get in touch to discuss how I can help with your next product challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 ease-out shadow-medium hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Let&apos;s Connect
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('resume')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="px-8 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 ease-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 