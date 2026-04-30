"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Faq {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  title: string;
  faqs: Faq[];
}

export function FaqAccordion({ title, faqs }: FaqAccordionProps) {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 lg:px-8">
      <h2 className="font-heading text-3xl font-bold text-[#051d40] dark:text-white mb-8 text-center">{title}</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem 
            key={i} 
            value={`item-${i}`}
            className="bg-secondary dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-md shadow-blue-900/5 rounded-xl px-6 mb-4 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all overflow-hidden border-l-4 border-l-[#051d40]"
          >
            <AccordionTrigger className="text-left font-bold text-[#051d40] dark:text-white hover:no-underline py-5 text-lg group">
              <span className="group-hover:text-[#D71920] transition-colors">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="text-slate-700 dark:text-slate-300 leading-relaxed pb-5 font-medium border-t border-slate-200/50 dark:border-slate-700 pt-4 mt-1">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
