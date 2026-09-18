import React from 'react';
import { PageId } from '../types.ts';
import {
  ArrowLeft,
  Sparkles,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Map as MapIcon,
  Navigation,
} from 'lucide-react';

interface PageProps {
  onNavigate: (page: PageId) => void;
  onOpenLocationModal: () => void;
}

export const ContactPage: React.FC<PageProps> = ({ onNavigate, onOpenLocationModal }) => {
  return (
    <div className="bg-[#FFF8ED] text-[#26332D]">
      {/* ========================================================================= */}
      {/* 1. SECCIÓN PRINCIPAL: INTRODUCCIÓN CÁLIDA & EDITORIAL                    */}
      {/* ========================================================================= */}
      <section
        id="contacto-intro"
        className="pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 bg-[#FDE8E3] border-b border-[#F6B7A9]/60"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navegación de retorno y badge */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <button
              onClick={() => onNavigate('inicio')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#315C4D] hover:text-[#25483c] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al inicio</span>
            </button>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#F6B7A9] text-[#26332D] text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#E95B4E]" />
              <span>Visitas & consultas</span>
            </span>
          </div>

          {/* Encabezado Editorial requerido */}
          <div className="max-w-2xl mb-8 sm:mb-10 space-y-2 sm:space-y-3">
            <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#26332D] leading-[1.15]">
              Contacto
            </h1>

            {/* 1. Frase solicitada obligatoria */}
            <p className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#315C4D] leading-snug">
              “Cuando quieras, pasá a recorrer”
            </p>

            {/* Texto introductorio solicitado */}
            <p className="text-base sm:text-lg text-[#26332D]/85 font-sans leading-relaxed">
              Te esperamos para que elijas, pruebes y descubras.
            </p>
          </div>

          {/* ========================================================================= */}
          {/* 2. BLOQUE DE INFORMACIÓN (4 accesos compactos: 2x2 desktop, 1 col mobile) */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 max-w-3xl mb-10 sm:mb-12">
            {/* Acceso 1: Dirección */}
            <button
              onClick={onOpenLocationModal}
              className="p-4 sm:p-4.5 rounded-2xl bg-white/90 border border-[#F6B7A9] hover:border-[#315C4D]/40 transition-all duration-200 shadow-2xs hover:shadow-xs text-left cursor-pointer flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FDE8E3] flex items-center justify-center text-[#E95B4E] shrink-0 group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#26332D]/60 uppercase tracking-wider block font-semibold">
                    Dirección
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#26332D]">
                    Dirección próximamente
                  </span>
                </div>
              </div>
              <span className="text-xs font-semibold text-[#315C4D] group-hover:translate-x-0.5 transition-transform shrink-0 ml-2">
                Ver detalle →
              </span>
            </button>

            {/* Acceso 2: Horarios */}
            <button
              onClick={onOpenLocationModal}
              className="p-4 sm:p-4.5 rounded-2xl bg-white/90 border border-[#F6B7A9] hover:border-[#315C4D]/40 transition-all duration-200 shadow-2xs hover:shadow-xs text-left cursor-pointer flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EDF5E7] flex items-center justify-center text-[#315C4D] shrink-0 group-hover:scale-105 transition-transform">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#26332D]/60 uppercase tracking-wider block font-semibold">
                    Horarios
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#26332D]">
                    Horarios
                  </span>
                </div>
              </div>
              <span className="text-xs font-semibold text-[#315C4D] group-hover:translate-x-0.5 transition-transform shrink-0 ml-2">
                Consultar →
              </span>
            </button>

            {/* Acceso 3: WhatsApp */}
            <a
              href="https://wa.me/5491145892311"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-4.5 rounded-2xl bg-white/90 border border-[#F6B7A9] hover:border-[#315C4D]/40 transition-all duration-200 shadow-2xs hover:shadow-xs text-left cursor-pointer flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EDF5E7] flex items-center justify-center text-[#315C4D] shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#26332D]/60 uppercase tracking-wider block font-semibold">
                    WhatsApp
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#26332D]">
                    Escribinos
                  </span>
                </div>
              </div>
              <span className="text-xs font-semibold text-[#315C4D] group-hover:translate-x-0.5 transition-transform shrink-0 ml-2">
                Chatear →
              </span>
            </a>

            {/* Acceso 4: Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-4.5 rounded-2xl bg-white/90 border border-[#F6B7A9] hover:border-[#315C4D]/40 transition-all duration-200 shadow-2xs hover:shadow-xs text-left cursor-pointer flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FEF8DC] flex items-center justify-center text-[#E95B4E] shrink-0 group-hover:scale-105 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#26332D]/60 uppercase tracking-wider block font-semibold">
                    Instagram
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#26332D]">
                    Seguinos
                  </span>
                </div>
              </div>
              <span className="text-xs font-semibold text-[#315C4D] group-hover:translate-x-0.5 transition-transform shrink-0 ml-2">
                Novedades →
              </span>
            </a>
          </div>

          {/* ========================================================================= */}
          {/* 3. IMAGEN PRINCIPAL (Horizontal grande: 80% a 100% del ancho útil)        */}
          {/* ========================================================================= */}
          <div
            id="contacto-local-img-container"
            className="w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8D7C0] shadow-sm hover:shadow-md transition-shadow bg-[#FFF8ED]"
          >
            <div className="w-full aspect-[16/9] sm:aspect-[16/7.5] lg:aspect-[2.1/1] overflow-hidden">
              <img
                id="contacto-local-img"
                src="/contacto-local.png"
                alt="Frente y entrada luminosa de Mercado Primavera con cajones de madera y espíritu de barrio"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. MAPA (Espacio preparado con bloque placeholder limpio)                 */}
      {/* ========================================================================= */}
      <section
        id="contacto-mapa"
        className="py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="rounded-3xl border-2 border-dashed border-[#A8C98D]/70 bg-white/70 p-8 sm:p-12 lg:p-14 text-center relative overflow-hidden">
          {/* Resplandor suave */}
          <div className="absolute -top-12 -right-12 w-44 h-44 bg-[#A8C98D]/15 rounded-full blur-xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-44 h-44 bg-[#FEF8DC]/60 rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10 max-w-md mx-auto space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#EDF5E7] text-[#315C4D] flex items-center justify-center mx-auto shadow-2xs border border-[#A8C98D]/40">
              <MapIcon className="w-6 h-6" />
            </div>

            <h3 className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#26332D]">
              Mapa próximamente
            </h3>

            <p className="text-xs sm:text-sm text-[#26332D]/75 font-sans leading-relaxed">
              Estamos terminando de acondicionar el local. Apenas abramos las puertas vas a poder ver la ubicación exacta y las mejores rutas para venir caminando, en bici o en transporte.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenLocationModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#26332D] text-xs font-semibold border border-[#E8D7C0] hover:bg-[#FFF2DE] transition-all cursor-pointer shadow-2xs"
              >
                <Navigation className="w-3.5 h-3.5 text-[#315C4D]" />
                <span>Consultar zona prevista</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CTA FINAL CÁLIDO & ACCIONABLE                                          */}
      {/* ========================================================================= */}
      <section
        id="contacto-cta"
        className="pb-16 sm:pb-20 lg:pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#315C4D] text-[#FFF8ED] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-2 text-center sm:text-left max-w-xl">
            <span className="text-xs uppercase font-mono tracking-widest text-[#F6D96B] font-bold bg-white/10 px-3 py-1 rounded-full inline-block">
              Vení a descubrir
            </span>
            <h3 className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#FFF8ED] leading-snug">
              “Capaz venís por tomates y te vas con algo que nunca habías probado.”
            </h3>
            <p className="text-xs sm:text-sm text-[#FFF8ED]/80 font-sans">
              La puerta está siempre abierta para mirar, elegir con tus manos y charlar de cocina.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto text-center sm:text-right">
            <button
              onClick={onOpenLocationModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#F6D96B] hover:bg-[#ebd060] text-[#26332D] text-sm font-semibold transition-all cursor-pointer shadow-xs"
            >
              <Navigation className="w-4 h-4" />
              <span>Cómo llegar</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
