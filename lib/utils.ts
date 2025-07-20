// Utility functions for the portfolio website

/**
 * Format a date string to a readable format
 */
export function formatDate(date: string | Date): string {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

/**
 * Truncate text to a specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

/**
 * Generate a slug from a string
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Format file size in bytes to human readable format
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Smooth scroll to element with offset for fixed navigation
 */
export function smoothScrollTo(elementId: string, offset: number = 80): void {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

/**
 * Check if element is in viewport
 */
export function isInViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Data management functions for portfolio content

/**
 * Project data interface
 */
export interface Project {
  id: number
  title: string
  description: string
  category: string
  technologies: string[]
  image: string
  link: string
  featured: boolean
  date?: string
  client?: string
  results?: string[]
}

/**
 * Skill data interface
 */
export interface Skill {
  name: string
  category: string
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  yearsOfExperience?: number
}

/**
 * Experience data interface
 */
export interface Experience {
  id: number
  title: string
  company: string
  location: string
  startDate: string
  endDate?: string
  description: string
  achievements: string[]
  technologies: string[]
}

/**
 * Get filtered projects by category
 */
export function getProjectsByCategory(projects: Project[], category: string): Project[] {
  return projects.filter(project => project.category === category)
}

/**
 * Get featured projects
 */
export function getFeaturedProjects(projects: Project[]): Project[] {
  return projects.filter(project => project.featured)
}

/**
 * Sort projects by date (newest first)
 */
export function sortProjectsByDate(projects: Project[]): Project[] {
  return projects.sort((a, b) => {
    if (!a.date || !b.date) return 0
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

/**
 * Get skills by category
 */
export function getSkillsByCategory(skills: Skill[], category: string): Skill[] {
  return skills.filter(skill => skill.category === category)
}

/**
 * Get skills by proficiency level
 */
export function getSkillsByProficiency(skills: Skill[], proficiency: Skill['proficiency']): Skill[] {
  return skills.filter(skill => skill.proficiency === proficiency)
}

/**
 * Calculate total years of experience
 */
export function calculateTotalExperience(experiences: Experience[]): number {
  const now = new Date()
  let totalYears = 0

  experiences.forEach(exp => {
    const start = new Date(exp.startDate)
    const end = exp.endDate ? new Date(exp.endDate) : now
    const years = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
    totalYears += years
  })

  return Math.round(totalYears * 10) / 10
}

/**
 * Format experience duration
 */
export function formatExperienceDuration(startDate: string, endDate?: string): string {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()
  
  const years = end.getFullYear() - start.getFullYear()
  const months = end.getMonth() - start.getMonth()
  
  if (years === 0) {
    return months === 1 ? '1 month' : `${months} months`
  } else if (years === 1) {
    return months === 0 ? '1 year' : `1 year, ${months} months`
  } else {
    return months === 0 ? `${years} years` : `${years} years, ${months} months`
  }
}

/**
 * Generate project statistics
 */
export function generateProjectStats(projects: Project[]) {
  const totalProjects = projects.length
  const featuredProjects = projects.filter(p => p.featured).length
  const categories = [...new Set(projects.map(p => p.category))]
  const technologies = [...new Set(projects.flatMap(p => p.technologies))]
  
  return {
    totalProjects,
    featuredProjects,
    categories: categories.length,
    technologies: technologies.length,
    categoryBreakdown: categories.reduce((acc, category) => {
      acc[category] = projects.filter(p => p.category === category).length
      return acc
    }, {} as Record<string, number>)
  }
}

/**
 * Validate project data
 */
export function validateProject(project: Partial<Project>): boolean {
  const requiredFields = ['title', 'description', 'category', 'technologies']
  return requiredFields.every(field => 
    project[field as keyof Project] && 
    (Array.isArray(project[field as keyof Project]) ? 
      (project[field as keyof Project] as unknown[]).length > 0 : 
      true)
  )
}

/**
 * Sanitize user input for security
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .trim()
    .slice(0, 1000) // Limit length
}

/**
 * Generate meta description from content
 */
export function generateMetaDescription(content: string, maxLength: number = 160): string {
  const cleanContent = content.replace(/<[^>]*>/g, '').trim()
  return truncateText(cleanContent, maxLength)
}

// Image optimization utilities

/**
 * Generate responsive image sizes for different breakpoints
 */
export function generateImageSizes(breakpoints: Record<string, number> = {}): string {
  const defaultBreakpoints = {
    'max-width: 640px': 100,
    'max-width: 768px': 100,
    'max-width: 1024px': 50,
    'max-width: 1280px': 33,
    'default': 25
  }
  
  const sizes = Object.entries({ ...defaultBreakpoints, ...breakpoints })
    .map(([query, size]) => {
      if (query === 'default') {
        return `${size}vw`
      }
      return `(${query}) ${size}vw`
    })
    .join(', ')
  
  return sizes
}

/**
 * Generate blur data URL for image placeholders
 */
export function generateBlurDataURL(width: number, height: number, color: string = '#e5e7eb'): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${color}"/>
    </svg>
  `
  const encoded = Buffer.from(svg).toString('base64')
  return `data:image/svg+xml;base64,${encoded}`
}

/**
 * Optimize image filename for caching
 */
export function optimizeImageFilename(filename: string, width?: number, quality?: number): string {
  const [name, ext] = filename.split('.')
  const params = []
  
  if (width) params.push(`w=${width}`)
  if (quality) params.push(`q=${quality}`)
  
  if (params.length === 0) return filename
  return `${name}-${params.join('-')}.${ext}`
}

/**
 * Check if image should be loaded eagerly (above the fold)
 */
export function shouldLoadEagerly(elementId: string): boolean {
  const aboveTheFoldElements = ['hero', 'about']
  return aboveTheFoldElements.includes(elementId)
}

/**
 * Get optimal image quality based on device and connection
 */
export function getOptimalImageQuality(): number {
  // In a real app, you'd check navigator.connection
  // For now, return a balanced quality setting
  return 85
} 