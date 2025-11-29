'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

export function GoogleAnalytics() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    try {
      const consentData = localStorage.getItem('cookie-consent');
      if (consentData) {
        const parsedConsent = JSON.parse(consentData);
        if (parsedConsent.analytics === true) {
          setConsent(true);
        }
      }
    } catch (e) {
      console.error("Could not parse cookie consent.", e);
    }
  }, []);

  if (!consent) {
    return null;
  }

  const gaId = 'G-EW00M24VM0';

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      ></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
