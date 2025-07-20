import React from 'react'

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-20 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
          Highlights
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {/* Six bullet points will be added in task 4.2 */}
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-neutral-700">[Adobe work highlight]</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-neutral-700">[Leadership highlight]</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-neutral-700">[Analytics highlight]</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-neutral-700">[Community contribution highlight]</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-neutral-700">[Additional highlight]</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-neutral-700">[Additional highlight]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights 