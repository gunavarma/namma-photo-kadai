import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2800&auto=format&fit=crop"
            alt="Cinematic Wedding Couple"
            className="w-full h-full object-cover object-center animate-subtle-zoom opacity-90"
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-luxury-black/90"></div>
        <div className="absolute inset-0 bg-luxury-black/30 mix-blend-multiply"></div>
        {/* Grain overlay */}
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-30 mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto flex flex-col items-center mt-12 md:mt-0">
        <h2 className="text-luxury-gold/90 text-[0.6rem] md:text-xs tracking-[0.4em] uppercase mb-8 animate-fade-in-up">
          NAMMA PHOTO KADAI
        </h2>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white leading-[1.1] mb-8 font-thin tracking-tight opacity-90 text-balance animate-fade-in-up delay-100 drop-shadow-2xl">
          Moments turned <br/> 
          <span className="font-serif italic font-light text-white/95">into Memories</span>
        </h1>

        <p className="font-sans text-stone-200 font-light tracking-wide max-w-lg mx-auto mb-12 text-sm md:text-base leading-relaxed opacity-0 animate-fade-in-up delay-200 drop-shadow-lg" style={{animationFillMode: 'forwards'}}>
          Where tradition meets cinematic artistry. Capturing your most beautiful beginnings with timeless elegance.
        </p>

        <div className="flex flex-col md:flex-row gap-6 opacity-0 animate-fade-in-up delay-300" style={{animationFillMode: 'forwards'}}>
          <a href="#portfolio" className="group relative px-8 py-3 overflow-hidden border border-white/30 hover:border-white transition-all duration-500 rounded-sm">
            <span className="relative z-10 text-xs uppercase tracking-[0.2em] text-white group-hover:text-black transition-colors duration-500">Our Stories</span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce duration-[2000ms] text-white/50">
        <ChevronDown size={24} strokeWidth={1} />
      </div>

      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .delay-100 { animation-delay: 0.3s; }
        .delay-200 { animation-delay: 0.6s; }
        .delay-300 { animation-delay: 0.9s; }
      `}</style>
    </section>
  );
};

export default Hero;