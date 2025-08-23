"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { trackCall } from "@/lib/analytics"

const handleCallNow = () => {
  trackCall("residential_page")
  window.location.href = "tel:+18883689983"
}

export default function ResidentialClientPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header component */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Residential Starlink Internet</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform your home internet experience with Starlink's revolutionary satellite technology. Get high-speed
            internet anywhere, even in the most remote locations.
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

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Starlink for Your Home?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>High-Speed Internet</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Download speeds up to 220 Mbps with low latency for streaming, gaming, and video calls.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>No Data Caps</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Unlimited data usage for your entire household. Stream, work, and browse without limits.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Easy Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Self-installation in minutes. Just plug in and connect - no technician required.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Residential Plans</h2>
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Standard Plan</CardTitle>
              <CardDescription>Perfect for most homes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-4">
                $120<span className="text-lg font-normal">/month</span>
              </div>
              <ul className="text-left space-y-2 mb-6">
                <li>• Up to 220 Mbps download</li>
                <li>• Unlimited data</li>
                <li>• Low latency</li>
                <li>• 30-day trial</li>
              </ul>
              <Button className="w-full bg-primary hover:bg-accent text-primary-foreground" onClick={handleCallNow}>
                Get Started - Call (888) 368-9983
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Home Internet?</h2>
          <p className="text-xl mb-8">Join millions of satisfied customers worldwide</p>
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

      {/* Footer component */}
      <Footer />
    </div>
  )
}
