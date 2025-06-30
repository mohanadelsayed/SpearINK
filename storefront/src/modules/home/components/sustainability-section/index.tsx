import { Heading } from "@medusajs/ui"
import { Leaf, Recycle, Award, TrendingUp } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SustainabilitySection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading level="h2" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Sustainable Printing?
          </Heading>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every refilled cartridge makes a difference. Join thousands of customers 
            who are reducing their environmental impact without compromising on quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center bg-white p-8 rounded-xl shadow-sm">
            <div className="bg-[#48a701]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-[#48a701]" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">80%</div>
            <div className="text-gray-600">Less CO₂ Emissions</div>
          </div>

          <div className="text-center bg-white p-8 rounded-xl shadow-sm">
            <div className="bg-[#48a701]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Recycle className="h-8 w-8 text-[#48a701]" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">2.5M+</div>
            <div className="text-gray-600">Cartridges Recycled</div>
          </div>

          <div className="text-center bg-white p-8 rounded-xl shadow-sm">
            <div className="bg-[#48a701]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-[#48a701]" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-gray-600">Quality Guarantee</div>
          </div>

          <div className="text-center bg-white p-8 rounded-xl shadow-sm">
            <div className="bg-[#48a701]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-[#48a701]" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">50%</div>
            <div className="text-gray-600">Cost Savings</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level="h3" className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                The Environmental Impact of Your Choice
              </Heading>
              <p className="text-gray-600 mb-6 leading-relaxed">
                When you choose refilled cartridges, you're not just saving money – 
                you're making a powerful statement about environmental responsibility. 
                Each cartridge we refill prevents waste and reduces the carbon footprint 
                of your printing needs.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#48a701] rounded-full"></div>
                  <span className="text-gray-700">Prevents 2.5 lbs of CO₂ emissions per cartridge</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#48a701] rounded-full"></div>
                  <span className="text-gray-700">Saves 6 gallons of water in manufacturing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#48a701] rounded-full"></div>
                  <span className="text-gray-700">Reduces plastic waste by 0.8 lbs per cartridge</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#48a701] rounded-full"></div>
                  <span className="text-gray-700">ISO certified quality and environmental standards</span>
                </div>
              </div>

              <LocalizedClientLink href="/sustainability">
                <button className="bg-[#48a701] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#48a701]/90 transition-colors">
                  Learn More About Our Impact
                </button>
              </LocalizedClientLink>
            </div>

            <div className="bg-gradient-to-br from-[#48a701]/10 to-[#5cb502]/10 p-8 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                Your Personal Impact Calculator
              </h4>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Cartridges Used This Year</span>
                    <span className="font-bold text-[#48a701]">12</span>
                  </div>
                  <div className="text-sm text-gray-600">Average for small business</div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">CO₂ Saved</span>
                    <span className="font-bold text-[#48a701]">30 lbs</span>
                  </div>
                  <div className="text-sm text-gray-600">Equivalent to planting 1 tree</div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Money Saved</span>
                    <span className="font-bold text-[#48a701]">$240</span>
                  </div>
                  <div className="text-sm text-gray-600">50% savings vs original cartridges</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#48a701] text-white rounded-lg text-center">
                <div className="font-semibold">Your Environmental Hero Score</div>
                <div className="text-2xl font-bold">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SustainabilitySection

