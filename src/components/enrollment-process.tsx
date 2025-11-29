'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { enrollmentSteps } from '@/lib/content';
import { createElement } from 'react';

export function EnrollmentProcess() {
  return (
    <section id="inscripcion" className="pt-12 md:pt-16 lg:pt-24 pb-6 md:pb-8 lg:pb-12">
      <div className="container px-4 md:px-6 space-y-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-wider sm:text-5xl">Inscríbete en 3 simples pasos</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Habla con nuestra IA o por WhatsApp y asegura tu plaza. Fácil, rápido y sin complicaciones.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
          {enrollmentSteps.map((step, index) => (
            <Card key={index} className="text-center p-6 bg-background/50 flex flex-col items-center">
              <div className="p-0 mb-4">
                {createElement(step.icon, { className: "h-10 w-10 text-primary" })}
              </div>
              <CardContent className="p-0 space-y-2">
                <h3 className="font-bold text-lg">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/30">
                <Link href="https://wa.me/34613997841?text=¡Hola!%20Quiero%20inscribirme%20en%20el%20taller%20de%20IA." target="_blank" rel="noopener noreferrer">
                <Image src="/Whatsaap.webp" alt="WhatsApp Icon" width={24} height={24} className="mr-2 h-6 w-6 rounded-full" />
                Inscríbete por WhatsApp
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
