const navLinks = [
  { label: 'Domů', href: '#domu' },
  { label: 'Balíčky', href: '#balicky' },
  { label: 'Jak to funguje', href: '#jak-to-funguje' },
  { label: 'Technické specifikace', href: '#technika' },
  { label: 'Kontakt', href: '#kontakt' },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-[#0F172A] border-t-4 border-[#F59E0B]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16 pb-24 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <span className="text-2xl">⚡</span>
              <span>Úspora FVE</span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Profesionální fotovoltaické instalace pro rodinné domy. 500+ spokojených zákazníků.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider mb-4">
              Rychlé odkazy
            </h4>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-[#94A3B8] hover:text-white text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider mb-4">
              Kontakt
            </h4>
            <div className="flex flex-col gap-2.5 text-[#94A3B8] text-sm">
              <p className="text-white font-medium">+420 777 366 239</p>
              <p>usporafve@gmail.com</p>
              <p>Jaurisova 515/4, 140 00 Praha 4</p>
              <p>Po–Ne 8:00 – 20:00</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#334155] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#94A3B8] text-xs">
          <p>© 2025 H-Business trade s.r.o. Všechna práva vyhrazena.</p>
          <p>IČ: 11852402 | Jaurisova 515/4, 140 00 Praha 4</p>
        </div>
      </div>
    </footer>
  );
}
