import { Metadata } from "next"
import { Button, Heading } from "@medusajs/ui"
import { Recycle, Gift, Calculator, MapPin, Clock, CheckCircle } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Cartridge Recycling Program - Spearink",
  description: "Turn your empty cartridges into vouchers! Learn about our recycling program and start earning rewards today.",
}

const RecyclingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#48a701] to-[#5cb502] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Recycle className="h-10 w-10 text-white" />
            </div>
            <Heading level="h1" className="text-4xl lg:text-6xl font-bold mb-6">
              Turn Empty Cartridges
              <span className="block text-white/90">Into Rewards</span>
            </Heading>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join our recycling program and earn vouchers for every empty cartridge you return. 
              It's good for your wallet and great for the planet!
            </p>
            <Button 
              size="large" 
              className="bg-white text-[#48a701] hover:bg-white/90 font-semibold px-8 py-4 rounded-lg"
            >
              Start Recycling Now
              <Gift className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Heading level="h2" className="text-3xl font-bold text-gray-900 mb-4">
              How Our Recycling Program Works
            </Heading>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple steps to turn your empty cartridges into valuable vouchers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-[#48a701]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#48a701]">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collect</h3>
              <p className="text-gray-600">
                Gather your empty ink and toner cartridges from any brand
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#48a701]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#48a701]">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Drop Off</h3>
              <p className="text-gray-600">
                Bring them to any Spearink location or schedule a pickup
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#48a701]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#48a701]">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Evaluate</h3>
              <p className="text-gray-600">
                We assess your cartridges and calculate your voucher value
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#48a701]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#48a701]">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Earn</h3>
              <p className="text-gray-600">
                Receive vouchers to use on your next cartridge purchase
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Voucher Calculator */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heading level="h2" className="text-3xl font-bold text-gray-900 mb-4">
                Voucher Value Calculator
              </Heading>
              <p className="text-gray-600">
                See how much your empty cartridges are worth
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Cartridge Values
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <span className="font-medium text-gray-900">HP Ink Cartridges</span>
                        <div className="text-sm text-gray-600">Standard size</div>
                      </div>
                      <span className="font-bold text-[#48a701]">$3.00</span>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <span className="font-medium text-gray-900">Canon Ink Cartridges</span>
                        <div className="text-sm text-gray-600">Standard size</div>
                      </div>
                      <span className="font-bold text-[#48a701]">$3.50</span>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <span className="font-medium text-gray-900">Epson Ink Cartridges</span>
                        <div className="text-sm text-gray-600">Standard size</div>
                      </div>
                      <span className="font-bold text-[#48a701]">$4.00</span>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <span className="font-medium text-gray-900">Laser Toner Cartridges</span>
                        <div className="text-sm text-gray-600">All brands</div>
                      </div>
                      <span className="font-bold text-[#48a701]">$8.00</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#48a701]/10 to-[#5cb502]/10 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <Calculator className="h-6 w-6 text-[#48a701]" />
                    <h3 className="text-xl font-bold text-gray-900">Quick Calculator</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Ink Cartridges
                      </label>
                      <input 
                        type="number" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48a701] focus:border-[#48a701]"
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Toner Cartridges
                      </label>
                      <input 
                        type="number" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48a701] focus:border-[#48a701]"
                        placeholder="0"
                      />
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-[#48a701]/20">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">Estimated Voucher Value:</span>
                        <span className="text-2xl font-bold text-[#48a701]">$0.00</span>
                      </div>
                    </div>

                    <Button className="w-full bg-[#48a701] hover:bg-[#48a701]/90">
                      Schedule Pickup
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pickup Options */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Heading level="h2" className="text-3xl font-bold text-gray-900 mb-4">
              Convenient Pickup Options
            </Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-[#48a701]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-[#48a701]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Store Drop-off</h3>
              <p className="text-gray-600 mb-4">
                Visit any of our franchise locations during business hours
              </p>
              <LocalizedClientLink href="/locations">
                <Button variant="outline" className="border-[#48a701] text-[#48a701] hover:bg-[#48a701] hover:text-white">
                  Find Locations
                </Button>
              </LocalizedClientLink>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-[#48a701]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-[#48a701]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scheduled Pickup</h3>
              <p className="text-gray-600 mb-4">
                We'll come to you at your preferred time and location
              </p>
              <Button className="bg-[#48a701] hover:bg-[#48a701]/90">
                Schedule Now
              </Button>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-[#48a701]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-[#48a701]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Corporate Program</h3>
              <p className="text-gray-600 mb-4">
                Regular pickups for businesses with high volume needs
              </p>
              <Button variant="outline" className="border-[#48a701] text-[#48a701] hover:bg-[#48a701] hover:text-white">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-16 bg-[#48a701] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Heading level="h2" className="text-3xl font-bold mb-4">
              Why Join Our Recycling Program?
            </Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Gift className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Earn Rewards</h3>
              <p className="text-white/90">Get vouchers for every cartridge you return</p>
            </div>

            <div className="text-center">
              <Recycle className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Help Environment</h3>
              <p className="text-white/90">Prevent cartridges from ending up in landfills</p>
            </div>

            <div className="text-center">
              <CheckCircle className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Process</h3>
              <p className="text-white/90">Simple drop-off or pickup options</p>
            </div>

            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Convenient</h3>
              <p className="text-white/90">Multiple locations and pickup services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecyclingPage

