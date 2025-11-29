'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const HeroSection = () => (
  <section className="py-12 md:py-20 lg:py-24">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl/none font-headline animate-text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-[200%_auto] bg-clip-text text-transparent tracking-wide">
            Crea y Publica tu Página Web con IA en 1 Día
          </h1>
          <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
            Taller intensivo de IA para la vida real. Usa la inteligencia artificial como tu “motor de código” y céntrate en lo que importa: tu idea, diseño y contenido. No necesitas programar.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 w-full">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/30">
              <Link href="https://wa.me/34613997841?text=¡Hola!%20Quiero%20reservar%20mi%20plaza%20para%20el%20curso%20de%20creación%20de%20Landings%20con%20IA." target="_blank" rel="noopener noreferrer">
                <Image src="/Whatsaap.webp" alt="WhatsApp Icon" width={24} height={24} className="mr-2 h-6 w-6 rounded-full" />
                Reservar Mi Plaza
              </Link>
            </Button>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span>Plazas limitadas</span>
                <span>Próximas fechas: consulta por WhatsApp</span>
                <span>Duración: 8 horas</span>
            </div>
        </div>
      </div>
    </div>
  </section>
);