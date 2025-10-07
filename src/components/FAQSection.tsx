import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const RUST = "#B7472A";

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
  return (
    <section className="w-full bg-[#FAFAFA] py-12 md:py-20 lg:py-[100px] px-5 md:px-10 lg:px-[80px]">
      <div className="max-w-[1600px] mx-auto">
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
              FAQ's
            </h2>

            <p className="text-[15px] md:text-[16px] lg:text-[17px] text-[#666666] leading-[1.7] mb-8 md:mb-10 max-w-[500px]">
              Les réponses à vos questions
            </p>

            <button
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg transition-all duration-300 hover:opacity-90 w-fit"
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
          <div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border rounded-xl px-6 md:px-8 bg-white border-[#e5e5e5] data-[state=open]:border-[#B7472A] transition-all duration-300"
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
  );
}
