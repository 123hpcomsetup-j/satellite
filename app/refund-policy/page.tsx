import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Refund Policy - Satellite Internet",
  description:
    "Refund Policy for Satellite Internet services. Learn about our money-back guarantee and refund process.",
}

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-8">Refund Policy</h1>
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-muted-foreground mb-8">
              <strong>Effective Date:</strong> January 1, 2024
              <br />
              <strong>Last Updated:</strong> January 1, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">30-Day Money-Back Guarantee</h2>
              <p className="mb-4">
                We stand behind our service quality with a 30-day money-back guarantee. If you're not completely
                satisfied with your satellite internet service within the first 30 days, you can receive a full refund.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">What's Covered</h2>
              <p className="mb-4">Our 30-day money-back guarantee covers:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Monthly service fees paid within the first 30 days</li>
                <li>Installation fees (if applicable)</li>
                <li>Activation fees</li>
                <li>Equipment costs (upon return of equipment in good condition)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">Refund Process</h2>
              <p className="mb-4">To request a refund:</p>
              <ol className="list-decimal pl-6 mb-4 space-y-2">
                <li>Call our customer service at (888) 368-9983 within 30 days of service activation</li>
                <li>Provide your account information and reason for cancellation</li>
                <li>Return all equipment in original condition within 30 days</li>
                <li>Refunds will be processed within 5-10 business days after equipment return</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">Equipment Return Requirements</h2>
              <p className="mb-4">For equipment refunds, items must be:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Returned within 30 days of purchase</li>
                <li>In original packaging with all accessories</li>
                <li>Free from damage beyond normal wear</li>
                <li>Accompanied by original receipt or order confirmation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">Non-Refundable Items</h2>
              <p className="mb-4">The following are not eligible for refund:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Service fees after the 30-day guarantee period</li>
                <li>Damaged or incomplete equipment returns</li>
                <li>Third-party services or accessories</li>
                <li>Shipping and handling fees for equipment returns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">Partial Refunds</h2>
              <p className="mb-4">
                Partial refunds may be issued for equipment returned in less than perfect condition, based on the extent
                of damage or missing components.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">Processing Time</h2>
              <p className="mb-4">
                Refunds are typically processed within 5-10 business days after we receive returned equipment. The
                refund will appear on your original payment method within 1-2 billing cycles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">Contact Us</h2>
              <p className="mb-4">For refund requests or questions about our refund policy:</p>
              <ul className="list-none mb-4 space-y-2">
                <li>
                  <strong>Phone:</strong> (888) 368-9983
                </li>
                <li>
                  <strong>Email:</strong> refunds@satelliteinternet.com
                </li>
                <li>
                  <strong>Hours:</strong> Monday-Friday 8AM-8PM, Saturday-Sunday 9AM-6PM
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
