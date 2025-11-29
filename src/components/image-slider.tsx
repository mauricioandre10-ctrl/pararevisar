'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import * as React from 'react';
import { sliderImages } from '@/lib/content';

export function ImageSlider() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

  return (
    <section className="py-12 md:py-8 lg:py-4">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold font-headline tracking-wider sm:text-5xl">Éxito Estudiantil e Instalaciones</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Explora nuestro vibrante entorno de aprendizaje y mira los increíbles proyectos que nuestros estudiantes han construido.
                    </p>
                </div>
            </div>
            <div className="relative w-full max-w-4xl mx-auto">
              <Carousel 
                  className="w-full"
                  opts={{ loop: true }}
                  plugins={[plugin.current]}
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
              >
                  <CarouselContent>
                      {sliderImages.map((image) => (
                      <CarouselItem key={image.id}>
                          <Card className="overflow-hidden neon-border">
                              <CardContent className="p-0">
                                  <Image
                                      src={image.imageUrl}
                                      alt={image.description}
                                      width={1200}
                                      height={800}
                                      quality={75}
                                      className="w-full h-auto aspect-[3/2] object-cover"
                                  />
                              </CardContent>
                          </Card>
                      </CarouselItem>
                      ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
              </Carousel>
            </div>
        </div>
    </section>
  );
}
