import type { Metadata } from "next"
import BusinessPageClient from "./BusinessPageClient"

export const metadata: Metadata = {
  title: "Business Starlink Internet | Enterprise Satellite Internet Solutions",
  description:
    "Reliable high-speed satellite internet for businesses. Perfect for remote offices, retail locations, and enterprise operations.",
}

export default function BusinessPage() {
  return <BusinessPageClient />
}
