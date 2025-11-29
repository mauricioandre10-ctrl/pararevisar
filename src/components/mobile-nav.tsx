'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import { navLinks } from '@/lib/content';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="overflow-y-auto">
        <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
        <div className="flex flex-col gap-6 p-6">
          <Link href="/#inicio" className="flex items-center gap-2" prefetch={false} onClick={() => setOpen(false)}>
            <Image src="/image/logo/logo_ia_blanco.png" alt="IA Para La Vida Real Logo" width={32} height={32} className="h-8 w-8" />
             <div className='flex flex-col'>
                <span className="font-bold text-sm tracking-wider leading-tight">IA Para</span>
                <span className="font-bold text-sm tracking-wider leading-tight">La Vida Real</span>
            </div>
          </Link>
          <nav className="grid gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
