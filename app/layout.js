import './globals.css'

export const metadata = {
  title: 'Career Path Quiz - Discover Your Non-Linear Career Type',
  description: 'Take our 2-minute quiz to discover your unique career path type and get personalized insights.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
