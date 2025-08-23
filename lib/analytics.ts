declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void
    gtag_report_conversion: (url?: string) => boolean
    dataLayer: any[]
  }
}

// Track call events for Google Ads conversion tracking
export const trackCallEvent = (source: string) => {
  if (typeof window !== "undefined" && window.gtag_report_conversion) {
    // Use the Google Ads conversion tracking function
    window.gtag_report_conversion()
  }

  // Google Analytics 4 event tracking
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "phone_call_clicked", {
      event_category: "engagement",
      event_label: source,
      phone_number: "18883689983",
      value: 1,
    })
  }

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-17312772339/cJHXCJrJo4wbEPPhr79A",
      event_callback: () => {
        console.log("[v0] Call conversion tracked from:", source)
      },
    })
  }

  // Custom event for additional tracking
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("call_initiated", {
        detail: { source, phone: "18883689983", timestamp: new Date().toISOString() },
      }),
    )
  }

  console.log("[v0] Call tracking event fired from:", source)
}

export const trackCall = trackCallEvent

// Track form submissions
export const trackFormSubmission = (formType: string, formData?: any) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "form_submit", {
      event_category: "lead_generation",
      event_label: formType,
      value: 1,
    })
  }

  console.log("[v0] Form submission tracked:", formType)
}

// Track page views with UTM parameters
export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "GA_MEASUREMENT_ID", {
      page_location: url,
      custom_map: {
        utm_source: "traffic_source",
        utm_medium: "traffic_medium",
        utm_campaign: "traffic_campaign",
      },
    })
  }
}
