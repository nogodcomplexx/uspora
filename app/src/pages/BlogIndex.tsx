import { useEffect } from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router';
import { articles } from '../lib/articles';
import { Navbar } from '../sections/Navbar';
import { Contact } from '../sections/Contact';

export default function BlogIndex() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="min-h-screen bg-[#020617] selection:bg-[#F59E0B]/30 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#F59E0B]/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[#F59E0B] flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest mb-4">
              <BookOpen size={16} /> Magazín & Rádce
            </p>
            <h1 className="text-white font-extrabold tracking-tight mb-6 leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Vše, co potřebujete vědět o <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]">Solární Energii</span>
            </h1>
            <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed">
              Přečtěte si naše odborné články, průvodce a tipy, jak efektivně snížit náklady za energie a stát se soběstačnějšími.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link 
              key={article.id} 
              to={`/clanky/${article.slug}`}
              className="group bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#F59E0B]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] flex flex-col"
            >
              <div className="aspect-[16/9] overflow-hidden relative border-b border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent opacity-60 z-10 pointer-events-none" />
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow relative">
                {/* Decorative top-right corner glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F59E0B]/10 blur-[40px] rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center gap-4 text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-4">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#334155]" />
                  <span>{article.readTime}</span>
                </div>
                
                <h2 className="text-white text-xl md:text-2xl font-bold mb-4 leading-snug group-hover:text-[#F59E0B] transition-colors duration-300">
                  {article.title}
                </h2>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-8 flex-grow">
                  {article.description}
                </p>
                
                <div className="mt-auto flex items-center gap-2 text-[#F59E0B] font-bold text-sm tracking-widest uppercase transition-transform duration-300 group-hover:translate-x-2">
                  Číst článek <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer / CTA section */}
      <Contact />
    </main>
  );
}
