import { Check, Shield, TrendingDown } from 'lucide-react';

export function Hero() {
  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="domu"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Solární panely na střeše"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(15,23,42,0.75)] to-[rgba(15,23,42,0.88)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Eyebrow Badge */}
        <div className="hero-animate inline-flex items-center gap-2 border border-[rgba(245,158,11,0.5)] rounded-full px-5 py-2.5 mb-8">
          <Check size={16} className="text-[#F59E0B]" />
          <span className="text-[#F59E0B] text-sm font-semibold">500+ instalací po celé ČR</span>
        </div>

        {/* Headline */}
        <h1 className="hero-animate hero-animate-delay-1 text-white font-extrabold leading-[1.1] tracking-tight"
          style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)' }}>
          Fotovoltaika pro ohřev vody
          <br />
          <span className="text-[#F59E0B]">Ušetřete 60–70 %</span> nákladů
        </h1>

        {/* Subheadline */}
        <p className="hero-animate hero-animate-delay-2 text-[#94A3B8] text-lg md:text-xl max-w-[560px] mx-auto mt-6 leading-relaxed">
          Profesionální instalace špičkových panelů Trina Vertex S+ s výkonem 455W. Životnost 25+ let, záruka 30 let.
        </p>

        {/* Price Callout */}
        <div className="hero-animate hero-animate-delay-3 mt-10">
          <div className="inline-block bg-[rgba(245,158,11,0.12)] border border-[rgba(245,158,11,0.3)] rounded-xl px-8 py-5">
            <p className="text-[#94A3B8] text-sm uppercase tracking-wider font-medium mb-1">
              Kompletní cena instalace
            </p>
            <p className="text-[#F59E0B] font-extrabold" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              49 999 Kč
            </p>
            <p className="text-[#94A3B8] text-sm mt-1">Včetně DPH a veškerých poplatků</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hero-animate hero-animate-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button
            onClick={() => handleScroll('#kontakt')}
            className="w-full sm:w-auto bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] px-8 py-4 rounded-lg text-base font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(245,158,11,0.25)] active:scale-[0.98]"
          >
            Nezávazná konzultace ZDARMA
          </button>
          <button
            onClick={() => handleScroll('#balicky')}
            className="w-full sm:w-auto border-2 border-white/80 text-white px-8 py-4 rounded-lg text-base font-bold transition-all duration-200 hover:bg-white hover:text-[#0F172A] active:scale-[0.98]"
          >
            Prohlédnout balíček
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="hero-animate hero-animate-delay-5 flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-12 text-[#94A3B8] text-sm">
          <div className="flex items-center gap-2">
            <ZapIcon />
            <span className="font-medium">500+ instalací</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield size={18} className="text-[#F59E0B]" />
            <span className="font-medium">Záruka 30 let</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingDown size={18} className="text-[#F59E0B]" />
            <span className="font-medium">Úspora 60–70 %</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ZapIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
