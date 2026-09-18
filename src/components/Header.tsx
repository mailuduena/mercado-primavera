import React, { useState, useEffect } from 'react';
import { PageId, NavItem } from '../types.ts';
import { Menu, X, MapPin, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenLocationModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenLocationModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'quienes-somos', label: 'Quiénes somos' },
    { id: 'como-trabajamos', label: 'Cómo trabajamos' },
    { id: 'productos', label: 'Nuestros productos' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFF8ED]/95 backdrop-blur-md shadow-xs border-b border-[#E8D7C0]/70 py-3'
          : 'bg-[#FFF8ED] border-b border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Textual Logo */}
        <div className="flex items-center gap-3">
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('inicio')}
            className="group text-left cursor-pointer flex items-center gap-2.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#315C4D] rounded-lg"
          >
            {/* Small leaf/sprout icon badge */}
            <div className="w-8 h-8 rounded-full bg-[#A8C98D] group-hover:bg-[#F6D96B] text-[#315C4D] flex items-center justify-center transition-all duration-300 transform group-hover:rotate-12 shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#315C4D]" />
            </div>
            <div>
              <span className="block font-display text-2xl sm:text-[26px] font-bold tracking-tight text-[#26332D] leading-none">
                Mercado Primavera
              </span>
              <span className="text-[11px] font-sans tracking-widest uppercase text-[#315C4D] font-semibold">
                Verdulería de estación
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-1.5 lg:gap-2 bg-white/70 border border-[#E8D7C0] px-3 py-1.5 rounded-full shadow-2xs"
        >
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#315C4D] text-[#FFF8ED] shadow-2xs font-semibold'
                    : 'text-[#26332D]/80 hover:text-[#26332D] hover:bg-[#FFF2DE]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Header Action: "Cómo llegar" & Mobile Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Botón destacado: Cómo llegar */}
          <button
            id="header-como-llegar-btn"
            onClick={onOpenLocationModal}
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#E95B4E] hover:bg-[#d94a3d] text-[#FFF8ED] text-xs sm:text-sm font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-2xs cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#E95B4E]"
          >
            <MapPin className="w-4 h-4 text-[#F6D96B]" />
            <span>Cómo llegar</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full border border-[#E8D7C0] bg-white text-[#26332D] flex items-center justify-center hover:bg-[#FFF2DE] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden fixed inset-x-0 top-[65px] bg-[#FFF8ED] border-b border-[#E8D7C0] shadow-lg px-5 py-6 space-y-3 z-50 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-[#315C4D] px-2 mb-1">
            Secciones
          </div>
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-left text-base font-medium transition-all ${
                    isActive
                      ? 'bg-[#315C4D] text-[#FFF8ED] font-semibold'
                      : 'text-[#26332D] hover:bg-[#FFF2DE]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#F6D96B]"></span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#E8D7C0] flex flex-col gap-2">
            <button
              id="mobile-como-llegar-drawer-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLocationModal();
              }}
              className="w-full py-3 rounded-2xl bg-[#E95B4E] text-[#FFF8ED] font-medium text-sm flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#F6D96B]" />
              <span>Ver mapa y cómo llegar</span>
            </button>

            <div className="text-center text-xs text-[#26332D]/70 pt-2">
              Dirección próximamente · Horarios próximamente
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
