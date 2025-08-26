import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata = {
  title: "Contact Us - Satellite Internet",
  description:
    "Contact Satellite Internet for sales, support, and service questions. Call (888) 368-9983 or fill out our contact form.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to get connected? Our expert team is here to help you find the perfect satellite internet solution.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground mb-2">Call us for immediate assistance</p>
                      <a href="tel:+18883689983" className="text-primary hover:text-primary/80 font-semibold text-lg">
                        (888) 368-9983
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground mb-2">Send us a message</p>
                      <a
                        href="mailto:info@satelliteinternet.com"
                        className="text-primary hover:text-primary/80 font-semibold"
                      >
                        info@satelliteinternet.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        123 Satellite Way
                        <br />
                        Tech City, TC 19808
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                        <p>Saturday - Sunday: 9:00 AM - 6:00 PM</p>
                        <p className="text-sm">All times Eastern</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Why Choose Us?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ No contracts or long-term commitments</li>
                  <li>✓ 30-day money-back guarantee</li>
                  <li>✓ Free installation support</li>
                  <li>✓ 24/7 customer service</li>
                  <li>✓ Nationwide coverage</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
