import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VibeIndex | Track the Vibe Coding Market From Anywhere!",
  description: "VibeIndex turns the top 40 AI & robotics sources into actionable insights—helping vibe coders make sharper daily decisions and win!",
  generator: 'v0.dev',
  metadataBase: new URL('https://gistify.io'),
  openGraph: {
    title: "VibeIndex | Track the Vibe Coding Market From Anywhere!",
    description: "VibeIndex turns the top 40 AI & robotics sources into actionable insights—helping vibe coders make sharper daily decisions and win!",
    url: 'https://gistify.io',
    siteName: 'VibeIndex',
    images: [
      {
        url: '/images/Loop.jpeg',
        width: 1200,
        height: 630,
        alt: 'VibeIndex - Track the Vibe Coding Market',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "VibeIndex | Track the Vibe Coding Market From Anywhere!",
    description: "VibeIndex turns the top 40 AI & robotics sources into actionable insights—helping vibe coders make sharper daily decisions and win!",
    images: ['/images/Loop.jpeg'],
    creator: '@vibeindex',
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
        <title>VibeIndex | Track the Vibe Coding Market From Anywhere!</title>
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
        <style>
          {`
            /* Initial styles to prevent flash */
            html, body {
              background-color: #19b8a6;
              color: #ffffff;
              transition: background-color 0.3s ease;
            }
            
            /* Default header styling to prevent flash */
            header {
              background-color: rgba(25, 160, 140, 0.95) !important;
              color: white !important;
            }

            /* Define CSS variables early to prevent color flashing */
            :root {
              --background: #19b8a6;
              --card-background: #ffae44;
              --header-gradient-start: rgba(25, 160, 140, 0.95);
              --header-text: #ffffff;
              --muted-foreground: #004d41;
              --primary: #ff8a20;
              --primary-hover: #e67400;
              --text-primary: #004d41;
              --text-secondary: #ffffff;
            }
          `}
        </style>
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