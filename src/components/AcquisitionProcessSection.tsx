'use client';

import { useEffect, useRef, useState } from 'react';

const RUST = "#B7472A";

const processSteps = [
  {
    number: "01",
    title: "ÉCHANGE",
    duration: "1-2 semaines",
    description: "Discussion informelle, compréhension mutuelle, signature NDA"
  },
  {
    number: "02",
    title: "ANALYSE APPROFONDIE",
    duration: "3-4 semaines",
    description: "Due diligence respectueuse, validation opérationnelle et financière"
  },
  {
    number: "03",
    title: "PROPOSITION PERSONNALISÉE",
    duration: "1 semaine",
    description: "Offre structurée (cash, earn-out, retention management)"
  },
  {
    number: "04",
    title: "CLOSING & INTÉGRATION",
    duration: "2-3 mois",
    description: "Finalisation juridique, plan d'intégration 100 jours, transformation"
  },
  {
    number: "05",
    title: "CROISSANCE COMMUNE",
    duration: "Long terme",
    description: "Déploiement synergies, digitalisation, développement"
  }
];

export function AcquisitionProcessSection() {
  const [activeCard, setActiveCard] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          const cardTop = window.scrollY + rect.top;
          const cardBottom = cardTop + rect.height;
          
          if (scrollPosition >= cardTop && scrollPosition <= cardBottom) {
            setActiveCard(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="processus"
      className="w-full bg-[#FAFAFA] py-12 md:py-20 lg:py-[100px] px-5 md:px-10 lg:px-[80px]"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20">
          {/* Left Side - Sticky Content */}
          <div className="lg:sticky lg:top-[120px] lg:self-start flex flex-col">
            <p 
              className="text-[12px] md:text-[13px] tracking-[0.2em] uppercase mb-6"
              style={{ color: RUST, fontWeight: 500 }}
            >
              PROCESSUS D&apos;ACQUISITION
            </p>
            
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-0.02em] mb-6">
              Comment candidater ?
            </h2>
            
            <p className="text-[15px] md:text-[16px] lg:text-[17px] text-[#666666] leading-[1.7] mb-8 md:mb-10 max-w-[500px]">
              Rejoignez un groupe qui valorise l&apos;entrepreneuriat familial et accédez à des opportunités de croissance structurée aux côtés de Tholex.
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
              Commencer ma candidature →
            </button>
          </div>

          {/* Right Side - Timeline */}
          <div className="relative">
            {/* Vertical Line - Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#B7472A]/20 via-[#B7472A]/40 to-[#B7472A]/20 -translate-x-1/2" />
            
            {/* Timeline Steps */}
            <div className="space-y-8 md:space-y-12 lg:space-y-16">
              {processSteps.map((step, index) => {
                const isActive = activeCard === index;
                const isLeft = index % 2 === 0;
                
                return (
                  <div
                    key={step.number}
                    ref={(el) => { if (el) cardsRef.current[index] = el; }}
                    className="relative"
                  >
                    {/* Timeline Node - Desktop */}
                    <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 z-10">
                      <div 
                        className={`w-5 h-5 rounded-full border-4 transition-all duration-500`}
                        style={{
                          background: isActive ? RUST : 'white',
                          borderColor: isActive ? RUST : '#d5d5d5',
                          boxShadow: isActive ? `0 0 0 4px ${RUST}15` : 'none'
                        }}
                      />
                    </div>

                    {/* Card Container */}
                    <div className={`lg:grid lg:grid-cols-2 lg:gap-12 ${isLeft ? '' : 'lg:grid-flow-dense'}`}>
                      {/* Empty space for alternation on desktop */}
                      <div className={`hidden lg:block ${isLeft ? 'lg:col-start-2' : 'lg:col-start-1'}`} />
                      
                      {/* Card */}
                      <div className={`${isLeft ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
                        <div
                          className={`
                            bg-white rounded-2xl p-6 md:p-8 border transition-all duration-500
                            ${isActive 
                              ? 'border-[#B7472A]/30 shadow-xl' 
                              : 'border-[#e5e5e5] shadow-sm hover:border-[#B7472A]/20 hover:shadow-lg'
                            }
                          `}
                        >
                          {/* Number Badge */}
                          <div 
                            className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4"
                            style={{
                              background: isActive ? `${RUST}10` : '#f5f5f5',
                              border: `2px solid ${isActive ? RUST : '#e5e5e5'}`
                            }}
                          >
                            <span 
                              className="text-[18px] transition-colors duration-500"
                              style={{ 
                                fontWeight: 600,
                                color: isActive ? RUST : '#999999'
                              }}
                            >
                              {step.number}
                            </span>
                          </div>

                          {/* Content */}
                          <div>
                            <h3 
                              className="text-[18px] md:text-[20px] lg:text-[22px] mb-2 tracking-[0.03em]"
                              style={{ fontWeight: 600 }}
                            >
                              {step.title}
                            </h3>
                            
                            <p 
                              className="text-[13px] md:text-[14px] mb-4"
                              style={{ 
                                color: RUST,
                                fontWeight: 500
                              }}
                            >
                              {step.duration}
                            </p>
                            
                            <p className="text-[14px] md:text-[15px] text-[#666666] leading-[1.7]">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        {/* Mobile Timeline Connector */}
                        {index < processSteps.length - 1 && (
                          <div className="lg:hidden flex items-center gap-3 py-4 pl-6">
                            <div 
                              className="w-[2px] h-8 bg-gradient-to-b from-[#B7472A]/40 to-[#B7472A]/20"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
