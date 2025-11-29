'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CookieSettingsModal } from '@/components/cookie-settings-modal';

export function CookieConsent() {
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('cookie-consent');
      if (consent === null) {
        setIsBannerVisible(true);
      }
    } catch (e) {
      // localStorage is not available
      setIsBannerVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    saveConsent({ analytics: true, marketing: true });
    setIsBannerVisible(false);
  };

  const handleDeclineAll = () => {
    saveConsent({ analytics: false, marketing: false });
    setIsBannerVisible(false);
  };

  const handleSavePreferences = (preferences: { analytics: boolean; marketing: boolean }) => {
    saveConsent(preferences);
    setIsBannerVisible(false);
    setIsModalOpen(false);
  };
  
  const saveConsent = (preferences: { analytics: boolean; marketing: boolean }) => {
    try {
      const consent = {
        accepted: true,
        date: new Date().toISOString(),
        ...preferences
      };
      localStorage.setItem('cookie-consent', JSON.stringify(consent));
      // Aquí se podría añadir la lógica para cargar los scripts correspondientes
      // Por ejemplo, si preferences.analytics es true, cargar Google Analytics.
    } catch (e) {
      // localStorage not available
    }
  };


  if (!isBannerVisible) {
    return null;
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Utilizamos cookies para analizar el tráfico y mejorar tu experiencia. Puedes aceptarlas todas, rechazarlas o configurar tus preferencias. Consulta nuestra{' '}
              <Link href="/politica-de-cookies" className="underline hover:text-primary">
                Política de Cookies
              </Link>
              .
            </p>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Button variant="link" className="text-muted-foreground" onClick={() => setIsModalOpen(true)}>
                Configurar
              </Button>
              <Button variant="outline" onClick={handleDeclineAll}>
                Rechazar
              </Button>
              <Button
                onClick={handleAcceptAll}
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
              >
                Aceptar Todo
              </Button>
            </div>
          </div>
        </div>
      </div>
      <CookieSettingsModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSavePreferences}
      />
    </>
  );
}
