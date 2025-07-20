#!/bin/bash

# Domain Configuration Script for Xavier Walton Portfolio
# This script helps configure DNS records for Vercel deployment

echo "🌐 Xavier Walton Portfolio - Domain Configuration"
echo "=================================================="

# Domain configuration
DOMAIN="xavierwalton.com"
WWW_DOMAIN="www.xavierwalton.com"

echo "📋 Domain: $DOMAIN"
echo "📋 WWW Domain: $WWW_DOMAIN"
echo ""

echo "🔧 DNS Configuration Instructions:"
echo "=================================="
echo ""
echo "1. Log into your domain registrar (GoDaddy, Namecheap, etc.)"
echo "2. Navigate to DNS management"
echo "3. Add the following DNS records:"
echo ""

echo "📝 A Records (for apex domain):"
echo "   Type: A"
echo "   Name: @"
echo "   Value: 76.76.19.19"
echo ""
echo "   Type: A"
echo "   Name: @"
echo "   Value: 76.76.19.20"
echo ""

echo "📝 CNAME Record (for www subdomain):"
echo "   Type: CNAME"
echo "   Name: www"
echo "   Value: cname.vercel-dns.com"
echo ""

echo "📝 Additional A Records (for apex domain):"
echo "   Type: A"
echo "   Name: @"
echo "   Value: 76.76.19.19"
echo ""

echo "⏰ DNS Propagation:"
echo "   - Changes may take 24-48 hours to propagate"
echo "   - You can check propagation at: https://www.whatsmydns.net/"
echo ""

echo "🔒 SSL Certificate:"
echo "   - Vercel will automatically provision SSL certificate"
echo "   - Certificate will be active within 24 hours"
echo "   - HTTPS redirect is enabled by default"
echo ""

echo "📊 Verification Steps:"
echo "1. Check DNS propagation: https://www.whatsmydns.net/"
echo "2. Verify domain in Vercel dashboard"
echo "3. Test website at https://$DOMAIN"
echo "4. Test www subdomain at https://$WWW_DOMAIN"
echo ""

echo "🚨 Troubleshooting:"
echo "- If domain doesn't work after 48 hours, check DNS records"
echo "- Ensure all A records are pointing to Vercel IPs"
echo "- Verify domain is added in Vercel project settings"
echo ""

echo "✅ Domain configuration complete!"
echo "   Next: Configure environment variables in Vercel dashboard" 