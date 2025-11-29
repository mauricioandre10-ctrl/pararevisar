'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

type CookieSettingsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (preferences: { analytics: boolean; marketing: boolean }) => void;
};

export function CookieSettingsModal({ isOpen, onClose, onSave }: CookieSettingsModalProps) {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  const handleSave = () => {
    onSave({
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
    });
  };

  const handleAllowAll = () => {
    setAnalyticsEnabled(true);
    setMarketingEnabled(true);
    onSave({
        analytics: true,
        marketing: true,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[525px] bg-background text-foreground border-border/50">
        <DialogHeader>
          <DialogTitle className="text-xl text-primary">Centro de Preferencias</DialogTitle>
          <DialogDescription>
            Gestiona tus preferencias de consentimiento. Puedes habilitar o deshabilitar las categorías según tus
            preferencias.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="flex flex-col space-y-4 rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="necessary-cookies" className="font-bold text-base">
                Estrictamente Necesarias
              </Label>
              <Switch id="necessary-cookies" checked disabled />
            </div>
            <p className="text-sm text-muted-foreground">
              Estas cookies son esenciales para el funcionamiento del sitio y no se pueden desactivar.
            </p>
          </div>
          <div className="flex flex-col space-y-4 rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="analytics-cookies" className="font-bold text-base">
                Analítica y Rendimiento
              </Label>
              <Switch
                id="analytics-cookies"
                checked={analyticsEnabled}
                onCheckedChange={setAnalyticsEnabled}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Nos ayudan a medir el tráfico y mejorar el rendimiento del sitio.
            </p>
          </div>
          <div className="flex flex-col space-y-4 rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="marketing-cookies" className="font-bold text-base">
                Marketing y Publicidad
              </Label>
              <Switch
                id="marketing-cookies"
                checked={marketingEnabled}
                onCheckedChange={setMarketingEnabled}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Nos permiten mostrarte anuncios más relevantes en otras plataformas.
            </p>
          </div>
        </div>
        <DialogFooter className="sm:justify-between gap-2">
            <Button variant="outline" onClick={handleAllowAll}>Permitir Todas</Button>
            <Button onClick={handleSave} className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity">
                Confirmar mis Preferencias
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
