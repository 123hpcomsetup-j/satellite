"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { trackCall } from "@/lib/analytics"

const handleCallNow = () => {
  trackCall("business_page")
  window.location.href = "tel:+18883689983"
}

export default function BusinessPageClient() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Business Starlink Solutions</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Power your business with enterprise-grade satellite internet. Reliable connectivity for offices, retail
            locations, and operations anywhere in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-primary-foreground px-8 py-4 text-lg"
              onClick={handleCallNow}
            >
              Call Now: (888) 368-9983
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-muted px-8 py-4 text-lg bg-transparent"
              onClick={handleCallNow}
            >
              Check Availability
            </Button>
          </div>
        </div>
      </section>

      {/* Business Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Enterprise-Grade Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Priority Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>24/7 dedicated business support with priority response times.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Higher Speeds</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Up to 350 Mbps download speeds for demanding business applications.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Static IP Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Static IP addresses available for VPN and server applications.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Service Level Agreement</CardTitle>
              </CardHeader>
              <CardContent>
                <p>99.9% uptime guarantee with service level agreements.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Plans */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Business Plans</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Business Standard</CardTitle>
                <CardDescription>For small to medium businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4">
                  $250<span className="text-lg font-normal">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li>• Up to 220 Mbps download</li>
                  <li>• Priority network access</li>
                  <li>• Business support</li>
                  <li>• 30-day trial</li>
                </ul>
                <Button className="w-full bg-primary hover:bg-accent text-primary-foreground" onClick={handleCallNow}>
                  Get Quote - Call (888) 368-9983
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Business Premium</CardTitle>
                <CardDescription>For enterprise operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4">
                  $500<span className="text-lg font-normal">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li>• Up to 350 Mbps download</li>
                  <li>• Highest priority access</li>
                  <li>• 24/7 dedicated support</li>
                  <li>• Static IP available</li>
                </ul>
                <Button className="w-full bg-primary hover:bg-accent text-primary-foreground" onClick={handleCallNow}>
                  Get Quote - Call (888) 368-9983
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business Connectivity?</h2>
          <p className="text-xl mb-8">Get a custom quote for your business needs</p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-primary hover:bg-muted px-8 py-4 text-lg"
            onClick={handleCallNow}
          >
            Call Now: (888) 368-9983
          </Button>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}
