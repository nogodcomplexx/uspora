import { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';

export function MobileCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past the hero section (~500px)
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-all duration-500 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-full opacity-0'
      }`}
    >
      {/* Gradient fade above the bar */}
      <div className="h-6 bg-gradient-to-t from-[#0F172A] to-transparent pointer-events-none" />
      
      <div className="bg-[#0F172A]/95 backdrop-blur-xl border-t border-white/10 px-4 pb-[env(safe-area-inset-bottom,8px)] pt-3">
        <div className="flex items-center gap-3">
          <a
            href="tel:+420777366239"
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-[#0F172A] py-3.5 rounded-xl text-base font-bold shadow-[0_0_30px_rgba(245,158,11,0.3)] active:scale-[0.97] transition-transform"
          >
            <Phone size={18} />
            Zavolat ihned
          </a>
          <button
            onClick={() => {
              const el = document.querySelector('#kontakt');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              else window.location.href = '/#kontakt';
            }}
            className="flex-1 flex items-center justify-center gap-2 border-2 border-[#F59E0B] text-[#F59E0B] py-3.5 rounded-xl text-base font-bold active:scale-[0.97] transition-transform"
          >
            Napsat nám
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="text-white/40 hover:text-white/70 p-1 shrink-0"
            aria-label="Zavřít"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
