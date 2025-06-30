"use client"

import { Suspense } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import LanguageSwitcher from "@modules/layout/components/language-switcher"
import { useTranslations } from "@lib/i18n/context"

export default function NavContent() {
  const t = useTranslations()

  return (
    <div className="hidden lg:flex items-center space-x-6">
      <LocalizedClientLink
        className="text-gray-700 hover:text-[#48a701] transition-colors font-medium"
        href="/store"
        data-testid="nav-store-link"
      >
        {t.nav.products}
      </LocalizedClientLink>
      
      <LocalizedClientLink
        className="text-gray-700 hover:text-[#48a701] transition-colors font-medium"
        href="/recycling"
        data-testid="nav-recycling-link"
      >
        {t.nav.recycling}
      </LocalizedClientLink>
      
      <LocalizedClientLink
        className="text-gray-700 hover:text-[#48a701] transition-colors font-medium"
        href="/sustainability"
        data-testid="nav-sustainability-link"
      >
        {t.nav.sustainability}
      </LocalizedClientLink>
      
      <LocalizedClientLink
        className="text-gray-700 hover:text-[#48a701] transition-colors font-medium"
        href="/franchise"
        data-testid="nav-franchise-link"
      >
        {t.nav.franchise}
      </LocalizedClientLink>

      {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
        <LocalizedClientLink
          className="text-gray-700 hover:text-[#48a701] transition-colors font-medium"
          href="/search"
          scroll={false}
          data-testid="nav-search-link"
        >
          {t.nav.search}
        </LocalizedClientLink>
      )}
      
      <LocalizedClientLink
        className="text-gray-700 hover:text-[#48a701] transition-colors font-medium"
        href="/account"
        data-testid="nav-account-link"
      >
        {t.nav.account}
      </LocalizedClientLink>

      {/* Desktop Cart Button */}
      <Suspense
        fallback={
          <LocalizedClientLink
            className="flex items-center gap-2 bg-[#48a701] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#48a701]/90 transition-colors"
            href="/cart"
            data-testid="nav-cart-link"
          >
            {t.cart.cart} (0)
          </LocalizedClientLink>
        }
      >
        <CartButton />
      </Suspense>

      {/* Language Switcher - After Cart */}
      <LanguageSwitcher />
    </div>
  )
}

