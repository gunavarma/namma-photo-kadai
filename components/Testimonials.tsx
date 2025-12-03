import React, { useEffect, useRef, useState } from "react";

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after triggering once
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-luxury-black text-white relative overflow-hidden"
    >
      {/* Subtle decorative circle */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Image Grid */}
        <div
          className={`grid grid-cols-2 gap-4 transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1757017199822-beab923a1afc?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Happy Couple"
            className="w-full h-64 object-cover opacity-80"
          />
          <img
            src="https://images.unsplash.com/photo-1678705730064-a7ecbab4b3fb?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Happy Client"
            className="w-full h-64 object-cover opacity-60 translate-y-12"
          />
        </div>

        {/* Right: Quotes */}
        <div className="space-y-12">
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-luxury-gold text-4xl font-serif">“</div>
            <h3 className="font-serif text-2xl md:text-3xl leading-relaxed font-light text-stone-200">
              We were absolutely breathless. The photos aren't just pictures;
              they are feelings caught in time. Namma Photo Kadai captured our
              wedding like a classic movie.
            </h3>
            <div>
              <p className="uppercase tracking-[0.15em] text-sm text-white font-medium">
                Ananya & Karthik
              </p>
              <p className="text-stone-500 font-serif italic">
                Wedding in Chennai
              </p>
            </div>
          </div>

          <div
            className={`w-full h-[1px] bg-white/10 transition-all duration-1000 delay-500 ease-out origin-left ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>

          <div
            className={`space-y-6 opacity-70 transition-all duration-1000 delay-700 ease-out transform ${
              isVisible ? "opacity-70 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-serif text-xl md:text-2xl leading-relaxed font-light text-stone-300">
              Professional, discrete, and undeniably talented. The team made us
              feel so comfortable.
            </h3>
            <div>
              <p className="uppercase tracking-[0.15em] text-xs text-white font-medium">
                Rahul V.
              </p>
              <p className="text-stone-500 font-serif italic text-sm">
                Portrait Session
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
