import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI-Powered Daily Briefing AI Robotics | Gistify",
  description: "Transform your newsletter experience with Gistify. Our AI assistant scans your inbox, analyzes AI and robotics newsletters, and delivers concise, personalized daily briefings. Save time and stay informed with smart summaries from your favorite tech newsletters.",
  generator: 'v0.dev',
  metadataBase: new URL('https://gistify.io'),
  openGraph: {
    title: "AI-Powered Daily Briefing AI Robotics | Gistify",
    description: "Transform your newsletter experience with Gistify. Our AI assistant scans your inbox, analyzes AI and robotics newsletters, and delivers concise, personalized daily briefings.",
    url: 'https://gistify.io',
    siteName: 'Gistify',
    images: [
      {
        url: '/images/Loop.jpeg',
        width: 1200,
        height: 630,
        alt: 'Gistify - Break the Loop',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI-Powered Daily Briefing AI Robotics | Gistify",
    description: "Transform your newsletter experience with Gistify. Our AI assistant scans your inbox, analyzes AI and robotics newsletters, and delivers concise, personalized daily briefings.",
    images: ['/images/Loop.jpeg'],
    creator: '@gistify',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'