import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, Globe, Headphones, Clock, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Speeds",
    description: "Up to 220 Mbps download speeds with low latency for streaming, gaming, and video calls.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Available virtually anywhere with a clear view of the sky. Perfect for rural and remote areas.",
  },
  {
    icon: Shield,
    title: "No Contracts",
    description: "Cancel anytime with no long-term commitments or early termination fees.",
  },
  {
    icon: Clock,
    title: "Quick Installation",
    description: "Self-install in under 30 minutes with our easy-to-follow setup guide.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert customer support available around the clock to help with any issues.",
  },
  {
    icon: TrendingUp,
    title: "Constantly Improving",
    description: "Regular software updates and expanding satellite constellation for better performance.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Why Choose Satellite Internet?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of internet connectivity with cutting-edge satellite technology designed for
            reliability and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
