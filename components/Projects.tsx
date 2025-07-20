import React from 'react'

interface Project {
  id: string
  title: string
  description: string
  thumbnail: string
  link: string
}

const Projects: React.FC = () => {
  // Placeholder projects - will be replaced with real data in task 4.3
  const projects: Project[] = [
    {
      id: '1',
      title: 'Project 1',
      description: 'Description for project 1',
      thumbnail: '/images/project1-thumb.jpg',
      link: '#'
    },
    {
      id: '2',
      title: 'Project 2',
      description: 'Description for project 2',
      thumbnail: '/images/project2-thumb.jpg',
      link: '#'
    },
    {
      id: '3',
      title: 'Project 3',
      description: 'Description for project 3',
      thumbnail: '/images/project3-thumb.jpg',
      link: '#'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-soft overflow-hidden">
              <div className="aspect-video bg-neutral-200 flex items-center justify-center">
                {/* Project thumbnails will be added in task 4.4 */}
                <span className="text-neutral-500">[Thumbnail]</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 