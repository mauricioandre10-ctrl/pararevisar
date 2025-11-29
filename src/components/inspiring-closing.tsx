import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from 'next/image';

export function InspiringClosing() {
  return (
    <section id="closing" className="py-12 md:py-16 lg:py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
                No llegaste tarde al futuro. Llegaste con experiencia, historia y ganas de aprender. Este taller no te promete magia. Te promete claridad, herramientas reales y una nueva forma de avanzar. Cada minuto invertido aquí se convierte en tiempo ganado para tu trabajo, tu negocio y tu vida.
            </p>
            <div className="flex items-center gap-2 text-lg">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">Aula propia en Ourense — Próximas fechas: Sábados 30 de noviembre y 7 de diciembre. Ideal para personas de toda Galicia gracias a la conexión en tren.</span>
            </div>
          <div className="flex flex-col items-center gap-2 w-full pt-6">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/30">
              <Link href="https://wa.me/34613997841?text=¡Hola!%20Estoy%20listo%20para%20empezar,%20hablemos%20sobre%20el%20taller." target="_blank" rel="noopener noreferrer">
                <Image src="/Whatsaap.webp" alt="WhatsApp Icon" width={24} height={24} className="mr-2 h-6 w-6 rounded-full" />
                Quiero empezar, ¡hablemos!
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
