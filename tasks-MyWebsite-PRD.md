# Task List: Personal Product Management Portfolio Website

## Relevant Files

- `package.json` - Project dependencies and scripts configuration
- `next.config.js` - Next.js configuration file
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration for styling
- `app/layout.tsx` - Root layout component with metadata and global styles
- `app/layout.test.tsx` - Unit tests for root layout component
- `app/page.tsx` - Main landing page component
- `app/page.test.tsx` - Unit tests for main page component
- `components/Navigation.tsx` - Navigation bar component with dropdown menu
- `components/Navigation.test.tsx` - Unit tests for navigation component
- `components/Hero.tsx` - Hero section component with intro text and background
- `components/Hero.test.tsx` - Unit tests for hero component
- `components/About.tsx` - About Me section component
- `components/About.test.tsx` - Unit tests for about component
- `components/Highlights.tsx` - Highlights section component with bullet points
- `components/Highlights.test.tsx` - Unit tests for highlights component
- `components/Projects.tsx` - Projects grid component with placeholders
- `components/Projects.test.tsx` - Unit tests for projects component
- `components/Resume.tsx` - Resume section component with download button
- `components/Resume.test.tsx` - Unit tests for resume component
- `components/Footer.tsx` - Footer component with contact links
- `components/Footer.test.tsx` - Unit tests for footer component
- `app/globals.css` - Global CSS styles and Tailwind imports
- `public/resume.pdf` - Xavier's resume file for download
- `public/images/` - Directory for project thumbnails and headshot
- `lib/utils.ts` - Utility functions for data handling and formatting
- `lib/utils.test.ts` - Unit tests for utility functions
- `vercel.json` - Vercel deployment configuration
- `.env.local` - Environment variables for deployment

## Tasks

- [ ] 1.0 Project Setup and Configuration
  - [x] 1.1 Initialize Next.js project with TypeScript and Tailwind CSS
  - [x] 1.2 Configure TypeScript settings in tsconfig.json
  - [x] 1.3 Set up Tailwind CSS configuration and custom theme
  - [x] 1.4 Configure Next.js settings for static site generation
  - [x] 1.5 Set up Jest testing framework with React Testing Library
  - [x] 1.6 Create basic project structure and directories
  - [ ] 1.7 Initialize Git repository and create .gitignore

- [ ] 2.0 Core Layout and Navigation Implementation
  - [ ] 2.1 Create root layout component with metadata and global styles
  - [ ] 2.2 Implement navigation bar component with responsive design
  - [ ] 2.3 Add dropdown menu functionality for "Contact Me" section
  - [ ] 2.4 Implement smooth scrolling navigation between sections
  - [ ] 2.5 Add mobile hamburger menu for responsive navigation
  - [ ] 2.6 Create footer component with contact links

- [ ] 3.0 Landing Page and Hero Section Development
  - [ ] 3.1 Create hero section component with Xavier's intro text
  - [ ] 3.2 Implement subtle background visual (surf/ocean inspired)
  - [ ] 3.3 Add responsive typography and spacing for hero section
  - [ ] 3.4 Implement minimal animations or transitions
  - [ ] 3.5 Ensure hero section is optimized for performance

- [ ] 4.0 Content Sections Implementation (About, Highlights, Projects, Resume)
  - [ ] 4.1 Create About Me section with narrative biography
  - [ ] 4.2 Implement Highlights section with six bullet points
  - [ ] 4.3 Create Projects section with 3 project placeholders in grid layout
  - [ ] 4.4 Add project thumbnails, titles, and descriptions
  - [ ] 4.5 Implement Resume section with download button
  - [ ] 4.6 Add placeholder links for future project deep-dives
  - [ ] 4.7 Create utility functions for data management

- [ ] 5.0 Styling, Responsive Design, and Visual Polish
  - [ ] 5.1 Implement responsive design for desktop, tablet, and mobile
  - [ ] 5.2 Apply clean, minimalist design with professional styling
  - [ ] 5.3 Add subtle personal flair through color scheme and typography
  - [ ] 5.4 Optimize images and assets for performance
  - [ ] 5.5 Implement accessibility features (ARIA labels, keyboard navigation)
  - [ ] 5.6 Add hover states and interactive elements
  - [ ] 5.7 Ensure consistent spacing and typography throughout

- [ ] 6.0 Deployment and Domain Configuration
  - [ ] 6.1 Set up Vercel project and connect GitHub repository
  - [ ] 6.2 Configure custom domain settings in Vercel
  - [ ] 6.3 Set up environment variables for production
  - [ ] 6.4 Test deployment and ensure all functionality works
  - [ ] 6.5 Configure SEO meta tags and Open Graph data
  - [ ] 6.6 Set up analytics tracking (Google Analytics or Plausible)
  - [ ] 6.7 Create deployment documentation and maintenance notes

### Notes

- Unit tests should typically be placed alongside the code files they are testing (e.g., `MyComponent.tsx` and `MyComponent.test.tsx` in the same directory).
- Use `npx jest [optional/path/to/test/file]` to run tests. Running without a path executes all tests found by the Jest configuration. 