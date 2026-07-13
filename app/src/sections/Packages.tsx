import { Check, Zap } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

const features = [
  '5× Panel Trina Vertex S+ 455W (Black Frame)',
  'Prémiový MPPT měnič GETI 02',
  'Kompletní příslušenství a certifikovaný materiál',
  'Profesionální montáž s důrazem na estetiku',
  'Zapojení, zaškolení a spuštění do provozu',
];

export function Packages() {
  const handleScroll = () => {
    const el = document.querySelector('#kontakt');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="balicky" className="relative bg-[#020617] py-24 md:py-32 overflow-hidden border-y border-[#1E293B]">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-[#F59E0B]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <ScrollReveal className="text-center md:text-left mb-16">
          <p className="text-[#F59E0B] flex items-center justify-center md:justify-start gap-2 text-sm font-bold uppercase tracking-widest mb-4">
            <Zap size={16} /> NAŠE ŘEŠENÍ
          </p>
          <h2
            className="text-white font-extrabold tracking-tight mb-6 leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Prémiový <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]">Fotovoltaický</span> Ekosystém
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-[600px] mx-auto md:mx-0 leading-relaxed">
            Nekompromisní kvalita, špičkový design a maximální výkon. Vše sjednocené v jednom elegantním balíčku bez skrytých poplatků.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column: Package Details */}
          <ScrollReveal className="order-2 lg:order-1">
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-[#F59E0B]/30 transition-colors duration-500">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-[#F59E0B]/20 to-transparent w-full h-1" />
              
              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-white font-extrabold tracking-tight text-3xl mb-2">
                    Ultimate Energy <span className="font-light text-[#94A3B8]">Pack</span>
                  </h3>
                  <p className="text-[#64748B] text-sm font-medium tracking-wide">
                    Optimalizováno pro rodinné domy
                  </p>
                </div>
                <span className="shrink-0 bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                  DOPORUČUJEME
                </span>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 border border-[#10B981]/20">
                      <Check size={16} className="text-[#10B981]" />
                    </div>
                    <span className="text-[#CBD5E1] text-base font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Special Highlight */}
              <div className="flex items-center gap-4 mb-10 p-4 rounded-xl bg-gradient-to-r from-[#F59E0B]/20 to-transparent border border-[#F59E0B]/40 shadow-[0_4px_20px_rgba(245,158,11,0.15)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                  <Check size={20} className="text-[#0F172A]" strokeWidth={3} />
                </div>
                <span className="text-white text-lg font-extrabold tracking-wide drop-shadow-md">Platba až po instalaci</span>
              </div>

              {/* Price Area */}
              <div className="bg-[#0F172A]/50 border border-white/5 rounded-2xl p-6 mb-8 backdrop-blur-md relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B]/5 to-transparent pointer-events-none" />
                <p className="text-[#94A3B8] text-xs uppercase tracking-widest font-semibold mb-1">
                  Kompletní instalace na klíč
                </p>
                <div className="flex items-baseline gap-2">
                  <p className="text-white font-extrabold" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
                    49 999
                  </p>
                  <p className="text-[#F59E0B] text-xl font-bold">Kč</p>
                </div>
                <p className="text-[#64748B] text-sm mt-1">
                  Včetně DPH a veškerých poplatků
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={handleScroll}
                className="w-full relative overflow-hidden bg-white text-[#0F172A] py-5 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-95 group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Získat návrh na míru <Zap size={18} className="text-[#F59E0B] group-hover:animate-pulse" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
            
            <p className="text-[#64748B] text-sm text-center md:text-left mt-6 ml-4">
              * Očekávaná návratnost investice: <strong className="text-[#94A3B8]">2–3 roky</strong>
            </p>
          </ScrollReveal>

          {/* Right Column: 3D Visual */}
          <ScrollReveal className="order-1 lg:order-2">
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl group border border-white/10">
              <div className="absolute inset-0 bg-[#F59E0B]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <img 
                src="/images/solar_house_3d.png" 
                alt="Premium 3D Render of Solar House" 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[10s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-transparent z-10 pointer-events-none hidden lg:block" />
              
              {/* Floating Stat Badge */}
              <div className="absolute bottom-8 left-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <p className="text-[#F59E0B] font-bold text-2xl mb-1">~60%</p>
                <p className="text-white text-sm font-medium tracking-wide">Úspora energií</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
