import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Zap, Layers, Flame, ChevronDown, ChevronUp } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

// Technical specifications metadata for all 25 installations
const galleryItems = [
  {
    id: 1,
    src: '/images/gallery/gallery-1.jpg',
    category: 'tašková',
    title: 'Rodinný dům se šedou taškou',
    location: 'Sokolov, Karlovarský kraj',
    power: '2.28 kWp',
    panels: '5x Trina Solar 455W',
    roofType: 'Šedá betonová taška',
    saving: '60 % ročních nákladů',
    desc: 'Šedá betonová taška'
  },
  {
    id: 2,
    src: '/images/gallery/gallery-2.jpg',
    category: 'tašková',
    title: 'Vertikální uspořádání panelů',
    location: 'Rokycany, Plzeňský kraj',
    power: '3.19 kWp',
    panels: '7x Trina Solar 455W',
    roofType: 'Červená střešní taška',
    saving: '69 % ročních nákladů',
    desc: 'Červená střešní taška'
  },
  {
    id: 3,
    src: '/images/gallery/gallery-3.jpg',
    category: 'tašková',
    title: 'Ohřev na asfaltovém šindeli',
    location: 'Příbram, Středočeský kraj',
    power: '3.19 kWp',
    panels: '7x Trina Solar 455W',
    roofType: 'Asfaltový šindel',
    saving: '69 % ročních nákladů',
    desc: 'Asfaltový šindel'
  },
  {
    id: 4,
    src: '/images/gallery/gallery-4.jpg',
    category: 'tašková',
    title: 'Instalace na tmavou krytinu',
    location: 'Beroun, Středočeský kraj',
    power: '2.73 kWp',
    panels: '6x Trina Solar 455W',
    roofType: 'Černá střešní taška',
    saving: '65 % ročních nákladů',
    desc: 'Černá střešní taška'
  },
  {
    id: 5,
    src: '/images/gallery/gallery-5.jpg',
    category: 'tašková',
    title: 'Červená tašková střecha',
    location: 'Louny, Ústecký kraj',
    power: '2.73 kWp',
    panels: '6x Trina Solar 455W',
    roofType: 'Pálená střešní taška',
    saving: '67 % ročních nákladů',
    desc: 'Pálená střešní taška'
  },
  {
    id: 6,
    src: '/images/gallery/gallery-6.jpg',
    category: 'tašková',
    title: 'Horizontální řada 6 panelů',
    location: 'Mělník, Středočeský kraj',
    power: '2.73 kWp',
    panels: '6x Trina Solar 455W',
    roofType: 'Betonová taška',
    saving: '66 % ročních nákladů',
    desc: 'Betonová taška'
  },
  {
    id: 7,
    src: '/images/gallery/gallery-7.jpg',
    category: 'plechová',
    title: 'Instalace na hospodářské stavbě',
    location: 'Klatovy, Plzeňský kraj',
    power: '2.73 kWp',
    panels: '6x Trina Solar 455W',
    roofType: 'Vlnitá krytina / Plech',
    saving: '66 % ročních nákladů',
    desc: 'Vlnitá krytina / Plech'
  },
  {
    id: 8,
    src: '/images/gallery/gallery-8.jpg',
    category: 'tašková',
    title: 'Montáž na eternitové šablony',
    location: 'Cheb, Karlovarský kraj',
    power: '2.73 kWp',
    panels: '6x Trina Solar 455W',
    roofType: 'Eternitové kosočtverce',
    saving: '66 % ročních nákladů',
    desc: 'Eternitové kosočtverce'
  },
  {
    id: 9,
    src: '/images/gallery/gallery-9.jpg',
    category: 'tašková',
    title: 'Pět panelů nad verandou',
    location: 'Karlovy Vary, Karlovarský kraj',
    power: '2.28 kWp',
    panels: '5x Trina Solar 455W',
    roofType: 'Červená pálená taška',
    saving: '61 % ročních nákladů',
    desc: 'Červená pálená taška'
  },
  {
    id: 10,
    src: '/images/gallery/gallery-10.jpg',
    category: 'tašková',
    title: 'Pět panelů na hnědé tašce',
    location: 'Jablonec nad Nisou, Liberecký kraj',
    power: '2.28 kWp',
    panels: '5x Trina Solar 455W',
    roofType: 'Tmavě hnědá taška',
    saving: '61 % ročních nákladů',
    desc: 'Tmavě hnědá taška'
  },
  {
    id: 11,
    src: '/images/gallery/gallery-11.jpg',
    category: 'tašková',
    title: 'Sedmepanelová FVE na tašce',
    location: 'Náchod, Královéhradecký kraj',
    power: '3.19 kWp',
    panels: '7x Trina Solar 455W',
    roofType: 'Pálená taška',
    saving: '69 % ročních nákladů',
    desc: 'Pálená taška'
  },
  {
    id: 12,
    src: '/images/gallery/gallery-12.jpg',
    category: 'plechová',
    title: 'Šest panelů na červeném plechu',
    location: 'Trutnov, Královéhradecký kraj',
    power: '2.73 kWp',
    panels: '6x Trina Solar 455W',
    roofType: 'Trapézový červený plech',
    saving: '66 % ročních nákladů',
    desc: 'Trapézový červený plech'
  },
  {
    id: 13,
    src: '/images/gallery/gallery-13.jpg',
    category: 'tašková',
    title: 'Vertikální 6panelový systém',
    location: 'Kraslice, Karlovarský kraj',
    power: '2.73 kWp',
    panels: '6x Trina Solar 455W',
    roofType: 'Šedý střešní šindel / Plech',
    saving: '67 % ročních nákladů',
    desc: 'Šedý střešní šindel / Plech'
  },
  {
    id: 14,
    src: '/images/gallery/gallery-14.jpg',
    category: 'tašková',
    title: 'Šest panelů na hnědé tašce',
    location: 'Benešov, Středočeský kraj',
    power: '2.73 kWp',
    panels: '6x Trina Solar 455W',
    roofType: 'Hnědá taška',
    saving: '66 % ročních nákladů',
    desc: 'Hnědá taška'
  },
  {
    id: 15,
    src: '/images/gallery/gallery-15.jpg',
    category: 'tašková',
    title: 'Pět panelů na červené tašce',
    location: 'Tábor, Jihočeský kraj',
    power: '2.28 kWp',
    panels: '5x Trina Solar 455W',
    roofType: 'Pálená taška',
    saving: '60 % ročních nákladů',
    desc: 'Pálená taška'
  },
  {
    id: 16,
    src: '/images/gallery/gallery-16.jpg',
    category: 'plochá',
    title: 'Plochá střecha s konstrukcí',
    location: 'Kraslice, Karlovarský kraj',
    power: '3.64 kWp',
    panels: '8x Trina Solar 455W',
    roofType: 'Plochá střecha (Asfaltové pásy)',
    saving: '68 % ročních nákladů',
    desc: 'Plochá střecha (Asfaltové pásy)'
  },
  {
    id: 17,
    src: '/images/gallery/gallery-17.jpg',
    category: 'plochá',
    title: 'Detail nosné konstrukce',
    location: 'Kraslice, Karlovarský kraj',
    power: '3.64 kWp',
    panels: '8x Trina Solar 455W',
    roofType: 'Plochá střecha (Zátěžový systém)',
    saving: '68 % ročních nákladů',
    desc: 'Plochá střecha (Zátěžový systém)'
  },
  {
    id: 18,
    src: '/images/gallery/gallery-18.jpg',
    category: 'tašková',
    title: 'Rodinný dům se čtyřmi panely',
    location: 'Příbram, Středočeský kraj',
    power: '1.82 kWp',
    panels: '4x Trina Solar 455W',
    roofType: 'Pálená taška',
    saving: '50 % ročních nákladů',
    desc: 'Pálená taška'
  },
  {
    id: 19,
    src: '/images/gallery/gallery-19.jpg',
    category: 'zahrada',
    title: 'Čtyřpanelová zahradní instalace',
    location: 'Tachov, Plzeňský kraj',
    power: '1.82 kWp',
    panels: '4x Trina Solar 455W',
    roofType: 'Pozemní ocelová konstrukce',
    saving: '50 % ročních nákladů',
    desc: 'Pozemní ocelová konstrukce'
  },
  {
    id: 20,
    src: '/images/gallery/gallery-20.jpg',
    category: 'plechová',
    title: 'Instalace na falcovaný plech',
    location: 'Nejdek, Karlovarský kraj',
    power: '2.28 kWp',
    panels: '5x Trina Solar 455W',
    roofType: 'Plechová střecha (Klik systém)',
    saving: '60 % ročních nákladů',
    desc: 'Plechová střecha (Klik systém)'
  },
  {
    id: 21,
    src: '/images/gallery/gallery-21.jpg',
    category: 'plechová',
    title: 'Realizace na plechové střeše',
    location: 'Nejdek, Karlovarský kraj',
    power: '2.73 kWp',
    panels: 'Náš špičkový technik na střeše',
    roofType: 'Plechová střecha (Dokončovací práce)',
    saving: 'Bezpečnost na prvním místě',
    desc: 'Plechová střecha (Dokončovací práce)'
  },
  {
    id: 22,
    src: '/images/gallery/gallery-22.jpg',
    category: 'plechová',
    title: 'Pětipanelná montáž na šablonách',
    location: 'Chomutov, Ústecký kraj',
    power: '2.28 kWp',
    panels: '5x Trina Solar 455W',
    roofType: 'Plechové šablony',
    saving: '60 % ročních nákladů',
    desc: 'Plechové šablony'
  },
  {
    id: 23,
    src: '/images/gallery/gallery-23.jpg',
    category: 'zahrada',
    title: 'Pozemní konstrukce (Pět panelů)',
    location: 'Tachov, Plzeňský kraj',
    power: '2.28 kWp',
    panels: '5x Trina Solar 455W',
    roofType: 'Zahradní instalace (Detail z profilu)',
    saving: '60 % ročních nákladů',
    desc: 'Zahradní instalace (Detail z profilu)'
  },
  {
    id: 24,
    src: '/images/gallery/gallery-24.jpg',
    category: 'plechová',
    title: 'Systém se 6 panely',
    location: 'Tábor, Jihočeský kraj',
    power: '2.73 kWp',
    panels: '6x Trina Solar 455W',
    roofType: 'Plechová střecha',
    saving: '66 % ročních nákladů',
    desc: 'Plechová střecha'
  },
  {
    id: 25,
    src: '/images/gallery/gallery-25.jpg',
    category: 'plechová',
    title: 'Pětipanelová střecha stodoly',
    location: 'Turnov, Liberecký kraj',
    power: '2.28 kWp',
    panels: '5x Trina Solar 455W',
    roofType: 'Vlnitý plech (Vedlejší stavba)',
    saving: '60 % ročních nákladů',
    desc: 'Vlnitý plech (Vedlejší stavba)'
  }
];

