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
      <!-- TrackWiser Analytics Script -->
<script>
(function() {
  // TrackWiser configuration
  var trackingCode = 'qa1dxe0prtdjlfrjx9h1tk';
  var apiUrl = 'https://ltluebewuhheisbbjcss.supabase.co/functions/v1/track-event';
  var heatmapApiUrl = 'https://ltluebewuhheisbbjcss.supabase.co/functions/v1/track-heatmap';
  
  // Generate or get visitor ID
  function getVisitorId() {
    var visitorId = localStorage.getItem('tw_visitor_id');
    if (!visitorId) {
      visitorId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('tw_visitor_id', visitorId);
    }
    return visitorId;
  }
  
  // Generate session ID
  function getSessionId() {
    var sessionId = sessionStorage.getItem('tw_session_id');
    if (!sessionId) {
      sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('tw_session_id', sessionId);
    }
    return sessionId;
  }
  
  // Send tracking event
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
    
    // Use fetch to send data
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(function(response) {
      return response.json();
    }).then(function(result) {
      if (result.success) {
        console.log('TrackWiser: Event sent successfully', result);
      } else {
        console.error('TrackWiser: Failed to send event', result);
      }
    }).catch(function(error) {
      console.error('TrackWiser: Error sending event:', error);
    });
  }
  
  // Track page view on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      sendEvent('page_view');
    });
  } else {
    sendEvent('page_view');
  }
  
  // Send heatmap event
  function sendHeatmapEvent(eventType, element, x, y) {
    // Get better element information
    var elementInfo = '';
    var elementText = '';
    
    if (element) {
      // Get readable text (prefer text content over inner text)
      elementText = element.textContent?.trim().substring(0, 100) || element.innerText?.trim().substring(0, 100) || '';
      
      // Create a cleaner selector
      var selector = element.tagName.toLowerCase();
      
      // Add ID if available
      if (element.id) {
        selector += '#' + element.id;
      }
      // Add a few key classes (max 3) instead of all classes
      else if (element.className) {
        var classes = element.className.split(' ').filter(function(c) {
          return c.length > 0 && !c.includes('bg-') && !c.includes('text-') && !c.includes('border-') && !c.includes('rounded-');
        });
        if (classes.length > 0) {
          selector += '.' + classes.slice(0, 3).join('.');
        }
      }
      
      // If we have readable text, use it as the main identifier
      if (elementText.length > 0 && elementText.length < 50) {
        elementInfo = elementText;
      } else {
        elementInfo = selector;
      }
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
    
    console.log('TrackWiser: Sending heatmap event', eventType, data);
    
    fetch(heatmapApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).catch(function(error) {
      console.error('TrackWiser: Error sending heatmap event', error);
    });
  }
  
  // Track clicks on important elements
  document.addEventListener('click', function(e) {
    var target = e.target;
    if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('trackable')) {
      sendEvent('click', {
        element: target.tagName,
        text: target.textContent || target.innerText || '',
        href: target.href || '',
        class: target.className || ''
      });
    }
    
    // Send heatmap click event
    sendHeatmapEvent('click', target, e.clientX, e.clientY);
  });
  
  // Track form submissions
  document.addEventListener('submit', function(e) {
    var form = e.target;
    if (form.tagName === 'FORM') {
      sendEvent('form_submit', {
        form_id: form.id || '',
        form_name: form.name || '',
        action: form.action || ''
      });
      
      // Send heatmap form event
      sendHeatmapEvent('form_submit', form, 0, 0);
    }
  });
  
  // Track scroll depth
  var maxScroll = 0;
  var lastScrollTime = 0;
  window.addEventListener('scroll', function() {
    var scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
      maxScroll = scrollPercent;
      sendEvent('scroll', { depth: scrollPercent });
    }
    
    // Send heatmap scroll event (throttled)
    var now = Date.now();
    if (now - lastScrollTime > 1000) {
      sendHeatmapEvent('scroll', null, 0, window.scrollY);
      lastScrollTime = now;
    }
  });
  
  // Track hover events (throttled)
  var hoverTimeout;
  document.addEventListener('mouseover', function(e) {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(function() {
      sendHeatmapEvent('hover', e.target, e.clientX, e.clientY);
    }, 500);
  });
  
  // Track time on page
  var startTime = Date.now();
  window.addEventListener('beforeunload', function() {
    var timeSpent = Math.round((Date.now() - startTime) / 1000);
    sendEvent('time_on_page', { seconds: timeSpent });
  });
  
  // Expose tracking function globally
  window.trackWiser = {
    track: sendEvent,
    getVisitorId: getVisitorId,
    getSessionId: getSessionId
  };
  
  console.log('TrackWiser Analytics initialized for Satellite Internet');
})();
</script>
    </header>
  )
}

export default Header
