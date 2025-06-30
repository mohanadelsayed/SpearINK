import { Metadata } from "next"
import { Button, Heading } from "@medusajs/ui"
import { TrendingUp, Users, MapPin, DollarSign, Award, Phone, Mail, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Franchise Opportunities - Spearink",
  description: "Join the Spearink franchise network and build a sustainable business in the growing eco-friendly printing market.",
}

const FranchisePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#48a701] to-[#5cb502] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heading level="h1" className="text-4xl lg:text-6xl font-bold mb-6">
              Own a Spearink
              <span className="block text-white/90">Franchise</span>
            </Heading>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join the sustainable printing revolution. Build a profitable business 
              while making a positive environmental impact in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="large" 
                className="bg-white text-[#48a701] hover:bg-white/90 font-semibold px-8 py-4 rounded-lg"
              >
                Request Information
                <Mail className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="large"
                className="border-white text-white hover:bg-white hover:text-[#48a701] font-semibold px-8 py-4 rounded-lg"
              >
                Schedule Call
                <Phone className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Spearink */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Heading level="h2" className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Spearink Franchise?
            </Heading>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join a proven business model in the rapidly growing sustainable printing market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-[#48a701]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-[#48a701]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Growing Market</h3>
              <p className="text-gray-600">
                $45B global printing market with increasing demand for sustainable solutions
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-[#48a701]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#48a701]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven System</h3>
              <p className="text-gray-600">
                Proprietary refilling technology and established business processes
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-[#48a701]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#48a701]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Support</h3>
              <p className="text-gray-600">
                Comprehensive training, marketing support, and ongoing assistance
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-[#48a701]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-[#48a701]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">High Margins</h3>
              <p className="text-gray-600">
                Attractive profit margins with multiple revenue streams
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-[#48a701]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-[#48a701]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Territory Protection</h3>
              <p className="text-gray-600">
                Exclusive territory rights with protected market areas
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-[#48a701]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#48a701]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Brand Recognition</h3>
              <p className="text-gray-600">
                Established brand with strong environmental reputation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Details */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading level="h2" className="text-3xl font-bold text-gray-900 mb-4">
                Investment Overview
              </Heading>
              <p className="text-gray-600">
                Transparent investment requirements and potential returns
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Initial Investment</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Franchise Fee</span>
                    <span className="font-bold text-gray-900">$45,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Equipment Package</span>
                    <span className="font-bold text-gray-900">$75,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Initial Inventory</span>
                    <span className="font-bold text-gray-900">$25,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Working Capital</span>
                    <span className="font-bold text-gray-900">$35,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-[#48a701]/10 rounded-lg border-2 border-[#48a701]/20">
                    <span className="font-bold text-gray-900">Total Investment</span>
                    <span className="font-bold text-[#48a701] text-xl">$180,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Revenue Potential</h3>
                
                <div className="space-y-6">
                  <div className="p-4 bg-[#48a701]/10 rounded-lg">
                    <div className="text-2xl font-bold text-[#48a701] mb-2">$300K - $500K</div>
                    <div className="text-gray-700 font-medium">Annual Revenue Potential</div>
                    <div className="text-sm text-gray-600 mt-1">Based on established locations</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-xl font-bold text-gray-900">18-24</div>
                      <div className="text-sm text-gray-600">Months to Break-even</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-xl font-bold text-gray-900">25-35%</div>
                      <div className="text-sm text-gray-600">Profit Margins</div>
                    </div>
                  </div>

                  <div className="p-4 border border-[#48a701]/20 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Revenue Streams</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Cartridge refilling services</li>
                      <li>• New cartridge sales</li>
                      <li>• Corporate contracts</li>
                      <li>• Recycling program fees</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Provide */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Heading level="h2" className="text-3xl font-bold text-gray-900 mb-4">
              What We Provide
            </Heading>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete support package to ensure your franchise success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#48a701] p-2 rounded-lg">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Proprietary Equipment
                  </h3>
                  <p className="text-gray-600">
                    State-of-the-art refilling machines with our patented technology
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#48a701] p-2 rounded-lg">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Comprehensive Training
                  </h3>
                  <p className="text-gray-600">
                    2-week intensive training program plus ongoing support
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#48a701] p-2 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Marketing Support
                  </h3>
                  <p className="text-gray-600">
                    National advertising, local marketing materials, and digital presence
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#48a701] p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Site Selection
                  </h3>
                  <p className="text-gray-600">
                    Assistance with location analysis and lease negotiations
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#48a701] p-2 rounded-lg">
                  <DollarSign className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Financial Guidance
                  </h3>
                  <p className="text-gray-600">
                    Business planning, financing options, and ongoing financial support
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#48a701] p-2 rounded-lg">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Ongoing Support
                  </h3>
                  <p className="text-gray-600">
                    Dedicated support team, regular check-ins, and continuous training
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-[#48a701] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heading level="h2" className="text-3xl font-bold mb-6">
              Ready to Start Your Franchise Journey?
            </Heading>
            <p className="text-xl text-white/90 mb-8">
              Join the sustainable printing revolution and build a profitable business 
              that makes a positive environmental impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="large" 
                className="bg-white text-[#48a701] hover:bg-white/90 font-semibold px-8 py-4 rounded-lg"
              >
                Download Franchise Kit
                <Mail className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="large"
                className="border-white text-white hover:bg-white hover:text-[#48a701] font-semibold px-8 py-4 rounded-lg"
              >
                Schedule Discovery Call
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>1-800-SPEARINK</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>franchise@spearink.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FranchisePage

