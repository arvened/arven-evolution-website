import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, MessageCircle } from 'lucide-react'

export default function Footer() {
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
              GDPR & EU AI Act compliance automation for European SMEs.
            </p>
            <p className="text-arven-text-tertiary text-xs mt-3">
              Early stage. Pilot program. Honest progress.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-montserrat font-semibold text-white mb-4">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-arven-text-tertiary hover:text-arven-magenta transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="#pilot-program" className="text-arven-text-tertiary hover:text-arven-magenta transition-colors">
                  Pilot Program
                </a>
              </li>
              <li>
                <a href="#status" className="text-arven-text-tertiary hover:text-arven-magenta transition-colors">
                  Project Status
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-montserrat font-semibold text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-arven-text-tertiary hover:text-arven-magenta transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#partners" className="text-arven-text-tertiary hover:text-arven-magenta transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <a href="#contact" className="text-arven-text-tertiary hover:text-arven-magenta transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-semibold text-white mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-arven-text-tertiary">
                <Mail size={16} className="text-arven-cyan flex-shrink-0" />
                <a href="mailto:hello@arvend.io" className="hover:text-arven-magenta transition-colors">
                  hello@arvend.io
                </a>
              </li>
              <li className="flex items-center gap-2 text-arven-text-tertiary">
                <Phone size={16} className="text-arven-cyan flex-shrink-0" />
                <a href="tel:+380954763406" className="hover:text-arven-magenta transition-colors">
                  +380 (95) 476-34-06
                </a>
              </li>
              <li className="flex items-start gap-2 text-arven-text-tertiary">
                <MessageCircle size={16} className="text-arven-cyan flex-shrink-0 mt-0.5" />
                <a href="https://t.me/arven_agency" target="_blank" rel="noopener noreferrer" className="hover:text-arven-magenta transition-colors">
                  @arven_agency
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-arven-magenta/10 pt-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://linkedin.com/in/eduard-arbitman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-arven-text-tertiary hover:text-arven-magenta transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-arven-text-tertiary text-sm">
            <p>&copy; {currentYear} ARVEN PLATFORM. All rights reserved.</p>
            <p className="mt-2 text-xs">
              Early-stage project. Currently in pilot phase. Opinions subject to change.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
