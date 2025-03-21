
import { Palette } from 'lucide-react';

export default function PortfolioHero() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]" />
      <div className="relative container mx-auto px-6 py-24 text-center">
        <Palette className="w-16 h-16 mx-auto mb-8 text-purple-200" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">UI/UX Design Portfolio</h1>
        <p className="text-xl text-purple-100 max-w-2xl mx-auto">
          Crafting seamless user experiences with precision and creativity. 
          Explore my journey through design thinking and problem-solving.
        </p>
      </div>
    </div>
  );
}