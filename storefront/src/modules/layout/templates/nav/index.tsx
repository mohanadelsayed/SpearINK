import { Suspense } from "react"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import MobileMenu from "@modules/layout/components/mobile-menu"
import LanguageSwitcher from "@modules/layout/components/language-switcher"
import NavContent from "./nav-content"
import Image from "next/image"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-20 mx-auto border-b duration-200 bg-white border-ui-border-base shadow-sm">
        <nav className="content-container flex items-center justify-between w-full h-full px-4 sm:px-6 lg:px-8">
          
          {/* Logo - Far Left */}
          <div className="flex items-center">
            <LocalizedClientLink
              href="/"
              className="flex items-center hover:opacity-80 transition-opacity"
              data-testid="nav-home-link"
            >
              <Image
                src="/spearink-logo.png"
                alt="Spearink - Think Green"
                width={160}
                height={50}
                className="h-10 w-auto sm:h-12"
                priority
              />
            </LocalizedClientLink>
          </div>

          {/* Desktop Navigation - Center/Right */}
          <NavContent />

          {/* Mobile Menu - Far Right */}
          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitcher />
            <MobileMenu regions={regions} />
          </div>

        </nav>
      </header>
    </div>
  )
}

