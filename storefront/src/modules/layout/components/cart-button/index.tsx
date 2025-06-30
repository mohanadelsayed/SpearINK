"use client"

import { LineItem, Region } from "@medusajs/types"
import { enrichLineItems, retrieveCart } from "@lib/data/cart"
import { getCustomer } from "@lib/data/customer"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ShoppingCart } from "lucide-react"
import { useTranslations } from "@lib/i18n/context"
import { useEffect, useState } from "react"

export default function CartButton() {
  const t = useTranslations()
  const [cart, setCart] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartData = await fetch('/api/cart').then(res => res.json()).catch(() => null)
        if (cartData?.items?.length) {
          const enrichedItems = await enrichLineItems(cartData?.items, cartData?.region_id)
          cartData.items = enrichedItems as LineItem[]
        }
        setCart(cartData)
      } catch (error) {
        console.log('Cart fetch error:', error)
        setCart(null)
      } finally {
        setLoading(false)
      }
    }

    fetchCart()
  }, [])

  if (loading) {
    return (
      <LocalizedClientLink
        className="flex items-center gap-2 bg-[#48a701] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#48a701]/90 transition-colors"
        href="/cart"
        data-testid="nav-cart-link"
      >
        <ShoppingCart className="h-4 w-4" />
        <span>{t.cart.cart} (0)</span>
      </LocalizedClientLink>
    )
  }

  return (
    <LocalizedClientLink
      className="hover:text-[#48a701] transition-colors flex items-center gap-2 bg-[#48a701] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#48a701]/90"
      href="/cart"
      data-testid="nav-cart-link"
    >
      <ShoppingCart className="h-4 w-4" />
      <span>{t.cart.cart} ({cart?.items?.length || 0})</span>
    </LocalizedClientLink>
  )
}

