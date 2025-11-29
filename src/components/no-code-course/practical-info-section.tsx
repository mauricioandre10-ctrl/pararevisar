'use client';

import { UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const PracticalInfoSection = () => (
  <section className="py-12 md:py-16">
    <div className="container px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
          <UserCheck className="mx-auto h-12 w-12 text-primary" />
          <h2 className="text-3xl font-bold font-headline tracking-wider sm:text-4xl">Información Práctica</h2>
      </div>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 text-center">
          <Card className="p-6 bg-background/30 border-primary/30">
              <CardHeader>
                  <CardTitle>Detalles del Taller</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-left">
                  <p><span className='font-bold'>Modalidad:</span> Presencial en Ourense</p>
                  <p><span className='font-bold'>Duración:</span> 8 horas intensivas</p>
                  <p><span className='font-bold'>Nivel:</span> Principiante. No hace falta saber programar.</p>
                  <p><span className='font-bold'>Requisitos:</span> Traer tu propio portátil, navegador actualizado y ganas de crear.</p>
              </CardContent>
          </Card>
           <Card className="p-6 bg-background/30 border-primary/30">
              <CardHeader>
                  <CardTitle>Inversión</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-left">
                  <p><span className='font-bold'>Plazas:</span> Grupos ultra-reducidos para una atención personalizada.</p>
                  <p><span className='font-bold'>Precio:</span> Consulta el precio y las ofertas disponibles.</p>
                  <p><span className='font-bold'>Pago:</span> Contacta por WhatsApp para conocer las formas de pago.</p>
              </CardContent>
          </Card>
      </div>
    </div>
  </section>
);