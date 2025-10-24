import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Script from 'next/script'

export const metadata = {
  title: 'The Non-Linear Career Workbook | Non-Linear Careers',
  description: 'For Professionals who do not want to be defined by a single career path. Take the quiz to discover your career path type.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-CZ7SDZLEQG"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CZ7SDZLEQG');
</script>
        {/* Vercel Speed Insights script */}
        
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
