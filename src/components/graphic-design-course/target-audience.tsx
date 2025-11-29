'use client';

import { Users } from 'lucide-react';

export const TargetAudience = () => (
    <section className="py-12 md:py-16 bg-black text-white">
        <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
                <Users className="mx-auto h-12 w-12 text-primary" />
                <h2 className="text-3xl font-bold font-headline tracking-wider sm:text-4xl">¿A quién va dirigido este curso?</h2>
                <p className="max-w-[700px] mx-auto text-gray-300 md:text-lg">
                    Perfecto para cualquiera que quiera crear contenido visual sin ser un experto en diseño.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="p-6 rounded-lg border border-primary/50 bg-background/20">
                    <h4 className="font-bold text-lg mb-2">Community Managers y Marketers</h4>
                    <p className="text-sm text-gray-300">Crea contenido visual atractivo para redes sociales, anuncios y campañas en una fracción del tiempo.</p>
                </div>
                <div className="p-6 rounded-lg border border-primary/50 bg-background/20">
                    <h4 className="font-bold text-lg mb-2">Emprendedores y Pequeños Negocios</h4>
                    <p className="text-sm text-gray-300">Diseña tu propia marca, materiales de marketing y contenido para la web sin necesidad de contratar a un diseñador.</p>
                </div>
                <div className="p-6 rounded-lg border border-primary/50 bg-background/20">
                    <h4 className="font-bold text-lg mb-2">Creativos y Aficionados</h4>
                    <p className="text-sm text-gray-300">Explora nuevas formas de expresión artística y lleva tus proyectos personales al siguiente nivel con la ayuda de la IA.</p>
                </div>
            </div>
        </div>
    </section>
);
