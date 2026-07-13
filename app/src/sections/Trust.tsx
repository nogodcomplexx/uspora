import { ScrollReveal } from '../components/ScrollReveal';

export function Trust() {
  const handleScroll = () => {
    const el = document.querySelector('#kontakt');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/installation-work.jpg"
          alt="Instalace solárních panelů"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(15,23,42,0.88)] to-[rgba(15,23,42,0.94)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal direction="scale">
          <blockquote
            className="text-white font-extrabold leading-tight mb-8"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}
          >
            „500+ rodin po celé České republice už šetří s naší fotovoltaikou."
          </blockquote>

          <p className="text-[#94A3B8] text-lg leading-relaxed mb-10 max-w-[640px] mx-auto">
            Jsme <span className="text-white font-semibold">H-Business trade s.r.o.</span> — česká firma s více než 500 úspěšnými instalacemi. Specializujeme se na fotovoltaické ohřevy vody pro rodinné domy.
          </p>

          <button
            onClick={handleScroll}
            className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] px-8 py-4 rounded-lg text-base font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(245,158,11,0.25)] active:scale-[0.98]"
          >
            Zavolejte nám — konzultace ZDARMA
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
