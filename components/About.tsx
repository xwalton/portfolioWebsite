'use client'

import React from 'react'
import { smoothScrollTo } from '@/lib/utils'

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed">
                I began in rooms lit by soft boxes and the hum of studio lights, framing objects
                until they felt alive. At Quad Graphics, I worked alongside art directors and 
                stylists, learning how a product can speak without words if every line and
                shadow is deliberate. At Portrait Innovations, it was people, not products. 
                Parents shifting a child&apos;s hand just so, strangers easing into smiles they
                did not know they had.
                Those early days shaped how I see things. The way design, light, and intention 
                can change what the world notices. Now, at Adobe, I work with teams who build the 
                systems behind that magic. I help brands bring order to vast collections of content, 
                guiding the quiet processes that make it possible for creativity to scale.
                I am drawn to where technology meets imagination. AI, in particular, feels like the 
                next palette. It can free more people to make the world sharper, softer, stranger, 
                more beautiful. My work now is one step in that direction, learning how to connect 
                ideas, people, and tools so what they create can reach farther than before.
              </p>
              
              <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed">
                Today, I specialize in product strategy, user-centered design, and data-driven 
                decision making. I&apos;ve worked with startups and enterprise companies alike, 
                helping them build products that users love and businesses value.
              </p>
              
              <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed">
                When I&apos;m not crafting product roadmaps or analyzing user behavior, you&apos;ll 
                find me exploring new technologies, mentoring aspiring product managers, or 
                contributing to the product management community.
              </p>
            </div>

            {/* Key Skills */}
            <div className="pt-4 sm:pt-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-4 sm:mb-6">
                Core Competencies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {[
                  'Product Strategy',
                  'User Research',
                  'Data Analytics',
                  'A/B Testing',
                  'Agile/Scrum',
                  'Stakeholder Management',
                  'Market Analysis',
                  'UX/UI Design',
                  'Technical Writing'
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-primary-50 text-primary-700 px-3 py-2 rounded-lg text-sm sm:text-base font-medium text-center hover:bg-primary-100 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-6 sm:pt-8">
              <button
                onClick={() => smoothScrollTo('projects', 80)}
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 ease-out shadow-medium hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                View My Work
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-50 to-ocean-100 rounded-2xl p-8 sm:p-12 lg:p-16 shadow-medium">
              <div className="space-y-6 sm:space-y-8">
                {/* Experience Stats */}
                <div className="grid grid-cols-2 gap-6 sm:gap-8">
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                      8+
                    </div>
                    <div className="text-sm sm:text-base text-neutral-600 font-medium">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                      50+
                    </div>
                    <div className="text-sm sm:text-base text-neutral-600 font-medium">
                      Products Launched
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                      15+
                    </div>
                    <div className="text-sm sm:text-base text-neutral-600 font-medium">
                      Companies Served
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                      95%
                    </div>
                    <div className="text-sm sm:text-base text-neutral-600 font-medium">
                      Client Satisfaction
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="text-center pt-4 sm:pt-6">
                  <blockquote className="text-lg sm:text-xl text-neutral-700 italic">
                    &ldquo;Great products are built at the intersection of user needs, 
                    business goals, and technical feasibility.&rdquo;
                  </blockquote>
                  <div className="text-sm text-neutral-500 mt-2">
                    — Xavier Walton
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-ocean-200 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 