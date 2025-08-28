// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Satellite Internet",
  description: "Fast and reliable satellite internet service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ TrackWiser Analytics */}
        <Script id="trackwiser-analytics" strategy="afterInteractive">
          {`
            (function() {
              var trackingCode = '4hxgxnniknmgp1g1fqct7c';
              var apiUrl = 'https://ltluebewuhheisbbjcss.supabase.co/functions/v1/track-event';
              var heatmapApiUrl = 'https://ltluebewuhheisbbjcss.supabase.co/functions/v1/track-heatmap';
              
              function getVisitorId() {
                var visitorId = localStorage.getItem('tw_visitor_id');
                if (!visitorId) {
                  visitorId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
                  localStorage.setItem('tw_visitor_id', visitorId);
                }
                return visitorId;
              }

              function getSessionId() {
                var sessionId = sessionStorage.getItem('tw_session_id');
                if (!sessionId) {
                  sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
                  sessionStorage.setItem('tw_session_id', sessionId);
                }
                return sessionId;
              }

              function sendEvent(eventType, eventData) {
                var data = {
                  tracking_code: trackingCode,
                  event_type: eventType || 'page_view',
                  visitor_id: getVisitorId(),
                  session_id: getSessionId(),
                  page_url: window.location.href,
                  referrer: document.referrer || '',
                  user_agent: navigator.userAgent,
                  timestamp: new Date().toISOString(),
                  data: eventData || {}
                };
                console.log('TrackWiser: Sending event', eventType, data);
                fetch(apiUrl, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data)
                }).catch(function(err){ console.error('TrackWiser error:', err); });
              }

              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() { sendEvent('page_view'); });
              } else {
                sendEvent('page_view');
              }

              function sendHeatmapEvent(eventType, element, x, y) {
                var elementInfo = '';
                var elementText = '';
                if (element) {
                  elementText = element.textContent?.trim().substring(0, 100) || '';
                  var selector = element.tagName.toLowerCase();
                  if (element.id) selector += '#' + element.id;
                  else if (element.className) {
                    var classes = element.className.split(' ').filter(c => c.length > 0);
                    if (classes.length > 0) selector += '.' + classes.slice(0, 3).join('.');
                  }
                  elementInfo = elementText.length > 0 && elementText.length < 50 ? elementText : selector;
                }
                var data = {
                  tracking_code: trackingCode,
                  event_type: eventType,
                  page_url: window.location.href,
                  x_position: x,
                  y_position: y,
                  element_selector: elementInfo,
                  element_text: elementText,
                  session_id: getSessionId(),
                  visitor_id: getVisitorId()
                };
                fetch(heatmapApiUrl, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data)
                }).catch(function(err){ console.error('TrackWiser heatmap error:', err); });
              }

              document.addEventListener('click', function(e) {
                var target = e.target;
                if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('trackable')) {
                  sendEvent('click', {
                    element: target.tagName,
                    text: target.textContent || '',
                    href: target.href || '',
                    class: target.className || ''
                  });
                }
                sendHeatmapEvent('click', target, e.clientX, e.clientY);
              });

              document.addEventListener('submit', function(e) {
                var form = e.target;
                if (form.tagName === 'FORM') {
                  sendEvent('form_submit', {
                    form_id: form.id || '',
                    form_name: form.name || '',
                    action: form.action || ''
                  });
                  sendHeatmapEvent('form_submit', form, 0, 0);
                }
              });

              var maxScroll = 0;
              var lastScrollTime = 0;
              window.addEventListener('scroll', function() {
                var scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
                if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
                  maxScroll = scrollPercent;
                  sendEvent('scroll', { depth: scrollPercent });
                }
                var now = Date.now();
                if (now - lastScrollTime > 1000) {
                  sendHeatmapEvent('scroll', null, 0, window.scrollY);
                  lastScrollTime = now;
                }
              });

              var hoverTimeout;
              document.addEventListener('mouseover', function(e) {
                clearTimeout(hoverTimeout);
                hoverTimeout = setTimeout(function() {
                  sendHeatmapEvent('hover', e.target, e.clientX, e.clientY);
                }, 500);
              });

              var startTime = Date.now();
              window.addEventListener('beforeunload', function() {
                var timeSpent = Math.round((Date.now() - startTime) / 1000);
                sendEvent('time_on_page', { seconds: timeSpent });
              });

              window.trackWiser = {
                track: sendEvent,
                getVisitorId: getVisitorId,
                getSessionId: getSessionId
              };

              console.log('TrackWiser Analytics initialized for Satellite Internet');
            })();
          `}
        </Script>

<script>
  gtag('event', 'conversion', {'send_to': 'AW-17312772339/UgFdCNKnnIobEPPhr79A'});
</script>

function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-17312772339/UgFdCNKnnIobEPPhr79A',
      'event_callback': callback
  });
  return false;
}
</script>

<script type="text/javascript">
var sc_project=13161983; 
var sc_invisible=1; 
var sc_security="36fb2679"; 
</script>
<script type="text/javascript"
src="https://www.statcounter.com/counter/counter.js"
async></script>

 

          
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
