import { useState, useEffect } from 'react';
import { ShieldAlert, Check, X } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Zkontrolujeme, jestli už uživatel souhlasil
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Zobrazíme banner s mírným zpožděním pro plynulost
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
    
    // Odeslat Googlu, že uživatel povolil vše
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
    }

    // Povolit Meta Pixel
    if (typeof window.fbq === 'function') {
      window.fbq('consent', 'grant');
    }
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    setIsVisible(false);
    
    // Odeslat Googlu, že uživatel povolil POUZE nezbytné
    // Analytics zůstává 'denied' (pouze cookieless pingy)
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none">
      <div className="max-w-4xl mx-auto bg-[#0F172A] border border-[#334155] p-6 rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)] pointer-events-auto flex flex-col md:flex-row items-start md:items-center gap-6 animate-fade-in-up">
        
        {/* Ikona a Text */}
        <div className="flex-1 flex items-start gap-4">
          <div className="shrink-0 p-3 bg-[#F59E0B]/10 rounded-full text-[#F59E0B]">
            <ShieldAlert size={24} />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-1">Respektujeme vaše soukromí</h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Tento web používá soubory cookies k zajištění funkčnosti, analýze návštěvnosti a personalizaci obsahu. 
              Kliknutím na „Přijmout vše“ souhlasíte s používáním všech cookies. Můžete také povolit pouze nezbytné cookies.
              <br className="hidden md:block" />
              <a href="#" className="text-[#F59E0B] hover:underline mt-1 inline-block">Více informací o zpracování dat</a>
            </p>
          </div>
        </div>

        {/* Tlačítka */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <button
            onClick={handleAcceptNecessary}
            className="px-5 py-2.5 rounded-xl border border-[#334155] text-white hover:bg-white/5 transition-colors text-sm font-semibold flex items-center justify-center gap-2"
          >
            <X size={16} />
            Pouze nezbytné
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-5 py-2.5 rounded-xl bg-[#F59E0B] text-[#0F172A] hover:bg-[#FBBF24] transition-colors text-sm font-bold flex items-center justify-center gap-2"
          >
            <Check size={16} />
            Přijmout vše
          </button>
        </div>

      </div>
    </div>
  );
}
