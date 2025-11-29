'use client';
import { Facebook, Instagram, Phone, Mail, MapPin, Youtube } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const year = new Date().getFullYear();
  const whatsappLink = "https://wa.me/34613997841?text=¡Hola!%20Tengo%20una%20pregunta%20sobre%20la%20formación%20de%20IA.";
  const googleMapsLink = "https://maps.app.goo.gl/gtVizqWGoXFvwTQZA";

  return (
    <footer id="contacto" className="w-full py-12 md:py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
              <Link href="#" className="flex items-center justify-center md:justify-start mb-4 gap-2" prefetch={false}>
                  <Image src="/image/logo/logo_ia_blanco.png" alt="IA Para La Vida Real Logo" width={32} height={32} className="h-8 w-auto" />
                  <div className='flex flex-col'>
                    <span className="font-bold text-sm tracking-wider leading-tight">IA Para</span>
                    <span className="font-bold text-sm tracking-wider leading-tight">La Vida Real</span>
                  </div>
              </Link>
            <div className="flex space-x-4 justify-center md:justify-start mt-4">
                  <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                      <Facebook className="h-6 w-6" />
                  </Link>
                  <Link href="https://www.instagram.com/ia_paralavidareal" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                      <Instagram className="h-6 w-6" />
                  </Link>
                  <Link href="https://www.youtube.com/@iaparalavidareal" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors">
                    <Youtube className="h-6 w-6" />
                  </Link>
                  <Link href={whatsappLink} aria-label="WhatsApp" target='_blank' rel='noopener noreferrer' className="text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="h-6 w-6" />
                  </Link>
              </div>
          </div>
          <div className="hidden md:flex flex-col items-start">
            <h3 className="font-semibold text-foreground mb-4 tracking-wider">Navegación</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/#inicio" className="text-muted-foreground hover:text-primary transition-colors">
                Inicio
              </Link>
              <Link href="/#cursos" className="text-muted-foreground hover:text-primary transition-colors">
                Cursos
              </Link>
              <Link href="/#inversion" className="text-muted-foreground hover:text-primary transition-colors">
                Inversión
              </Link>
              <Link href="/#testimonios" className="text-muted-foreground hover:text-primary transition-colors">
                Testimonios
              </Link>
              <Link href="/#inscripcion" className="text-muted-foreground hover:text-primary transition-colors">
                Inscripción
              </Link>
              <Link href="/#mentor" className="text-muted-foreground hover:text-primary transition-colors">
                Mentor
              </Link>
              <Link href="/#faq" className="text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
            </nav>
          </div>

          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
              <h3 className="font-semibold text-foreground mb-4 tracking-wider">Contacto</h3>
              <div className="space-y-3 text-sm">
                  <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href="mailto:info@iaparalavidareal.com" className="text-muted-foreground hover:text-primary transition-colors">info@iaparalavidareal.com</a>
                  </p>
                  <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">+34 613 99 78 41</a>
                  </p>
                  <p className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">Rúa Doutor Fleming, 36-38-40, Galerías Proyflem Local B-6 Nivel 1, 32003 Ourense</span>
                  </p>
              </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-foreground mb-4 tracking-wider">Ubicación</h3>
            <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" aria-label="Ver ubicación en Google Maps">
                <div className="relative w-full h-40 rounded-lg overflow-hidden neon-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.175991985606!2d-7.869816023455925!3d42.33877103644563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2fffd44f7150e5%3A0x5e9903b5de07080d!2sIA%20Para%20La%20Vida%20Real!5e0!3m2!1ses!2ses!4v1764270130220!5m2!1ses!2ses"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <div className="flex justify-center gap-4 mb-4">
                <Link href="/politica-de-privacidad" className="hover:text-primary transition-colors">
                    Política de Privacidad
                </Link>
                <Link href="/politica-de-cookies" className="hover:text-primary transition-colors">
                    Política de Cookies
                </Link>
            </div>
            <p>
              © {year}{' '}
              <a 
                href="https://tecnovacenter.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors"
              >
                Tecnovacenter.com
              </a>
              . Todos los derechos reservados.
            </p>
        </div>
      </div>
    </footer>
  );
}
