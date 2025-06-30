"use client"

import { Button, Heading } from "@medusajs/ui"
import { Recycle, Gift, ArrowRight } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useTranslations } from "@lib/i18n/context"

const RecyclingProgram = () => {
  const t = useTranslations()

  return (
    <div className="py-16 bg-gradient-to-r from-[#48a701] to-[#5cb502] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Recycle className="h-8 w-8 text-white" />
              </div>
              
              <Heading level="h2" className="text-3xl lg:text-4xl font-bold text-white mb-6">
                {t.recycling.turnEmptyCartridges}
              </Heading>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {t.recycling.recyclingDescription}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">$5</div>
                  <div className="text-white/80">{t.recycling.perInkCartridge}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">$8</div>
                  <div className="text-white/80">{t.recycling.perTonerCartridge}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <LocalizedClientLink href="/recycling">
                  <Button 
                    size="large" 
                    className="bg-white text-[#48a701] hover:bg-white/90 font-semibold px-8 py-4 rounded-lg"
                  >
                    {t.recycling.startRecycling}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </LocalizedClientLink>
                <Button 
                  variant="outline" 
                  size="large"
                  className="border-white text-white hover:bg-white hover:text-[#48a701] font-semibold px-8 py-4 rounded-lg"
                >
                  {t.recycling.calculateValue}
                  <Gift className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">{t.recycling.howItWorks}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t.recycling.collectEmpties}</h4>
                    <p className="text-white/80 text-sm">
                      {t.recycling.collectDescription}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t.recycling.dropOffPickup}</h4>
                    <p className="text-white/80 text-sm">
                      {t.recycling.dropOffDescription}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t.recycling.getVouchers}</h4>
                    <p className="text-white/80 text-sm">
                      {t.recycling.vouchersDescription}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-lg border border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">2.5M+</div>
                  <div className="text-white/80">{t.recycling.cartridgesRecycled}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecyclingProgram

