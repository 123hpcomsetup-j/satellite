"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { trackCall } from "@/lib/analytics"

const handleCallNow = () => {
  trackCall("rv_mobile_page")
  window.location.href = "tel:+18883689983"
}

export default function RVMobileClientPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header component */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">RV & Mobile Internet</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Take high-speed internet anywhere your adventures lead. Perfect for RVs, boats, remote work, and life on the
            road.
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

      {/* Mobile Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Perfect for Life on the Move</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Portable Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Easy to pack and set up anywhere. No permanent installation required.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>In-Motion Use</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Stay connected while driving with approved in-motion configurations.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Global Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Internet access across continents with expanding global coverage.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">RV Living</h3>
                <p className="text-sm text-muted-foreground">Full-time and part-time RV travelers</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Remote Work</h3>
                <p className="text-sm text-muted-foreground">Digital nomads and remote workers</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Marine Use</h3>
                <p className="text-sm text-muted-foreground">Boats and maritime applications</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Emergency Response</h3>
                <p className="text-sm text-muted-foreground">First responders and emergency services</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Mobile Plans</h2>
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">RV/Mobile Plan</CardTitle>
              <CardDescription>Internet anywhere you roam</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-4">
                $150<span className="text-lg font-normal">/month</span>
              </div>
              <ul className="text-left space-y-2 mb-6">
                <li>• Up to 220 Mbps download</li>
                <li>• Portable dish included</li>
                <li>• Pause/unpause service</li>
                <li>• Global roaming</li>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Take Internet Anywhere?</h2>
          <p className="text-xl mb-8">Start your mobile internet journey today</p>
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
