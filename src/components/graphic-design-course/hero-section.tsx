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
            Diseño Gráfico con Inteligencia Artificial
          </h1>
          <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
            Aprende a crear imágenes impactantes, videos profesionales y diseños espectaculares con las herramientas de IA más potentes: Canva, Freepik, Midjourney, CapCut y Veo 3.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/30">
              <Link href="https://wa.me/34613997841?text=¡Hola!%20Quiero%20más%20información%20sobre%20el%20curso%20de%20Diseño%20Gráfico%20con%20IA." target="_blank" rel="noopener noreferrer">
                <Image src="/Whatsaap.webp" alt="WhatsApp Icon" width={24} height={24} className="mr-2 h-6 w-6 rounded-full" />
                Pedir más información
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground">
                Plazas limitadas. ¡Consulta las próximas fechas!
            </p>
        </div>
      </div>
    </div>
  </section>
);
