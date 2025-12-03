import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-40 bg-luxury-cream text-luxury-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative overflow-hidden aspect-[4/5] shadow-2xl shadow-stone-300/50">
              {/* Image of camera/photographer */}
              <img
                src="https://images.unsplash.com/photo-1712581962652-6c91e6d35e55?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Photographer at work"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter sepia-[0.1]"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5"></div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 border-r border-b border-luxury-gold/40 hidden md:block"></div>
            <div className="absolute -top-8 -left-8 w-24 h-24 border-l border-t border-luxury-gold/40 hidden md:block"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-stone-400">
              Namma Photo Kadai
            </h3>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-luxury-black font-light leading-tight">
              Crafting memories,
              <br />
              <span className="italic text-luxury-gold font-normal">
                celebrating love.
              </span>
            </h2>

            <div className="h-[1px] w-20 bg-luxury-black/10"></div>

            <p className="font-sans text-stone-600 font-light leading-relaxed text-lg text-justify md:text-left">
              At <strong>Namma Photo Kadai</strong>, we believe every picture
              tells a story. From the subtle glance of a bride to the grandeur
              of a wedding procession, we document the unscripted moments that
              make your day truly yours.
              <br />
              <br />
              We blend traditional values with modern cinematic techniques to
              create heirlooms that you will cherish for generations. Whether
              it's an intimate ceremony or a grand celebration, our lens
              captures the soul of your special day.
            </p>

            <div className="pt-8">
              <div className="font-serif text-2xl italic text-luxury-gold opacity-80">
                Namma Photo Kadai
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
