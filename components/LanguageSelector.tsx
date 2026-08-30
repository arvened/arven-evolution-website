'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'da', name: 'Dansk', flag: '🇩🇰' },
  { code: 'fi', name: 'Suomi', flag: '🇫🇮' },
  { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
  { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
  { code: 'ro', name: 'Română', flag: '🇷🇴' },
  { code: 'bg', name: 'Български', flag: '🇧🇬' },
  { code: 'hr', name: 'Hrvatski', flag: '🇭🇷' },
  { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ga', name: 'Gaeilge', flag: '🇮🇪' },
  { code: 'lv', name: 'Latviešu', flag: '🇱🇻' },
  { code: 'lt', name: 'Lietuvių', flag: '🇱🇹' },
  { code: 'mt', name: 'Malti', flag: '🇲🇹' },
  { code: 'sk', name: 'Slovenčina', flag: '🇸' },
  { code: 'sl', name: 'Slovenščina', flag: '🇸🇮' },
  { code: 'et', name: 'Eesti', flag: '🇪🇪' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
]

export default function LanguageSelector() {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const currentLang = languages.find(l => pathname.includes(`/${l.code}`)) || languages[0]

  const handleLanguageChange = (langCode: string) => {
    let newPath = pathname || '/'

    const pathWithoutLang = pathname?.replace(/^\/(en|bg|hr|cs|da|nl|et|fi|fr|de|el|hu|ga|it|lv|lt|mt|pl|pt|ro|ru|sk|sl|es|sv)/, '') || '/'

    if (langCode === 'en') {
      newPath = pathWithoutLang || '/'
    } else {
    newPath = `/${langCode}${pathWithoutLang}`  
    }

    router.push(newPath)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md bg-arven-magenta/10 hover:bg-arven-magenta/20 transition-colors"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="text-arven-tertiary hidden sm:inline text-sm">{currentLang.code.toUpperCase()}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-full min-w-[200px] bg-arven-dark border border-arven-magenta/30 rounded-lg shadow-lg z-50">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-2 hover:bg-arven-magenta/20 transition-colors flex items-center gap-3 ${
                lang.code === currentLang.code
                  ? 'bg-arven-magenta/10 text-arven-magenta border-l-2 border-arven-magenta'
                  : 'text-arven-tertiary'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.name}</span>
              <span className="ml-auto text-xs text-arven-tertiary">{lang.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
