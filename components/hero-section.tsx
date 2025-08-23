"use client"

import { Button } from "@/components/ui/button"
import { Phone, MapPin } from "lucide-react"
import { trackCallEvent } from "@/lib/analytics"

export function HeroSection() {
  const handleCallNow = () => {
    trackCallEvent("hero_primary_cta")
    window.location.href = "tel:+18883689983"
  }

  const handleCheckAvailability = () => {
    trackCallEvent("hero_check_availability")
    window.location.href = "tel:+18883689983"
  }

  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                High-Speed Satellite Internet
                <span className="text-primary block">Anywhere You Are</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Get reliable, high-speed internet with Starlink satellite technology. Perfect for rural areas, remote
                locations, and anywhere traditional internet fails.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">No Contracts</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">Fast Installation</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleCallNow}
                className="text-lg font-semibold px-8 py-4 bg-primary hover:bg-primary/90"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (888) 368-9983
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleCheckAvailability}
                className="text-lg font-semibold px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Check Availability
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <span className="font-semibold text-foreground">500K+</span>
                <span>Happy Customers</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-semibold text-foreground">99.9%</span>
                <span>Uptime</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-semibold text-foreground">24/7</span>
                <span>Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
