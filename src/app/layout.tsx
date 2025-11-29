import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { CookieConsent } from '@/components/cookie-consent';
import { GoogleAnalytics } from '@/components/google-analytics';
import { ScrollingBanner } from '@/components/scrolling-banner';
import { Header } from '@/components/header';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';
import { Footer } from '@/components/footer';

const pageTitle = 'IA Para La Vida Real';
const pageDescription = 'Domina ChatGPT con nuestro taller presencial en Ourense. Formación 100% práctica para potenciar tu productividad y carrera con Inteligencia Artificial.';
const pageUrl = 'https://www.iaparalavidareal.com';

export const metadata: Metadata = {
  metadataBase: new URL(pageUrl),
  alternates: {
    canonical: 'https://www.iaparalavidareal.com',
  },
  manifest: '/manifest.json',
  title: pageTitle,
  description: pageDescription,
  keywords: [
    // General
    'Inteligencia Artificial', 'IA', 'ChatGPT', 'Cursos de IA', 'Formación en IA', 'Automatización', 'Productividad',
    'Tecnología', 'Innovación', 'Futuro del trabajo', 'Herramientas de IA', 'Taller práctico', 'Formación presencial',
    'Aprender IA', 'Dominar ChatGPT', 'IA para principiantes', 'IA para no técnicos', 'Transformación digital',
    'Creatividad con IA', 'Marketing con IA', 'Contenido con IA', 'Estrategia de negocio con IA', 'IA para la vida real',

    // Local (Galicia)
    'IA Ourense', 'Cursos Ourense', 'Formación Ourense', 'Taller Ourense', 'ChatGPT Ourense', 'Tecnología Ourense',
    'IA Galicia', 'Cursos IA Galicia', 'Formación IA Galicia', 'ChatGPT Galicia', 'Inteligencia Artificial Galicia',
    'IA A Coruña', 'Cursos IA A Coruña', 'Formación IA A Coruña', 'ChatGPT A Coruña', 'Inteligencia Artificial A Coruña',
    'IA Santiago de Compostela', 'Cursos IA Santiago de Compostela', 'ChatGPT Santiago de Compostela',
    'IA Ferrol', 'Cursos IA Ferrol', 'ChatGPT Ferrol',
    'IA Lugo', 'Cursos IA Lugo', 'Formación IA Lugo', 'ChatGPT Lugo', 'Inteligencia Artificial Lugo',
    'IA Pontevedra', 'Cursos IA Pontevedra', 'Formación IA Pontevedra', 'ChatGPT Pontevedra', 'Inteligencia Artificial Pontevedra',
    'IA Vigo', 'Cursos IA Vigo', 'Formación IA Vigo', 'ChatGPT Vigo', 'Inteligencia Artificial Vigo',
    'Emprendedores Ourense', 'Empresas Ourense', 'Autónomos Ourense', 'Profesionales Ourense', 'Negocios en Ourense',
    'Eventos en Ourense', 'Qué hacer en Ourense', 'Agenda Ourense',

    // Público Objetivo
    'IA para emprendedores', 'IA para autónomos', 'IA para pymes', 'IA para profesionales', 'IA para marketing','IA para estudiantes','IA para mamas','IA para padres',
    'IA para comerciales', 'IA para comerciantes', 'IA para educadores', 'IA para creativos', 'IA para directivos', 'Formación para empresas',
    'Mejorar currículum', 'Competencias digitales', 'Reinventarse profesionalmente',

    // Relacionado con el Mentor y el Curso
    'Israel Antonio García Mora', 'Libro IA para la Vida Real', 'Formador IA Ourense', 'Mentor de tecnología',
    'Publicista Ourense', 'Comunicación y creatividad', 'Taller 7 de diciembre', 'Grupos reducidos',
    'Formación intensiva', 'Certificado IA', 'Aprender desde cero', 'Sin tecnicismos',

    // Long-tail y preguntas
    'Cómo usar ChatGPT', 'Para qué sirve la IA', 'Mejores cursos de IA en España', 'Curso presencial de ChatGPT',
    'Aprender inteligencia artificial en Ourense', 'Taller de IA para empresas en Galicia', 'Cómo ser más productivo con IA',
    'Herramientas de IA para mi negocio', 'Formación en nuevas tecnologías', 'IA aplicada a negocios',
    'Ahorrar tiempo en el trabajo', 'Generar ideas con IA', 'Escribir textos con IA', 'Estrategias con IA',
    'Perder el miedo a la tecnología', 'Confianza digital', 'IA con propósito',

    // Variaciones
    'Intelixencia Artificial', 'Cursos en Ourense de IA', 'Formación práctica IA', 'Taller de intelixencia artificial',
    'Ourense tecnoloxía', 'Automatización de tareas', 'Produtividad laboral', 'Futuro laboral Galicia'
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: pageTitle,
    images: [
      {
        url: 'https://www.iaparalavidareal.com/fondo_meta.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['https://www.iaparalavidareal.com/fondo_meta.webp'],
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/favicon.ico',
    apple: '/image/logo/logo_ia_verde.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationEvent',
      'name': 'Taller Práctico de IA: Domina ChatGPT',
      'description': 'Aprende a dominar ChatGPT en un taller presencial y práctico en Ourense para potenciar tu productividad y carrera profesional.',
      'startDate': '2024-11-30',
      'endDate': '2024-11-30',
      'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
      'eventStatus': 'https://schema.org/EventScheduled',
      'location': {
        '@type': 'Place',
        'name': 'IA Para La Vida Real - Aula de Formación',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Rúa Doutor Fleming, 36-38-40, Galerías Proyflem Local B-6 Nivel 1',
          'addressLocality': 'Ourense',
          'postalCode': '32003',
          'addressRegion': 'Ourense',
          'addressCountry': 'ES'
        }
      },
      'image': [
        'https://www.iaparalavidareal.com/fondo_meta.webp'
      ],
      'organizer': {
        '@type': 'Person',
        'name': 'Israel Antonio García Mora'
      },
      'performer': {
        '@type': 'Person',
        'name': 'Israel Antonio García Mora'
      },
      'offers': [
        {
          '@type': 'Offer',
          'name': 'Entrada Individual',
          'price': '97',
          'priceCurrency': 'EUR',
          'url': pageUrl,
          'availability': 'https://schema.org/InStock',
          'validFrom': '2024-10-01'
        },
        {
          '@type': 'Offer',
          'name': 'Entrada Dúo',
          'price': '80',
          'priceCurrency': 'EUR',
          'url': pageUrl,
          'availability': 'https://schema.org/InStock',
          'validFrom': '2024-10-01',
          'description': 'Precio por persona, aplicable a reservas de 2 o más personas.'
        }
      ]
    },
    {
      '@type': 'EducationEvent',
      'name': 'Taller Práctico de IA: Domina ChatGPT',
      'description': 'Aprende a dominar ChatGPT en un taller presencial y práctico en Ourense para potenciar tu productividad y carrera profesional.',
      'startDate': '2024-12-07',
      'endDate': '2024-12-07',
      'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
      'eventStatus': 'https://schema.org/EventScheduled',
      'location': {
        '@type': 'Place',
        'name': 'IA Para La Vida Real - Aula de Formación',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Rúa Doutor Fleming, 36-38-40, Galerías Proyflem Local B-6 Nivel 1',
          'addressLocality': 'Ourense',
          'postalCode': '32003',
          'addressRegion': 'Ourense',
          'addressCountry': 'ES'
        }
      },
      'image': [
        'https://www.iaparalavidareal.com/fondo_meta.webp'
      ],
      'organizer': {
        '@type': 'Person',
        'name': 'Israel Antonio García Mora'
      },
      'performer': {
        '@type': 'Person',
        'name': 'Israel Antonio García Mora'
      },
      'offers': [
        {
          '@type': 'Offer',
          'name': 'Entrada Individual',
          'price': '97',
          'priceCurrency': 'EUR',
          'url': pageUrl,
          'availability': 'https://schema.org/InStock',
          'validFrom': '2024-10-01'
        },
        {
          '@type': 'Offer',
          'name': 'Entrada Dúo',
          'price': '80',
          'priceCurrency': 'EUR',
          'url': pageUrl,
          'availability': 'https://schema.org/InStock',
          'validFrom': '2024-10-01',
          'description': 'Precio por persona, aplicable a reservas de 2 o más personas.'
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark !scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-body antialiased flex flex-col">
        <ScrollingBanner />
        <Header />
        <GoogleAnalytics />
        {children}
        <Toaster />
        <CookieConsent />
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
