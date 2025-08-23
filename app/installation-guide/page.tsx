import type { Metadata } from "next"
import InstallationGuideClient from "./InstallationGuideClient"

export const metadata: Metadata = {
  title: "Starlink Installation Guide | DIY Setup Instructions",
  description:
    "Complete step-by-step guide for installing your Starlink satellite internet system. DIY installation instructions and tips.",
}

export default function InstallationGuidePage() {
  return <InstallationGuideClient />
}
