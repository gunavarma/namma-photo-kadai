import React from 'react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Wedding Tales',
    description: 'Documenting the unscripted moments of your union with editorial grace. Full day coverage with a focus on raw emotion, rituals, and detail.',
    price: 'Starts at ₹45,000',
    features: ['Candid & Traditional', 'Cinematic Films', 'Premium Photobook']
  },
  {
    id: 2,
    title: 'Portraits',
    description: 'Cinematic portraiture that reveals the soul. Perfect for couples, maternity, family, or personal branding.',
    price: 'Starts at ₹15,000',
    features: ['2-3 Hours Session', 'Multiple Outfit Changes', 'Retouched Images']
  },
  {
    id: 3,
    title: 'Commercial',
    description: 'Elevating brands through high-end visual storytelling. Perfect for jewelry, fashion, and luxury product showcases.',
    price: 'Custom Quote',
    features: ['Creative Direction', 'Model Casting', 'Full Usage Rights']
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-stone-100 relative">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-luxury-black mb-4">Our Services</h2>
          <p className="font-sans text-stone-500 max-w-xl mx-auto font-light">
            Bespoke photography experiences tailored to the most discerning clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white/50 backdrop-blur-sm p-10 border border-white/60 hover:border-luxury-gold/30 hover:shadow-2xl hover:shadow-stone-200/50 transition-all duration-500 ease-in-out"
            >
              <h3 className="font-serif text-3xl text-luxury-black mb-4 italic group-hover:text-luxury-gold transition-colors duration-300">
                {service.title}
              </h3>
              <div className="w-12 h-[1px] bg-stone-300 mb-6 group-hover:w-20 transition-all duration-500"></div>
              
              <p className="font-sans text-stone-600 font-light leading-relaxed mb-8 min-h-[100px]">
                {service.description}
              </p>

              <ul className="space-y-3 mb-10">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm font-sans text-stone-500 flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-luxury-gold"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between mt-auto">
                <span className="font-serif text-lg text-luxury-black">{service.price}</span>
                <button className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center group-hover:bg-luxury-black group-hover:border-luxury-black transition-all">
                  <svg className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;