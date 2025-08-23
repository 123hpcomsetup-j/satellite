"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { trackCall } from "@/lib/analytics"

const handleCallNow = () => {
  trackCall("support_page")
  window.location.href = "tel:+18883689983"
}

export default function SupportPageClient() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Customer Support</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get the help you need with your Starlink service. Our expert support team is here to assist with setup,
            troubleshooting, and any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-primary-foreground px-8 py-4 text-lg"
              onClick={handleCallNow}
            >
              Call Support: (888) 368-9983
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-muted px-8 py-4 text-lg bg-transparent"
              onClick={handleCallNow}
            >
              Get Help Now
            </Button>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How We Can Help</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Technical Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Get help with connectivity issues, speed problems, and technical troubleshooting.</p>
                <Button
                  className="mt-4 w-full bg-primary hover:bg-accent text-primary-foreground"
                  onClick={handleCallNow}
                >
                  Call (888) 368-9983
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Account Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Billing questions, plan changes, account updates, and service modifications.</p>
                <Button
                  className="mt-4 w-full bg-primary hover:bg-accent text-primary-foreground"
                  onClick={handleCallNow}
                >
                  Call (888) 368-9983
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Installation Help</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Setup assistance, mounting guidance, and configuration support.</p>
                <Button
                  className="mt-4 w-full bg-primary hover:bg-accent text-primary-foreground"
                  onClick={handleCallNow}
                >
                  Call (888) 368-9983
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Common Support Topics</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Slow Internet Speeds</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  If you're experiencing slower than expected speeds, our technicians can help optimize your setup and
                  diagnose any issues.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Connection Drops</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Intermittent connectivity issues can often be resolved with proper dish positioning and obstruction
                  removal.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Weather Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Learn how weather conditions affect your service and what to expect during storms or heavy
                  precipitation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Equipment Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Hardware problems, replacement requests, and warranty support for your Starlink equipment.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Support Hours</h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Phone Support</h3>
                  <p className="text-muted-foreground">Monday - Sunday: 6:00 AM - 10:00 PM PST</p>
                  <p className="font-semibold text-primary">(888) 368-9983</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Emergency Support</h3>
                  <p className="text-muted-foreground">24/7 for business customers</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Average Response Time</h3>
                  <p className="text-muted-foreground">Under 2 minutes for phone support</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help Right Now?</h2>
          <p className="text-xl mb-8">Our support team is standing by to assist you</p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-primary hover:bg-muted px-8 py-4 text-lg"
            onClick={handleCallNow}
          >
            Call Support: (888) 368-9983
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
