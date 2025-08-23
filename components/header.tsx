"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Satellite } from "lucide-react"
import { trackCallEvent } from "@/lib/analytics"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleCallNow = () => {
    trackCallEvent("header")
    window.location.href = "tel:+18883689983"
  }

  const handleCheckAvailability = () => {
    trackCallEvent("header_check_availability")
    window.location.href = "tel:+18883689983"
  }

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Satellite className="h-8 w-8 text-primary" />
            <span className="font-serif font-bold text-xl text-foreground">Satellite Internet</span>
          </Link>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" onClick={handleCallNow} className="font-semibold bg-transparent">
              Call Now: (888) 368-9983
            </Button>
            <Button onClick={handleCheckAvailability} className="font-semibold">
              Check Availability
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              <Button variant="outline" onClick={handleCallNow} className="font-semibold bg-transparent">
                Call Now: (888) 368-9983
              </Button>
              <Button onClick={handleCheckAvailability} className="font-semibold">
                Check Availability
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
