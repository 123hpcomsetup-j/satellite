import type { Metadata } from "next"
import ResidentialClientPage from "./ResidentialClientPage"

export const metadata: Metadata = {
  title: "Residential Starlink Internet | High-Speed Satellite Internet for Homes",
  description:
    "Get reliable high-speed satellite internet for your home with Starlink. Perfect for remote areas and rural locations.",
}

export default function ResidentialPage() {
  return <ResidentialClientPage />
}
