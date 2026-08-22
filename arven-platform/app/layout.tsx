import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ARVEN PLATFORM | GDPR & EU AI Act Compliance',
  description: 'Automated compliance assessment for SMEs. Evaluate your readiness for GDPR and EU AI Act requirements.',
  openGraph: {
    title: 'ARVEN PLATFORM | GDPR & EU AI Act Compliance',
    description: 'Automated compliance assessment for SMEs.',
    url: 'https://arvend.io',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARVEN PLATFORM',
    description: 'Automated compliance assessment for SMEs.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className="bg-arven-bg text-arven-text">
        {children}
      </body>
    </html>
  )
}
