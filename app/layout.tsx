import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { GoogleAnalytics } from "@/components/google-analytics"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Satellite Internet - High-Speed Starlink Internet Service",
  description:
    "Get reliable high-speed satellite internet with Starlink. No contracts, fast installation, and 24/7 support. Check availability in your area today.",
  keywords: "satellite internet, starlink, high-speed internet, rural internet, no contract internet",
  robots: "index, follow",
  openGraph: {
    title: "Satellite Internet - High-Speed Starlink Internet Service",
    description:
      "Get reliable high-speed satellite internet with Starlink. No contracts, fast installation, and 24/7 support.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased`}>
      <head>
        <link rel="canonical" href="https://satelliteinternet.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
      </head>
      <body>
        {children}
        <GoogleAnalytics gaId="GA_MEASUREMENT_ID" gtagId="AW-CONVERSION_ID" />
      </body>
    </html>
  )
}
