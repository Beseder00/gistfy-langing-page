'use client'

import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import Script from 'next/script'

export function Analytics() {
  return (
    <>
      <VercelAnalytics />
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16939115430"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16939115430');
        `}
      </Script>
    </>
  )
} 