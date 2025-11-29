import { BookOpen, Briefcase, Award, MessageSquare, Star, Bot, CalendarPlus, GraduationCap } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

type IconComponent = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;

export const outcomes = [
  'Aprenderás a hablar con ChatGPT de forma clara y natural.',
  'Descubrirás cómo ahorrar horas de trabajo y planificación.',
  'Crearás textos, ideas, mensajes o estrategias en minutos.',
  'Perderás el miedo a la tecnología y ganarás confianza digital.',
  'Sabrás aplicar la IA en tu trabajo, negocio o vida personal con propósito.',
];

export const included: { text: string; icon: IconComponent }[] = [
    { text: 'Libro “IA para la Vida Real” – Guía teórica y práctica escrita por el formador.', icon: BookOpen },
    { text: 'Cuaderno de Trabajo F1 – Ejercicios y plantillas para crear tus propios prompts.', icon: Briefcase },
    { text: 'Chuleta F1 plastificada – Guía rápida para aplicar lo aprendido día a día.', icon: BookOpen },
    { text: 'GPT Mentor F1 – Tu asistente personal de IA, creado exclusivamente para este curso, para seguir creando y mejorando prompts después del taller.', icon: MessageSquare },
    { text: 'Certificado de asistencia y conocimientos en Ingeniería de Prompts.', icon: Award },
    { text: 'Reconocimiento físico para exhibir en tu biblioteca, aula o espacio de trabajo.', icon: Star },
]

export const enrollmentSteps: { icon: IconComponent, title: string, description: string }[] = [
  {
    icon: Bot,
    title: '1. Chatea con nuestra IA',
    description: 'Resuelve tus dudas al instante e inscríbete hablando con nuestro asistente virtual directamente por WhatsApp.',
  },
  {
    icon: CalendarPlus,
    title: '2. Reserva tu plaza',
    description: 'Nuestro asistente te guiará para que reserves tu plaza y asegures tu lugar en segundos.',
  },
  {
    icon: GraduationCap,
    title: '3. Comienza a Aprender',
    description: '¡Felicidades! Una vez confirmada, tendrás todo listo para empezar tu viaje en el taller.',
  },
];

export const faqItems = [
    {
        question: '¿Necesito saber de tecnología o programación?',
        answer: '¡Para nada! El curso está diseñado para empezar desde cero. Si ya tienes algo de experiencia con ordenadores, te resultará aún más sencillo, pero no es un requisito. Te guiaremos paso a paso en el mundo de la IA.'
    },
    {
        question: '¿Qué necesito llevar al taller?',
        answer: 'Solo necesitas traer tu portátil con el navegador Google Chrome instalado y, sobre todo, ¡muchas ganas de aprender!'
    },
    {
        question: '¿Qué pasa si no puedo asistir ese día?',
        answer: 'Podrás cambiar de fecha sin coste adicional.'
    },
    {
        question: '¿Hay certificado?',
        answer: 'Sí. Recibirás tu certificado y mentoría posterior por WhatsApp.'
    }
]

export const sliderImages = [
  {
    id: 'aula',
    description: 'Aula de formación',
    imageUrl: '/image/slider/Aula.webp',
  },
  {
    id: 'aula2',
    description: 'Otra vista del aula de formación',
    imageUrl: '/image/slider/Aula2.webp',
  },
  {
    id: 'clase1',
    description: 'Estudiantes en clase',
    imageUrl: '/image/slider/Clase1.webp',
  },
  {
    id: 'clase2',
    description: 'Estudiantes colaborando en clase',
    imageUrl: '/image/slider/Clase2.webp',
  },
  {
    id: 'clase3',
    description: 'Estudiante presentando en clase',
    imageUrl: '/image/slider/Clase3.webp',
  },
    {
    id: 'clase4',
    description: 'Estudiantes en un taller práctico',
    imageUrl: '/image/slider/Clase4.webp',
  },
  {
    id: 'clase5',
    description: 'Mentor explicando un concepto en clase',
    imageUrl: '/image/slider/Clase5.webp',
  },
];

export const navLinks = [
    { href: '/#inicio', label: 'Inicio' },
    { href: '/#cursos', label: 'Cursos' },
    { href: '/curso-nocode', label: 'Curso No-Code' },
    { href: '/curso-diseno-ia', label: 'Diseño con IA' },
    { href: '/#inversion', label: 'Inversión' },
    { href: '/#testimonios', label: 'Testimonios' },
    { href: '/#inscripcion', label: 'Inscripción' },
    { href: '/#mentor', label: 'Mentor' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/#contacto', label: 'Contacto' },
];
