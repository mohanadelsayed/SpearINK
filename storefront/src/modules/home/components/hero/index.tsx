"use client"

import { Button, Heading } from "@medusajs/ui"
import { ArrowRight, Recycle, Leaf, Award } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useTranslations } from "@lib/i18n/context"

const Hero = () => {
  const t = useTranslations()

  return (
    <div className="relative min-h-[80vh] w-full bg-gradient-to-br from-[#48a701] via-[#5cb502] to-[#48a701] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-white rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center min-h-[80vh]">
        {/* Left Content */}
        <div className="flex-1 text-white mb-12 lg:mb-0 lg:pr-12">
          <div className="mb-6">
            <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              🌱 {t.hero.thinkGreenPrintSmart}
            </span>
            <Heading
              level="h1"
              className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {t.hero.sustainablePrinting}
              <br />
              <span className="text-white/90">{t.hero.solutions}</span>
            </Heading>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              {t.hero.sustainableDescription}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <LocalizedClientLink href="/products">
              <Button 
                size="large" 
                className="bg-white text-[#48a701] hover:bg-white/90 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                {t.hero.shopCartridges}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </LocalizedClientLink>
            <LocalizedClientLink href="/recycling">
              <Button 
                variant="outline" 
                size="large"
                className="border-white text-white hover:bg-white hover:text-[#48a701] font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                {t.hero.startRecycling}
                <Recycle className="ml-2 h-5 w-5" />
              </Button>
            </LocalizedClientLink>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-md">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50%</div>
              <div className="text-sm text-white/80">{t.hero.costSavings}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">80%</div>
              <div className="text-sm text-white/80">{t.hero.lessCO2}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-white/80">{t.hero.qualityMatch}</div>
            </div>
          </div>
        </div>

        {/* Right Content - Features */}
        <div className="flex-1 max-w-lg">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">{t.hero.whyChooseSpearink}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">{t.hero.ecoFriendly}</h4>
                  <p className="text-white/80 text-sm">
                    {t.hero.ecoDescription}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">{t.hero.premiumQuality}</h4>
                  <p className="text-white/80 text-sm">
                    {t.hero.qualityDescription}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Recycle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">{t.hero.cartridgeReturn}</h4>
                  <p className="text-white/80 text-sm">
                    {t.hero.returnDescription}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/10 rounded-lg border border-white/20">
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">{t.hero.returnEmptyCartridge}</span>
                <span className="text-white font-bold">{t.hero.getVoucher}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </div>
  )
}

export default Hero

