import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Disclaimer - Satellite Internet",
  description:
    "Legal disclaimer for Satellite Internet services. Important information about service limitations and liability.",
}

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-8">Disclaimer</h1>
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-muted-foreground mb-8">
              <strong>Effective Date:</strong> January 1, 2024
              <br />
              <strong>Last Updated:</strong> January 1, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">Service Performance</h2>
              <p className="mb-4">
                Satellite internet speeds and performance may vary based on location, weather conditions, network
                congestion, and other factors. Advertised speeds represent maximum potential speeds under optimal
                conditions and are not guaranteed.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">Weather and Environmental Factors</h2>
              <p className="mb-4">
                Satellite internet service may be affected by severe weather conditions including heavy rain, snow, or
                storms. Service interruptions due to weather are temporary and service typically resumes when conditions
                improve.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">Installation Requirements</h2>
              <p className="mb-4">
                Service requires a clear view of the sky for optimal performance. Installation may not be possible in
                all locations due to obstructions, local regulations, or technical limitations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">Data Usage and Fair Access Policy</h2>
              <p className="mb-4">
                While we offer unlimited data plans, network management practices may be applied during periods of
                congestion to ensure quality service for all customers. Heavy users may experience reduced speeds during
                peak hours.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">Third-Party Content and Services</h2>
              <p className="mb-4">
                We are not responsible for the content, accuracy, or availability of third-party websites, applications,
                or services accessed through our internet connection.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">Equipment and Technology</h2>
              <p className="mb-4">
                Equipment specifications and technology may change without notice. We reserve the right to upgrade or
                modify equipment and service features to improve performance and reliability.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">Service Availability</h2>
              <p className="mb-4">
                Service availability is subject to satellite coverage and local regulations. We cannot guarantee service
                availability in all areas and reserve the right to discontinue service in certain locations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">Pricing and Promotions</h2>
              <p className="mb-4">
                Prices, plans, and promotional offers are subject to change without notice. Current pricing and terms
                are available on our website or by calling customer service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">Limitation of Liability</h2>
              <p className="mb-4">
                Our total liability for any claims related to our service is limited to the amount paid for service in
                the month the claim arose. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">Independent Contractor</h2>
              <p className="mb-4">
                We are an independent service provider and are not affiliated with or endorsed by any satellite
                manufacturer or other internet service providers mentioned on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">Contact Information</h2>
              <p className="mb-4">For questions about this disclaimer or our services:</p>
              <ul className="list-none mb-4 space-y-2">
                <li>
                  <strong>Phone:</strong> (888) 368-9983
                </li>
                <li>
                  <strong>Email:</strong> info@satelliteinternet.com
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
