import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service - Satellite Internet",
  description: "Terms of Service for Satellite Internet services. Review our service terms and conditions.",
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-muted-foreground mb-8">
              <strong>Effective Date:</strong> January 1, 2024
              <br />
              <strong>Last Updated:</strong> January 1, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing or using our satellite internet services, you agree to be bound by these Terms of Service
                and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited
                from using our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">2. Service Description</h2>
              <p className="mb-4">
                We provide high-speed satellite internet services using advanced satellite technology. Our services
                include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Residential internet service</li>
                <li>Business internet solutions</li>
                <li>Mobile/RV internet service</li>
                <li>Equipment rental and sales</li>
                <li>Installation and technical support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">3. Service Plans and Pricing</h2>
              <p className="mb-4">
                Service plans, pricing, and features are subject to change. Current pricing is available on our website
                or by calling (888) 368-9983. All prices are subject to applicable taxes and fees.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">4. Equipment</h2>
              <p className="mb-4">
                Equipment purchase or lease is required for service activation. You are responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Proper installation and maintenance of equipment</li>
                <li>Protection of equipment from damage or theft</li>
                <li>Returning leased equipment upon service termination</li>
                <li>Equipment costs if damaged or not returned</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">5. Acceptable Use Policy</h2>
              <p className="mb-4">You agree not to use our services for:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Illegal activities or violation of any laws</li>
                <li>Transmitting harmful, offensive, or inappropriate content</li>
                <li>Interfering with network security or other users' service</li>
                <li>Commercial resale of services without authorization</li>
                <li>Excessive bandwidth usage that impacts network performance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">6. Service Availability</h2>
              <p className="mb-4">
                While we strive for 99.9% uptime, service may be interrupted due to weather conditions, satellite
                maintenance, network congestion, or other factors beyond our control. We do not guarantee uninterrupted
                service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">7. Cancellation and Refunds</h2>
              <p className="mb-4">
                You may cancel service at any time without penalty. We offer a 30-day money-back guarantee for new
                customers. Refund policies are detailed in our Refund Policy page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">8. Limitation of Liability</h2>
              <p className="mb-4">
                Our liability is limited to the monthly service fee. We are not liable for indirect, incidental, or
                consequential damages arising from service use or interruption.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">9. Contact Information</h2>
              <p className="mb-4">For questions about these Terms of Service, contact us:</p>
              <ul className="list-none mb-4 space-y-2">
                <li>
                  <strong>Phone:</strong> (888) 368-9983
                </li>
                <li>
                  <strong>Email:</strong> legal@satelliteinternet.com
                </li>
                <li>
                  <strong>Address:</strong> 123 Satellite Way, Tech City, TC 12345
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
