'use client';

import { CheckCircle2 } from 'lucide-react';
import { outcomes, included } from '@/lib/content';
import { createElement } from 'react';

export function CourseShowcase() {
  return (
    <section id="cursos" className="py-12 md:py-8">
      <div className="container px-4 md:px-6 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-wider sm:text-5xl">Lo que conseguirás en un solo día</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Este no es un curso más. Es una experiencia de transformación. En una sola jornada te llevarás herramientas, claridad y una nueva forma de pensar para que la IA trabaje para ti.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl md:gap-12 lg:max-w-5xl lg:grid-cols-2">
          <div className="flex flex-col items-center text-center space-y-6">
            <h3 className="text-2xl font-bold font-headline tracking-wider">Resultados Clave</h3>
            <ul className="grid gap-4 text-left">
              {outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="space-y-6 p-6 rounded-lg neon-border bg-background shadow-none border-none"
          >
            <h3 className="text-2xl font-bold font-headline text-center tracking-wider">📚 Todo lo que te llevas contigo:</h3>
            <ul className="grid gap-4">
              {included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  {createElement(item.icon, { className: "h-5 w-5 mt-1 text-primary flex-shrink-0" })}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2 text-sm text-muted-foreground">No solo es un día de formación: te llevas un sistema completo para seguir aprendiendo y aplicando la IA en tu día a día.</p>
            <div className="space-y-4 pt-4 text-sm">
                <p><span className="font-semibold">Duración:</span> 8 horas intensivas</p>
                <p><span className="font-semibold">Modalidad:</span> presencial – Ourense</p>
                <p><span className="font-semibold">Dirigido a:</span> personas que quieren entender, aplicar y dominar la IA de forma práctica y accesible, aunque no sean técnicas, vivan en Ourense o en cualquier punto de Galicia.</p>
                <p className="text-center font-bold text-lg pt-4 tracking-wide">“No te regalo prompts, te enseño a crearlos.”</p>
            </div>
          </div>
        </div>
         <div className="pt-6 text-center">
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Saldrás del aula hablando el nuevo idioma de la inteligencia artificial. Un idioma que no solo te hace más productivo, sino más consciente y preparado para un mundo que cambia cada día. Porque dominar la IA no se trata de ser tecnológico, se trata de mantenerte vigente, libre y capaz de reinventarte siempre.
            </p>
         </div>
      </div>
    </section>
  );
}
