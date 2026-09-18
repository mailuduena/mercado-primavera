import React from 'react';
import { PageId } from '../types.ts';
import { Sparkles, Instagram, MessageCircle, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenLocationModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLocationModal }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#26332D] text-[#FFF8ED] pt-16 pb-12 border-t border-[#315C4D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Col 1: Brand & Phrase */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#A8C98D] text-[#315C4D] flex items-center justify-center font-bold">
                <Sparkles className="w-4 h-4 text-[#315C4D]" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-[#FFF8ED]">
                Mercado Primavera
              </span>
            </div>

            <p className="font-serif-title text-xl sm:text-2xl text-[#F6B7A9] font-normal italic leading-snug max-w-sm">
              “Frutas, verduras y algo diferente todos los días.”
            </p>

            <p className="text-sm text-[#FFF8ED]/70 leading-relaxed max-w-md font-sans">
              Una verdulería pensada para recorrer sin apuro, elegir cuánto llevar y descubrir productos frescos de estación en el corazón del barrio.
            </p>

            {/* Practical info pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={onOpenLocationModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-xs text-[#FFF8ED] transition-colors cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-[#F6D96B]" />
                <span>Dirección próximamente</span>
              </button>
              <button
                onClick={onOpenLocationModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-xs text-[#FFF8ED]/90 transition-colors cursor-pointer"
              >
                <Clock className="w-3.5 h-3.5 text-[#A8C98D]" />
                <span>Horarios</span>
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#A8C98D] font-semibold">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  id="footer-link-inicio"
                  onClick={() => handleNav('inicio')}
                  className="hover:text-[#F6D96B] transition-colors cursor-pointer"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  id="footer-link-quienes-somos"
                  onClick={() => handleNav('quienes-somos')}
                  className="hover:text-[#F6D96B] transition-colors cursor-pointer"
                >
                  Quiénes somos
                </button>
              </li>
              <li>
                <button
                  id="footer-link-como-trabajamos"
                  onClick={() => handleNav('como-trabajamos')}
                  className="hover:text-[#F6D96B] transition-colors cursor-pointer"
                >
                  Cómo trabajamos
                </button>
              </li>
              <li>
                <button
                  id="footer-link-productos"
                  onClick={() => handleNav('productos')}
                  className="hover:text-[#F6D96B] transition-colors cursor-pointer"
                >
                  Nuestros productos
                </button>
              </li>
              <li>
                <button
                  id="footer-link-contacto"
                  onClick={() => handleNav('contacto')}
                  className="hover:text-[#F6D96B] transition-colors cursor-pointer"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Redes Sociales & Contacto */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#A8C98D] font-semibold">
              Contacto & Redes
            </h4>
            <p className="text-sm text-[#FFF8ED]/70">
              Seguinos en redes para enterarte qué variedades frescas llegan cada semana.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <span
                id="footer-social-instagram"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#FFF8ED]/10 text-[#FFF8ED] text-xs font-semibold border border-white/10"
              >
                <Instagram className="w-4 h-4 text-[#F6B7A9]" />
                <span>Instagram</span>
              </span>
              <span
                id="footer-social-whatsapp"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#315C4D] text-[#FFF8ED] text-xs font-semibold border border-[#A8C98D]/40"
              >
                <MessageCircle className="w-4 h-4 text-[#A8C98D]" />
                <span>WhatsApp</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright & LuMai discrete professional credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFF8ED]/50 gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Mercado Primavera. Todos los derechos reservados.</p>
          
          <div className="flex items-center justify-center sm:justify-end gap-2 text-xs text-[#FFF8ED]/60 w-full sm:w-auto">
            <span className="font-normal text-[#FFF8ED]/65">Diseño y desarrollo por</span>
            <div
              id="lumai-credit"
              className="inline-flex items-center justify-center p-1 rounded-md transition-opacity hover:opacity-100 opacity-90"
              title="LuMai - Diseño y desarrollo web"
            >
              <img
                src="/lumai-logo.svg"
                alt="LuMai - Diseño y desarrollo web"
                className="w-7 h-7 sm:w-7 sm:h-7 object-contain aspect-square transition-transform hover:scale-105"
                width={28}
                height={28}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
