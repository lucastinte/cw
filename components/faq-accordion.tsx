import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteData } from "@/lib/siteData";

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {siteData.faq.map((item, idx) => (
        <AccordionItem value={`faq-${idx}`} key={item.question}>
          <AccordionTrigger className="text-base text-foreground">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-6 text-muted-foreground">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
