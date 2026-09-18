import React from 'react';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

interface ImagePlaceholderProps {
  filename: string;
  alt: string;
  aspectRatio?: 'portrait' | 'landscape' | 'wide' | 'square' | 'editorial';
  caption?: string;
  className?: string;
  badgePosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  theme?: 'crema' | 'durazno' | 'pistacho' | 'manteca' | 'lila' | 'verde';
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  filename,
  alt,
  aspectRatio = 'landscape',
  caption,
  className = '',
  badgePosition = 'bottom-left',
  theme = 'crema',
}) => {
  const aspectClasses = {
    portrait: 'aspect-[3/4]',
    editorial: 'aspect-[4/5]',
    landscape: 'aspect-[4/3]',
    wide: 'aspect-[16/9]',
    square: 'aspect-square',
  };

  const themeClasses = {
    crema: 'bg-[#FFF2DE] border-[#E8D7C0] text-[#315C4D]',
    durazno: 'bg-[#FDE8E3] border-[#F6B7A9] text-[#26332D]',
    pistacho: 'bg-[#EDF5E7] border-[#A8C98D] text-[#315C4D]',
    manteca: 'bg-[#FEF8DC] border-[#F6D96B] text-[#26332D]',
    lila: 'bg-[#F2EEFA] border-[#C9B8E8] text-[#26332D]',
    verde: 'bg-[#2A4E41] border-[#315C4D] text-[#FFF8ED]',
  };

  const badgePositionClasses = {
    'top-left': 'top-3 left-3',
    'top-right': 'top-3 right-3',
    'bottom-left': 'bottom-3 left-3',
    'bottom-right': 'bottom-3 right-3',
  };

  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl border ${themeClasses[theme]} transition-all duration-300 ${className}`}
      aria-label={alt}
    >
      <div className={`w-full ${aspectClasses[aspectRatio]} flex flex-col items-center justify-center p-6 text-center relative overflow-hidden`}>
        {/* Subtle decorative botanical pattern in background */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 Q50,30 100,0 L100,100 Q50,70 0,100 Z" fill="currentColor" />
            <circle cx="20" cy="30" r="15" fill="currentColor" />
            <circle cx="80" cy="70" r="20" fill="currentColor" />
          </svg>
        </div>

        {/* Botanical leaf silhouettes */}
        <div className="relative z-10 flex flex-col items-center max-w-[280px]">
          <div className="w-14 h-14 rounded-full bg-white/70 backdrop-blur-xs flex items-center justify-center mb-3 shadow-xs border border-white/60">
            <ImageIcon className="w-6 h-6 opacity-75" />
          </div>
          <span className="font-mono text-xs font-semibold px-3 py-1 bg-white/80 rounded-full shadow-2xs border border-black/5 mb-1.5 tracking-tight">
            📷 {filename}
          </span>
          <p className="text-xs opacity-75 line-clamp-2 leading-relaxed font-sans">
            {alt}
          </p>
        </div>

        {/* Placeholder ready badge */}
        <div
          className={`absolute ${badgePositionClasses[badgePosition]} z-10 flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur-xs rounded-full border border-black/5 text-[11px] font-medium shadow-2xs text-[#26332D]`}
        >
          <Sparkles className="w-3 h-3 text-[#E95B4E]" />
          <span>Espacio para fotografía</span>
        </div>
      </div>

      {caption && (
        <figcaption className="px-4 py-2.5 bg-white/60 border-t border-black/5 text-xs text-[#26332D]/70 font-sans italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
