"use client"

import { Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import { Leaf, Recycle, Award, Mail, Phone, MapPin } from "lucide-react"
import { useTranslations } from "@lib/i18n/context"

export default function FooterContent() {
  const t = useTranslations()

  return (
    <footer className="border-t border-ui-border-base w-full bg-gray-900 text-white">
      <div className="content-container flex flex-col w-full">
        {/* Main Footer Content */}
        <div className="flex flex-col gap-y-8 pt-16 pb-8">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            {/* Brand Section */}
            <div className="flex flex-col gap-y-4 max-w-sm">
              <LocalizedClientLink
                href="/"
                className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
              >
                <Image
                  src="/spearink-logo.png"
                  alt="Spearink - Think Green"
                  width={200}
                  height={60}
                  className="h-12 w-auto brightness-0 invert"
                />
              </LocalizedClientLink>
              <Text className="text-gray-300 leading-relaxed">
                {t.footer.brandDescription}
              </Text>
              
              {/* Environmental Stats */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="text-center">
                  <div className="text-[#48a701] font-bold text-lg">2.5M+</div>
                  <div className="text-xs text-gray-400">{t.footer.recycled}</div>
                </div>
                <div className="text-center">
                  <div className="text-[#48a701] font-bold text-lg">80%</div>
                  <div className="text-xs text-gray-400">{t.hero.lessCO2}</div>
                </div>
                <div className="text-center">
                  <div className="text-[#48a701] font-bold text-lg">50%</div>
                  <div className="text-xs text-gray-400">{t.sustainability.stats.costSavings}</div>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              {/* Products */}
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base font-semibold text-white">
                  {t.footer.products}
                </span>
                <ul className="grid grid-cols-1 gap-2">
                  <li>
                    <LocalizedClientLink
                      className="txt-small text-gray-300 hover:text-[#48a701] transition-colors"
                      href="/store"
                    >
                      {t.footer.allProducts}
                    </LocalizedClientLink>
                  </li>
                  <li>
                    <LocalizedClientLink
                      className="txt-small text-gray-300 hover:text-[#48a701] transition-colors"
                      href="/store?category=ink-cartridges"
                    >
                      {t.footer.inkCartridges}
                    </LocalizedClientLink>
                  </li>
                  <li>
                    <LocalizedClientLink
                      className="txt-small text-gray-300 hover:text-[#48a701] transition-colors"
                      href="/store?category=toner-cartridges"
                    >
                      {t.footer.tonerCartridges}
                    </LocalizedClientLink>
                  </li>
                  <li>
                    <LocalizedClientLink
                      className="txt-small text-gray-300 hover:text-[#48a701] transition-colors"
                      href="/store?category=original-cartridges"
                    >
                      {t.footer.originalCartridges}
                    </LocalizedClientLink>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base font-semibold text-white">
                  {t.footer.services}
                </span>
                <ul className="grid grid-cols-1 gap-2">
                  <li>
                    <LocalizedClientLink
                      className="txt-small text-gray-300 hover:text-[#48a701] transition-colors"
                      href="/recycling"
                    >
                      {t.footer.cartridgeRecycling}
                    </LocalizedClientLink>
                  </li>
                  <li>
                    <LocalizedClientLink
                      className="txt-small text-gray-300 hover:text-[#48a701] transition-colors"
                      href="/services/refilling"
                    >
                      {t.footer.refillingService}
                    </LocalizedClientLink>
                  </li>
                  <li>
                    <LocalizedClientLink
                      className="txt-small text-gray-300 hover:text-[#48a701] transition-colors"
                      href="/services/pickup"
                    >
                      {t.footer.pickupService}
                    </LocalizedClientLink>
                  </li>
                  <li>
                    <LocalizedClientLink
                      className="txt-small text-gray-300 hover:text-[#48a701] transition-colors"
                      href="/services/corporate"
                    >
                      {t.footer.corporateSolutions}
                    </LocalizedClientLink>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base font-semibold text-white">
                  {t.footer.company}
                </span>
                <ul className="grid grid-cols-1 gap-2">
                  <li>
                    <LocalizedClientLink
                      className="txt-small text-gray-300 hover:text-[#48a701] transition-colors"
                      href="/about"
                    >
                      {t.footer.aboutUs}
                    </LocalizedClientLink>
                  </li>
                  <li>
                    <LocalizedClientLink
                      className="txt-small text-gray-300 hover:text-[#48a701] transition-colors"
                      href="/sustainability"
                    >
                      {t.nav.sustainability}
                    </LocalizedClientLink>
                  </li>
                  <li>
                    <LocalizedClientLink
                      className="txt-small text-gray-300 hover:text-[#48a701] transition-colors"
                      href="/franchise"
                    >
                      {t.nav.franchise}
                    </LocalizedClientLink>
                  </li>
                  <li>
                    <LocalizedClientLink
                      className="txt-small text-gray-300 hover:text-[#48a701] transition-colors"
                      href="/contact"
                    >
                      {t.footer.contact}
                    </LocalizedClientLink>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base font-semibold text-white">
                  {t.footer.contact}
                </span>
                <ul className="grid grid-cols-1 gap-2">
                  <li className="flex items-center gap-2 text-gray-300">
                    <Phone className="h-4 w-4" />
                    <span className="txt-small">{t.footer.phone}</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <Mail className="h-4 w-4" />
                    <span className="txt-small">{t.footer.email}</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <MapPin className="h-4 w-4" />
                    <LocalizedClientLink
                      href="/locations"
                      className="txt-small hover:text-[#48a701] transition-colors"
                    >
                      {t.footer.findStoreLocations}
                    </LocalizedClientLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Environmental Commitment Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-[#48a701]" />
                  <span className="text-sm text-gray-300">{t.footer.carbonNeutral}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Recycle className="h-5 w-5 text-[#48a701]" />
                  <span className="text-sm text-gray-300">{t.footer.recyclable}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-[#48a701]" />
                  <span className="text-sm text-gray-300">{t.footer.isoCertified}</span>
                </div>
              </div>
              
              <div className="text-sm text-gray-300">
                <span className="text-[#48a701] font-semibold">{t.footer.thinkGreen}</span> - {t.footer.tagline}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex w-full mb-16 justify-between text-gray-400 border-t border-gray-700 pt-8">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Spearink. {t.footer.allRights}
          </Text>
          <div className="flex gap-4">
            <LocalizedClientLink
              href="/privacy"
              className="txt-compact-small hover:text-[#48a701] transition-colors"
            >
              {t.footer.privacyPolicy}
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/terms"
              className="txt-compact-small hover:text-[#48a701] transition-colors"
            >
              {t.footer.termsOfService}
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

