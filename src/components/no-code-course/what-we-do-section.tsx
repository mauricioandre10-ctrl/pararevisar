'use client';

import { Briefcase, CheckCircle } from "lucide-react";

export const WhatWeDoSection = () => (
    <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
                <Briefcase className="mx-auto h-12 w-12 text-primary" />
                <h2 className="text-3xl font-bold font-headline tracking-wider sm:text-4xl">¿Qué haremos durante el taller?</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
                <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <p>Crearás una primera versión de tu página web con la ayuda de la IA, definiendo la estructura y el contenido inicial.</p>
                </div>
                 <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <p>Mejorarás el diseño, los textos, los colores y las imágenes directamente desde el navegador, sin tocar una línea de código.</p>
                </div>
                 <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <p>Añadirás las secciones clave que toda web necesita: hero, beneficios, testimonios y un formulario de contacto.</p>
                </div>
                 <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <p>Dejaremos tu web lista para ser subida a un repositorio y la publicaremos en un servidor real para que todo el mundo pueda verla.</p>
                </div>
            </div>
        </div>
    </section>
);