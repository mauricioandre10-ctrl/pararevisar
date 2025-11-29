import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Ticket, Users, Tag } from 'lucide-react';

export function Investment() {
  return (
    <section id="inversion" className="py-12 md:py-12 lg:py-8">
      <div className="container px-4 md:px-6 space-y-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-wider sm:text-5xl">Invierte en ti. Potencia tu futuro.</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Una sola jornada para potenciar tu carrera para siempre. Elige la opción que mejor se adapte a ti.
            </p>
            <p className="max-w-[900px] text-muted-foreground md:text-lg pt-2">
              (Nueva etapa: formación completa + materiales físicos + Mentor Digital GPT) exclusivo.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="flex flex-col items-center justify-center p-8 text-center bg-background/50">
            <CardHeader>
              <Ticket className="mx-auto h-12 w-12 text-primary" />
              <CardTitle className="mt-4 text-2xl font-bold">Entrada Individual</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-4xl md:text-5xl font-bold font-headline tracking-wider">190€</p>
              <p className="text-muted-foreground">por persona</p>
            </CardContent>
          </Card>
          <Card className="relative flex flex-col items-center justify-center p-8 text-center neon-border">
             <div className="absolute -top-4 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
              OFERTA ESPECIAL
            </div>
            <CardHeader>
              <Users className="mx-auto h-12 w-12 text-primary" />
              <CardTitle className="mt-4 text-2xl font-bold">Entrada Dúo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-4xl md:text-5xl font-bold font-headline tracking-wider">152€</p>
              <p className="text-muted-foreground">por persona (mínimo 2)</p>
              <p className="text-sm text-primary">Descuento del 20% por venir acompañado/a</p>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-lg font-semibold">Plazas ultra limitadas (máximo 6 personas por edición).</p>
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/30">
              <Link href="https://wa.me/34613997841?text=¡Hola!%20Quiero%20reservar%20mi%20plaza%20para%20el%20taller%20de%20IA." target="_blank" rel="noopener noreferrer">
                Reservar mi plaza ahora
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground">Las plazas son limitadas. ¡No te quedes fuera!</p>
        </div>
      </div>
    </section>
  );
}
