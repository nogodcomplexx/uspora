import { Sun, Droplets, TrendingDown, Shield } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

const benefits = [
  {
    icon: Sun,
    title: 'Solární energie zdarma',
    description: 'Využijte sluneční záření k ohřevu vody po celý rok.',
  },
  {
    icon: Droplets,
    title: 'Ohřev teplé užitkové vody',
    description: 'Pokryjte 60–70 % spotřeby TUV solární energií.',
  },
  {
    icon: TrendingDown,
    title: 'Návratnost 2–3 roky',
    description: 'Investice se vám vrátí díky úspoře na energiích.',
  },
  {
    icon: Shield,
    title: '30letá záruka výkonu',
    description: 'Panely Trina Vertex S+ s 30letou zárukou výkonnosti.',
  },
];

export function Benefits() {
  return (
    <section className="bg-[#0F172A] border-t border-[#334155] py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[rgba(245,158,11,0.12)] mb-4">
                  <benefit.icon size={28} className="text-[#F59E0B]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
