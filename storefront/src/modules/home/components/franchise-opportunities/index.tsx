import { Button, Heading } from "@medusajs/ui"
import { TrendingUp, Users, MapPin, ArrowRight } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const FranchiseOpportunities = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Heading level="h2" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Join the Spearink Franchise Network
            </Heading>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Build a profitable business while making a positive environmental impact. 
              Join our growing network of successful franchise owners.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Spearink Franchise?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#48a701]/10 p-3 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-[#48a701]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Growing Market</h4>
                    <p className="text-gray-600">
                      $45B global printing market with increasing demand for sustainable solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#48a701]/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-[#48a701]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Complete Support</h4>
                    <p className="text-gray-600">
                      Training, marketing, equipment, and ongoing business support
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#48a701]/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-[#48a701]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Protected Territory</h4>
                    <p className="text-gray-600">
                      Exclusive territory rights with guaranteed market protection
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#48a701]/10 rounded-lg">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#48a701]">$180K</div>
                    <div className="text-sm text-gray-600">Total Investment</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#48a701]">18-24</div>
                    <div className="text-sm text-gray-600">Months to Break-even</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-[#48a701] to-[#5cb502] text-white p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
                <blockquote className="text-white/90 italic mb-4">
                  "In just 18 months, our Spearink franchise became the go-to printing 
                  solution for local businesses. The environmental message resonates 
                  strongly with our community."
                </blockquote>
                <div className="text-white/80">
                  - Sarah Johnson, Spearink Franchise Owner
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Annual Revenue Potential</span>
                    <span className="font-bold text-[#48a701]">$300K - $500K</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Profit Margins</span>
                    <span className="font-bold text-[#48a701]">25% - 35%</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Available Territories</span>
                    <span className="font-bold text-[#48a701]">50+ Locations</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <LocalizedClientLink href="/franchise">
                  <Button 
                    size="large" 
                    className="bg-[#48a701] hover:bg-[#48a701]/90 text-white font-semibold px-8 py-4 rounded-lg"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </LocalizedClientLink>
                <Button 
                  variant="outline" 
                  size="large"
                  className="border-[#48a701] text-[#48a701] hover:bg-[#48a701] hover:text-white font-semibold px-8 py-4 rounded-lg"
                >
                  Download Kit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FranchiseOpportunities

