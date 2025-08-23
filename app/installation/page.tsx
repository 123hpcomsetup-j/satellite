import type { Metadata } from "next"
import InstallationClientPage from "./InstallationClientPage"

export const metadata: Metadata = {
  title: "Starlink Installation Services | Professional Setup & Support",
  description:
    "Professional Starlink installation services. Expert setup, mounting, and configuration for optimal performance.",
}

export default function InstallationPage() {
  return <InstallationClientPage />
}
