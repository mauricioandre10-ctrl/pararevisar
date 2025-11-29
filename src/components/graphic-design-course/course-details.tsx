'use client';

import { Palette, Bot, Film } from 'lucide-react';
import Image from 'next/image';

export const CourseDetails = () => (
    <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6 space-y-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold font-headline tracking-wider sm:text-5xl">Domina el Arsenal Creativo del Futuro</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        En este taller práctico, aprenderás a utilizar herramientas de IA para llevar tus diseños al siguiente nivel.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl md:gap-12 lg:max-w-5xl lg:grid-cols-2">
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <Palette className="h-8 w-8 text-primary mt-1" />
                        <div>
                            <h4 className="font-bold text-lg">Diseño Gráfico con Canva y Freepik IA</h4>
                            <p className="text-muted-foreground">Crea diseños profesionales en minutos, genera paletas de colores y encuentra la inspiración que necesitas con la ayuda de la IA.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Bot className="h-8 w-8 text-primary mt-1" />
                        <div>
                            <h4 className="font-bold text-lg">Generación de Imágenes con Midjourney</h4>
                            <p className="text-muted-foreground">Convierte tus ideas en imágenes fotorrealistas o artísticas. Aprenderás a escribir prompts efectivos para obtener resultados espectaculares.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Film className="h-8 w-8 text-primary mt-1" />
                        <div>
                            <h4 className="font-bold text-lg">Edición de Video con CapCut y Veo 3</h4>
                            <p className="text-muted-foreground">Crea videos dinámicos, añade subtítulos automáticos, efectos especiales y genera contenido de video con IA para tus redes sociales y proyectos.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image
                        src="https://picsum.photos/seed/design-ia/500/500"
                        alt="Ejemplos de diseño gráfico con IA"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover w-full max-w-md neon-border"
                        data-ai-hint="diseño gráfico abstracto"
                    />
                </div>
            </div>
        </div>
    </section>
);
