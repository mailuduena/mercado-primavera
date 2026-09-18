import React from 'react';
import { PageId } from '../types.ts';
import {
  ArrowRight,
  ArrowDown,
  Sparkles,
  Leaf,
  Scale,
  ShoppingBag,
  HeartHandshake,
  Compass,
  CheckCircle2,
  Smile,
  SunMedium,
  Utensils,
  Globe2,
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageId) => void;
  onOpenLocationModal: () => void;
}

// Custom Botanical & Organic SVG Accents
const TomatoIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Tomato Body */}
    <ellipse cx="20" cy="23" rx="15" ry="13" fill="#E95B4E" />
    <path
      d="M11 16C13 14 17 13.5 20 14C23 13.5 27 14 29 16C33 20 34 26 31 30C28 34 22 36 20 36C18 36 12 34 9 30C6 26 7 20 11 16Z"
      fill="#E95B4E"
    />
    <ellipse cx="15" cy="19" rx="3.5" ry="2" fill="#F6B7A9" opacity="0.6" />
    {/* Green Stem & Leaves */}
    <path
      d="M20 7V13"
      stroke="#315C4D"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M20 12C18 10 14 10 13 12C15 13 18 13.5 20 13"
      fill="#315C4D"
    />
    <path
      d="M20 12C22 10 26 10 27 12C25 13 22 13.5 20 13"
      fill="#315C4D"
    />
    <path
      d="M20 13C19 14.5 17 16 16 17C17.5 16 19.5 15 20 13"
      fill="#315C4D"
    />
    <path
      d="M20 13C21 14.5 23 16 24 17C22.5 16 20.5 15 20 13"
      fill="#315C4D"
    />
  </svg>
);

const LeafSprigIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M8 32C12 28 18 20 28 10"
      stroke="#315C4D"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M28 10C24 10 20 12 18 16C22 16 26 14 28 10Z"
      fill="#A8C98D"
    />
    <path
      d="M20 18C16 19 13 22 12 26C16 25 19 22 20 18Z"
      fill="#315C4D"
    />
    <path
      d="M25 13C27 16 30 18 34 18C33 14 30 12 25 13Z"
      fill="#A8C98D"
    />
  </svg>
);

const SpringBloomIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="18" cy="18" r="3.5" fill="#F6D96B" />
    <circle cx="18" cy="10" r="4" fill="#F6B7A9" opacity="0.9" />
    <circle cx="25.5" cy="14" r="4" fill="#F6B7A9" opacity="0.9" />
    <circle cx="23" cy="24" r="4" fill="#F6B7A9" opacity="0.9" />
    <circle cx="13" cy="24" r="4" fill="#F6B7A9" opacity="0.9" />
    <circle cx="10.5" cy="14" r="4" fill="#F6B7A9" opacity="0.9" />
  </svg>
);

// Botanical watermark illustrations for product cards
const AromaticHerbsWatermark: React.FC<{ className?: string }> = ({ className = 'w-36 h-36' }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* Central Rosemary / Thyme Branch */}
    <path d="M20 105C35 85 55 60 75 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M75 25C76 18 84 16 88 20C88 26 82 28 75 25Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M68 36C75 32 82 35 83 40C80 43 72 41 68 36Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M62 45C55 42 50 46 51 51C55 52 61 49 62 45Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M53 58C60 55 67 58 67 63C63 65 56 63 53 58Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M47 67C40 64 35 68 36 73C40 74 46 71 47 67Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M38 79C45 76 52 80 51 85C47 87 41 84 38 79Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.4" />
    {/* Secondary arched sprig */}
    <path d="M35 110C45 92 65 78 95 65" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M95 65C102 62 106 66 104 71C99 72 95 68 95 65Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.4" />
    <path d="M82 72C88 68 93 72 92 76C87 78 83 75 82 72Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.4" />
    <path d="M70 78C65 75 62 80 64 84C68 85 71 81 70 78Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.4" />
    <path d="M58 87C64 84 68 88 67 92C62 93 59 90 58 87Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.4" />
    {/* Delicate buds blooming */}
    <path d="M45 98C58 75 70 52 82 38" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.5" />
    <circle cx="85" cy="35" r="2.2" fill="currentColor" />
    <circle cx="80" cy="42" r="1.8" fill="currentColor" />
    <circle cx="89" cy="40" r="1.6" fill="currentColor" />
  </svg>
);

const SpecialBotanicalsWatermark: React.FC<{ className?: string }> = ({ className = 'w-36 h-36' }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* Gírgola / Oyster Mushroom */}
    <path
      d="M32 58C32 40 48 26 72 24C92 22 102 32 104 42C106 52 96 60 76 62C54 64 34 68 32 58Z"
      stroke="currentColor"
      strokeWidth="1.8"
      fill="currentColor"
      fillOpacity="0.08"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M48 55C54 48 64 38 74 34" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" strokeLinecap="round" />
    <path d="M56 57C64 50 74 42 84 39" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" strokeLinecap="round" />
    <path d="M66 59C74 53 84 48 93 47" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" strokeLinecap="round" />
    <path d="M78 60C85 57 93 54 99 55" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" strokeLinecap="round" />
    {/* Mushroom Stem */}
    <path
      d="M48 58C46 68 44 82 40 96C46 98 52 97 54 94C56 84 58 72 60 61"
      stroke="currentColor"
      strokeWidth="1.8"
      fill="currentColor"
      fillOpacity="0.05"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Small Companion Mushroom */}
    <path
      d="M22 72C22 62 32 52 46 51C56 50 63 56 61 63C59 69 50 74 38 75C26 76 22 78 22 72Z"
      stroke="currentColor"
      strokeWidth="1.6"
      fill="currentColor"
      fillOpacity="0.08"
      strokeLinecap="round"
    />
    <path d="M32 70C36 65 42 60 48 58" stroke="currentColor" strokeWidth="1.1" strokeOpacity="0.6" strokeLinecap="round" />
    <path d="M38 72C43 68 50 64 55 64" stroke="currentColor" strokeWidth="1.1" strokeOpacity="0.6" strokeLinecap="round" />
    <path d="M30 73C28 82 25 90 20 100C24 101 29 101 32 98C34 89 36 82 38 74" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* Exotic Tendril / Root */}
    <path
      d="M52 94C62 93 72 98 80 94C88 90 92 82 98 84C102 85 105 90 103 94C100 100 90 99 82 103C74 107 64 103 54 102"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeDasharray="2 1.5"
    />
    <circle cx="98" cy="84" r="2.2" fill="currentColor" fillOpacity="0.4" />
  </svg>
);

