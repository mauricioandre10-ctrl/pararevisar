'use client';

import { Rocket, CheckCircle, BrainCircuit, Zap } from 'lucide-react';

export const WhatYouWillAchieveSection = () => (
    <section className="py-12 md:py-16 bg-black text-white">
        <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
                <Rocket className="mx-auto h-12 w-12 text-primary" />
                <h2 className="text-3xl font-bold font-headline tracking-wider sm:text-4xl">¿Qué vas a conseguir en un día?</h2>
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center text-center p-4">
                    <CheckCircle className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Página Web Publicada</h3>
                    <p className="text-gray-300 text-sm">Saldrás del taller con una web profesional lista y funcionando en un servidor real, accesible desde cualquier parte del mundo.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                    <BrainCircuit className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Un Flujo de Trabajo Claro</h3>
                    <p className="text-gray-300 text-sm">Aprenderás un método práctico para trabajar con IA: cómo pedir, revisar, ajustar y publicar, sin escribir una sola línea de código.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                    <Zap className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Confianza para Repetir</h3>
                    <p className="text-gray-300 text-sm">Ganarás la autonomía y la confianza para replicar el proceso en tus futuros proyectos: tu negocio, portfolio o para tus clientes.</p>
                </div>
            </div>
        </div>
    </section>
);