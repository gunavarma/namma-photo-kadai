import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2800&auto=format&fit=crop",
    title: "Moments turned",
    subtitle: "into Memories",
    description:
      "Where tradition meets cinematic artistry. Capturing your most beautiful beginnings with timeless elegance.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1674579097132-7ff78e832346?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Elegance in",
    subtitle: "Every Detail",
    description:
      "Crafting visual poetry from your special day. A celebration of love, laughter, and legacy.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1754782500863-2491466d575a?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Timeless",
    subtitle: "Love Stories",
    description:
      "Preserving the essence of your connection. Authentic, emotive, and forever yours.",
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover object-center transform transition-transform duration-[8000ms] ease-out ${
                index === currentSlide ? "scale-105" : "scale-100"
              }`}
            />
            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
            <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
          </div>

          {/* Content */}
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto mt-12 md:mt-0">
            <h2
              className={`text-[#D4AF37] text-[0.6rem] md:text-xs tracking-[0.4em] uppercase mb-6 transition-all duration-1000 delay-300 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Namma Photo Kadai
            </h2>

            <h1
              className={`font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 font-thin tracking-tight text-balance transition-all duration-1000 delay-500 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {slide.title} <br />
              <span className="italic font-light text-white/90">
                {slide.subtitle}
              </span>
            </h1>

            <p
              className={`font-sans text-stone-300 font-light tracking-wide max-w-lg mx-auto mb-10 text-sm md:text-base leading-relaxed transition-all duration-1000 delay-700 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {slide.description}
            </p>

            <div
              className={`transition-all duration-1000 delay-900 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="#portfolio"
                className="group relative px-8 py-3 overflow-hidden border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500 rounded-sm inline-block"
              >
                <span className="relative z-10 text-xs uppercase tracking-[0.2em] text-[#D4AF37] group-hover:text-black transition-colors duration-500">
                  View Portfolio
                </span>
                <div className="absolute inset-0 bg-[#D4AF37] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-[#D4AF37] transition-colors duration-300 hidden md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft size={48} strokeWidth={0.5} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-[#D4AF37] transition-colors duration-300 hidden md:block"
        aria-label="Next slide"
      >
        <ChevronRight size={48} strokeWidth={0.5} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-[2px] transition-all duration-500 ${
              index === currentSlide
                ? "w-12 bg-[#D4AF37]"
                : "w-6 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
