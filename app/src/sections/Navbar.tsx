import { useState, useEffect } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { Menu, X, Phone, Zap } from 'lucide-react';

import { useLocation, useNavigate } from 'react-router';

const navLinks = [
  { label: 'Domů', href: '/#domu' },
  { label: 'Balíčky', href: '/#balicky' },
  { label: 'Jak to funguje', href: '/#jak-to-funguje' },
  { label: 'Montáže', href: '/#montaze' },
  { label: 'Rádce', href: '/clanky' },
  { label: 'Kontakt', href: '/#kontakt' },
];

export function Navbar() {
  const scrollY = useScrollPosition();
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(location.pathname === '/clanky' ? '/clanky' : '/#domu');
  const isScrolled = scrollY > 50;

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Active section detection
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(location.pathname.startsWith('/clanky') ? '/clanky' : location.pathname);
      return;
    }

    const sectionIds = navLinks.filter(l => l.href.startsWith('/#')).map(l => l.href.replace('/#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('/#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    
    // If it's a direct route link (like /clanky)
    if (!href.includes('#')) {
      navigate(href);
      return;
    }

    // If it's a hash link
    const hash = href.split('#')[1];
    
    // If we are not on home page, navigate to home and then scroll
    if (location.pathname !== '/') {
      navigate(href);
      // Wait for React Router to mount Home, then scroll
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      // Already on home page, just scroll
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL hash without jumping
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-2'
            : 'py-3'
        }`}
      >
        {/* Glassmorphism navbar container - floats inside the header */}
        <div className={`max-w-[1280px] mx-auto px-3 sm:px-4 lg:px-6 transition-all duration-500 ${
          isScrolled ? 'px-4 sm:px-6 lg:px-8' : ''
        }`}>
          <div className={`relative flex items-center justify-between h-[56px] px-5 lg:px-6 rounded-2xl transition-all duration-500 ${
            isScrolled
              ? 'bg-[rgba(15,23,42,0.7)] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] border border-white/[0.08]'
              : 'bg-[rgba(15,23,42,0.3)] backdrop-blur-md border border-white/[0.04]'
          }`}>
            {/* Border Beam Animation */}
            <div className="nav-border-beam" />
            {/* Logo */}
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); handleNavClick('/#domu'); }}
              className="flex items-center gap-2.5 text-white font-bold text-lg tracking-tight shrink-0 whitespace-nowrap group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#F59E0B]/15 border border-[#F59E0B]/25 flex items-center justify-center group-hover:bg-[#F59E0B]/25 group-hover:border-[#F59E0B]/40 transition-all duration-300">
                <Zap size={16} className="text-[#F59E0B]" />
              </div>
              <span>Úspora FVE</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`relative px-3.5 py-2 rounded-lg text-[13px] font-semibold uppercase tracking-wider transition-all duration-300 ${
                    activeSection === link.href
                      ? 'text-[#F59E0B]'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#F59E0B] rounded-full" />
                  )}
                </a>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+420777366239"
                className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#FBBF24] hover:to-[#F59E0B] text-[#0F172A] px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(245,158,11,0.35)]"
              >
                <Phone size={14} />
                Konzultace zdarma
              </a>

              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/[0.08] transition-all"
                aria-label="Otevřít menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-[300px] bg-[rgba(15,23,42,0.95)] backdrop-blur-2xl border-l border-white/[0.08] shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#F59E0B]/15 border border-[#F59E0B]/25 flex items-center justify-center">
                <Zap size={16} className="text-[#F59E0B]" />
              </div>
              <span className="text-white font-bold text-lg">Menu</span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white/60 hover:text-white p-2 rounded-lg hover:bg-white/[0.08] transition-all"
              aria-label="Zavřít menu"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 ${
                  activeSection === link.href
                    ? 'text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/15'
                    : 'text-white/70 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+420777366239"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-[#0F172A] px-4 py-3.5 rounded-xl text-base font-bold mt-4 transition-all hover:shadow-[0_4px_20px_rgba(245,158,11,0.35)]"
            >
              <Phone size={18} />
              +420 777 366 239
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
