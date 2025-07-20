#!/bin/bash

# Environment Variables Setup Script for Xavier Walton Portfolio
# This script helps configure environment variables for local development

echo "🔧 Xavier Walton Portfolio - Environment Setup"
echo "=============================================="

# Check if .env.local already exists
if [ -f ".env.local" ]; then
    echo "⚠️  .env.local already exists!"
    read -p "Do you want to overwrite it? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Setup cancelled. .env.local unchanged."
        exit 1
    fi
fi

echo ""
echo "📝 Setting up environment variables for local development..."
echo ""

# Create .env.local file
cat > .env.local << EOF
# Xavier Walton Portfolio - Local Development Environment
# Generated on $(date)

# Environment
NODE_ENV=development

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Xavier Walton - Product Manager & Consultant"
NEXT_PUBLIC_SITE_DESCRIPTION="Professional portfolio of Xavier Walton, Product Manager and Consultant with expertise in product strategy, user experience, and data-driven decision making."

# Contact Email
CONTACT_EMAIL=xavier@xavierwalton.com

# Social Media Links (update these with your actual URLs)
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/xavierwalton
NEXT_PUBLIC_GITHUB_URL=https://github.com/xavierwalton
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/xavierwalton

# Optional - Analytics (uncomment and configure as needed)
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
# NEXT_PUBLIC_PLAUSIBLE_DOMAIN=xavierwalton.com

# Optional - SMTP Configuration (for contact form)
# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=587
# SMTP_USER=xavier@xavierwalton.com
# SMTP_PASS=your-app-password

# Optional - Error Tracking
# NEXT_PUBLIC_SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id
EOF

echo "✅ .env.local created successfully!"
echo ""

echo "📋 Next Steps:"
echo "1. Review .env.local and update values as needed"
echo "2. For production, set these variables in Vercel dashboard:"
echo "   - Go to your Vercel project settings"
echo "   - Navigate to 'Environment Variables'"
echo "   - Add each variable from env.example"
echo ""

echo "🔍 Current Configuration:"
echo "   - Environment: Development"
echo "   - Site URL: http://localhost:3000"
echo "   - Contact Email: xavier@xavierwalton.com"
echo ""

echo "🚀 To start development server:"
echo "   npm run dev"
echo ""

echo "📚 For production deployment:"
echo "   - See DEPLOYMENT.md for detailed instructions"
echo "   - Use env.example as reference for production variables"
echo ""

echo "✅ Environment setup complete!" 