'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Building } from 'lucide-react';

export function ForCompanies() {
  const whatsappLink = "https://wa.me/34613997841?text=¡Hola!%20Me%20gustaría%20recibir%20información%20sobre%20la%20formación%20de%20IA%20para%20empresas.";

  return (
    <section id="empresas" className="w-full bg-black">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <div className="mx-auto text-center max-w-4xl">
          <div className="space-y-6">
            <Building className="mx-auto h-12 w-12 text-primary" />
            <h2 className="text-3xl font-bold font-headline tracking-wider sm:text-4xl text-white">Formación también para empresas en Galicia</h2>
            <p className="text-gray-300 md:text-lg max-w-3xl mx-auto">
              ¿Tienes un equipo en Ourense o en cualquier punto de Galicia? Llevamos la formación ‘IA para la Vida Realʼ a tu empresa: talleres prácticos adaptados a tu sector, con ejemplos reales y acceso al Mentor Digital GPT) para tu equipo.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/30">
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Image src="/Whatsaap.webp" alt="WhatsApp Icon" width={24} height={24} className="mr-2 h-6 w-6 rounded-full" />
                Quiero formación para mi empresa
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
