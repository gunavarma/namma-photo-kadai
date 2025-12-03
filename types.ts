export interface PortfolioItem {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
  heightClass: string; // Tailwind height or aspect ratio class
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  price: string;
  features: string[];
}

export interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  role: string;
  imageUrl: string;
}