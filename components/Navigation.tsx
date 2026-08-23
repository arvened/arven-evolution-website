'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import dynamic from 'next/dynamic'


import LanguageSelector from './LanguageSelector'


export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useTranslation('common')

  return (
    <nav className="sticky top-0 z-50 bg-arven-bg/95 backdrop-blur border-b border-arven-magenta/20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-arven-magenta rounded-lg flex items-center justify-center">
              <span className="font-montserrat font-bold text-arven-bg">A</span>
            </div>
            <span className="font-montserrat font-bold text-arven-text hidden sm:inline">ARVEN</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="#how-it-works" className="text-arven-text-tertiary hover:text-arven-magenta transition-colors">
              How it works
            </Link>
            <Link href="#pilot-program" className="text-arven-text-tertiary hover:text-arven-magenta transition-colors">
              Pilot Program
            </Link>
            <Link href="#about" className="text-arven-text-tertiary hover:text-arven-magenta transition-colors">
              About
            </Link>
            <Link href="#partners" className="text-arven-text-tertiary hover:text-arven-magenta transition-colors">
              Partners
            </Link>
            <Link href="#contact" className="text-arven-text-tertiary hover:text-arven-magenta transition-colors">
              Contact
            </Link>
            <LanguageSelector />
            <a
              href="#contact"
              className="px-6 py-2 bg-arven-magenta text-arven-bg font-montserrat font-semibold rounded-lg hover:bg-arven-cyan transition-all"
            >
              Get Pilot Audit
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-arven-text"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-arven-darker border-t border-arven-magenta/20">
            <div className="container py-4 flex flex-col gap-4">
              <Link href="#how-it-works" className="text-arven-text-tertiary hover:text-arven-magenta transition-colors">
                How it works
              </Link>
              <Link href="#pilot-program" className="text-arven-text-tertiary hover:text-arven-magenta transition-colors">
                Pilot Program
              </Link>
              <Link href="#about" className="text-arven-text-tertiary hover:text-arven-magenta transition-colors">
                About
              </Link>
              <Link href="#partners" className="text-arven-text-tertiary hover:text-arven-magenta transition-colors">
                Partners
              </Link>
              <Link href="#contact" className="text-arven-text-tertiary hover:text-arven-magenta transition-colors">
                Contact
              </Link>
              <div className="py-2">
                <LanguageSelector />
              </div>
              <a
                href="#contact"
                className="px-4 py-2 bg-arven-magenta text-arven-bg font-montserrat font-semibold rounded-lg hover:bg-arven-cyan transition-all text-center"
              >
                Get Pilot Audit
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

