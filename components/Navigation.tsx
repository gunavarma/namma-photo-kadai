import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
        isScrolled
          ? 'bg-luxury-black/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="z-50 group flex flex-col">
          <span className="font-serif text-2xl md:text-3xl tracking-widest text-white group-hover:text-luxury-gold transition-colors duration-500">
            NAMMA
          </span>
          <span className="text-[0.5rem] md:text-[0.6rem] uppercase tracking-[0.4em] text-stone-400 group-hover:text-white transition-colors">
            Photo Kadai
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-12 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-stone-300 hover:text-white transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-luxury-gold group-hover:w-full transition-all duration-300 ease-out"></span>
            </a>
          ))}
          <a
            href="#contact"
            className={`border border-white/20 px-6 py-2 text-xs uppercase tracking-[0.15em] transition-all duration-500 hover:bg-white hover:text-luxury-black ${isScrolled ? 'bg-white/5' : ''}`}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white z-50 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-luxury-black flex flex-col justify-center items-center space-y-8 transition-transform duration-700 ease-out md:hidden ${
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-3xl text-stone-200 hover:text-luxury-gold italic tracking-wide transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;