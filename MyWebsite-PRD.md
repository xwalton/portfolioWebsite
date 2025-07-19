# Product Requirements Document (PRD): Personal Product Management Portfolio Website

## 1. Introduction / Overview
This project is to build a personal portfolio website for Xavier Walton, designed to showcase his experience, projects, and skills to land Associate Product Manager (APM) roles. The site will present a clean, professional image while allowing Xavier to express his personality subtly through visuals and narrative tone. The primary audience is recruiters and hiring managers, with an emphasis on quick navigation, skimmable highlights, and clear access to resume and contact information.

## 2. Goals
- Present Xavier Walton as a strong APM candidate by showcasing his consulting and product-related work.
- Make it easy for recruiters and hiring managers to quickly access resume, LinkedIn, and contact information.
- Provide space for three featured projects (with thumbnails, descriptions, and future deep-dive links).
- Ensure the site is fast, lightweight, and SEO-friendly.
- Deploy the site live with a custom domain on Vercel.

## 3. User Stories
- As a recruiter, I want to quickly skim Xavier’s highlights and download his resume so I can evaluate him without digging.
- As a hiring manager, I want to understand Xavier’s career story and projects so I can assess his fit for a product role.
- As a visitor, I want to explore his projects and background easily, and contact him directly via email or LinkedIn.

## 4. Functional Requirements
1. The site must include a **navigation bar** with links to About Me, Highlights, Projects, Resume, and a "Contact Me" dropdown containing Email and LinkedIn links.
2. The **landing page (hero section)** must display Xavier’s intro text with a subtle background visual (abstract or surf-inspired) and minimal design.
3. The **Highlights section** must list six bullet points, summarizing Xavier’s Adobe work, leadership, analytics, and community contributions.
4. The **About Me section** must present a narrative biography (provided text) with optional space for a headshot.
5. The **Projects section** must display a grid of 3 project placeholders, each with a thumbnail, title, 1–2 sentence description, and a future link for deep dives.
6. The **Resume section** must include a clearly visible button to download Xavier’s resume (PDF format).
7. The **footer** must repeat Email and LinkedIn links for accessibility.
8. The site must be **responsive** (desktop, tablet, and mobile friendly).
9. The site must be deployed on **Vercel** with a custom domain.

## 5. Non-Goals (Out of Scope)
- No blog functionality in version 1.
- No built-in contact form (contact handled via Email and LinkedIn links).
- No deep-dive case study pages for launch (project placeholders only).
- No CMS or database integration at this stage.

## 6. Design Considerations
- Visual style: Clean, minimalist, professional with subtle personal flair (light surf/ocean texture or abstract background on landing page).
- Typography and layout should prioritize readability and simplicity.
- Minimal animations or transitions (keep performance high).

## 7. Technical Considerations
- Built with **Next.js** using **React and TypeScript**.
- Static site optimized for performance and SEO.
- Deployed via **Vercel** with custom domain.
- GitHub repository for version control.

## 8. Success Metrics
- Number of recruiter or hiring manager inquiries generated from the site.
- Resume downloads.
- LinkedIn profile clicks.
- General engagement metrics (time on site, project clicks).

## 9. Open Questions
- What will the final custom domain name be? (e.g., xavierwaltonpm.com)
- Will the project deep-dive pages be built in a later phase using the same stack, or via a CMS?
- Should analytics (Google Analytics or Plausible) be integrated to track success metrics?
