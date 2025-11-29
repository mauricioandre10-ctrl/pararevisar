'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const FinalCTASection = () => (
    <section className="py-20">
        <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold font-headline tracking-wider sm:text-4xl mb-4">¿Listo para construir tu idea?</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl mb-8">
                Las plazas son limitadas para garantizar una experiencia personalizada. No te quedes fuera.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/30">
              <Link href="https://wa.me/34613997841?text=¡Hola!%20Quiero%20apuntarme%20al%20taller%20de%20Landings%20con%20IA." target="_blank" rel="noopener noreferrer">
                <Image src="/Whatsaap.webp" alt="WhatsApp Icon" width={24} height={24} className="mr-2 h-6 w-6 rounded-full" />
                Reservar Mi Plaza Ahora
              </Link>
            </Button>
        </div>
    </section>
);