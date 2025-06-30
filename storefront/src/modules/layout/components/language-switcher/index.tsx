"use client"

import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@lib/i18n/context'
import { Language } from '@lib/i18n/translations'

interface LanguageOption {
  code: Language
  name: string
  nativeName: string
  flag: string
}

const languages: LanguageOption[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸'
  },
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'عربي',
    flag: '🇸🇦'
  }
]

export default function LanguageSwitcher() {
  const { language, setLanguage, isRTL } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Language Switcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-[#48a701] hover:bg-gray-50 transition-colors ${
          isRTL ? 'flex-row-reverse' : ''
        }`}
        aria-label="Change language"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-sm font-medium text-gray-700">
          {currentLanguage.nativeName}
        </span>
        <ChevronDown 
          className={`h-4 w-4 text-gray-500 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={`absolute top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 ${
          isRTL ? 'left-0' : 'right-0'
        }`}>
          <div className="py-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                  language === lang.code ? 'bg-[#48a701]/10 text-[#48a701]' : 'text-gray-700'
                } ${isRTL ? 'flex-row-reverse text-right' : ''}`}
              >
                <span className="text-lg">{lang.flag}</span>
                <div className={`flex flex-col ${isRTL ? 'items-end' : 'items-start'}`}>
                  <span className="font-medium">{lang.nativeName}</span>
                  <span className="text-xs text-gray-500">{lang.name}</span>
                </div>
                {language === lang.code && (
                  <div className={`w-2 h-2 bg-[#48a701] rounded-full ${
                    isRTL ? 'mr-auto' : 'ml-auto'
                  }`} />
                )}
              </button>
            ))}
          </div>
          
          {/* Footer */}
          <div className="border-t border-gray-100 px-4 py-2">
            <p className={`text-xs text-gray-500 ${isRTL ? 'text-right' : 'text-left'}`}>
              {isRTL ? 'اختر لغتك المفضلة' : 'Choose your preferred language'}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

