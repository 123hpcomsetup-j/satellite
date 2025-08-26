import Script from "next/script"

interface GoogleAnalyticsProps {
  gaId: string
  gtagId?: string
}

export function GoogleAnalytics({ gaId, gtagId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17312772339"  />

        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17312772339');
          
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-17312772339/cJHXCJrJo4wbEPPhr79A',
                'event_callback': callback
            });
            return false;
          }
          
          // Make gtag_report_conversion available globally
          window.gtag_report_conversion = gtag_report_conversion;
        `}
      </Script>
    </>
  )
}
