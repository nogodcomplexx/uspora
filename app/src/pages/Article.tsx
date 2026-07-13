import { useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { articles } from '../lib/articles';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Navbar } from '../sections/Navbar';
import { Contact } from '../sections/Contact';

export default function Article() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!article) {
    return (
      <main className="min-h-screen bg-[#020617] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl font-bold mb-4">Článek nenalezen</h1>
        <p className="text-[#94A3B8] mb-8">Omlouváme se, ale tento článek neexistuje nebo byl přesunut.</p>
        <Link to="/clanky" className="bg-[#F59E0B] text-[#0F172A] px-6 py-3 rounded-xl font-bold hover:bg-[#FBBF24] transition-colors">
          Zpět na články
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#020617] selection:bg-[#F59E0B]/30 selection:text-white pb-0">
      <Navbar />

      {/* Article Header */}
      <article className="pt-24 md:pt-40 pb-20 max-w-[800px] mx-auto px-4 sm:px-6">
        <Link to="/clanky" className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-white transition-colors mb-10 text-sm font-semibold tracking-wider uppercase">
          <ArrowLeft size={16} /> Zpět na přehled
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-6 text-sm font-medium text-[#64748B] mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#F59E0B]" />
              {article.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#F59E0B]" />
              {article.readTime}
            </div>
          </div>
          
          <h1 className="text-white font-extrabold tracking-tight mb-6 leading-[1.15]" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            {article.title}
          </h1>
          <p className="text-xl text-[#94A3B8] leading-relaxed">
            {article.description}
          </p>
        </header>

        {/* Hero Image */}
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden mb-12 md:mb-16 border border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] relative">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Article Content */}
        {/* We use prose classes from Tailwind typography if available, but since we don't have it installed in package.json, 
            we will style raw HTML elements natively with CSS in this block */}
        <div 
          className="article-content text-[#CBD5E1] text-base sm:text-lg leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        {/* Scoped styles for the injected HTML content */}
        <style dangerouslySetInnerHTML={{__html: `
          .article-content h2 {
            color: #ffffff;
            font-size: 1.875rem;
            font-weight: 800;
            margin-top: 3rem;
            margin-bottom: 1.5rem;
            letter-spacing: -0.025em;
            line-height: 1.3;
          }
          .article-content h3 {
            color: #e2e8f0;
            font-size: 1.5rem;
            font-weight: 700;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
          }
          .article-content p {
            margin-bottom: 1.5rem;
          }
          .article-content strong {
            color: #ffffff;
            font-weight: 700;
          }
          .article-content ul {
            list-style-type: none;
            padding-left: 0;
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
          }
          .article-content ul li {
            position: relative;
            padding-left: 2rem;
            margin-bottom: 1rem;
          }
          .article-content ul li::before {
            content: "•";
            position: absolute;
            left: 0.5rem;
            top: -2px;
            color: #F59E0B;
            font-size: 1.5rem;
            font-weight: bold;
          }
          @media (max-width: 640px) {
            .article-content h2 {
              font-size: 1.5rem;
              margin-top: 2rem;
              margin-bottom: 1rem;
            }
            .article-content h3 {
              font-size: 1.25rem;
              margin-top: 1.75rem;
              margin-bottom: 0.75rem;
            }
            .article-content p {
              margin-bottom: 1.25rem;
            }
          }
        `}} />
      </article>

      <Contact />
    </main>
  );
}
