'use client'

import React from 'react'

const Resume: React.FC = () => {
  const handleDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Xavier_Walton_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const skills = {
    'Product Management': ['Product Strategy', 'Roadmapping', 'User Research', 'A/B Testing', 'Agile/Scrum'],
    'Analytics & Data': ['SQL', 'Python', 'Tableau', 'Google Analytics', 'Mixpanel'],
    'Design & UX': ['Figma', 'Sketch', 'User Testing', 'Wireframing', 'Prototyping'],
    'Business': ['Market Analysis', 'Competitive Intelligence', 'Stakeholder Management', 'Go-to-Market Strategy']
  }

  return (
    <section id="resume" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-ocean-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6">
            Resume & Skills
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Download my comprehensive resume to learn more about my experience, 
            skills, and achievements in product management and consulting.
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Resume Download Section */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-medium">
            <div className="text-center space-y-6 sm:space-y-8">
              {/* Resume Icon */}
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>

              {/* Content */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                  Xavier Walton
                </h3>
                <p className="text-lg sm:text-xl text-neutral-600">
                  Product Manager & Consultant
                </p>
                <p className="text-sm sm:text-base text-neutral-500 max-w-md mx-auto">
                  Comprehensive resume including work experience, education, 
                  certifications, and detailed project case studies.
                </p>
              </div>

              {/* Download Button */}
              <div className="pt-4 sm:pt-6">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 ease-out shadow-medium hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume (PDF)
                </button>
              </div>

              {/* File Info */}
              <div className="text-sm text-neutral-500">
                <p>Last updated: December 2024</p>
                <p>File size: ~2.5 MB</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8 sm:space-y-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6 sm:mb-8">
                Core Skills & Expertise
              </h3>
              <div className="space-y-6 sm:space-y-8">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="bg-white rounded-xl p-6 sm:p-8 shadow-medium">
                    <h4 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-4 sm:mb-6">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {skillList.map((skill, index) => (
                        <span
                          key={index}
                          className="text-sm sm:text-base bg-primary-50 text-primary-700 px-3 py-2 rounded-lg font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-medium">
              <h4 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-4 sm:mb-6">
                Quick Stats
              </h4>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">
                    8+
                  </div>
                  <div className="text-sm sm:text-base text-neutral-600">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">
                    50+
                  </div>
                  <div className="text-sm sm:text-base text-neutral-600">
                    Products Launched
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">
                    15+
                  </div>
                  <div className="text-sm sm:text-base text-neutral-600">
                    Companies Served
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">
                    95%
                  </div>
                  <div className="text-sm sm:text-base text-neutral-600">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-medium max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 sm:mb-6">
              Ready to Work Together?
            </h3>
            <p className="text-lg text-neutral-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how my experience and skills can help drive 
              your product&apos;s success and business growth.
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
                Schedule a Call
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('projects')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="px-8 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 ease-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume 