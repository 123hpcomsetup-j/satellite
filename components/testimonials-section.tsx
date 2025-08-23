"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Rural Montana",
    rating: 5,
    text: "Finally have reliable internet in our remote cabin! Starlink has been a game-changer for our family. Streaming works perfectly and video calls are crystal clear.",
    avatar: "/professional-woman-headshot.png",
  },
  {
    name: "Mike Rodriguez",
    location: "Texas Ranch",
    rating: 5,
    text: "As a rancher, I need internet for managing my business remotely. Starlink delivers consistent speeds even in the middle of nowhere. Installation was surprisingly easy.",
    avatar: "/middle-aged-man-headshot.png",
  },
  {
    name: "Emily Chen",
    location: "Remote Worker, Colorado",
    rating: 5,
    text: "Working from home in the mountains was impossible before Starlink. Now I can video conference with clients without any issues. Worth every penny!",
    avatar: "/young-professional-woman-headshot.png",
  },
  {
    name: "David Thompson",
    location: "RV Traveler",
    rating: 5,
    text: "The mobile plan is perfect for our RV lifestyle. We can work and stay connected no matter where we park. Setup takes just minutes at each new location.",
    avatar: "/placeholder-h5z6w.png",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their internet experience with satellite
            connectivity.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <img
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover"
                />

                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-lg text-foreground mb-4 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  <div>
                    <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                    <div className="text-muted-foreground">{testimonials[currentIndex].location}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button variant="outline" size="sm" onClick={prevTestimonial} className="rounded-full bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="sm" onClick={nextTestimonial} className="rounded-full bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
