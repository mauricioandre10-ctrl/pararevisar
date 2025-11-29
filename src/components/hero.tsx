'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Bot } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="inicio" className="py-6 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl/none font-headline animate-text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-[200%_auto] bg-clip-text text-transparent tracking-wide">
              La IA no viene a reemplazarte, viene a potenciarte.
            </h1>
            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
              Domina ChatGPT y recupera tu tiempo, tu foco y tus ideas. Taller presencial 100% práctico en Ourense — accesible en tren desde toda Galicia, sin tecnicismos, sin miedo y con resultados desde el primer día.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-y-4 gap-x-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-medium">Próximas formaciones: Sábados 30 de noviembre y 7 de diciembre</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">Aula propia en Ourense</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-medium">Grupos reducidos: máximo 6 personas</span>
              </div>
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                <span className="font-medium">Incluye acceso a tu propio Mentor Digital (GPT personalizado) para seguir practicando después del taller.</span>
              </div>
          </div>
          <div className="flex flex-col items-center gap-2 w-full">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/30">
              <Link href="https://wa.me/34613997841?text=¡Hola!%20Tengo%20una%20pregunta%20sobre%20la%20formación%20de%20IA." target="_blank" rel="noopener noreferrer">
                <Image src="/Whatsaap.webp" alt="WhatsApp Icon" width={24} height={24} className="mr-2 h-6 w-6 rounded-full" />
                ¿Tienes alguna duda? ¡Pregúntame!
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground">
                Habla conmigo y asegura tu cupo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
