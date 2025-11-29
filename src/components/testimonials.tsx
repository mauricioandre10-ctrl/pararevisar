'use client';

import Script from 'next/script';
import { Star } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import React from 'react';

export function Testimonials() {

  return (
    <section id="testimonios" className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-12 px-4 text-center md:px-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold font-headline tracking-wider sm:text-5xl">
            Lo que dicen nuestros alumnos
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
            La mejor prueba de que funciona es ver cómo lo aplican personas como tú.
          </p>
        </div>

        <div className="w-full">
            <div id="featurable-46f632d8-05a6-4a17-8004-4ee3e1eb9374" data-featurable-async></div>
            <Script src="https://featurable.com/assets/bundle.js" defer charSet="UTF-8"></Script>
        </div>

        <div className="w-full space-y-4 pt-4">
            <h3 className="text-2xl font-bold font-headline tracking-wider">¿Ya has sido alumno? ¡Tu opinión es oro!</h3>
            <p className="max-w-[600px] mx-auto text-muted-foreground">
                Ayuda a otros a decidirse y déjanos tu valoración. ¡Solo te llevará un minuto!
            </p>
            <Button asChild className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/30">
                <Link href="https://g.page/r/CQ0IB961A5leEBM/review" target="_blank" rel="noopener noreferrer">
                    <Star className="mr-2 h-5 w-5 text-yellow-400" fill="#FFC700" strokeWidth={1.5} stroke="#F2A500"/>
                    Dejar mi reseña en Google
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
