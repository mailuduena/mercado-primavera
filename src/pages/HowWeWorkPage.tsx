import React from 'react';
import { PageId } from '../types.ts';
import {
  Compass,
  HeartHandshake,
  ShoppingBag,
  Scale,
  CreditCard,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Leaf,
} from 'lucide-react';

interface PageProps {
  onNavigate: (page: PageId) => void;
  onOpenLocationModal: () => void;
}

export const HowWeWorkPage: React.FC<PageProps> = ({ onNavigate, onOpenLocationModal }) => {
  const pasos = [
    {
      numero: '01',
      etiqueta: 'Paseo libre',
      titulo: 'Recorré',
      descripcion:
        'Paseá entre cajones bajos de madera, sentí los aromas frescos de la mañana y mirá qué cosecha llegó hoy.',
      detalle: 'Cajones accesibles a tu altura para mirar y comparar con calma.',
      foto: '/paso-01-recorre.png',
      alt: 'Paseo libre entre cajones de madera con verduras frescas',
      bgCard: 'bg-[#FEF8DC]',
      borderCard: 'border-[#F6D96B]',
      icono: Compass,
    },
    {
      numero: '02',
      etiqueta: 'Sin apuro',
      titulo: 'Elegí',
      descripcion:
        'Nadie te apura ni elige por vos detrás de un mostrador. Podés mirar, tocar con cuidado y elegir exactamente la pieza que te gusta.',
      detalle: 'Vos seleccionás el punto de maduración ideal para hoy o para el fin de semana.',
      foto: '/paso-02-elegi.png',
      alt: 'Mano seleccionando cuidadosamente frutas y verduras frescas',
      bgCard: 'bg-[#FDE8E3]',
      borderCard: 'border-[#F6B7A9]',
      icono: HeartHandshake,
    },
    {
      numero: '03',
      etiqueta: 'Momento central',
      titulo: 'Servite',
      descripcion:
        '¿Vivís solo y querés dos tomates y una manzana? Perfecto. ¿Cocinás un guiso para diez? También. Tomás tu bolsa y la armás a tu medida.',
      detalle: 'Total libertad: no hay paquetes cerrados ni cantidades mínimas impuestas.',
      foto: '/paso-03-servite.png',
      alt: 'Persona sirviéndose fruta fresca en una bolsa de autoservicio',
      bgCard: 'bg-[#EDF5E7]',
      borderCard: 'border-[#A8C98D]',
      icono: ShoppingBag,
    },
    {
      numero: '04',
      etiqueta: 'Transparencia',
      titulo: 'Pesá',
      descripcion:
        'Balanzas digitales a la vista, claras y fáciles de usar. Pesás lo que elegiste y sabés exactamente lo que vas a pagar.',
      detalle: 'Pagás por peso real y exacto. Siempre con el equipo cerca si necesitás una mano.',
      foto: '/paso-04-pesa.png',
      alt: 'Balanza digital accesible para pesar frutas y verduras',
      bgCard: 'bg-[#F2EEFA]',
      borderCard: 'border-[#C9B8E8]',
      icono: Scale,
    },
    {
      numero: '05',
      etiqueta: 'Al paso',
      titulo: 'Pagá y disfrutá',
      descripcion:
        'Cobro ágil con todos los medios de pago (efectivo, tarjetas, transferencias y QR). Rápido, simple y directo a tu cocina.',
      detalle: 'Te llevás productos frescos que elegiste vos con tus propias manos.',
      foto: '/paso-05-paga.png',
      alt: 'Caja rápida y cómoda para abonar los productos pesados',
      bgCard: 'bg-[#FEF8DC]',
      borderCard: 'border-[#F6D96B]',
      icono: CreditCard,
    },
  ];

  return (
    <div className="bg-[#FFF8ED] text-[#26332D]">
      {/* ========================================================================= */}
      {/* 1. SECCIÓN PRINCIPAL: INTRODUCCIÓN VISUAL FUERTE AL AUTOSERVICIO          */}
      {/* ========================================================================= */}
      <section
        id="como-trabajamos-intro"
        className="pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 bg-[#FEF8DC] border-b border-[#F6D96B]/50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navegación de retorno y badge */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <button
              onClick={() => onNavigate('inicio')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#315C4D] hover:text-[#25483c] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al inicio</span>
            </button>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#F6D96B] text-[#26332D] text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#E95B4E]" />
              <span>Experiencia de autoservicio</span>
            </span>
          </div>

          {/* Encabezado Editorial Compacto y enfocado */}
          <div className="max-w-3xl mb-8 sm:mb-10 space-y-3 sm:space-y-4">
            <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#26332D] leading-[1.15]">
              Cómo trabajamos
            </h1>

            {/* 1. Frase solicitada obligatoria */}
            <p className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#315C4D] leading-snug">
              “Elegí. Servite. Pesá. Disfrutá.”
            </p>

            {/* 2. Texto breve introductorio */}
            <p className="text-base sm:text-lg text-[#26332D]/85 font-sans leading-relaxed">
              En Mercado Primavera no hay mostradores altos ni pedidos a las apuradas. Caminás entre los cajones, mirás los colores de la estación, tocás con cuidado y elegís la cantidad exacta que necesitás para tu cocina.
            </p>
          </div>

          {/* 3 & 4. Fotografía horizontal grande panorámica (80% a 100% del ancho útil) */}
          <div
            id="autoservicio-hero-img-container"
            className="w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8D7C0] shadow-sm hover:shadow-md transition-shadow bg-[#FFF8ED]"
          >
            <div className="w-full aspect-[16/9] sm:aspect-[16/7.5] lg:aspect-[2.1/1] overflow-hidden">
              <img
                id="autoservicio-verduras-img"
                src="/autoservicio-verduras.png"
                alt="Experiencia de autoservicio en Mercado Primavera con clientes eligiendo libremente frutas y verduras frescas"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. EL PASO A PASO DETALLADO (01 al 05)                                     */}
      {/* ========================================================================= */}
      <section
        id="como-trabajamos-pasos"
        className="py-14 sm:py-20 lg:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EDF5E7] text-[#315C4D] text-xs font-mono font-bold">
            <Leaf className="w-3.5 h-3.5 text-[#315C4D]" />
            <span>El recorrido completo</span>
          </div>

          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#26332D]">
            Cinco pasos pensados para tu libertad
          </h2>

          <p className="text-sm sm:text-base text-[#26332D]/75 font-sans">
            Una dinámica natural que te permite comprar a tu propio ritmo, sin intermediarios ni demoras.
          </p>
        </div>

        {/* Grid de pasos detallados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {pasos.map((paso, index) => {
            const IconComponent = paso.icono;
            return (
              <div
                key={paso.numero}
                className={`rounded-3xl p-5 sm:p-6 border ${paso.bgCard} ${paso.borderCard} flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="space-y-4">
                  {/* Encabezado del paso */}
                  <div className="flex items-center justify-between">
                    <span className="font-serif-title text-3xl font-bold text-[#26332D]/80">
                      {paso.numero}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#315C4D] shadow-2xs border border-black/5">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-[#315C4D] font-bold bg-white/80 px-2.5 py-0.5 rounded-full border border-black/5 mb-2">
                      {paso.etiqueta}
                    </span>
                    <h3 className="font-serif-title text-2xl font-semibold text-[#26332D] leading-tight">
                      {paso.titulo}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#26332D]/85 leading-relaxed font-sans">
                    {paso.descripcion}
                  </p>

                  {/* Imagen de apoyo del paso */}
                  <div className="overflow-hidden rounded-2xl border border-black/10 shadow-2xs aspect-[4/3] bg-white/60">
                    <img
                      src={paso.foto}
                      alt={paso.alt}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Detalle complementario */}
                  <div className="pt-2 text-xs text-[#26332D]/75 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#315C4D] shrink-0 mt-0.5" />
                    <span>{paso.detalle}</span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-black/5 text-[11px] font-mono text-[#26332D]/60 flex items-center justify-between">
                  <span>Paso {index + 1} de 5</span>
                  <span className="text-[#315C4D] font-semibold">Mercado Primavera</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* DESTACADO DE AUTONOMÍA: "SIN CANTIDADES OBLIGATORIAS"                     */}
        {/* ========================================================================= */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#315C4D] text-[#FFF8ED] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs uppercase font-mono tracking-widest text-[#F6D96B] font-bold bg-white/10 px-3 py-1 rounded-full inline-block">
              Compromiso de frescura y libertad
            </span>
            <h3 className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#FFF8ED]">
              Comprás lo que vas a comer. Nada más, nada menos.
            </h3>
            <p className="text-sm sm:text-base text-[#FFF8ED]/85 leading-relaxed font-sans">
              Evitamos el desperdicio de comida y cuidamos tu bolsillo: llevate una fruta para la merienda o la compra completa de la semana con la misma atención y dedicación.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('productos')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#F6D96B] hover:bg-[#ebd060] text-[#26332D] text-sm font-semibold transition-all cursor-pointer shadow-xs"
            >
              <span>Ver qué hay hoy</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenLocationModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FFF8ED] text-sm font-semibold border border-white/20 transition-all cursor-pointer"
            >
              <span>Dónde encontrarnos</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
