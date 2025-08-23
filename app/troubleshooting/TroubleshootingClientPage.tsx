"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { trackCall } from "@/lib/analytics"

const handleCallNow = () => {
  trackCall("troubleshooting_page")
  window.location.href = "tel:+18883689983"
}

export default function TroubleshootingClientPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-50 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Troubleshooting Guide</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Quick solutions for common Starlink issues. Get your internet back up and running with these step-by-step
            troubleshooting guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-primary-foreground px-8 py-4 text-lg"
              onClick={handleCallNow}
            >
              Get Help: (888) 368-9983
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-muted px-8 py-4 text-lg bg-transparent"
              onClick={handleCallNow}
            >
              Technical Support
            </Button>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Common Issues & Solutions</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-red-600">No Internet Connection</CardTitle>
                <CardDescription>Your devices can't connect to the internet</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-semibold">Step-by-step solution:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Check that all cables are securely connected</li>
                    <li>Verify the dish has a clear view of the sky</li>
                    <li>Wait 15 minutes for the dish to orient properly</li>
                    <li>Restart the router by unplugging for 30 seconds</li>
                    <li>Check the Starlink app for system status</li>
                  </ol>
                  <Button className="mt-4 bg-primary hover:bg-accent text-primary-foreground" onClick={handleCallNow}>
                    Still need help? Call (888) 368-9983
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">Slow Internet Speeds</CardTitle>
                <CardDescription>Internet is working but slower than expected</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-semibold">Step-by-step solution:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Run a speed test using the Starlink app</li>
                    <li>Check for obstructions using the app's obstruction viewer</li>
                    <li>Move closer to the WiFi router</li>
                    <li>Disconnect other devices temporarily</li>
                    <li>Try connecting via ethernet cable</li>
                    <li>Restart your device and the router</li>
                  </ol>
                  <Button className="mt-4 bg-primary hover:bg-accent text-primary-foreground" onClick={handleCallNow}>
                    Still slow? Call (888) 368-9983
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-yellow-600">Intermittent Connection</CardTitle>
                <CardDescription>Internet keeps dropping in and out</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-semibold">Step-by-step solution:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Check the obstruction map in the Starlink app</li>
                    <li>Look for trees, buildings, or other obstacles</li>
                    <li>Relocate the dish if obstructions are found</li>
                    <li>Check all cable connections for looseness</li>
                    <li>Monitor weather conditions (heavy rain/snow affects signal)</li>
                  </ol>
                  <Button className="mt-4 bg-primary hover:bg-accent text-primary-foreground" onClick={handleCallNow}>
                    Connection issues? Call (888) 368-9983
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">WiFi Connection Problems</CardTitle>
                <CardDescription>Can't connect devices to WiFi network</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-semibold">Step-by-step solution:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Check that the router shows a solid white light</li>
                    <li>Verify you're using the correct WiFi password</li>
                    <li>Restart your device's WiFi connection</li>
                    <li>Move closer to the router</li>
                    <li>Reset network settings on your device</li>
                    <li>Use the Starlink app to change WiFi settings</li>
                  </ol>
                  <Button className="mt-4 bg-primary hover:bg-accent text-primary-foreground" onClick={handleCallNow}>
                    WiFi problems? Call (888) 368-9983
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Troubleshooting */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Advanced Troubleshooting</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Router Reset</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">If basic troubleshooting doesn't work:</p>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Unplug router for 30 seconds</li>
                  <li>Hold reset button while plugging back in</li>
                  <li>Hold for 10 seconds until lights flash</li>
                  <li>Wait 5 minutes for full restart</li>
                  <li>Reconfigure WiFi settings</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dish Stowing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">To safely move or store the dish:</p>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Open Starlink app</li>
                  <li>Go to Settings → Stow Starlink</li>
                  <li>Wait for dish to move to flat position</li>
                  <li>Unplug power when stowing is complete</li>
                  <li>Dish is now safe to move</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Weather Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Understanding weather effects:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Heavy rain may cause brief interruptions</li>
                  <li>Snow buildup can block signal</li>
                  <li>Dish has built-in snow melting</li>
                  <li>Service typically resumes quickly</li>
                  <li>Severe storms may cause longer outages</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>App Diagnostics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Use the Starlink app to:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Check system status and alerts</li>
                  <li>View obstruction map</li>
                  <li>Run speed tests</li>
                  <li>Monitor data usage</li>
                  <li>Update system firmware</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* When to Call Support */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">When to Call Support</h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">Contact our technical support team if:</p>
              <ul className="text-left space-y-2 mb-8">
                <li>• Issues persist after trying troubleshooting steps</li>
                <li>• Hardware appears damaged or defective</li>
                <li>• You need help with complex installations</li>
                <li>• Service has been down for more than 24 hours</li>
                <li>• You're experiencing consistent slow speeds</li>
              </ul>
              <Button
                size="lg"
                className="bg-primary hover:bg-accent text-primary-foreground px-8 py-4 text-lg"
                onClick={handleCallNow}
              >
                Call Technical Support: (888) 368-9983
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Having Issues?</h2>
          <p className="text-xl mb-8">Our expert technicians are here to help resolve any problems</p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-primary hover:bg-muted px-8 py-4 text-lg"
            onClick={handleCallNow}
          >
            Get Expert Help: (888) 368-9983
          </Button>
        </div>
      </section>
    </div>
  )
}
