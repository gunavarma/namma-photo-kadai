import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-black text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        <h2 className="font-serif text-3xl mb-2 tracking-widest">NAMMA</h2>
        <span className="text-[10px] uppercase tracking-[0.4em] text-stone-500 mb-8">Photo Kadai</span>

        <div className="flex space-x-8 mb-12">
            <a href="#" className="hover:text-luxury-gold transition-colors"><Instagram size={20} strokeWidth={1.5} /></a>
            <a href="#" className="hover:text-luxury-gold transition-colors"><Facebook size={20} strokeWidth={1.5} /></a>
            <a href="#" className="hover:text-luxury-gold transition-colors"><Twitter size={20} strokeWidth={1.5} /></a>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 text-center text-stone-500 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Style Guide</a>
            <a href="#" className="hover:text-white transition-colors">Licensing</a>
            <a href="#" className="hover:text-white transition-colors">Client Access</a>
        </div>

        <div className="mt-16 text-stone-700 text-[10px] uppercase tracking-wider">
            © 2024 Namma Photo Kadai. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;