const FreedomChoiceWatermark: React.FC<{ className?: string }> = ({ className = 'w-36 h-36' }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* Delicate basket weave / autonomy arc */}
    <path d="M18 105C32 96 54 90 92 90" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 3" opacity="0.6" />
    <path d="M28 112C48 108 72 104 102 96" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />
    {/* Main free-growing botanical branch */}
    <path d="M30 108C42 84 58 56 86 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Leaves with soft fill and organic outline */}
    <path d="M86 28C96 22 104 28 101 37C92 39 86 33 86 28Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.4" />
    <path d="M72 44C84 38 90 44 88 53C79 55 73 48 72 44Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.4" />
    <path d="M62 58C52 52 46 59 49 67C57 66 61 59 62 58Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.4" />
    <path d="M54 74C66 70 71 77 68 85C60 85 55 78 54 74Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.4" />
    <path d="M44 88C34 84 30 91 34 98C41 97 44 91 44 88Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.4" />
    {/* Subtle sunburst / freedom rays */}
    <circle cx="94" cy="24" r="2.5" fill="currentColor" fillOpacity="0.4" />
    <path d="M94 14L94 18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M104 24L100 24" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M101 17L98 20" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

export const Home: React.FC<HomeProps> = ({ onNavigate, onOpenLocationModal }) => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full text-[#26332D]">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Fondo Crema #FFF8ED con acentos botánicos orgánicos) */}
      {/* ========================================================================= */}
      <section
        id="hero-section"
        className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-32 bg-[#FFF8ED] overflow-hidden"
      >
        {/* Soft Organic Atmospheric Glows */}
        <div className="absolute top-6 right-[-8%] w-[28rem] h-[28rem] bg-[#F6B7A9]/20 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/2 left-[-12%] w-[26rem] h-[26rem] bg-[#A8C98D]/25 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-6 right-1/4 w-80 h-80 bg-[#F6D96B]/25 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 z-10">
              {/* Organic Eyebrow with Tomato Accent */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#315C4D]/10 text-[#315C4D] text-xs sm:text-sm font-semibold tracking-wide border border-[#315C4D]/15 shadow-2xs">
                <TomatoIcon className="w-4 h-4 shrink-0" />
                <span>Fresco · diferente · a tu manera</span>
              </div>

              {/* Título Principal con Trazo Orgánico */}
              <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-[#26332D] leading-[1.08]">
                Lo fresco también{' '}
                <span className="relative inline-block text-[#315C4D] italic font-normal">
                  puede sorprenderte.
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3.5 text-[#F6B7A9]"
                    viewBox="0 0 220 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 10C55 3 165 3 217 10"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              {/* Texto principal & complementario */}
              <div className="space-y-3.5 max-w-xl">
                <p className="text-xl sm:text-2xl text-[#26332D] font-medium leading-relaxed font-display">
                  Frutas, verduras y sabores que conocés. Y otros que quizás todavía no.
                </p>
                <p className="text-base sm:text-lg text-[#26332D]/80 leading-relaxed font-sans">
                  Recorré, elegí cuánto llevar y descubrí productos que no siempre encontrás en una verdulería tradicional.
                </p>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 sm:pt-3 pb-2 sm:pb-4">
                <button
                  id="hero-descubri-variedad-btn"
                  onClick={() => scrollToSection('seccion-productos')}
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#315C4D] hover:bg-[#25483c] text-[#FFF8ED] text-base font-semibold transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
                >
                  <span>Descubrí nuestra variedad</span>
                  <ArrowRight className="w-4 h-4 text-[#F6D96B] transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button
                  id="hero-como-funciona-btn"
                  onClick={() => scrollToSection('seccion-como-funciona')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/90 hover:bg-[#FFF2DE] text-[#26332D] text-base font-semibold border border-[#E8D7C0] transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-xs"
                >
                  <span>Cómo funciona</span>
                </button>
              </div>
            </div>

            {/* Right Hero Image Editorial Composition (Protagonista Fotográfico) */}
            <div className="lg:col-span-6 relative">
              {/* Organic colored backdrop shapes - calidez botánica detrás del marco */}
              <div className="absolute -top-8 -left-8 w-36 h-36 rounded-full bg-[#F6D96B]/60 -z-10 blur-sm pointer-events-none" />
              <div className="absolute -bottom-8 -right-6 w-48 h-48 rounded-[3rem] bg-[#F6B7A9]/60 -z-10 blur-xs pointer-events-none" />
              <div className="absolute top-1/2 -right-8 w-28 h-28 rounded-full bg-[#A8C98D]/50 -z-10 blur-xs pointer-events-none" />

              {/* Marco Fotográfico Protagonista - Bordes redondeados, sin textos encima, respetando proporciones y encuadre */}
              <div
                id="hero-image-container"
                className="relative p-2.5 sm:p-3 bg-white/95 backdrop-blur-xs rounded-[2.25rem] sm:rounded-[2.75rem] border border-[#E8D7C0] shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="overflow-hidden rounded-[1.75rem] sm:rounded-[2.25rem] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] xl:aspect-[16/11] w-full bg-[#FFF8ED]">
                  <img
                    id="hero-verduleria-img"
                    src="/hero-verduleria.png"
                    alt="Interior luminoso de Mercado Primavera con cajones de madera natural repletos de frutas y verduras frescas de estación"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Franja horizontal de beneficios de apoyo (Secundarios, equilibrados, sin competir con los CTA principales) */}
          <div
            id="hero-beneficios-franja"
            className="mt-14 sm:mt-18 lg:mt-24 pt-7 sm:pt-9 border-t border-[#E8D7C0]/70"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8 items-center">
              {/* Beneficio 1 */}
              <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm text-[#26332D]/75 font-sans">
                <Scale className="w-4 h-4 text-[#315C4D] shrink-0" />
                <span className="font-medium text-[#26332D]/85">Llevá solo lo que necesitás</span>
              </div>

              {/* Beneficio 2 */}
              <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm text-[#26332D]/75 font-sans">
                <Leaf className="w-4 h-4 text-[#315C4D] shrink-0" />
                <span className="font-medium text-[#26332D]/85">Productos de estación</span>
              </div>

              {/* Beneficio 3 */}
              <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm text-[#26332D]/75 font-sans">
                <HeartHandshake className="w-4 h-4 text-[#315C4D] shrink-0" />
                <span className="font-medium text-[#26332D]/85">Atención cercana</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECCIÓN PRESENTACIÓN (Fondo Pistacho / Verde Claro #EDF5E7) */}
      {/* ========================================================================= */}
      <section
        id="seccion-presentacion"
        className="py-20 sm:py-28 bg-[#EDF5E7] border-y border-[#A8C98D]/40 relative overflow-hidden"
      >
        {/* Subtle leaf watermark */}
        <div className="absolute -right-16 top-10 opacity-10 pointer-events-none">
          <LeafSprigIcon className="w-80 h-80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Foto Protagonista con marco orgánico */}
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-[#A8C98D]/40 -z-10 blur-xs pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#FEF8DC] -z-10 blur-xs pointer-events-none" />

              <div
                id="quienes-somos-image-container"
                className="p-2.5 sm:p-3 bg-white/95 backdrop-blur-xs rounded-[2.5rem] rounded-tl-xl border border-[#A8C98D]/60 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="overflow-hidden rounded-[2rem] rounded-tl-lg aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] xl:aspect-[16/11] w-full bg-[#EDF5E7]">
                  <img
                    id="quienes-somos-local-img"
                    src="/quienes-somos-local.png"
                    alt="Vista amplia y luminosa de los pasillos y cajones accesibles de Mercado Primavera para recorrer con calma"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Columna Editorial de Texto con Aire y Tono Positivo */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-[#315C4D] font-bold px-3.5 py-1.5 bg-white/80 rounded-full border border-[#A8C98D]/60">
                <Leaf className="w-3.5 h-3.5 text-[#315C4D]" />
                <span>La experiencia Primavera</span>
              </div>

              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#26332D] leading-[1.15]">
                Una verdulería para recorrer sin apuro
              </h2>

              <p className="text-lg sm:text-xl text-[#26332D]/90 leading-relaxed font-sans">
                Creamos un espacio donde elegir frutas y verduras se vuelve parte de la experiencia. Vos decidís qué llevar, cuánto llevar y qué nuevo sabor querés probar.
              </p>

              {/* Bloque editorial limpio y visual (sin testimonios negativos) */}
              <div className="p-6 rounded-3xl bg-white/80 border border-[#A8C98D]/50 shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2 text-[#315C4D] font-serif-title text-lg font-semibold">
                  <SpringBloomIcon className="w-5 h-5" />
                  <span>Cercanía, luz y disfrute</span>
                </div>
                <p className="text-sm sm:text-base text-[#26332D]/80 leading-relaxed font-sans">
                  Mesadas bajas, cajones de madera al alcance de tu mano, luz natural y el aroma auténtico de la cosecha fresca. Un espacio donde hacer las compras vuelve a ser un lindo momento del día.
                </p>
              </div>

              <div className="pt-2">
                <button
                  id="presentacion-conoce-mas-btn"
                  onClick={() => onNavigate('quienes-somos')}
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#315C4D] hover:bg-[#25483c] text-[#FFF8ED] text-sm font-semibold transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
                >
                  <span>Conocé nuestra historia</span>
                  <ArrowRight className="w-4 h-4 text-[#F6D96B] transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECCIÓN MANIFIESTO (Fondo Amarillo Manteca #FEF8DC - Composición Editorial) */}
      {/* ========================================================================= */}
      <section
        id="seccion-destacados"
        className="py-12 sm:py-16 lg:py-20 bg-[#FEF8DC] border-b border-[#F6D96B]/50 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid Editorial:
              COLUMNA IZQUIERDA (lg:col-span-7): Encabezado + Card 01 ("Elegís vos")
              COLUMNA DERECHA (lg:col-span-5): Card 02 ("Llevás lo que necesitás") + Card 03 ("Siempre hay algo nuevo")
          */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
            {/* COLUMNA IZQUIERDA: Encabezado arriba + Card 01 abajo */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-5 lg:gap-6">
              {/* 1. ENCABEZADO INTEGRADO */}
              <div className="space-y-2 sm:space-y-2.5">
                <span className="text-xs uppercase font-mono tracking-widest text-[#E95B4E] font-bold bg-white/70 px-3 py-1 rounded-full self-start inline-block">
                  Manifiesto de compra
                </span>
                <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#26332D] leading-tight">
                  Una forma más libre de llenar tu canasta
                </h2>
                <p className="text-sm sm:text-base text-[#26332D]/75 font-sans leading-relaxed">
                  Un enfoque pensado para tu autonomía, tu cocina y tus tiempos.
                </p>
              </div>

              {/* 2. CARD 01 "Elegís vos" (flex-1 para igualar la altura total con la columna derecha) */}
              <div className="bg-white/90 border-2 border-[#F6D96B] rounded-[2.25rem] sm:rounded-[2.5rem] p-5 sm:p-6 lg:p-7 flex-1 flex flex-col justify-between relative overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 group">
                {/* Ilustración vegetal lineal sutil en marca de agua */}
                <FreedomChoiceWatermark className="absolute -right-3 -bottom-3 sm:right-2 sm:bottom-2 w-32 h-32 sm:w-40 sm:h-40 text-[#F6D96B] opacity-25 pointer-events-none transition-transform duration-500 group-hover:scale-105 z-0" />

                {/* Número 01 Superior */}
                <div className="absolute top-5 right-5 sm:top-6 sm:right-6 z-10">
                  <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#F6D96B] text-[#26332D] flex items-center justify-center font-serif-title text-lg sm:text-xl font-bold group-hover:scale-105 transition-transform">
                    01
                  </span>
                </div>

                {/* Contenido Card 01 */}
                <div className="space-y-3 sm:space-y-3.5 max-w-xl z-10">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#315C4D] font-bold bg-[#EDF5E7] px-3.5 py-1.5 rounded-full">
                    <TomatoIcon className="w-4 h-4" />
                    <span>Concepto central · Autonomía total</span>
                  </div>

                  <h3 className="font-serif-title text-2xl sm:text-3xl lg:text-[2.2rem] font-semibold text-[#26332D] leading-tight">
                    Elegís vos
                  </h3>

                  <p className="text-sm sm:text-base text-[#26332D]/85 leading-relaxed font-sans">
                    Nadie elige por vos detrás de un mostrador alto. Podés mirar con calma, tocar con cuidado, oler la albahaca recién cortada y llevarte exactamente las piezas que te tentaron para hoy.
                  </p>

                  {/* Chips */}
                  <div className="pt-1.5 sm:pt-2 flex flex-wrap gap-2 sm:gap-2.5">
                    <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FFF8ED] text-xs font-medium text-[#26332D] border border-[#E8D7C0]">
                      ✓ Cajones abiertos a la vista
                    </span>
                    <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FFF8ED] text-xs font-medium text-[#26332D] border border-[#E8D7C0]">
                      ✓ Carteles claros con maduración
                    </span>
                    <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FFF8ED] text-xs font-medium text-[#26332D] border border-[#E8D7C0]">
                      ✓ Tu propio ritmo
                    </span>
                  </div>
                </div>

                {/* Pie Card 01 */}
                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-[#F6D96B]/50 flex items-center justify-between z-10">
                  <span className="text-xs font-mono text-[#26332D]/60 uppercase tracking-wider">
                    Libertad en cada visita
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#315C4D] flex items-center gap-1.5">
                    Mirá, sentí y elegí
                  </span>
                </div>

                {/* Destello ambiental sutil */}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#F6D96B]/15 rounded-full blur-xl pointer-events-none" />
              </div>
            </div>

            {/* COLUMNA DERECHA: Card 02 arriba + Card 03 abajo */}
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5 h-full">
              {/* CARD 02 "Llevás lo que necesitás" */}
              <div className="bg-[#FDE8E3] border border-[#F6B7A9] rounded-[2rem] p-5 sm:p-6 flex-1 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:shadow-xs">
                <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#E95B4E] font-bold bg-white/80 px-2.5 py-1 rounded-full">
                    SOLO LO QUE NECESITÁS
                  </span>
                  <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F6B7A9] text-[#26332D] flex items-center justify-center font-serif-title text-base sm:text-lg font-bold">
                    02
                  </span>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="font-serif-title text-xl sm:text-2xl font-semibold text-[#26332D]">
                    Llevás lo que necesitás
                  </h3>
                  <p className="text-xs sm:text-sm text-[#26332D]/85 leading-relaxed font-sans">
                    ¿Vivís solo y querés dos tomates y una manzana? Perfecto. ¿Cocinás un guiso para diez? También. Acá no hay paquetes forzados ni cantidades mínimas.
                  </p>
                </div>

                <div className="mt-3.5 sm:mt-4 p-2.5 sm:p-3 rounded-2xl bg-white/70 border border-[#F6B7A9]/60 text-xs text-[#26332D]/80 flex items-center justify-between">
                  <span>Pesás lo justo · Pagás por peso exacto</span>
                  <span className="font-bold text-[#E95B4E]">La cantidad la elegís vos</span>
                </div>
              </div>

              {/* CARD 03 "Siempre hay algo nuevo" */}
              <div className="bg-[#EDF5E7] border border-[#A8C98D] rounded-[2rem] p-5 sm:p-6 flex-1 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:shadow-xs">
                <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#315C4D] font-bold bg-white/80 px-2.5 py-1 rounded-full">
                    Curiosidad culinaria
                  </span>
                  <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#A8C98D] text-[#315C4D] flex items-center justify-center font-serif-title text-base sm:text-lg font-bold">
                    03
                  </span>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="font-serif-title text-xl sm:text-2xl font-semibold text-[#26332D]">
                    Siempre hay algo nuevo
                  </h3>
                  <p className="text-xs sm:text-sm text-[#26332D]/85 leading-relaxed font-sans">
                    Además de la papa rica y las frutas cotidianas, sumamos variedades poco comunes: tomates reliquia, kale toscano, hongos frescos de cultivo y aromáticas para inspirarte.
                  </p>
                </div>

                <div className="mt-3.5 sm:mt-4 p-2.5 sm:p-3 rounded-2xl bg-white/70 border border-[#A8C98D]/60 text-xs text-[#26332D]/80 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E95B4E] shrink-0" />
                  <span>Te compartimos ideas de recetas al paso si querés probar.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECCIÓN PRODUCTOS (Fondo Lila / Lavanda Pastel #F2EEFA - Collage Editorial) */}
      {/* ========================================================================= */}
      <section
        id="seccion-productos"
        className="py-12 sm:py-16 lg:py-20 bg-[#F2EEFA] border-b border-[#C9B8E8]/60 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header con botón a página de productos */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 lg:mb-12 gap-5 sm:gap-6">
            <div className="max-w-2xl space-y-2 sm:space-y-2.5">
              <span className="text-xs uppercase font-mono tracking-widest text-[#315C4D] font-bold bg-white/80 px-3 py-1 rounded-full inline-block">
                Nuestra selección
              </span>
              <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#26332D] leading-tight">
                Lo de siempre. Y lo que no esperabas encontrar.
              </h2>
              <p className="text-sm sm:text-base text-[#26332D]/75 font-sans">
                Una selección viva que rota semana a semana según el punto óptimo de sabor y la cosecha de los productores.
              </p>
            </div>

            <button
              id="productos-conoce-btn"
              onClick={() => onNavigate('productos')}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#315C4D] hover:bg-[#25483c] text-[#FFF8ED] text-sm font-semibold transition-all duration-300 shadow-xs hover:shadow-md self-start md:self-end shrink-0 cursor-pointer"
            >
              <span>Conocé nuestros productos</span>
              <ArrowRight className="w-4 h-4 text-[#F6D96B] transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Collage Editorial Asimétrico (Dos columnas equilibradas con fotografía panorámica e ilustraciones botánicas) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5 items-stretch">
            {/* COLLAGE 1: Frutas y Verduras de estación (Columna Izquierda Protagonista) */}
            <div className="md:col-span-7 bg-white rounded-[2rem] sm:rounded-[2.25rem] p-4.5 sm:p-5 lg:p-5.5 border border-[#C9B8E8]/70 flex flex-col justify-between relative shadow-xs hover:shadow-sm transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#FEF8DC] border border-[#F6D96B] text-xs font-mono uppercase tracking-wider text-[#26332D] font-semibold">
                    Cosecha en su mejor momento
                  </span>
                  <SunMedium className="w-5 h-5 text-[#E95B4E]" />
                </div>

                <h3 className="font-serif-title text-xl sm:text-2xl lg:text-[1.55rem] font-semibold text-[#26332D] mb-1 sm:mb-1.5 leading-snug">
                  Frutas & Verduras de estación
                </h3>
                <p className="text-xs sm:text-sm text-[#26332D]/80 leading-relaxed font-sans mb-3">
                  Lo que la tierra da hoy: cítricos dulces, hojas crujientes, tomates aromáticos y frutos de carozo cosechados maduros.
                </p>

                {/* Fotografía Protagonista de Frutas y Verduras de Estación (Panorámica y equilibrada) */}
                <div
                  id="productos-temporada-img-container"
                  className="rounded-xl sm:rounded-2xl overflow-hidden border border-[#E8D7C0] mb-3 aspect-[16/7.5] sm:aspect-[16/7.8] lg:aspect-[2.25/1] w-full bg-[#FFF8ED]"
                >
                  <img
                    id="productos-temporada-img"
                    src="/productos-temporada.png"
                    alt="Abundancia y colorido de frutas y verduras frescas de estación en Mercado Primavera"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Sample pills */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 sm:pt-2.5 border-t border-black/5">
                <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#F2EEFA] text-xs font-medium text-[#26332D]">
                  Ciruelas remolacha
                </span>
                <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#EDF5E7] text-xs font-medium text-[#26332D]">
                  Tomates reliquia
                </span>
                <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#FEF8DC] text-xs font-medium text-[#26332D]">
                  Higos negros
                </span>
                <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#FDE8E3] text-xs font-medium text-[#26332D]">
                  Duraznos criollos
                </span>
              </div>
            </div>

            {/* COLLAGE 2 & 3: Columna Derecha equilibrada (Dos cards de idéntica altura con marca de agua botánica sutil) */}
            <div className="md:col-span-5 flex flex-col gap-3 sm:gap-3.5 h-full">
              {/* COLLAGE 2: Hierbas & Aromáticas */}
              <div className="bg-[#315C4D] text-[#FFF8ED] rounded-[1.75rem] sm:rounded-[2rem] p-4.5 sm:p-5 flex-1 flex flex-col justify-between relative overflow-hidden shadow-xs group">
                {/* Ilustración botánica sutil de hojas y ramitas aromáticas en marca de agua */}
                <AromaticHerbsWatermark className="absolute -right-3 -bottom-3 sm:-right-2 sm:-bottom-1 w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 text-[#A8C98D] opacity-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:opacity-25 z-0" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-1 rounded-full bg-[#A8C98D] text-[#315C4D] text-xs font-mono uppercase tracking-wider font-bold">
                      Perfume & Sazón
                    </span>
                    <Utensils className="w-4 h-4 text-[#A8C98D]" />
                  </div>

                  <h3 className="font-serif-title text-base sm:text-lg lg:text-[1.2rem] font-semibold text-[#FFF8ED] mb-1">
                    Hierbas y aromáticas frescas
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FFF8ED]/85 leading-relaxed font-sans max-w-[88%]">
                    Atados vivos recién cortados para transformar cualquier receta cotidiana en algo especial.
                  </p>
                </div>

                <div className="relative z-10 pt-2 sm:pt-2.5 mt-2.5 sm:mt-3 border-t border-white/10 flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-white/10 text-xs font-medium text-[#FFF8ED]">
                    Albahaca morada
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/10 text-xs font-medium text-[#FFF8ED]">
                    Cilantro fresco
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/10 text-xs font-medium text-[#FFF8ED]">
                    Eneldo
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/10 text-xs font-medium text-[#FFF8ED]">
                    Romero serrano
                  </span>
                </div>
              </div>

              {/* COLLAGE 3: Especiales & Variedades */}
              <div className="bg-[#FFF8ED] border border-[#E8D7C0] rounded-[1.75rem] sm:rounded-[2rem] p-4.5 sm:p-5 flex-1 flex flex-col justify-between relative overflow-hidden shadow-xs group">
                {/* Ilustración botánica sutil de hongos de cultivo y raíces exóticas en marca de agua */}
                <SpecialBotanicalsWatermark className="absolute -right-3 -bottom-3 sm:-right-2 sm:-bottom-1 w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 text-[#E95B4E] opacity-15 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:opacity-20 z-0" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-1 rounded-full bg-[#F6B7A9] text-[#26332D] text-xs font-mono uppercase tracking-wider font-bold">
                      Hallazgos únicos
                    </span>
                    <Globe2 className="w-4 h-4 text-[#E95B4E]" />
                  </div>

                  <h3 className="font-serif-title text-base sm:text-lg lg:text-[1.2rem] font-semibold text-[#26332D] mb-1">
                    Especiales & Variedades
                  </h3>
                  <p className="text-xs sm:text-sm text-[#26332D]/80 leading-relaxed font-sans max-w-[88%]">
                    Hongos de cultivo, flores comestibles, papines andinos y pak choi. Ingredientes que inspiran a cocinar distinto.
                  </p>
                </div>

                <div className="relative z-10 pt-2 sm:pt-2.5 mt-2.5 sm:mt-3 border-t border-black/5 flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-[#FEF8DC] text-xs font-medium text-[#26332D]">
                    Gírgolas frescas
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#FDE8E3] text-xs font-medium text-[#26332D]">
                    Papines andinos
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#EDF5E7] text-xs font-medium text-[#26332D]">
                    Pak choi
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#F2EEFA] text-xs font-medium text-[#26332D]">
                    Raíz de cúrcuma
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Banner de Consulta sin datos inventados */}
          <div className="mt-8 sm:mt-9 p-4.5 sm:p-5 rounded-2xl sm:rounded-[1.75rem] bg-white/90 border border-[#C9B8E8]/80 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5 shadow-2xs">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#FEF8DC] text-[#315C4D] flex items-center justify-center shrink-0 border border-[#F6D96B]">
                <Sparkles className="w-5 h-5 text-[#E95B4E]" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-[#26332D]">
                  ¿Buscás alguna fruta o verdura en particular?
                </h4>
                <p className="text-xs sm:text-sm text-[#26332D]/70 font-sans">
                  Escribinos por WhatsApp y te avisamos cuándo ingresa al mercado.
                </p>
              </div>
            </div>
            <button
              id="productos-whatsapp-banner-btn"
              onClick={() => onNavigate('contacto')}
              className="px-5 py-2.5 rounded-full bg-[#315C4D] hover:bg-[#25483c] text-[#FFF8ED] text-xs sm:text-sm font-semibold transition-all cursor-pointer shrink-0"
            >
              Consultar disponibilidad
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECCIÓN CÓMO FUNCIONA (Fondo Crema #FFF8ED - Flujo Visual Continuo) */}
      {/* ========================================================================= */}
      <section
        id="seccion-como-funciona"
        className="pt-4 sm:pt-5 lg:pt-6 pb-16 sm:pb-20 lg:pb-24 bg-[#FFF8ED] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-8 lg:mb-9 space-y-2 sm:space-y-2.5">
            <span className="text-xs uppercase font-mono tracking-widest text-[#315C4D] font-bold bg-[#A8C98D]/30 px-3.5 py-1.5 rounded-full inline-block">
              Paso a paso
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#26332D]">
              Simple, libre y a tu manera
            </h2>
            <p className="text-base sm:text-lg text-[#26332D]/75 font-sans">
              Una experiencia fluida pensada para recorrer y disfrutar sin complicaciones.
            </p>
          </div>

          {/* Flujo Editorial Dinámico y Secuencial: Fila Superior (01-02), Fila Central Protagonista (03), Fila Inferior (04-05) */}
          <div className="max-w-4xl lg:max-w-5xl mx-auto mb-12 sm:mb-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 items-stretch relative">
              
              {/* ============================================================= */}
              {/* FILA SUPERIOR: 01 — Recorré y 02 — Elegí */}
              {/* ============================================================= */}

              {/* PASO 01: Recorré */}
              <div className="rounded-[2rem] sm:rounded-[2.25rem] p-5 sm:p-6 border bg-[#FEF8DC] text-[#26332D] border-[#F6D96B] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md group relative">
                {/* Conector horizontal Desktop/Tablet hacia 02 */}
                <div className="hidden md:flex items-center justify-center absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <div className="w-7 h-7 rounded-full bg-white border border-[#F6D96B] shadow-2xs flex items-center justify-center text-[#26332D]">
                    <ArrowRight className="w-3.5 h-3.5 text-[#26332D]/70" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="font-serif-title text-2xl sm:text-3xl font-bold text-[#26332D]/75">
                      01
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/95 flex items-center justify-center text-[#315C4D] shadow-2xs group-hover:scale-105 transition-transform border border-black/5">
                      <Compass className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="mb-2">
                    <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-[#315C4D] font-bold bg-white/80 px-2.5 py-0.5 rounded-full border border-black/5">
                      Paseo libre
                    </span>
                  </div>

                  <h3 className="font-serif-title text-2xl font-semibold text-[#26332D] mb-2 leading-tight">
                    Recorré
                  </h3>

                  <p className="text-xs sm:text-sm text-[#26332D]/85 leading-relaxed font-sans mb-4">
                    Paseá entre cajones de madera, sentí los aromas frescos y mirá qué llegó hoy.
                  </p>

                  <div className="overflow-hidden rounded-2xl border border-black/10 shadow-2xs group-hover:shadow-xs transition-shadow aspect-4/3 sm:aspect-square bg-[#FEF8DC]/60">
                    <img
                      src="/paso-01-recorre.png"
                      alt="Paseo entre cajones de madera con frutas y verduras frescas en el mercado"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-black/5 text-[11px] font-mono text-[#26332D]/60 flex items-center justify-between">
                  <span className="font-medium">Paso 1 de 5</span>
                  <span className="text-[#315C4D] font-bold flex items-center gap-1">
                    Siguiente: Elegí <ArrowRight className="w-3 h-3 inline" />
                  </span>
                </div>
              </div>

              {/* Conector Mobile entre 01 y 02 */}
              <div className="md:hidden flex justify-center -my-2 z-10">
                <div className="w-6 h-6 rounded-full bg-white border border-black/10 flex items-center justify-center text-[#315C4D] shadow-2xs">
                  <ArrowDown className="w-3 h-3" />
                </div>
              </div>

              {/* PASO 02: Elegí */}
              <div className="rounded-[2rem] sm:rounded-[2.25rem] p-5 sm:p-6 border bg-[#FDE8E3] text-[#26332D] border-[#F6B7A9] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md group relative">
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="font-serif-title text-2xl sm:text-3xl font-bold text-[#26332D]/75">
                      02
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/95 flex items-center justify-center text-[#315C4D] shadow-2xs group-hover:scale-105 transition-transform border border-black/5">
                      <HeartHandshake className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="mb-2">
                    <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-[#315C4D] font-bold bg-white/80 px-2.5 py-0.5 rounded-full border border-black/5">
                      Sin apuro
                    </span>
                  </div>

                  <h3 className="font-serif-title text-2xl font-semibold text-[#26332D] mb-2 leading-tight">
                    Elegí
                  </h3>

                  <p className="text-xs sm:text-sm text-[#26332D]/85 leading-relaxed font-sans mb-4">
                    Tocá, mirá y seleccioná exactamente las piezas que te gustan.
                  </p>

                  <div className="overflow-hidden rounded-2xl border border-black/10 shadow-2xs group-hover:shadow-xs transition-shadow aspect-4/3 sm:aspect-square bg-[#FDE8E3]/60">
                    <img
                      src="/paso-02-elegi.png"
                      alt="Mano seleccionando cuidadosamente un tomate fresco en el mercado"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-black/5 text-[11px] font-mono text-[#26332D]/60 flex items-center justify-between">
                  <span className="font-medium">Paso 2 de 5</span>
                  <span className="text-[#315C4D] font-bold flex items-center gap-1">
                    Siguiente: Servite <ArrowRight className="w-3 h-3 inline" />
                  </span>
                </div>
              </div>

              {/* ============================================================= */}
              {/* CONECTOR EDITORIAL HACIA EL PASO CENTRAL (02 → 03) */}
              {/* ============================================================= */}
              <div className="col-span-1 md:col-span-2 flex items-center justify-center -my-1 sm:-my-2 z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-[#A8C98D]/70 text-[11px] font-mono text-[#315C4D] shadow-2xs">
                  <span className="font-bold text-[#E95B4E]">02</span>
                  <span>→</span>
                  <span className="font-semibold">Momento central del autoservicio</span>
                  <ArrowDown className="w-3 h-3 text-[#315C4D]" />
                </div>
              </div>

              {/* ============================================================= */}
              {/* FILA CENTRAL: 03 — Servite (Card Protagonista) */}
              {/* ============================================================= */}
              <div className="md:col-span-2 rounded-[2.25rem] sm:rounded-[2.5rem] p-5 sm:p-7 lg:p-8 border bg-[#EDF5E7] text-[#26332D] border-[#A8C98D] relative overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 group">
                {/* Resplandor orgánico de fondo */}
                <div className="absolute -right-8 -bottom-8 w-56 h-56 bg-[#A8C98D]/25 rounded-full blur-2xl pointer-events-none" />

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center relative z-10">
                  {/* Contenido Editorial Izquierdo */}
                  <div className="sm:col-span-7 flex flex-col justify-between h-full space-y-4">
                    <div>
                      {/* Barra superior con número 03 y badges */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <span className="font-serif-title text-3xl sm:text-4xl font-bold text-[#315C4D]">
                            03
                          </span>
                          <span className="text-[11px] font-mono uppercase tracking-wider text-[#315C4D] font-bold bg-white/90 px-3 py-1 rounded-full border border-[#A8C98D]/60 shadow-2xs">
                            Tu porción · Momento central
                          </span>
                        </div>
                        <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#315C4D] shadow-2xs border border-[#A8C98D]/60 group-hover:scale-105 transition-transform">
                          <ShoppingBag className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Título y descripción */}
                      <h3 className="font-serif-title text-2xl sm:text-3xl lg:text-[2.2rem] font-semibold text-[#26332D] mb-2 leading-tight">
                        Servite
                      </h3>

                      <p className="text-sm sm:text-base text-[#26332D]/85 leading-relaxed font-sans mb-3.5">
                        Llevás una manzana o cinco kilos: vos armás tu bolsa a tu medida.
                      </p>

                      {/* Chips de autoservicio */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        <span className="px-3 py-1 rounded-full bg-white/85 text-xs font-medium text-[#26332D] border border-[#A8C98D]/50 shadow-2xs">
                          ✓ Vos elegís la cantidad exacta
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/85 text-xs font-medium text-[#26332D] border border-[#A8C98D]/50 shadow-2xs">
                          ✓ Sin mínimos ni paquetes forzados
                        </span>
                      </div>
                    </div>

                    {/* Pie de progreso */}
                    <div className="pt-3 border-t border-[#A8C98D]/40 text-xs font-mono text-[#26332D]/70 flex items-center justify-between">
                      <span className="font-semibold text-[#315C4D]">Paso 3 de 5 · Corazón del mercado</span>
                      <span className="font-semibold text-[#315C4D] flex items-center gap-1">
                        Siguiente: Pesá <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Fotografía Protagonista Derecha */}
                  <div className="sm:col-span-5 overflow-hidden rounded-2xl sm:rounded-3xl border border-[#A8C98D]/60 shadow-xs group-hover:shadow-sm transition-shadow aspect-4/3 sm:aspect-[4/3] lg:aspect-[5/4] bg-[#EDF5E7]/80">
                    <img
                      src="/paso-03-servite.png"
                      alt="Persona sirviéndose frutas frescas en una bolsa en autoservicio"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* ============================================================= */}
              {/* CONECTOR EDITORIAL HACIA EL PESAJE (03 → 04) */}
              {/* ============================================================= */}
              <div className="col-span-1 md:col-span-2 flex items-center justify-center -my-1 sm:-my-2 z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-[#A8C98D]/70 text-[11px] font-mono text-[#315C4D] shadow-2xs">
                  <span className="font-bold text-[#315C4D]">03</span>
                  <span>→</span>
                  <span className="font-semibold">Transparencia en el pesaje</span>
                  <ArrowDown className="w-3 h-3 text-[#315C4D]" />
                </div>
              </div>

              {/* ============================================================= */}
              {/* FILA INFERIOR: 04 — Pesá y 05 — Pagá */}
              {/* ============================================================= */}

              {/* PASO 04: Pesá */}
              <div className="rounded-[2rem] sm:rounded-[2.25rem] p-5 sm:p-6 border bg-[#F2EEFA] text-[#26332D] border-[#C9B8E8] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md group relative">
                {/* Conector horizontal Desktop/Tablet hacia 05 */}
                <div className="hidden md:flex items-center justify-center absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <div className="w-7 h-7 rounded-full bg-white border border-[#C9B8E8] shadow-2xs flex items-center justify-center text-[#26332D]">
                    <ArrowRight className="w-3.5 h-3.5 text-[#26332D]/70" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="font-serif-title text-2xl sm:text-3xl font-bold text-[#26332D]/75">
                      04
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/95 flex items-center justify-center text-[#315C4D] shadow-2xs group-hover:scale-105 transition-transform border border-black/5">
                      <Scale className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="mb-2">
                    <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-[#315C4D] font-bold bg-white/80 px-2.5 py-0.5 rounded-full border border-black/5">
                      A la vista
                    </span>
                  </div>

                  <h3 className="font-serif-title text-2xl font-semibold text-[#26332D] mb-2 leading-tight">
                    Pesá
                  </h3>

                  <p className="text-xs sm:text-sm text-[#26332D]/85 leading-relaxed font-sans mb-4">
                    Nuestras balanzas están a la vista para calcular el precio exacto y transparente.
                  </p>

                  <div className="overflow-hidden rounded-2xl border border-black/10 shadow-2xs group-hover:shadow-xs transition-shadow aspect-4/3 sm:aspect-square bg-[#F2EEFA]/60">
                    <img
                      src="/paso-04-pesa.png"
                      alt="Balanza a la vista mostrando el peso exacto y transparente de los productos"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-black/5 text-[11px] font-mono text-[#26332D]/60 flex items-center justify-between">
                  <span className="font-medium">Paso 4 de 5</span>
                  <span className="text-[#315C4D] font-bold flex items-center gap-1">
                    Siguiente: Pagá <ArrowRight className="w-3 h-3 inline" />
                  </span>
                </div>
              </div>

              {/* Conector Mobile entre 04 y 05 */}
              <div className="md:hidden flex justify-center -my-2 z-10">
                <div className="w-6 h-6 rounded-full bg-white border border-black/10 flex items-center justify-center text-[#315C4D] shadow-2xs">
                  <ArrowDown className="w-3 h-3" />
                </div>
              </div>

              {/* PASO 05: Pagá */}
              <div className="rounded-[2rem] sm:rounded-[2.25rem] p-5 sm:p-6 border bg-[#FFF2DE] text-[#26332D] border-[#E8D7C0] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md group relative">
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="font-serif-title text-2xl sm:text-3xl font-bold text-[#26332D]/75">
                      05
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/95 flex items-center justify-center text-[#315C4D] shadow-2xs group-hover:scale-105 transition-transform border border-black/5">
                      <Smile className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="mb-2">
                    <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-[#315C4D] font-bold bg-white/80 px-2.5 py-0.5 rounded-full border border-black/5">
                      Directo
                    </span>
                  </div>

                  <h3 className="font-serif-title text-2xl font-semibold text-[#26332D] mb-2 leading-tight">
                    Pagá
                  </h3>

                  <p className="text-xs sm:text-sm text-[#26332D]/85 leading-relaxed font-sans mb-4">
                    Pagás por peso exacto, sin paquetes cerrados ni sorpresas en caja.
                  </p>

                  <div className="overflow-hidden rounded-2xl border border-black/10 shadow-2xs group-hover:shadow-xs transition-shadow aspect-4/3 sm:aspect-square bg-[#FFF2DE]/60">
                    <img
                      src="/paso-05-paga.png"
                      alt="Momento del cobro ágil y simple con terminal de pago en el mercado"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-black/5 text-[11px] font-mono text-[#26332D]/60 flex items-center justify-between">
                  <span className="font-medium">Paso 5 de 5</span>
                  <span className="text-[#315C4D] font-bold">
                    ✓ ¡Listo para disfrutar!
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================================= */}
          {/* SECCIÓN BOLSAS / SUSTENTABILIDAD (Integración Orgánica y Visual) */}
          {/* ========================================================================= */}
          <div className="rounded-[2.5rem] bg-[#EDF5E7] border border-[#A8C98D] p-8 sm:p-10 relative overflow-hidden shadow-xs">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#315C4D] font-bold bg-white/80 px-3 py-1 rounded-full">
                  <LeafSprigIcon className="w-4 h-4" />
                  <span>Cuidado del entorno</span>
                </div>

                <h3 className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#26332D]">
                  ¿Tenés tus propias bolsas de tela? Traelas con ganas.
                </h3>

                <p className="text-sm sm:text-base text-[#26332D]/80 font-sans leading-relaxed">
                  Apoyamos la reducción de plásticos de un solo uso. En el mercado también encontrás bolsas de papel kraft reciclado y de tela para llevar tu compra cómoda y cuidada.
                </p>
              </div>

              <div className="md:col-span-4 flex md:justify-end">
                <button
                  id="como-trabajamos-full-btn"
                  onClick={() => onNavigate('como-trabajamos')}
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#315C4D] hover:bg-[#25483c] text-[#FFF8ED] text-sm font-semibold transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer shrink-0"
                >
                  <span>Ver cómo trabajamos</span>
                  <ArrowRight className="w-4 h-4 text-[#F6D96B] transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECCIÓN CTA FINAL (Fondo Rosa Durazno #F6B7A9 - Composición Visual Viva) */}
      {/* ========================================================================= */}
      <section
        id="seccion-cta"
        className="py-20 sm:py-28 bg-[#F6B7A9] border-t border-[#e29e8e] relative overflow-hidden text-[#26332D]"
      >
        {/* Formas orgánicas y resplandores de fondo */}
        <div className="absolute -top-12 -left-12 w-56 h-56 rounded-full bg-[#F6D96B]/50 blur-xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-[3rem] bg-[#FFF8ED]/40 blur-2xl pointer-events-none" />

        {/* ============================================================== */}
        {/* COMPOSICIONES DECORATIVAS ORGÁNICAS (Enmarcan el CTA con aire) */}
        {/* ============================================================== */}

        {/* 1. Tomate fresco de huerta (arriba izquierda - margen seguro >= 24px) */}
        <div className="absolute top-4 sm:top-8 lg:top-10 left-4 sm:left-8 lg:left-12 xl:left-16 z-0 pointer-events-none select-none">
          <div className="w-14 h-[37px] sm:w-24 sm:h-16 md:w-36 md:h-24 lg:w-44 lg:h-[117px] xl:w-52 xl:h-[138px] drop-shadow-sm sm:drop-shadow-md transform -rotate-2 transition-transform duration-500">
            <img
              src="/cta-tomate.png"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* 2. Cítrico fresco (arriba derecha - margen seguro >= 24px) */}
        <div className="absolute top-4 sm:top-8 lg:top-10 right-4 sm:right-8 lg:right-12 xl:right-16 z-0 pointer-events-none select-none">
          <div className="w-14 h-[37px] sm:w-24 sm:h-16 md:w-36 md:h-24 lg:w-44 lg:h-[117px] xl:w-52 xl:h-[138px] drop-shadow-sm sm:drop-shadow-md transform rotate-3 transition-transform duration-500">
            <img
              src="/cta-citrico.png"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* 3. Frutas raras y especiales (abajo izquierda - movida hacia adentro y arriba, visible completa) */}
        <div className="hidden sm:block absolute bottom-8 md:bottom-10 lg:bottom-12 left-6 sm:left-8 lg:left-12 xl:left-16 z-0 pointer-events-none select-none">
          <div className="sm:w-24 sm:h-16 md:w-32 md:h-[85px] lg:w-40 lg:h-[106px] xl:w-48 xl:h-[128px] drop-shadow-md transform rotate-1 transition-transform duration-500">
            <img
              src="/cta-frutas-raras.png"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* 4. Durazno criollo fresco (abajo derecha - movido hacia adentro y arriba, visible completo) */}
        <div className="hidden sm:block absolute bottom-8 md:bottom-10 lg:bottom-12 right-6 sm:right-8 lg:right-12 xl:right-16 z-0 pointer-events-none select-none">
          <div className="sm:w-24 sm:h-16 md:w-32 md:h-[85px] lg:w-40 lg:h-[106px] xl:w-48 xl:h-[128px] drop-shadow-md transform -rotate-3 transition-transform duration-500">
            <img
              src="/cta-durazno.png"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 text-[#26332D] text-xs sm:text-sm font-semibold tracking-wide border border-black/5 shadow-2xs">
            <SpringBloomIcon className="w-4 h-4" />
            <span>Te esperamos en el barrio</span>
          </div>

          {/* Poetic Quote */}
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#26332D] leading-[1.12] max-w-3xl mx-auto">
            “Capaz venís por tomates y descubrís tu nueva fruta favorita.”
          </h2>

          <p className="text-base sm:text-xl text-[#26332D]/85 max-w-xl mx-auto font-sans leading-relaxed">
            Pasá a caminar, mirar los cajones y llevarte lo justo. Te esperamos muy pronto para inaugurar juntos.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              id="cta-veni-a-conocernos-btn"
              onClick={onOpenLocationModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#315C4D] hover:bg-[#25483c] text-[#FFF8ED] text-base font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>Vení a conocernos</span>
              <ArrowRight className="w-4 h-4 text-[#F6D96B]" />
            </button>

            <button
              id="cta-contacto-btn"
              onClick={onOpenLocationModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-[#FFF8ED] text-[#26332D] text-base font-semibold border border-black/10 transition-all duration-300 cursor-pointer shadow-2xs hover:shadow-xs"
            >
              <span>Dirección y horarios</span>
            </button>
          </div>

          {/* Clean Neutral Placeholders Strip */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#26332D]/80">
            <span className="px-3 py-1 rounded-full bg-white/40">
              Dirección próximamente
            </span>
            <span>·</span>
            <span className="px-3 py-1 rounded-full bg-white/40">
              Horarios
            </span>
            <span>·</span>
            <span className="px-3 py-1 rounded-full bg-white/40">
              Instagram
            </span>
            <span>·</span>
            <span className="px-3 py-1 rounded-full bg-white/40">
              WhatsApp
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
