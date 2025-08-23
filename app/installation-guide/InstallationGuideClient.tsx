"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { trackCall } from "@/lib/analytics"

const handleCallNow = () => {
  trackCall("installation_guide_page")
  window.location.href = "tel:+18883689983"
}

export default function InstallationGuideClient() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Installation Guide</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Complete step-by-step instructions for setting up your Starlink system. Most installations can be completed
            in under 30 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-primary-foreground px-8 py-4 text-lg"
              onClick={handleCallNow}
            >
              Need Help? Call (888) 368-9983
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-muted px-8 py-4 text-lg bg-transparent"
              onClick={handleCallNow}
            >
              Professional Installation
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What's in the Box</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Starlink Dish</h3>
                <p className="text-sm text-muted-foreground">Self-orienting satellite dish</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">WiFi Router</h3>
                <p className="text-sm text-muted-foreground">High-performance mesh router</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Power Supply</h3>
                <p className="text-sm text-muted-foreground">AC power adapter</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Cables</h3>
                <p className="text-sm text-muted-foreground">75ft dish cable included</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Installation Steps</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <CardTitle>Choose Your Location</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Find a location with clear view of the sky</li>
                  <li>• Avoid trees, buildings, and other obstructions</li>
                  <li>• Use the Starlink app to check for obstructions</li>
                  <li>• Ensure stable, level surface for mounting</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <CardTitle>Set Up the Dish</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Place dish on chosen location</li>
                  <li>• Connect the dish cable to the dish</li>
                  <li>• The dish will automatically orient itself</li>
                  <li>• Allow 5-15 minutes for initial positioning</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <CardTitle>Connect the Router</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Connect dish cable to router</li>
                  <li>• Plug in power adapter to router</li>
                  <li>• Wait for router to boot up (2-3 minutes)</li>
                  <li>• Look for solid white light on router</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <CardTitle>Connect Your Devices</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Download the Starlink app on your phone</li>
                  <li>• Follow app instructions to set up WiFi</li>
                  <li>• Connect your devices to the new network</li>
                  <li>• Run speed test to verify connection</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Troubleshooting</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>No Internet Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Check all cable connections</li>
                  <li>• Verify dish has clear sky view</li>
                  <li>• Wait 15 minutes for dish to orient</li>
                  <li>• Restart router by unplugging for 30 seconds</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Slow Speeds</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Check for obstructions using app</li>
                  <li>• Move closer to router</li>
                  <li>• Restart your device</li>
                  <li>• Test with ethernet connection</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Need Help */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Installation Help?</h2>
          <p className="text-xl mb-8">
            Our support team can walk you through the process or schedule professional installation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-primary hover:bg-muted px-8 py-4 text-lg"
              onClick={handleCallNow}
            >
              Call Support: (888) 368-9983
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background text-primary-foreground hover:bg-background hover:text-primary px-8 py-4 text-lg bg-transparent"
              onClick={handleCallNow}
            >
              Professional Installation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
