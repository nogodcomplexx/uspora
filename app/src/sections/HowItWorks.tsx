import { Phone, FileText, Wrench, Zap } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

const steps = [
  {
    icon: Phone,
    title: 'Nezávazná konzultace',
    description: 'Zavolejte nebo napište. Probereme vaše potřeby a navrhneme ideální řešení zdarma.',
  },
  {
    icon: FileText,
    title: 'Návrh a smlouva',
    description: 'Připravíme podrobnou nabídku. Po odsouhlasení podepíšeme smlouvu o dílo.',
  },
  {
    icon: Wrench,
    title: 'Profesionální instalace',
    description: 'Certifikovaní technici nainstalují panely do 90 dnů. Kvalitní komponenty s garancí.',
  },
  {
    icon: Zap,
    title: 'Uvedení do provozu',
    description: 'Zapojíme, otestujeme a vysvětlíme obsluhu. Platíte až po funkční instalaci.',
  },
];

export function HowItWorks() {
  return (
    <section id="jak-to-funguje" className="bg-[#0F172A] py-20 md:py-28 overflow-hidden isolate">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-[#F59E0B] text-sm font-semibold uppercase tracking-wider mb-3">
            JEDNODUŠE A BEZ RIZIKA
          </p>
          <h2
            className="text-white font-extrabold tracking-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            Jak to funguje
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-[600px] mx-auto">
            Od prvního kontaktu k funkční fotovoltaice během několika týdnů
          </p>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative z-10">
          {/* Desktop horizontal line */}
          <div className="hidden lg:block absolute top-[32px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-[#334155] to-transparent z-[-1]" />

          {/* Mobile vertical line */}
          <div className="lg:hidden absolute left-8 top-10 bottom-10 w-[2px] bg-gradient-to-b from-transparent via-[#334155] to-transparent z-[-1]" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex lg:flex-col items-start lg:items-center gap-6 lg:gap-0">
                  {/* Number Circle */}
                  <div className="shrink-0 w-16 h-16 rounded-full border-2 border-[#F59E0B] flex items-center justify-center bg-[#0F172A] relative z-10 shadow-[0_0_20px_rgba(15,23,42,1)]">
                    <span className="text-[#F59E0B] font-bold text-xl">{index + 1}</span>
                  </div>

                  {/* Content */}
                  <div className="lg:text-center lg:mt-8 pb-2">
                    <step.icon size={28} className="text-[#94A3B8] mb-4 hidden lg:block mx-auto" />
                    <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed max-w-[260px] lg:mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
