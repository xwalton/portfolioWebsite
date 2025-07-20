'use client'

import Script from 'next/script'
import { useEffect } from 'react'

// Type declarations for global analytics functions
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    plausible: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

interface AnalyticsProps {
  googleAnalyticsId?: string
  plausibleDomain?: string
}

const Analytics: React.FC<AnalyticsProps> = ({ 
  googleAnalyticsId, 
  plausibleDomain 
}) => {
  // Google Analytics 4
  const hasGoogleAnalytics = googleAnalyticsId && googleAnalyticsId !== 'G-XXXXXXXXXX'

  // Plausible Analytics
  const hasPlausible = plausibleDomain && plausibleDomain !== 'xavierwalton.com'

  // Page view tracking for client-side navigation
  useEffect(() => {
    if (hasGoogleAnalytics && typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', googleAnalyticsId!, {
        page_path: window.location.pathname,
      })
    }
  }, [hasGoogleAnalytics, googleAnalyticsId])

  return (
    <>
      {/* Google Analytics 4 */}
      {hasGoogleAnalytics && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `}
          </Script>
        </>
      )}

      {/* Plausible Analytics */}
      {hasPlausible && (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}

      {/* Custom Analytics Events */}
      <Script id="custom-analytics" strategy="afterInteractive">
        {`
          // Track resume downloads
          document.addEventListener('click', function(e) {
            if (e.target && e.target.closest('button') && 
                e.target.closest('button').textContent.includes('Download Resume')) {
              ${hasGoogleAnalytics ? `gtag('event', 'download', {
                method: 'resume',
                content_type: 'application/pdf',
                item_id: 'xavier_walton_resume'
              });` : ''}
              ${hasPlausible ? `plausible('Resume Download', {props: {method: 'button'}})` : ''}
            }
          });

          // Track project case study clicks
          document.addEventListener('click', function(e) {
            if (e.target && e.target.closest('button') && 
                e.target.closest('button').textContent.includes('View Case Study')) {
              const projectTitle = e.target.closest('.project-card')?.querySelector('h3')?.textContent || 'Unknown Project';
              ${hasGoogleAnalytics ? `gtag('event', 'view_item', {
                content_type: 'project_case_study',
                item_id: projectTitle.toLowerCase().replace(/\\s+/g, '_'),
                item_name: projectTitle
              });` : ''}
              ${hasPlausible ? `plausible('Project Case Study View', {props: {project: projectTitle}})` : ''}
            }
          });

          // Track contact form interactions
          document.addEventListener('click', function(e) {
            if (e.target && e.target.closest('button') && 
                (e.target.closest('button').textContent.includes('Get In Touch') || 
                 e.target.closest('button').textContent.includes('Contact Me'))) {
              ${hasGoogleAnalytics ? `gtag('event', 'generate_lead', {
                method: 'contact_button',
                content_type: 'contact_form'
              });` : ''}
              ${hasPlausible ? `plausible('Contact Button Click', {props: {method: 'button'}})` : ''}
            }
          });

          // Track email clicks
          document.addEventListener('click', function(e) {
            if (e.target && e.target.closest('a') && 
                e.target.closest('a').href.includes('mailto:')) {
              ${hasGoogleAnalytics ? `gtag('event', 'email', {
                method: 'mailto',
                content_type: 'contact'
              });` : ''}
              ${hasPlausible ? `plausible('Email Click', {props: {method: 'mailto'}})` : ''}
            }
          });

          // Track LinkedIn clicks
          document.addEventListener('click', function(e) {
            if (e.target && e.target.closest('a') && 
                e.target.closest('a').href.includes('linkedin.com')) {
              ${hasGoogleAnalytics ? `gtag('event', 'social', {
                method: 'linkedin',
                content_type: 'social_profile'
              });` : ''}
              ${hasPlausible ? `plausible('LinkedIn Click', {props: {method: 'link'}})` : ''}
            }
          });

          // Track scroll depth
          let maxScroll = 0;
          window.addEventListener('scroll', function() {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
              maxScroll = scrollPercent;
              ${hasGoogleAnalytics ? `gtag('event', 'scroll', {
                scroll_depth: scrollPercent + '%'
              });` : ''}
              ${hasPlausible ? `plausible('Scroll Depth', {props: {depth: scrollPercent + '%'}})` : ''}
            }
          });

          // Track time on page
          let startTime = Date.now();
          window.addEventListener('beforeunload', function() {
            const timeOnPage = Math.round((Date.now() - startTime) / 1000);
            if (timeOnPage > 30) {
              ${hasGoogleAnalytics ? `gtag('event', 'timing_complete', {
                name: 'page_view',
                value: timeOnPage
              });` : ''}
              ${hasPlausible ? `plausible('Time on Page', {props: {seconds: timeOnPage}})` : ''}
            }
          });
        `}
      </Script>
    </>
  )
}

export default Analytics 