'use client';

import { Lightbulb } from "lucide-react";

export const MethodSection = () => (
    <section className="py-12 md:py-16 bg-black text-white">
        <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
                <Lightbulb className="mx-auto h-12 w-12 text-primary" />
                <h2 className="text-3xl font-bold font-headline tracking-wider sm:text-4xl">Método de Trabajo</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6 text-center">
                <p className="text-lg text-gray-300">El taller es 100% práctico y guiado. El instructor te acompañará paso a paso, explicando cada concepto de forma visual y sin teoría de programación abstracta.</p>
                <p className="text-lg text-gray-300">Tú decides la estética y el contenido de tu web; la IA genera y ajusta el código en segundo plano, actuando como tu asistente de programación personal.</p>
            </div>
        </div>
    </section>
);