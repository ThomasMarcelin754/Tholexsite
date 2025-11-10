'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { useContactForm } from '@/contexts/ContactFormContext';

const RUST = "#B7472A";

// Style pour améliorer l'animation d'accordion
const accordionStyle = `
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  [data-state="closed"] [data-slot="accordion-content"] > div {
    animation: fadeOut 150ms ease-out;
  }
`;

const faqs = [
  {
    id: "role",
    question: "Que devient mon rôle après la cession ?",
    answer: "Selon votre souhait : direction opérationnelle continue, transition progressive, ou conseil stratégique. Nous nous adaptons."
  },
  {
    id: "pricing",
    question: "Comment fixez-vous le prix ?",
    answer: "Valorisation basée sur l'EBITDA normalisé (multiples sectoriels), avec structuration flexible (cash/earn-out)"
  },
  {
    id: "employees",
    question: "Mes employés seront-ils protégés ?",
    answer: "Absolument. Nous reprenons tous les contrats et investissons dans la formation. Nos acquisitions créent des emplois, pas l'inverse."
  },
  {
    id: "timeline",
    question: "Combien de temps prend le processus ?",
    answer: "3-6 mois de l'offre initiale au closing, selon la complexité. Nous privilégions la qualité à la vitesse."
  },
  {
    id: "match",
    question: "Que se passe-t-il si nous ne \"matchez\" pas ?",
    answer: "Nous restons transparents et respectueux. Si le fit n'est pas optimal, nous vous l'indiquons rapidement et pouvons vous orienter vers d'autres acquéreurs."
  }
];

export function FAQSection() {
  const { openForm } = useContactForm();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: accordionStyle }} />
      <section
        className="w-full py-12 md:py-20 lg:py-[100px]"
        style={{ backgroundColor: "#FFF9F5" }}
      >
        <div className="w-[95%] max-w-[1400px] mx-auto px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20">
            {/* Left Side - Sticky Content */}
            <div className="lg:sticky lg:top-[120px] lg:self-start flex flex-col">
              <p
                className="text-[12px] md:text-[13px] tracking-[0.2em] uppercase mb-6"
                style={{ color: RUST, fontWeight: 500 }}
              >
                FAQ
              </p>

              <h2 className="text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-0.02em] mb-6">
                FAQ&apos;s
              </h2>

              <p className="text-[15px] md:text-[16px] lg:text-[17px] text-[#666666] leading-[1.7] mb-8 md:mb-10 max-w-[500px]">
                Les réponses à vos questions
              </p>

              <button
                onClick={openForm}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg transition-all duration-300 hover:opacity-90 w-fit border-none cursor-pointer"
                style={{
                  background: RUST,
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '16px'
                }}
              >
                Nous contacter →
              </button>
            </div>

            {/* Right Side - FAQ Accordion */}
            <div className="pb-3">
              <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
                {faqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border-2 rounded-xl px-6 md:px-8 bg-white border-[#e5e5e5] data-[state=open]:border-[#B7472A] transition-all duration-300"
                  >
                    <AccordionTrigger
                      className="py-5 md:py-6 hover:no-underline text-left"
                      style={{
                        fontSize: "17px",
                        fontWeight: 500
                      }}
                    >
                      <span className="pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent
                      className="pb-6 text-[#666666] leading-[1.7]"
                      style={{ fontSize: "16px" }}
                    >
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
