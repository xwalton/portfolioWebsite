# Deployment Guide - Xavier Walton Portfolio Website

## Overview
This guide covers the deployment of Xavier Walton's portfolio website using Vercel, including domain configuration, environment setup, and maintenance procedures.

## Prerequisites
- GitHub account with repository access
- Vercel account (free tier available)
- Domain name (optional but recommended)

## 1. Vercel Project Setup

### Step 1: Connect to Vercel
1. Visit [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Import the GitHub repository: `pmWebsite`
4. Vercel will automatically detect Next.js configuration

### Step 2: Configure Build Settings
- **Framework Preset**: Next.js (auto-detected)
- **Build Command**: `npm run build` (default)
- **Output Directory**: `out` (configured in vercel.json)
- **Install Command**: `npm install` (default)
- **Root Directory**: `/` (default)

### Step 3: Environment Variables
Set the following environment variables in Vercel dashboard:

```bash
# Production
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://xavierwalton.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Google Analytics ID (optional)

# Development (if needed)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Step 4: Deploy
1. Click "Deploy" in Vercel dashboard
2. Wait for build to complete (typically 2-3 minutes)
3. Verify deployment at the provided Vercel URL

## 2. Domain Configuration

### Step 2.1: Add Custom Domain
1. In Vercel dashboard, go to project settings
2. Navigate to "Domains" section
3. Add your domain: `xavierwalton.com`
4. Follow Vercel's DNS configuration instructions

### Step 2.2: DNS Configuration
Configure your domain's DNS records:

```dns
# A Record (if using apex domain)
Type: A
Name: @
Value: 76.76.19.19

# CNAME Record (if using www subdomain)
Type: CNAME
Name: www
Value: cname.vercel-dns.com

# Additional A Records for apex domain
Type: A
Name: @
Value: 76.76.19.19

Type: A
Name: @
Value: 76.76.19.20
```

### Step 2.3: SSL Certificate
- Vercel automatically provisions SSL certificates
- Certificate will be active within 24 hours
- Force HTTPS redirect is enabled by default

## 3. Environment Variables Setup

### Production Environment
```bash
# Required
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://xavierwalton.com

# Optional - Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=xavierwalton.com

# Optional - Contact Form
CONTACT_EMAIL=xavier@xavierwalton.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=xavier@xavierwalton.com
SMTP_PASS=your-app-password
```

### Development Environment
```bash
# Local development
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 4. Analytics Setup

### Google Analytics (Optional)
1. Create Google Analytics 4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to environment variables
4. Analytics will be automatically included

### Plausible Analytics (Alternative)
1. Sign up at [plausible.io](https://plausible.io)
2. Add domain to Plausible
3. Add script to layout.tsx (if preferred over GA)

## 5. Performance Optimization

### Build Optimization
- Static site generation enabled
- Images optimized with Next.js Image component
- CSS and JS minification enabled
- Gzip compression enabled

### Caching Strategy
- Static assets: 1 year cache
- Resume PDF: 1 year cache
- HTML pages: No cache (for content updates)

### CDN Configuration
- Vercel Edge Network automatically enabled
- Global CDN with 200+ locations
- Automatic image optimization

## 6. Monitoring and Maintenance

### Health Checks
- Vercel provides automatic health monitoring
- Uptime monitoring included
- Performance metrics available in dashboard

### Backup Strategy
- Code: GitHub repository
- Content: Version controlled in repository
- Assets: Stored in public directory

### Update Process
1. Make changes locally
2. Test with `npm run build` and `npm run dev`
3. Commit and push to GitHub
4. Vercel automatically deploys from main branch
5. Verify deployment at custom domain

## 7. Security Configuration

### Security Headers
Configured in vercel.json:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()

### SSL/TLS
- Automatic SSL certificate provisioning
- HSTS headers enabled
- Force HTTPS redirect

## 8. Troubleshooting

### Common Issues

#### Build Failures
```bash
# Check build logs in Vercel dashboard
# Common fixes:
npm run build  # Test locally first
npm install    # Ensure dependencies are installed
```

#### Domain Issues
- Verify DNS propagation (can take 24-48 hours)
- Check SSL certificate status
- Ensure domain is properly configured in Vercel

#### Performance Issues
- Check Vercel analytics dashboard
- Optimize images and assets
- Review bundle size with `npm run build`

### Support Resources
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Support](https://vercel.com/support)

## 9. Post-Deployment Checklist

- [ ] Website loads correctly at custom domain
- [ ] SSL certificate is active (green lock in browser)
- [ ] All pages and sections are accessible
- [ ] Contact forms work (if implemented)
- [ ] Analytics are tracking correctly
- [ ] Mobile responsiveness verified
- [ ] Performance scores are acceptable
- [ ] SEO meta tags are present
- [ ] Social media previews work
- [ ] Resume download functions properly

## 10. Maintenance Schedule

### Weekly
- Check Vercel analytics for performance
- Monitor error rates and uptime
- Review security alerts

### Monthly
- Update dependencies: `npm update`
- Review and update content
- Check analytics performance
- Backup important data

### Quarterly
- Security audit of dependencies
- Performance optimization review
- Content refresh and updates
- SEO optimization review

## Contact Information
For deployment issues or questions:
- **Email**: xavier@xavierwalton.com
- **GitHub**: [Repository Issues](https://github.com/xavierwalton/pmWebsite/issues)
- **Vercel**: [Project Dashboard](https://vercel.com/dashboard)

---

**Last Updated**: December 2024
**Version**: 1.0 