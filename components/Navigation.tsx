
'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import LanguageSelector from './LanguageSelector'

export default function Navigation() {
  const t = useTranslations('nav')
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 bg-arven-bg/95 border-b border-arven-magenta/20">
      <div className="container flex justify-between items-center py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-xl font-montserrat font-bold text-arven-magenta">
            ARVEN PLATFORM
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="text-arven-text-secondary hover:text-arven-cyan transition">
            {t('howItWorks')}
          </Link>
          <Link href="#pilot-program" className="text-arven-text-secondary hover:text-arven-cyan transition">
            {t('pilotProgram')}
          </Link>
          <Link href="#about" className="text-arven-text-secondary hover:text-arven-cyan transition">
            {t('about')}
          </Link>
          <Link href="#partners" className="text-arven-text-secondary hover:text-arven-cyan transition">
            {t('partners')}
          </Link>
          <Link href="#contact" className="text-arven-text-secondary hover:text-arven-cyan transition">
            {t('contact')}
          </Link>
          <a href="#contact" className="px-6 py-2 bg-arven-magenta text-white rounded-lg hover:bg-opacity-80 transition">
            {t('getAudit')}
          </a>
          <LanguageSelector />
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-arven-darker/50 border-t border-arven-magenta/20">
          <div className="container flex flex-col gap-4 py-4">
            <Link href="#how-it-works" className="text-arven-text-secondary hover:text-arven-cyan transition">
              {t('howItWorks')}
            </Link>
            <Link href="#pilot-program" className="text-arven-text-secondary hover:text-arven-cyan transition">
              {t('pilotProgram')}
            </Link>
            <Link href="#about" className="text-arven-text-secondary hover:text-arven-cyan transition">
              {t('about')}
            </Link>
            <Link href="#partners" className="text-arven-text-secondary hover:text-arven-cyan transition">
              {t('partners')}
            </Link>
            <Link href="#contact" className="text-arven-text-secondary hover:text-arven-cyan transition">
              {t('contact')}
            </Link>
            <a href="#contact" className="px-6 py-2 bg-arven-magenta text-white rounded-lg hover:bg-opacity-80 transition">
              {t('getAudit')}
            </a>
            <LanguageSelector />
          </div>
        </div>
      )}
    </nav>
  )
}
