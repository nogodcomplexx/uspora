import { Phone } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export function FinalCTA() {
  return (
    <section className="relative bg-gradient-to-r from-[#F59E0B] to-[#D97706] py-14 md:py-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)',
      }} />

      <div className="relative max-w-[800px] mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <h2
            className="text-[#0F172A] font-extrabold tracking-tight mb-3"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
          >
            Připraveni ušetřit na energiích?
          </h2>
          <p className="text-[rgba(15,23,42,0.7)] text-lg mb-8 max-w-[600px] mx-auto">
            Zavolejte pro nezávaznou konzultaci zdarma. Konkrétní nabídku získáte do 24 hodin.
          </p>
          <a
            href="tel:+420777366239"
            className="inline-flex items-center gap-3 bg-[#0F172A] hover:bg-[#1e293b] text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] active:scale-[0.98]"
          >
            <Phone size={20} />
            +420 777 366 239
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
