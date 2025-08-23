"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Phone } from "lucide-react"
import { trackCallEvent } from "@/lib/analytics"

const plans = [
  {
    name: "Residential",
    price: "$120",
    period: "/month",
    description: "Perfect for homes and small businesses",
    features: [
      "Up to 220 Mbps download",
      "Up to 25 Mbps upload",
      "Unlimited data",
      "No contracts",
      "Self-installation kit included",
      "30-day money-back guarantee",
    ],
    popular: true,
  },
  {
    name: "RV/Mobile",
    price: "$150",
    period: "/month",
    description: "Internet on the go for travelers",
    features: [
      "Portable satellite dish",
      "Up to 220 Mbps download",
      "Pause service anytime",
      "In-motion connectivity",
      "Easy setup anywhere",
      "Priority support",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "$500",
    period: "/month",
    description: "Enterprise-grade connectivity",
    features: [
      "Priority network access",
      "Up to 350 Mbps download",
      "Up to 40 Mbps upload",
      "Dedicated support team",
      "Service level agreement",
      "Multiple dish support",
    ],
    popular: false,
  },
]

export function PricingSection() {
  const handleCallNow = () => {
    trackCallEvent("pricing_section")
    window.location.href = "tel:+18883689983"
  }

  return (
    <section id="pricing" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include free shipping and a 30-day money-back guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-border ${
                plan.popular ? "border-primary shadow-lg scale-105" : "hover:shadow-lg transition-shadow"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-serif">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full font-semibold"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={handleCallNow}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call to Order
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Hardware cost: $599 one-time payment (financing available)</p>
          <Button size="lg" onClick={handleCallNow} className="font-semibold">
            <Phone className="mr-2 h-5 w-5" />
            Call (888) 368-9983 for Custom Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
