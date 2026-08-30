import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import "../globals.css"

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: "ARVEN Platform - Compliance Automation",
  description: "GDPR & EU AI Act compliance for SMEs",
}

const locales = ['en', 'bg', 'hr', 'cs', 'da', 'nl', 'et', 'fi', 'fr', 'de', 'el', 'hu', 'ga', 'it', 'lv', 'lt', 'mt', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'es', 'sv']

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
