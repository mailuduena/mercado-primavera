/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from './types.ts';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { LocationModal } from './components/LocationModal.tsx';
import { Home } from './pages/Home.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { HowWeWorkPage } from './pages/HowWeWorkPage.tsx';
import { ProductsPage } from './pages/ProductsPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { Check, Sparkles } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('inicio');
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [showReviewNotice, setShowReviewNotice] = useState(true);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8ED] text-[#26332D]">
      {/* Editorial review notice banner */}
      {showReviewNotice && (
        <aside
          aria-label="Aviso de revisión"
          className="bg-[#315C4D] text-[#FFF8ED] px-4 py-2 text-xs font-medium border-b border-[#A8C98D]/30"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F6D96B]"></span>
              <span>
                <strong>Primera etapa de entrega:</strong> Estructura completa creada + Header sticky y Home desarrollados para tu revisión.
              </span>
            </div>
            <button
              onClick={() => setShowReviewNotice(false)}
              className="text-[#A8C98D] hover:text-white transition-colors cursor-pointer text-xs underline"
            >
              Entendido
            </button>
          </div>
        </aside>
      )}

      {/* Main Sticky Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenLocationModal={() => setIsLocationModalOpen(true)}
      />

      {/* Main Page Area */}
      <main className="grow">
        {currentPage === 'inicio' && (
          <Home
            onNavigate={handleNavigate}
            onOpenLocationModal={() => setIsLocationModalOpen(true)}
          />
        )}
        {currentPage === 'quienes-somos' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenLocationModal={() => setIsLocationModalOpen(true)}
          />
        )}
        {currentPage === 'como-trabajamos' && (
          <HowWeWorkPage
            onNavigate={handleNavigate}
            onOpenLocationModal={() => setIsLocationModalOpen(true)}
          />
        )}
        {currentPage === 'productos' && (
          <ProductsPage
            onNavigate={handleNavigate}
            onOpenLocationModal={() => setIsLocationModalOpen(true)}
          />
        )}
        {currentPage === 'contacto' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenLocationModal={() => setIsLocationModalOpen(true)}
          />
        )}
      </main>

      {/* Persistent Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLocationModal={() => setIsLocationModalOpen(true)}
      />

      {/* Location / "Cómo llegar" Modal */}
      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
      />
    </div>
  );
}

