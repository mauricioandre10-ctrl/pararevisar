'use client';

import { Users } from 'lucide-react';
import { Card } from '../ui/card';

export const ForWhoSection = () => (
    <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
                <Users className="mx-auto h-12 w-12 text-primary" />
                <h2 className="text-3xl font-bold font-headline tracking-wider sm:text-4xl">¿Es este curso para ti?</h2>
            </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <Card className="p-6 rounded-lg border-primary/30 bg-background/30 text-center">
                    <h4 className="font-bold text-lg mb-2">Emprendedores</h4>
                    <p className="text-sm text-muted-foreground">Lanza y valida tus ideas de negocio con una página web profesional sin depender de un desarrollador.</p>
                </Card>
                <Card className="p-6 rounded-lg border-primary/30 bg-background/30 text-center">
                    <h4 className="font-bold text-lg mb-2">Marketing y Ventas</h4>
                    <p className="text-sm text-muted-foreground">Crea páginas para tus campañas, productos o eventos de forma ágil y autónoma.</p>
                </Card>
                <Card className="p-6 rounded-lg border-primary/30 bg-background/30 text-center">
                    <h4 className="font-bold text-lg mb-2">Freelancers y Creativos</h4>
                    <p className="text-sm text-muted-foreground">Ofrece a tus clientes un servicio de creación de webs y amplía tu portfolio sin necesidad de programar.</p>
                </Card>
                 <Card className="p-6 rounded-lg border-primary/30 bg-background/30 text-center">
                    <h4 className="font-bold text-lg mb-2">Gente de Negocio</h4>
                    <p className="text-sm text-muted-foreground">Materializa tus estrategias en proyectos web tangibles sin barreras técnicas y en tiempo récord.</p>
                </Card>
            </div>
        </div>
    </section>
);