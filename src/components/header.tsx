import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MobileNav } from '@/components/mobile-nav';

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center shadow-sm w-full bg-background/80 backdrop-blur-sm sticky top-[32px] z-40">
      <div className="container mx-auto flex items-center w-full">
        <Link href="/#inicio" className="flex items-center justify-center gap-2" prefetch={false}>
          <Image src="/image/logo/logo_ia_blanco.png" alt="IA Para La Vida Real Logo" width={32} height={32} className="h-8 w-auto" />
          <div className='flex flex-col'>
            <span className="font-bold text-sm tracking-wider leading-tight">IA Para</span>
            <span className="font-bold text-sm tracking-wider leading-tight">La Vida Real</span>
          </div>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Button asChild variant="link" className="text-sm font-medium text-foreground hover:underline underline-offset-4">
            <Link href="/#inicio">
              Inicio
            </Link>
          </Button>
          <Button asChild variant="link" className="text-sm font-medium text-foreground hover:underline underline-offset-4">
            <Link href="/#cursos">
              Cursos
            </Link>
          </Button>
          <Button asChild variant="link" className="text-sm font-medium text-foreground hover:underline underline-offset-4">
            <Link href="/curso-nocode">
              Curso No-Code
            </Link>
          </Button>
          <Button asChild variant="link" className="text-sm font-medium text-foreground hover:underline underline-offset-4">
            <Link href="/curso-diseno-ia">
              Diseño con IA
            </Link>
          </Button>
          <Button asChild variant="link" className="text-sm font-medium text-foreground hover:underline underline-offset-4">
            <Link href="/#inversion">
              Inversión
            </Link>
          </Button>
          <Button asChild variant="link" className="text-sm font-medium text-foreground hover:underline underline-offset-4">
            <Link href="/#testimonios">
              Testimonios
            </Link>
          </Button>
          <Button asChild variant="link" className="text-sm font-medium text-foreground hover:underline underline-offset-4">
            <Link href="/#inscripcion">
              Inscripción
            </Link>
          </Button>
          <Button asChild variant="link" className="text-sm font-medium text-foreground hover:underline underline-offset-4">
            <Link href="/#mentor">
              Mentor
            </Link>
          </Button>
          <Button asChild variant="link" className="text-sm font-medium text-foreground hover:underline underline-offset-4">
            <Link href="/#faq">
              FAQ
            </Link>
          </Button>
          <Button asChild variant="link" className="text-sm font-medium text-foreground hover:underline underline-offset-4">
            <Link href="/#contacto">
              Contacto
            </Link>
          </Button>
        </nav>
        <div className="ml-auto md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
