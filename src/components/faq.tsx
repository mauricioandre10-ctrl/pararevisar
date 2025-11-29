import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqItems } from '@/lib/content';

export function Faq() {
  return (
    <section id="faq" className="w-full py-12 md:py-8">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl w-full text-center">
            <div className="space-y-4 mb-12">
                <h2 className="text-3xl font-bold font-headline tracking-wider sm:text-5xl">Preguntas Frecuentes</h2>
            </div>
            <Accordion type="single" collapsible className="w-full text-left mx-auto">
                {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-lg font-semibold">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                        {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </div>
    </section>
  );
}
