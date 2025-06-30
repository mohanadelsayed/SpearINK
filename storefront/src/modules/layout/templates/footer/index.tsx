import { Text, clx } from "@medusajs/ui"
import { getCollectionsList } from "@lib/data/collections"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import { Leaf, Recycle, Award, Mail, Phone, MapPin } from "lucide-react"
import FooterContent from "./footer-content"

export default async function Footer() {
  // Remove the problematic getCategoriesList call and just use static content
  let collections = []
  try {
    const collectionsData = await getCollectionsList(0, 6)
    collections = collectionsData?.collections || []
  } catch (error) {
    // If collections fail to load, continue with empty array
    console.log("Collections not available:", error)
  }

  return <FooterContent />
}

