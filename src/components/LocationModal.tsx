import React from 'react';
import { X, MapPin, Clock, Navigation, Phone, ExternalLink } from 'lucide-react';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="location-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-xl bg-[#FFF8ED] rounded-3xl border border-[#E8D7C0] shadow-xl overflow-hidden text-[#26332D]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top banner */}
        <div className="bg-[#315C4D] text-[#FFF8ED] px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#A8C98D] text-[#315C4D] flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[#A8C98D] font-medium font-mono">
                Punto de encuentro
              </span>
              <h3 id="location-modal-title" className="text-xl font-display font-semibold">
                Cómo llegar a Mercado Primavera
              </h3>
            </div>
          </div>
          <button
            id="close-location-modal-btn"
            onClick={onClose}
            aria-label="Cerrar modal de ubicación"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#FFF8ED] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Address & Hours Placeholders */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#FFF2DE] border border-[#E8D7C0]">
              <div className="flex items-center gap-2 text-[#315C4D] mb-1.5 font-semibold text-sm">
                <MapPin className="w-4 h-4 text-[#E95B4E]" />
                <span>Dirección</span>
              </div>
              <p className="text-base font-medium">Dirección próximamente</p>
              <p className="text-sm text-[#26332D]/70">Ubicación a confirmar</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#EDF5E7] border border-[#A8C98D]/60">
              <div className="flex items-center gap-2 text-[#315C4D] mb-1.5 font-semibold text-sm">
                <Clock className="w-4 h-4 text-[#315C4D]" />
                <span>Horarios</span>
              </div>
              <p className="text-base font-medium">Horarios</p>
              <p className="text-sm text-[#26332D]/70">A confirmar próximamente</p>
            </div>
          </div>

          {/* Map & Social channels placeholder */}
          <div className="relative rounded-2xl overflow-hidden border border-[#E8D7C0] bg-[#FFF2DE] p-6 text-center">
            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-[#315C4D] text-[#FFF8ED] flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#F6D96B]" />
            </div>
            <p className="text-xs font-mono text-[#315C4D] font-semibold mb-1">
              📷 mapa-ubicacion-primavera.jpg
            </p>
            <p className="text-xs text-[#26332D]/70 max-w-xs mx-auto mb-4">
              Mapa y referencias de acceso disponibles con la inauguración.
            </p>
            <div className="flex justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#315C4D] text-[#FFF8ED] text-xs font-medium">
                <span>Dirección próximamente</span>
              </span>
            </div>
          </div>

          {/* Quick contact direct placeholders */}
          <div className="flex flex-wrap items-center justify-between pt-2 border-t border-[#E8D7C0] text-xs text-[#26332D]/70 gap-2">
            <div className="flex items-center gap-3">
              <span className="font-medium text-[#315C4D]">WhatsApp</span>
              <span>·</span>
              <span className="font-medium text-[#315C4D]">Instagram</span>
            </div>
            <button
              id="close-modal-bottom-btn"
              onClick={onClose}
              className="font-medium text-[#315C4D] hover:underline cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
