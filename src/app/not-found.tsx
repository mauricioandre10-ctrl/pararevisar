
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-transparent px-4 text-center">
      <div className="space-y-8 max-w-md">
        <AlertTriangle className="mx-auto h-24 w-24 text-primary" />
        <div className="space-y-4">
          <h1 className="text-6xl font-bold font-headline tracking-wider animate-text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-[200%_auto] bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Página no encontrada
          </h2>
          <p className="text-muted-foreground">
            Lo sentimos, no pudimos encontrar la página que estás buscando. Es posible que haya sido eliminada o que la URL sea incorrecta.
          </p>
        </div>
        <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/30">
          <Link href="/">
            Volver a la página de inicio
          </Link>
        </Button>
      </div>
    </main>
  );
}
