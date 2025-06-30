import { Metadata } from "next"
import { Heading } from "@medusajs/ui"
import { Leaf, Recycle, Award, TrendingUp, Globe, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Sustainability - Spearink Think Green",
  description: "Learn about Spearink's commitment to environmental sustainability through cartridge recycling and eco-friendly printing solutions.",
}

const SustainabilityPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#48a701] to-[#5cb502] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heading level="h1" className="text-4xl lg:text-6xl font-bold mb-6">
              Our Commitment to
              <span className="block text-white/90">Sustainability</span>
            </Heading>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Every cartridge we refill is a step towards a greener future. 
              Join us in reducing waste and protecting our planet.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Heading level="h2" className="text-3xl font-bold text-gray-900 mb-4">
              Our Environmental Impact
            </Heading>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Since our founding, we've made significant strides in reducing environmental impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-[#48a701]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="h-8 w-8 text-[#48a701]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2.5M+</div>
              <div className="text-gray-600">Cartridges Recycled</div>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-[#48a701]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-[#48a701]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">6,250</div>
              <div className="text-gray-600">Tons CO₂ Saved</div>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-[#48a701]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-[#48a701]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15M</div>
              <div className="text-gray-600">Gallons Water Saved</div>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-[#48a701]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#48a701]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>

      {/* How We Help */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading level="h2" className="text-3xl font-bold text-gray-900 mb-4">
                How We're Making a Difference
              </Heading>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#48a701] p-3 rounded-lg">
                      <Recycle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Cartridge Recycling Program
                      </h3>
                      <p className="text-gray-600">
                        We collect empty cartridges and refill them with premium inks, 
                        preventing them from ending up in landfills.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#48a701] p-3 rounded-lg">
                      <Leaf className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Eco-Friendly Inks
                      </h3>
                      <p className="text-gray-600">
                        Our inks are formulated with environmentally safe materials 
                        that deliver exceptional quality without harming the planet.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#48a701] p-3 rounded-lg">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        ISO Certified Process
                      </h3>
                      <p className="text-gray-600">
                        Our refilling process meets international standards for 
                        quality and environmental responsibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#48a701]/10 to-[#5cb502]/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Environmental Benefits Per Cartridge
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="font-medium text-gray-700">CO₂ Emissions Reduced</span>
                    <span className="font-bold text-[#48a701]">2.5 lbs</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="font-medium text-gray-700">Water Saved</span>
                    <span className="font-bold text-[#48a701]">6 gallons</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="font-medium text-gray-700">Plastic Waste Prevented</span>
                    <span className="font-bold text-[#48a701]">0.8 lbs</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="font-medium text-gray-700">Energy Saved</span>
                    <span className="font-bold text-[#48a701]">12 kWh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Heading level="h2" className="text-3xl font-bold text-gray-900 mb-4">
              Our Certifications
            </Heading>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're proud to hold certifications that validate our commitment to quality and sustainability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-[#48a701]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-[#48a701]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ISO 14001</h3>
              <p className="text-gray-600">Environmental Management Systems</p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-[#48a701]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-10 w-10 text-[#48a701]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Green Seal</h3>
              <p className="text-gray-600">Eco-Friendly Product Certification</p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-[#48a701]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-10 w-10 text-[#48a701]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Carbon Neutral</h3>
              <p className="text-gray-600">Net Zero Carbon Footprint</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SustainabilityPage

