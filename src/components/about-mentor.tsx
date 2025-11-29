'use client';

import Image from 'next/image';

type AboutMentorProps = {
  id?: string;
};

export function AboutMentor({ id }: AboutMentorProps) {
  return (
    <section id={id} className="w-full pt-12 md:pt-8 lg:pt-8 pb-6 md:pb-8 lg:pb-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center max-w-5xl mx-auto">
        <div className="space-y-4 order-2 lg:order-1">
          <h2 className="text-3xl font-bold font-headline tracking-wider sm:text-4xl md:text-5xl">Sobre el Mentor</h2>
          <h3 className="text-xl font-semibold text-primary">Israel Antonio García Mora</h3>
          <p className="text-muted-foreground md:text-lg">
              Publicista, formador y autor del libro IA para la Vida Real. Con más de 30 años en comunicación y creatividad, enseña cómo usar la inteligencia artificial de manera humana, práctica y transformadora.
          </p>
          <p className="text-muted-foreground md:text-lg">
              En cada sesión comparte su experiencia, humor y cercanía. Porque aprender IA no es para genios: es para personas reales como tú.
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src="/image/Foto_Tutor.webp"
            alt="Israel Antonio García Mora, mentor de IA"
            width={400}
            height={400}
            className="rounded-full object-cover w-[250px] h-[250px] md:w-[400px] md:h-[400px] neon-border"
            data-ai-hint="retrato hombre"
          />
        </div>
      </div>
    </section>
  );
}
