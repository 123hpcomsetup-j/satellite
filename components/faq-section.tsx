"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How fast is Starlink satellite internet?",
    answer:
      "Starlink offers download speeds between 50-220 Mbps and upload speeds of 10-25 Mbps, with latency as low as 20ms. Speeds may vary based on location and network congestion.",
  },
  {
    question: "Do I need a contract?",
    answer:
      "No contracts required! You can cancel your service at any time without early termination fees. We believe in earning your business every month.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most customers can self-install their Starlink system in under 30 minutes. The kit includes everything you need and step-by-step instructions.",
  },
  {
    question: "What areas does Starlink cover?",
    answer:
      "Starlink is available in most areas with a clear view of the sky. Coverage continues to expand as more satellites are launched. Check availability for your specific address.",
  },
  {
    question: "How much does the equipment cost?",
    answer:
      "The Starlink kit costs $599 as a one-time payment. This includes the satellite dish, Wi-Fi router, cables, and mounting hardware. Financing options are available.",
  },
  {
    question: "Can I use Starlink for gaming and streaming?",
    answer:
      "Yes! Starlink's low latency and high speeds make it excellent for gaming, 4K streaming, video calls, and other bandwidth-intensive activities.",
  },
  {
    question: "What if I'm not satisfied?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not completely satisfied with your service, you can return the equipment for a full refund.",
  },
  {
    question: "Is there a data cap?",
    answer:
      "Residential plans include unlimited data with no hard caps. Fair use policies may apply during network congestion to ensure quality service for all users.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about Starlink satellite internet service.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-background border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
