import React from 'react';
import { PageId } from '../types.ts';
import {
  ArrowLeft,
  Sparkles,
  Heart,
  Scale,
  Compass,
  Smile,
  ArrowRight,
} from 'lucide-react';

interface PageProps {
  onNavigate: (page: PageId) => void;
  onOpenLocationModal: () => void;
}

export const AboutPage: React.FC<PageProps> = ({ onNavigate, onOpenLocationModal }) => {
  return (
    <div className="bg-[#FFF8ED] text-[#26332D]">
      {/* ========================================================================= */}
      {/* 1. SECCIÓN PRINCIPAL: INTRODUCCIÓN CÁLIDA & EDITORIAL                    */}
      {/* ========================================================================= */}
      <section
        id="quienes-somos-intro"
        className="pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 bg-[#FFF2DE] border-b border-[#E8D7C0]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navegación y badge */}
          <div className="flex items-center justify-between gap-4 mb-5 sm:mb-6">
            <button
              onClick={() => onNavigate('inicio')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#315C4D] hover:text-[#25483c] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al inicio</span>
            </button>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#E8D7C0] text-[#315C4D] text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#E95B4E]" />
              <span>Nuestra propuesta</span>
            </span>
          </div>

          {/* Encabezado Editorial Definitivo */}
          <div className="max-w-3xl space-y-3 sm:space-y-4 mb-8 sm:mb-10">
            <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#26332D] leading-[1.15]">
              Quiénes somos
            </h1>

            <p className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#315C4D] leading-snug">
              “Una verdulería pensada para disfrutar desde que entrás”
            </p>

            <p className="text-base sm:text-lg text-[#26332D]/85 font-sans leading-relaxed">
              Mercado Primavera nace con una idea simple: hacer que comprar frutas y verduras vuelva a sentirse como una experiencia para disfrutar. Un espacio donde podés recorrer, elegir a tu ritmo, descubrir productos distintos y llevar exactamente lo que necesitás.
            </p>
          </div>

          {/* Fotografía Protagonista del Local (Presencia Visual Grande) */}
          <div
            id="quienes-somos-img-container"
            className="w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8D7C0] shadow-sm hover:shadow-md transition-shadow bg-[#FFF8ED]"
          >
            <div className="w-full aspect-[16/9] sm:aspect-[16/7.5] lg:aspect-[2.1/1] overflow-hidden">
              <img
                id="quienes-somos-local-img"
                src="/quienes-somos-local.png"
                alt="Vista luminosa de Mercado Primavera con cajones de madera abiertos y variedad de frutas y verduras frescas"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. LOS 4 PILARES DE NUESTRA FORMA DE TRABAJAR                              */}
      {/* ========================================================================= */}
      <section
        id="quienes-somos-pilares"
        className="py-12 sm:py-16 lg:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-[#315C4D] font-bold">
            Nuestra forma de hacer las cosas
          </span>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#26332D]">
            Lo que encontrás cuando venís
          </h2>
          <p className="text-xs sm:text-sm text-[#26332D]/75 font-sans">
            Cuatro ideas que guían cada cajón, cada selección y cada mañana en el mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Pilar 1 */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E8D7C0] shadow-2xs hover:shadow-xs transition-all space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#EDF5E7] text-[#315C4D] flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-xl font-semibold text-[#26332D]">
              Frescura seleccionada con cuidado
            </h3>
            <p className="text-xs sm:text-sm text-[#26332D]/80 font-sans leading-relaxed">
              Elegimos los productos por su punto de maduración natural, su aroma y su sabor real, no por cuántas semanas aguantan en una cámara de frío.
            </p>
          </div>

          {/* Pilar 2 */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E8D7C0] shadow-2xs hover:shadow-xs transition-all space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FDE8E3] text-[#E95B4E] flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-xl font-semibold text-[#26332D]">
              Libertad total para elegir
            </h3>
            <p className="text-xs sm:text-sm text-[#26332D]/80 font-sans leading-relaxed">
              Sin paquetes cerrados ni mínimos obligatorios. Si necesitás un solo tomate para la cena o una sola fruta para probar, te la llevás sin problema.
            </p>
          </div>

          {/* Pilar 3 */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E8D7C0] shadow-2xs hover:shadow-xs transition-all space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FEF8DC] text-[#26332D] flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-xl font-semibold text-[#26332D]">
              El gusto por descubrir
            </h3>
            <p className="text-xs sm:text-sm text-[#26332D]/80 font-sans leading-relaxed">
              Junto a los clásicos de siempre, traemos variedades estacionales, frutos exóticos, hongos frescos y hierbas vivas que invitan a cocinar distinto.
            </p>
          </div>

          {/* Pilar 4 */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E8D7C0] shadow-2xs hover:shadow-xs transition-all space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F2EEFA] text-[#315C4D] flex items-center justify-center">
              <Smile className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-xl font-semibold text-[#26332D]">
              Atención cercana y sin apuro
            </h3>
            <p className="text-xs sm:text-sm text-[#26332D]/80 font-sans leading-relaxed">
              Nos gusta compartir recetas, recomendar combinaciones y contar de dónde viene cada fruta. Un mercado donde da ganas quedarse un ratito más.
            </p>
          </div>
        </div>

        {/* CTA de exploración */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-[#315C4D] text-[#FFF8ED] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif-title text-xl sm:text-2xl font-semibold text-[#FFF8ED]">
              ¿Querés ver qué hay en nuestros cajones?
            </h4>
            <p className="text-xs sm:text-sm text-[#FFF8ED]/80 font-sans">
              Explorá las cuatro secciones de productos o aprendé cómo funciona el recorrido.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('productos')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#F6D96B] hover:bg-[#ebd060] text-[#26332D] text-sm font-semibold transition-all cursor-pointer shadow-2xs"
            >
              <span>Ver productos</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('como-trabajamos')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/20 text-[#FFF8ED] text-sm font-semibold border border-white/20 transition-all cursor-pointer"
            >
              <span>Cómo trabajamos</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
