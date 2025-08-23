import type { Metadata } from "next"
import RVMobileClientPage from "./RVMobileClientPage"

export const metadata: Metadata = {
  title: "RV & Mobile Starlink Internet | Portable Satellite Internet for Travel",
  description:
    "Stay connected on the road with Starlink RV and mobile internet. Perfect for RVs, boats, and remote work while traveling.",
}

export default function RVMobilePage() {
  return <RVMobileClientPage />
}
