import { useState } from 'react';
import { Phone, Mail, MapPin, Building2, Check, ArrowRight, Clock, Shield, Star } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

const contactInfo = [
  {
    icon: Phone,
    title: '+420 777 366 239',
    subtitle: 'Volejte denně 8:00 – 20:00',
    href: 'tel:+420777366239',
    highlight: true,
  },
  {
    icon: Mail,
    title: 'usporafve@gmail.com',
    subtitle: 'Odpovíme do 24 hodin',
    href: 'mailto:usporafve@gmail.com',
    highlight: false,
  },
  {
    icon: MapPin,
    title: 'Jaurisova 515/4, 140 00 Praha 4',
    subtitle: 'Servis po celé ČR',
    href: '#',
    highlight: false,
  },
  {
    icon: Building2,
    title: 'H-Business trade s.r.o.',
    subtitle: 'IČ: 11852402',
    href: '#',
    highlight: false,
  },
];

const trustBadges = [
  { icon: Clock, text: 'Odpověď do 24h' },
  { icon: Shield, text: 'Žádný závazek' },
  { icon: Star, text: '500+ instalací' },
];

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    website: '', // honeypot anti-spam field
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    setFormState('sending');
    
    // Na localhostu simulujeme odeslání (Vite neumí PHP)
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
    if (isLocal) {
      console.log('📧 [TEST MODE] Formulář by odeslal:', formData);
      await new Promise(r => setTimeout(r, 1500)); // simulace network delay
      setFormState('success');
      return;
    }
    
    try {
      const res = await fetch('/odeslat_formular.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <section id="kontakt" className="relative bg-[#0F172A] py-24 md:py-32 overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#F59E0B]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-blue-900/15 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-[#F59E0B] text-sm font-bold uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[#F59E0B]/50" />
            KONTAKTUJTE NÁS
            <span className="w-8 h-px bg-[#F59E0B]/50" />
          </p>
          <h2
            className="text-white font-extrabold tracking-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Začněte <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]">šetřit</span> ještě dnes
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-[550px] mx-auto leading-relaxed">
            Zavolejte nebo vyplňte formulář — ozveme se vám do 24 hodin s konkrétní nabídkou na míru.
          </p>
        </ScrollReveal>

        {/* Trust Badges Strip */}
        <ScrollReveal className="mb-14">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] px-5 py-3 rounded-full">
                <badge.icon size={18} className="text-[#F59E0B]" />
                <span className="text-[#CBD5E1] text-sm font-semibold">{badge.text}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Contact Info Column — 2/5 width */}
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="flex flex-col gap-4 h-full">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`group relative flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden ${
                    item.highlight
                      ? 'bg-gradient-to-r from-[#F59E0B]/15 to-[#F59E0B]/5 border border-[#F59E0B]/20 hover:border-[#F59E0B]/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]'
                      : 'bg-white/[0.04] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.07]'
                  }`}
                >
                  <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    item.highlight
                      ? 'bg-[#F59E0B]/20 group-hover:bg-[#F59E0B]/30'
                      : 'bg-white/[0.06] group-hover:bg-white/[0.1]'
                  }`}>
                    <item.icon size={22} className={item.highlight ? 'text-[#F59E0B]' : 'text-[#94A3B8] group-hover:text-white transition-colors'} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-bold text-base truncate ${item.highlight ? 'text-[#F59E0B]' : 'text-white'}`}>{item.title}</p>
                    <p className="text-[#64748B] text-sm">{item.subtitle}</p>
                  </div>
                  <ArrowRight size={16} className="text-[#475569] group-hover:text-[#F59E0B] group-hover:translate-x-1 transition-all shrink-0" />
                </a>
              ))}

              {/* Micro social proof */}
              <div className="mt-4 flex items-center gap-3 px-2">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0F172A] bg-gradient-to-br from-[#334155] to-[#1E293B] flex items-center justify-center text-[10px] text-[#94A3B8] font-bold">
                      {['JN', 'PK', 'MH', 'LV'][i]}
                    </div>
                  ))}
                </div>
                <p className="text-[#64748B] text-xs leading-tight">
                  <span className="text-[#94A3B8] font-semibold">200+</span> spokojených zákazníků po celé ČR
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Form Column — 3/5 width */}
          <ScrollReveal direction="right" className="lg:col-span-3">
            <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 sm:p-8 md:p-10 overflow-hidden">
              {/* Accent gradient top */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/40 to-transparent" />
              
              {formState === 'success' ? (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#10B981]/15 border border-[#10B981]/20 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                    <Check size={36} className="text-[#10B981]" />
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-3">Děkujeme za váš zájem!</h3>
                  <p className="text-[#94A3B8] text-lg">Ozveme se vám do 24 hodin s konkrétní nabídkou.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot anti-spam field – hidden from users */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#CBD5E1] text-sm font-semibold mb-2">
                        Vaše jméno <span className="text-[#F59E0B]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        disabled={formState === 'sending'}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3.5 text-white text-base placeholder:text-[#475569] focus:border-[#F59E0B]/50 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/10 transition-all disabled:opacity-50"
                        placeholder="Jan Novák"
                      />
                    </div>
                    <div>
                      <label className="block text-[#CBD5E1] text-sm font-semibold mb-2">
                        Telefon <span className="text-[#F59E0B]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        disabled={formState === 'sending'}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3.5 text-white text-base placeholder:text-[#475569] focus:border-[#F59E0B]/50 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/10 transition-all disabled:opacity-50"
                        placeholder="+420 123 456 789"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#CBD5E1] text-sm font-semibold mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      disabled={formState === 'sending'}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3.5 text-white text-base placeholder:text-[#475569] focus:border-[#F59E0B]/50 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/10 transition-all disabled:opacity-50"
                      placeholder="jan@example.cz"
                    />
                  </div>
                  <div>
                    <label className="block text-[#CBD5E1] text-sm font-semibold mb-2">
                      Zpráva
                    </label>
                    <textarea
                      rows={3}
                      disabled={formState === 'sending'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3.5 text-white text-base placeholder:text-[#475569] focus:border-[#F59E0B]/50 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/10 transition-all resize-none disabled:opacity-50"
                      placeholder="Mám zájem o fotovoltaiku pro můj rodinný dům..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formState === 'sending'}
                    className="w-full relative overflow-hidden bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-[#0F172A] py-5 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_50px_rgba(245,158,11,0.3)] active:scale-[0.98] group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {formState === 'sending' ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Odesílám...
                        </>
                      ) : (
                        <>
                          Chci nabídku zdarma
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>
                  
                  {formState === 'error' && (
                    <p className="text-red-400 text-sm text-center flex items-center justify-center gap-2 pt-1">
                      ⚠️ Nepodařilo se odeslat. Zavolejte nám prosím na{' '}
                      <a href="tel:+420777366239" className="text-[#F59E0B] font-bold underline">+420 777 366 239</a>
                    </p>
                  )}
                  
                  {formState !== 'error' && (
                    <p className="text-[#10B981] text-sm text-center flex items-center justify-center gap-2 pt-1">
                      <Check size={16} />
                      Žádné peníze dopředu — platíte až po instalaci
                    </p>
                  )}
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
