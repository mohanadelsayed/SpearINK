import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import SustainabilitySection from "@modules/home/components/sustainability-section"
import RecyclingProgram from "@modules/home/components/recycling-program"
import FranchiseOpportunities from "@modules/home/components/franchise-opportunities"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Spearink - Think Green | Sustainable Printing Solutions",
  description:
    "Reduce your environmental impact with Spearink's premium refilled cartridges. Same quality, 50% less cost, 80% less carbon footprint. Join our recycling program today!",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <SustainabilitySection />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
      <RecyclingProgram />
      <FranchiseOpportunities />
    </>
  )
}