const categories = [
  { id: 'vse', label: 'Všechny realizace' },
  { id: 'plochá', label: 'Ploché střechy' },
  { id: 'zahrada', label: 'Zahradní / Pozemní' }
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('vse');
  const [isExpanded, setIsExpanded] = useState(false);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredItems = activeCategory === 'vse'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const initialLimit = isMobile ? 3 : 6;
  const displayedItems = isExpanded ? filteredItems : filteredItems.slice(0, initialLimit);

  const openModal = (src: string) => {
    const idx = galleryItems.findIndex(item => item.src === src);
    setModalIndex(idx);
  };

  const closeModal = () => {
    setModalIndex(null);
  };

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (modalIndex !== null) {
      setModalIndex((modalIndex + 1) % galleryItems.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (modalIndex !== null) {
      setModalIndex((modalIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalIndex === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalIndex]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (modalIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [modalIndex]);

  // Touch Swipe gestures for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > 50; // threshold
    if (isSwipe) {
      if (distance > 0) {
        nextImage(); // Swiped Left -> next image
      } else {
        prevImage(); // Swiped Right -> prev image
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const activeItem = modalIndex !== null ? galleryItems[modalIndex] : null;

  return (
    <section id="montaze" className="py-24 md:py-32 bg-[#0F172A] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#F59E0B]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-[680px] mx-auto mb-16">
            <h2 className="text-[#F59E0B] text-sm uppercase tracking-widest font-bold mb-3">Naše práce</h2>
            <h3 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">
              Ukázky z našich montáží
            </h3>
            <p className="text-[#94A3B8] text-base md:text-lg mt-4">
              Realizovali jsme již přes 500 instalací po celé České republice. Prohlédněte si naše precizní řešení na různých typech střech i na zahradách.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filters (Glassmorphic) */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-[800px] mx-auto p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setIsExpanded(false);
                }}
                className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#F59E0B] text-[#0F172A] shadow-[0_4px_16px_rgba(245,158,11,0.25)]'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Masonry-like Grid Wrapper with Fade-out Overlay */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedItems.map((item, idx) => (
              <ScrollReveal key={item.id} direction="up" delay={(idx % 6) * 50}>
                <div
                  onClick={() => openModal(item.src)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-2 transition-all duration-500 hover:border-[#F59E0B]/40 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(245,158,11,0.08)]"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#1E293B]">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Info block */}
                  <div className="p-4 pt-3 flex items-start justify-between">
                    <div>
                      <h4 className="text-white font-bold text-base transition-colors group-hover:text-[#F59E0B]">
                        {item.roofType}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-1.5 text-white/50">
                        <MapPin size={13} className="text-[#F59E0B]/70" />
                        <span className="text-xs font-medium">{item.location.split(',')[0]}</span>
                      </div>
                    </div>
                    <span className="bg-[#F59E0B]/10 border border-[#F59E0B]/25 text-[#F59E0B] px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wide">
                      {item.power}
                    </span>
                  </div>

                  {/* Subtle Amber Glow Element */}
                  <div className="absolute inset-0 border border-transparent rounded-2xl group-hover:border-[#F59E0B]/30 pointer-events-none transition-all duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Fade-out Overlay when collapsed and there are more than initialLimit items */}
          {!isExpanded && filteredItems.length > initialLimit && (
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent pointer-events-none z-10" />
          )}
        </div>

        {/* Expand / Collapse CTA Button */}
        {filteredItems.length > initialLimit && (
          <div className="text-center mt-12 relative z-20">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#F59E0B]/30 bg-[#F59E0B]/10 hover:bg-[#F59E0B] text-[#F59E0B] hover:text-[#0F172A] font-bold tracking-wide uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(245,158,11,0.1)] active:scale-95"
            >
              {isExpanded ? 'Zobrazit méně realizací' : 'Zobrazit více montáží'}
              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox / Slideshow Modal */}
      {modalIndex !== null && activeItem && (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/95 backdrop-blur-md transition-opacity duration-300"
          onClick={closeModal}
        >
          {/* Close button floating (fixed to stay in viewport when scrolling on mobile) */}
          <button
            onClick={closeModal}
            className="fixed top-5 right-5 z-[110] bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/10 transition-all active:scale-95"
            aria-label="Zavřít galerii"
          >
            <X size={24} />
          </button>

          {/* Centering wrapper that allows vertical scrolling if content exceeds height */}
          <div 
            className="min-h-full w-full flex items-center justify-center p-4 md:p-8 lg:p-12"
          >
            {/* Slideshow main content box */}
            <div className="relative w-full max-w-[1200px] flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-12 py-12">
              
              {/* Image & Navigation Column */}
              <div className="flex-1 w-full flex items-center justify-between gap-4">
                {/* Left Nav Arrow (Desktop, outside image bounds) */}
                <button
                  onClick={prevImage}
                  className="hidden lg:flex bg-white/5 hover:bg-white/15 text-white p-4 rounded-full border border-white/5 transition-all hover:scale-105 active:scale-95 shrink-0"
                  aria-label="Předchozí obrázek"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Image Container with swipe listeners */}
                <div 
                  className="flex-1 w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl relative select-none bg-black/30"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* Floating Mobile Left Arrow overlaying the image */}
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex lg:hidden bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full border border-white/10 transition-all active:scale-95"
                    aria-label="Předchozí obrázek"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <img
                    src={activeItem.src}
                    alt={activeItem.title}
                    className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl cursor-default"
                    onClick={(e) => e.stopPropagation()}
                  />

                  {/* Floating Mobile Right Arrow overlaying the image */}
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex lg:hidden bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full border border-white/10 transition-all active:scale-95"
                    aria-label="Následující obrázek"
                  >
                    <ChevronRight size={20} />
                  </button>
                  
                  {/* Pagination text helper (mobile) */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white/80 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md">
                    {modalIndex + 1} / {galleryItems.length}
                  </div>
                </div>

                {/* Right Nav Arrow (Desktop, outside image bounds) */}
                <button
                  onClick={nextImage}
                  className="hidden lg:flex bg-white/5 hover:bg-white/15 text-white p-4 rounded-full border border-white/5 transition-all hover:scale-105 active:scale-95 shrink-0"
                  aria-label="Následující obrázek"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Technical Specifications sidebar */}
              <div 
                className="w-full lg:w-[360px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl rounded-2xl p-6 md:p-8 flex flex-col justify-between shrink-0 lg:self-stretch min-h-[450px] lg:min-h-0"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <span className="text-[#F59E0B] text-xs font-bold uppercase tracking-wider block mb-1">
                  Detail instalace
                </span>
                <h3 className="text-white text-xl md:text-2xl font-extrabold tracking-tight mb-4">
                  {activeItem.title}
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {activeItem.desc}
                </p>

                {/* Specs List */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <MapPin size={18} className="text-[#F59E0B]" />
                    <div>
                      <span className="text-white/40 text-[10px] uppercase font-bold block leading-none mb-1">Lokalita</span>
                      <span className="text-white text-sm font-semibold">{activeItem.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <Zap size={18} className="text-[#F59E0B]" />
                    <div>
                      <span className="text-white/40 text-[10px] uppercase font-bold block leading-none mb-1">Výkon systému</span>
                      <span className="text-white text-sm font-semibold">{activeItem.power}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <Layers size={18} className="text-[#F59E0B]" />
                    <div>
                      <span className="text-white/40 text-[10px] uppercase font-bold block leading-none mb-1">Krytina & konstrukce</span>
                      <span className="text-white text-sm font-semibold">{activeItem.roofType}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <Flame size={18} className="text-[#F59E0B]" />
                    <div>
                      <span className="text-white/40 text-[10px] uppercase font-bold block leading-none mb-1">Úspora & panely</span>
                      <span className="text-white text-sm font-semibold">{activeItem.panels}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Nav indicators for Mobile / Desktop */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/[0.06]">
                <div className="text-white/40 text-xs font-semibold">
                  Typ: <span className="text-white/70 capitalize">{activeItem.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevImage}
                    className="bg-white/5 hover:bg-white/10 text-white p-2.5 rounded-xl border border-white/5 transition-all"
                    aria-label="Předchozí"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="bg-white/5 hover:bg-white/10 text-white p-2.5 rounded-xl border border-white/5 transition-all"
                    aria-label="Následující"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </section>
  );
}
