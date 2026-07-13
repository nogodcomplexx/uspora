import { useEffect } from 'react';
import { useLocation } from 'react-router';

// Přidání gtag a fbq do globálního rozhraní Window pro TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}

export const useTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Kdykoliv se změní URL cesta, pošleme page_view do GA4
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
      });
    }

    // Odeslání PageView do Meta Pixelu při změně stránky
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [location]);
};
