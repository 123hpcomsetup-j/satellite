import type { Metadata } from "next"
import TroubleshootingClientPage from "./TroubleshootingClientPage"

export const metadata: Metadata = {
  title: "Starlink Troubleshooting | Fix Common Issues & Problems",
  description:
    "Troubleshoot common Starlink internet issues. Solutions for connectivity problems, slow speeds, and technical difficulties.",
}

export default function TroubleshootingPage() {
  return <TroubleshootingClientPage />
}
