npm i @vercel/speed-insights

import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next'
 

export const metadata = {
  title: 'The Non-Linear Career Workbook | Non-Linear Careers',
  description: 'For Professionals who do not want to be defined by a single career path. Take the quiz to discover your career path type.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CZ7SDZLEQG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CZ7SDZLEQG');
          `}
        </Script>
          <Script
          src="https://va.vercel-scripts.com/v1/speed-insights/script.js"
          strategy="afterInteractive"
          data-endpoint="/_vercel/speed-insights"
        />
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
