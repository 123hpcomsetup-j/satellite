import Script from "next/script"

interface GoogleAnalyticsProps {
  gaId: string
  gtagId?: string
}

export function GoogleAnalytics({ gaId, gtagId }: GoogleAnalyticsProps) {
  return (
    <>
      {/* Google Analytics */}
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_location: window.location.href,
            page_title: document.title,
            send_page_view: true
          });
          ${gtagId ? `gtag('config', '${gtagId}');` : ""}
        `}
      </Script>

      {/* Enhanced Conversions for Google Ads */}
      {gtagId && (
        <Script id="google-ads-enhanced-conversions" strategy="afterInteractive">
          {`
            gtag('config', '${gtagId}', {
              allow_enhanced_conversions: true
            });
          `}
        </Script>
      )}
    </>
  )
}
