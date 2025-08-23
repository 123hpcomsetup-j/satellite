"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock } from "lucide-react"
import { trackCallEvent } from "@/lib/analytics"

export function CTASection() {
  const handleCallNow = () => {
    trackCallEvent("cta_section")
    window.location.href = "tel:+18883689983"
  }

  const handleCheckAvailability = () => {
    document.getElementById("availability-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-0 bg-background/95 backdrop-blur">
          <CardContent className="p-8 md:p-12">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Ready to Get Connected?</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of customers who have upgraded to reliable satellite internet. Call now for instant
                  service activation and free installation support.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button
                  size="lg"
                  onClick={handleCallNow}
                  className="text-lg font-semibold px-8 py-4 bg-primary hover:bg-primary/90"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (888) 368-9983
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

              <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto pt-8 border-t border-border">
                <div className="text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-foreground">Quick Setup</div>
                  <div className="text-sm text-muted-foreground">Install in 30 minutes</div>
                </div>
                <div className="text-center">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-foreground">Expert Support</div>
                  <div className="text-sm text-muted-foreground">24/7 customer service</div>
                </div>
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-foreground">Wide Coverage</div>
                  <div className="text-sm text-muted-foreground">Available nationwide</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
