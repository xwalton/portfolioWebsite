import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Xavier Walton - Product Manager & Consultant",
    template: "%s | Xavier Walton"
  },
  description: "Professional portfolio of Xavier Walton, Product Manager and Consultant with 8+ years of experience in product strategy, user experience, and data-driven decision making. View projects, download resume, and connect for opportunities.",
  keywords: [
    "Xavier Walton",
    "Product Manager",
    "Associate Product Manager",
    "APM",
    "Consultant",
    "Product Strategy",
    "User Experience",
    "Data Analytics",
    "Adobe",
    "Portfolio",
    "Product Management",
    "UX Design",
    "Market Analysis",
    "Agile Development",
    "User Research",
    "A/B Testing",
    "Product Roadmap",
    "Stakeholder Management"
  ],
  authors: [{ name: "Xavier Walton", url: "https://xavierwalton.com" }],
  creator: "Xavier Walton",
  publisher: "Xavier Walton",
  category: "Portfolio",
  classification: "Personal Website",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://xavierwalton.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Xavier Walton - Product Manager & Consultant",
    description: "Professional portfolio of Xavier Walton, Product Manager and Consultant with expertise in product strategy, user experience, and data-driven decision making.",
    url: "https://xavierwalton.com",
    siteName: "Xavier Walton Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Xavier Walton - Product Manager & Consultant Portfolio",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "United States",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xavier Walton - Product Manager & Consultant",
    description: "Professional portfolio of Xavier Walton, Product Manager and Consultant with expertise in product strategy, user experience, and data-driven decision making.",
    images: ["/images/og-image.jpg"],
    creator: "@xavierwalton",
    site: "@xavierwalton",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
      "noimageindex": false,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
  },
  other: {
    "application-name": "Xavier Walton Portfolio",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Xavier Walton",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileColor": "#0ea5e9",
    "msapplication-tap-highlight": "no",
    "theme-color": "#0ea5e9",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased bg-white text-neutral-900">
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics 
          googleAnalyticsId={process.env.NEXT_PUBLIC_GA_ID}
          plausibleDomain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
        />
      </body>
    </html>
  );
}
