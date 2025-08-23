import Link from "next/link"
import { Satellite } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-sidebar border-t border-sidebar-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Satellite className="h-8 w-8 text-sidebar-primary" />
              <span className="font-serif font-bold text-xl text-sidebar-foreground">Satellite Internet</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Providing reliable high-speed satellite internet service nationwide. Connect anywhere with Starlink
              technology.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sidebar-foreground">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/residential"
                  className="text-muted-foreground hover:text-sidebar-primary transition-colors"
                >
                  Residential Internet
                </Link>
              </li>
              <li>
                <Link href="/business" className="text-muted-foreground hover:text-sidebar-primary transition-colors">
                  Business Internet
                </Link>
              </li>
              <li>
                <Link href="/rv-mobile" className="text-muted-foreground hover:text-sidebar-primary transition-colors">
                  RV & Mobile
                </Link>
              </li>
              <li>
                <Link
                  href="/installation"
                  className="text-muted-foreground hover:text-sidebar-primary transition-colors"
                >
                  Installation Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sidebar-foreground">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-sidebar-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-sidebar-primary transition-colors">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link
                  href="/installation-guide"
                  className="text-muted-foreground hover:text-sidebar-primary transition-colors"
                >
                  Installation Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/troubleshooting"
                  className="text-muted-foreground hover:text-sidebar-primary transition-colors"
                >
                  Troubleshooting
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sidebar-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-sidebar-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-muted-foreground hover:text-sidebar-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-muted-foreground hover:text-sidebar-primary transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-muted-foreground hover:text-sidebar-primary transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">© 2024 Satellite Internet. All rights reserved.</div>
            <div className="text-sm text-muted-foreground">
              Call us:{" "}
              <a href="tel:+18883689983" className="text-sidebar-primary hover:underline">
                (888) 368-9983
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
