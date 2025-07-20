import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
          About Me
        </h2>
        <div className="prose prose-lg max-w-none">
          {/* Narrative biography will be added in task 4.1 */}
          <p className="text-neutral-600 leading-relaxed">
            [Biography content will be implemented here]
          </p>
        </div>
      </div>
    </section>
  )
}

export default About 