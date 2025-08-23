import type { Metadata } from "next"
import SupportPageClient from "./SupportPageClient"

export const metadata: Metadata = {
  title: "Starlink Support | Customer Service & Technical Help",
  description:
    "Get help with your Starlink internet service. Customer support, troubleshooting, and technical assistance available 24/7.",
}

export default function SupportPage() {
  return <SupportPageClient />
}
