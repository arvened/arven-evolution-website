'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import LanguageSelector from './LanguageSelector'

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 bg-arven-bg/95 border-b border-arven-magenta/20">
      <div className="container flex justify-between items-center py-4 px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-xl font-montserrat font-bold">
            ARVEN PLATFORM
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="text-arven-text hover:text-arven-magenta transition">
            How it works
          </Link>
          <Link href="#pilot-program" className="text-arven-text hover:text-arven-magenta transition">
            Pilot Program
          </Link>
          <Link href="#about" className="text-arven-text hover:text-arven-magenta transition">
            About
          </Link>
          <Link href="#partners" className="text-arven-text hover:text-arven-magenta transition">
            Partners
          </Link>
          <Link href="#contact" className="text-arven-text hover:text-arven-magenta transition">
            Contact
          </Link>
          <a href="#contact" className="px-6 py-2 bg-arven-magenta text-white font-medium hover:opacity-90">
            Get Pilot Audit
          </a>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSelector />
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-arven-magenta">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-arven-darker border-t border-arven-magenta/20 py-4">
          <div className="container flex flex-col gap-4 px-4">
            <Link href="#how-it-works" className="text-arven-text hover:text-arven-magenta" onClick={() => setMobileOpen(false)}>
              How it works
            </Link>
            <Link href="#pilot-program" className="text-arven-text hover:text-arven-magenta" onClick={() => setMobileOpen(false)}>
              Pilot Program
            </Link>
            <Link href="#about" className="text-arven-text hover:text-arven-magenta" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link href="#partners" className="text-arven-text hover:text-arven-magenta" onClick={() => setMobileOpen(false)}>
              Partners
            </Link>
            <Link href="#contact" className="text-arven-text hover:text-arven-magenta" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            <a href="#contact" className="px-6 py-2 bg-arven-magenta text-white font-medium text-center" onClick={() => setMobileOpen(false)}>
              Get Pilot Audit
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

