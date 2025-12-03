import React from "react";
import { PortfolioItem } from "../types";
import { ArrowUpRight } from "lucide-react";

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: "Details",
    title: "Sacred Rituals",
    imageUrl:
      "https://images.unsplash.com/photo-1696233410608-d4d9fd7cf3aa?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heightClass: "h-[400px]",
  },
  {
    id: 2,
    category: "Wedding",
    title: "Arjun & Sneha",
    imageUrl:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000&auto=format&fit=crop",
    heightClass: "h-[550px]",
  },
  {
    id: 3,
    category: "Portrait",
    title: "The Bride",
    imageUrl:
      "https://images.unsplash.com/photo-1722952934531-8e6b39c6f928?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heightClass: "h-[400px]",
  },
  {
    id: 4,
    category: "Pre-Wedding",
    title: "Ethereal Love",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1724762182780-000d248f9301?q=80&w=1317&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heightClass: "h-[600px]",
  },
  {
    id: 5,
    category: "Moments",
    title: "Haldi Joy",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1682092597591-81f59c80d9ec?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heightClass: "h-[450px]",
  },
  {
    id: 6,
    category: "Reception",
    title: "Evening Glow",
    imageUrl:
      "https://images.unsplash.com/photo-1681220430066-75a6620c3a11?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heightClass: "h-[500px]",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 bg-luxury-black text-white relative"
    >
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 px-2 md:px-6">
          <div>
            <h3 className="text-luxury-gold text-xs uppercase tracking-[0.3em] mb-4">
              Selected Works
            </h3>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light">
              Love Stories
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-stone-400 hover:text-white transition-colors pb-2 border-b border-white/10 hover:border-white"
          >
            View All Projects <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Masonry Layout using CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden break-inside-avoid cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-luxury-gold text-xs uppercase tracking-widest mb-2">
                    {item.category}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl italic text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center md:hidden">
          <a
            href="#"
            className="text-xs uppercase tracking-widest border border-white/20 px-8 py-3 hover:bg-white hover:text-black transition-all"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
