import React from 'react';
import { PageId } from '../types.ts';
import { ArrowLeft, Sparkles, MapPin } from 'lucide-react';
import { ImagePlaceholder } from '../components/ImagePlaceholder.tsx';

interface PageProps {
  onNavigate: (page: PageId) => void;
  onOpenLocationModal: () => void;
}

export const AboutPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="p-8 sm:p-12 rounded-3xl bg-[#FFF2DE] border border-[#E8D7C0] space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#A8C98D]/40 text-[#315C4D] text-xs font-mono font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Estructura preparada · Próxima entrega</span>
        </div>

        <h1 className="font-serif-title text-4xl sm:text-5xl font-semibold text-[#26332D]">
          Quiénes somos
        </h1>

        <p className="text-xl text-[#315C4D] font-display">
          “Una verdulería pensada para disfrutar desde que entrás”
        </p>

        <p className="text-base text-[#26332D]/80 font-sans leading-relaxed">
          Nos gusta lo fresco, lo simple y también lo inesperado. En la siguiente etapa desplegaremos toda la composición editorial de dos y tres imágenes, la historia de Mercado Primavera y el bloque con los 4 valores (Frescura, Variedad, Libertad y Descubrimiento).
        </p>

        <div className="max-w-md pt-2 overflow-hidden rounded-2xl border border-[#E8D7C0] shadow-xs">
          <img
            src="/quienes-somos-local.png"
            alt="Espacio interior y equipo de Mercado Primavera"
            className="w-full aspect-[16/10] object-cover object-center"
            loading="lazy"
          />
        </div>

        <div className="pt-4">
          <button
            onClick={() => onNavigate('inicio')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#315C4D] text-[#FFF8ED] text-sm font-semibold hover:bg-[#25483c] transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a revisar la Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};
