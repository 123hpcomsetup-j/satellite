"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { trackCall } from "@/lib/analytics"

const handleCallNow = () => {
  trackCall("installation_page")
  window.location.href = "tel:+18883689983"
}

export default function InstallationClientPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Professional Installation</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get your Starlink system professionally installed for optimal performance. Expert mounting, configuration,
            and setup services available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-primary-foreground px-8 py-4 text-lg"
              onClick={handleCallNow}
            >
              Schedule Installation: (888) 368-9983
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-muted px-8 py-4 text-lg bg-transparent"
              onClick={handleCallNow}
            >
              Get Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Installation Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Installation Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Roof Mounting</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Professional roof mounting with weatherproofing and optimal positioning for best signal.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Ground Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Secure ground mounting solutions for yards, patios, and temporary installations.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cable Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Clean cable routing through walls, attics, and crawl spaces with proper sealing.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Network Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Complete network configuration including WiFi setup and device connections.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>System Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Comprehensive testing to ensure optimal performance and speed verification.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Training & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>User training on system operation and ongoing support for any questions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Installation Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Site Survey</h3>
                  <p className="text-muted-foreground">
                    Our technician evaluates your location for optimal dish placement and signal reception.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Equipment Setup</h3>
                  <p className="text-muted-foreground">
                    Professional mounting and positioning of your Starlink dish for maximum performance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Network Configuration</h3>
                  <p className="text-muted-foreground">
                    Complete network setup including WiFi configuration and device connections.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Testing & Training</h3>
                  <p className="text-muted-foreground">
                    System testing and user training to ensure you're getting the best performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Installation Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Standard Installation</CardTitle>
                <CardDescription>Basic setup and configuration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4">$199</div>
                <ul className="text-left space-y-2 mb-6">
                  <li>• Ground or simple roof mount</li>
                  <li>• Basic cable routing</li>
                  <li>• Network setup</li>
                  <li>• System testing</li>
                </ul>
                <Button className="w-full bg-primary hover:bg-accent text-primary-foreground" onClick={handleCallNow}>
                  Schedule - Call (888) 368-9983
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Premium Installation</CardTitle>
                <CardDescription>Complete professional setup</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4">$399</div>
                <ul className="text-left space-y-2 mb-6">
                  <li>• Complex mounting solutions</li>
                  <li>• Advanced cable management</li>
                  <li>• Network optimization</li>
                  <li>• Extended training & support</li>
                </ul>
                <Button className="w-full bg-primary hover:bg-accent text-primary-foreground" onClick={handleCallNow}>
                  Schedule - Call (888) 368-9983
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Professional Installation?</h2>
          <p className="text-xl mb-8">Get your Starlink system installed by certified technicians</p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-primary hover:bg-muted px-8 py-4 text-lg"
            onClick={handleCallNow}
          >
            Schedule Now: (888) 368-9983
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
