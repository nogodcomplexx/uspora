import { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Start fade out after 1.5 seconds
    const timer1 = setTimeout(() => {
      setIsFadingOut(true);
    }, 1500);

    // Call onComplete after the fade out transition finishes
    const timer2 = setTimeout(() => {
      onComplete();
    }, 1900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-transform duration-700 ease-in-out ${
        isFadingOut ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#0F172A]">
        <img
          src="/images/solar_house_3d.png"
          alt="Premium Solar Home"
          className="w-full h-full object-cover opacity-40 animate-slow-zoom"
        />
        {/* Gradient Overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-[#0F172A]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 animate-fade-in-up">
        {/* Glowing Logo */}
        <div className="relative flex items-center justify-center w-20 h-20 bg-[#F59E0B]/10 rounded-2xl backdrop-blur-md border border-[#F59E0B]/20 shadow-[0_0_40px_rgba(245,158,11,0.2)]">
          <Zap className="w-10 h-10 text-[#F59E0B] animate-pulse-glow" />
        </div>
        
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">Úspora FVE</h1>
          <p className="text-[#94A3B8] font-medium tracking-wide uppercase text-sm">Fotovoltaika pro chytré domácnosti</p>
        </div>

        {/* Loading Bar */}
        <div className="w-48 h-1 mt-4 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-[#F59E0B] rounded-full animate-loading-bar" />
        </div>
      </div>
    </div>
  );
}
