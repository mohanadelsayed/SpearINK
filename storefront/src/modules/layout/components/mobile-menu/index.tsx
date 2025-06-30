"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import Image from "next/image"
import { Suspense } from "react"
import { useLanguage } from "@lib/i18n/context"

interface MobileMenuProps {
  regions: StoreRegion[]
}

export default function MobileMenu({ regions }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { t, isRTL } = useLanguage()

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Burger Menu Button */}
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
        aria-label={t.common.menu}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-gray-700" />
        ) : (
          <Menu className="h-6 w-6 text-gray-700" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={toggleMenu}
          />
          
          {/* Menu Panel */}
          <div className={`fixed top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out mobile-menu-panel ${
            isRTL ? 'left-0' : 'right-0'
          }`}>
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className={`flex items-center justify-between p-6 border-b border-gray-200 ${
                isRTL ? 'flex-row-reverse' : ''
              }`}>
                <Image
                  src="/spearink-logo.png"
                  alt="Spearink - Think Green"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
                <button
                  onClick={toggleMenu}
                  className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label={t.common.close}
                >
                  <X className="h-5 w-5 text-gray-700" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-6">
                <div className="space-y-4">
                  <LocalizedClientLink
                    className={`block py-3 px-4 text-lg font-medium text-gray-900 hover:text-[#48a701] hover:bg-gray-50 rounded-lg transition-colors ${
                      isRTL ? 'text-right' : 'text-left'
                    }`}
                    href="/store"
                    onClick={toggleMenu}
                  >
                    {t.nav.products}
                  </LocalizedClientLink>
                  
                  <LocalizedClientLink
                    className={`block py-3 px-4 text-lg font-medium text-gray-900 hover:text-[#48a701] hover:bg-gray-50 rounded-lg transition-colors ${
                      isRTL ? 'text-right' : 'text-left'
                    }`}
                    href="/recycling"
                    onClick={toggleMenu}
                  >
                    {t.nav.recycling}
                  </LocalizedClientLink>
                  
                  <LocalizedClientLink
                    className={`block py-3 px-4 text-lg font-medium text-gray-900 hover:text-[#48a701] hover:bg-gray-50 rounded-lg transition-colors ${
                      isRTL ? 'text-right' : 'text-left'
                    }`}
                    href="/sustainability"
                    onClick={toggleMenu}
                  >
                    {t.nav.sustainability}
                  </LocalizedClientLink>
                  
                  <LocalizedClientLink
                    className={`block py-3 px-4 text-lg font-medium text-gray-900 hover:text-[#48a701] hover:bg-gray-50 rounded-lg transition-colors ${
                      isRTL ? 'text-right' : 'text-left'
                    }`}
                    href="/franchise"
                    onClick={toggleMenu}
                  >
                    {t.nav.franchise}
                  </LocalizedClientLink>

                  {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
                    <LocalizedClientLink
                      className={`block py-3 px-4 text-lg font-medium text-gray-900 hover:text-[#48a701] hover:bg-gray-50 rounded-lg transition-colors ${
                        isRTL ? 'text-right' : 'text-left'
                      }`}
                      href="/search"
                      onClick={toggleMenu}
                    >
                      {t.nav.search}
                    </LocalizedClientLink>
                  )}
                  
                  <LocalizedClientLink
                    className={`block py-3 px-4 text-lg font-medium text-gray-900 hover:text-[#48a701] hover:bg-gray-50 rounded-lg transition-colors ${
                      isRTL ? 'text-right' : 'text-left'
                    }`}
                    href="/account"
                    onClick={toggleMenu}
                  >
                    {t.nav.account}
                  </LocalizedClientLink>
                </div>

                {/* Cart Button in Mobile Menu */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Suspense fallback={
                    <LocalizedClientLink
                      className="flex items-center justify-center w-full py-3 px-4 bg-[#48a701] text-white rounded-lg font-medium hover:bg-[#48a701]/90 transition-colors"
                      href="/cart"
                      onClick={toggleMenu}
                    >
                      {t.nav.cart} (0)
                    </LocalizedClientLink>
                  }>
                    <div onClick={toggleMenu}>
                      <CartButton />
                    </div>
                  </Suspense>
                </div>
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <div className={`text-center ${isRTL ? 'text-right' : 'text-left'}`}>
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="text-[#48a701] font-semibold">{t.footer.thinkGreen}</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    {t.footer.tagline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

