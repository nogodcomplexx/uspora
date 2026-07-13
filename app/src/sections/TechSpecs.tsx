import { Sun, Zap, TrendingDown, Award } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

const specs = [
  {
    icon: Sun,
    title: 'Solární panely',
    value: 'Trina Vertex S+ 455W',
    detail: 'Účinnost až 22,8 %, technologie N-type i-TOPCon dual-glass, záruka 30 let výkonu',
  },
  {
    icon: Zap,
    title: 'MPPT Měnič',
    value: 'GETI GWH02 4000W',
    detail: 'Účinnost >99 %, krytí IP65, optimalizace pro ohřev vody',
  },
  {
    icon: TrendingDown,
    title: 'Úspora energie',
    value: '~2 000 kWh/rok',
    detail: '60–70 % úspora na teplé užitkové vodě, návratnost investice 2–3 roky',
  },
  {
    icon: Award,
    title: 'Záruka a životnost',
    value: '25+ let',
    detail: '15 let záruka na produkt, 30 let záruka na výkon, certifikace IEC 61215/61730',
  },
];

export function TechSpecs() {
  return (
    <section id="technika" className="bg-[#F8FAFC] py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <ScrollReveal className="text-center mb-14">
          <p className="text-[#F59E0B] text-sm font-semibold uppercase tracking-wider mb-3">
            ŠPIČKOVÁ KVALITA
          </p>
          <h2
            className="text-[#0F172A] font-extrabold tracking-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            Technické specifikace
          </h2>
          <p className="text-[#64748B] text-lg max-w-[600px] mx-auto">
            Používáme pouze ověřené komponenty od renomovaných výrobců
          </p>
        </ScrollReveal>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/solar-panels-detail.jpg"
                alt="Detail solárních panelů"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          {/* Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specs.map((spec, index) => (
              <ScrollReveal key={index} direction="right" delay={index * 100}>
                <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                  <spec.icon size={24} className="text-[#F59E0B] mb-3" />
                  <h3 className="text-[#0F172A] font-bold text-base mb-1">{spec.title}</h3>
                  <p className="text-[#F59E0B] font-semibold text-sm mb-2">{spec.value}</p>
                  <p className="text-[#64748B] text-sm leading-relaxed">{spec.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
