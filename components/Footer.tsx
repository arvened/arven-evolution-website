'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Mail, Phone, Linkedin, MessageCircle } from 'lucide-react'

export default function Footer() {
  const t = useTranslations('footer')
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-arven-darker border-t border-arven-magenta/20 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-xl font-montserrat font-bold text-arven-magenta mb-3">
              ARVEN PLATFORM
            </div>
            <p className="text-arven-text-tertiary text-sm">
              {t('brand_desc')}
            </p>
            <p className="text-arven-text-tertiary text-xs mt-3">
              {t('brand_status')}
            </p>
          </div>

          {/* Product */}
          <div>
