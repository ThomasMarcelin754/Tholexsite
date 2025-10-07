'use client';

import { useState } from 'react';
import { Wrench, Home, Zap, Trees, Settings, Building2, Users, DollarSign, Heart, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const RUST = "#B7472A";

const sectors = [
  {
    id: "maintenance-technique",
    title: "Maintenance Technique Bâtiment",
    icon: Wrench,
    bgColor: "bg-blue-50/80",
    iconColor: RUST,
    bgImage: "/images/gemini-generate.png",
    subSectors: [
      "Sécurité incendie",
      "Chauffage, ventilation, climatisation",
      "Ventilation et qualité de l'air intérieur",
      "Chaudières et ramonage",
      "Portes et portails automatiques",
      "Prévention légionellose et eau chaude sanitaire"
    ]
  },
  {
    id: "enveloppe",
    title: "Enveloppe Bâtiment",
    icon: Home,
    bgColor: "bg-orange-50/60",
    iconColor: RUST,
    subSectors: [
      "Toitures",
      "Zinguerie",
      "Étanchéité",
      "Diagnostics techniques réglementaires"
    ]
  },
  {
    id: "energie",
    title: "Énergie & Installations Électriques",
    icon: Zap,
    bgColor: "bg-amber-50/70",
    iconColor: RUST,
    subSectors: [
      "Bornes de recharge véhicules électriques",
      "Certification et audit énergétique",
      "Nettoyage panneaux photovoltaïques",
      "Maintenance panneaux photovoltaïques"
    ]
  },
  {
    id: "espaces-exterieurs",
    title: "Espaces Extérieurs & Aménagements",
    icon: Trees,
    bgColor: "bg-emerald-50/60",
    iconColor: RUST,
    subSectors: [
      "Installations sportives",
      "Balayage de voirie",
      "Marquage au sol",
      "Élagage urbain",
      "Aménagements paysagers",
      "Entretien de piscines"
    ]
  },
  {
    id: "maintenance-specialisee",
    title: "Maintenance Spécialisée",
    icon: Settings,
    bgColor: "bg-violet-50/60",
    iconColor: RUST,
    subSectors: [
      "Maintenance de véhicules lourds",
      "Hottes de cuisine professionnelle",
      "Bacs à graisse",
      "Dératisation",
      "Désinsectisation",
      "Désinfection"
    ]
  },
  {
    id: "services-immobiliers",
    title: "Services Immobiliers",
    icon: Building2,
    bgColor: "bg-cyan-50/60",
    iconColor: RUST,
    subSectors: [
      "Gestion locative"
    ]
  },
  {
    id: "services-rh",
    title: "Services RH & Paie",
    icon: Users,
    bgColor: "bg-pink-50/60",
    iconColor: RUST,
    subSectors: [
      "Gestion des temps et des activités"
    ]
  },
  {
    id: "services-financiers",
    title: "Services Financiers",
    icon: DollarSign,
    bgColor: "bg-teal-50/60",
    iconColor: RUST,
    subSectors: [
      "Courtage en assurance"
    ]
  },
  {
    id: "services-sante",
    title: "Services Bien-Être",
    icon: Heart,
    bgColor: "bg-rose-50/60",
    iconColor: RUST,
    subSectors: [
      "Cliniques de médecine esthétique",
      "Instituts de beauté professionnels"
    ]
  }
];

export function SectorsSection() {
  const [activeSector, setActiveSector] = useState<string | null>(null);

  const handleSectorClick = (sectorId: string) => {
    setActiveSector(activeSector === sectorId ? null : sectorId);
  };

  return (
    <section id="secteurs" className="w-full bg-white py-12 md:py-20 lg:py-[100px] px-5 md:px-10 lg:px-[80px]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p 
            className="text-[12px] md:text-[13px] tracking-[0.2em] uppercase mb-4"
            style={{ color: RUST, fontWeight: 500, letterSpacing: '0.2em' }}
          >
            Secteurs Ciblés
          </p>
          <h2 className="text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] tracking-[-0.02em] max-w-[900px] mx-auto">
            Les marchés où nous créons de la valeur
          </h2>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 mb-12 md:mb-16 items-start">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            const isActive = activeSector === sector.id;
            return (
              <div
                key={sector.id}
                onClick={() => handleSectorClick(sector.id)}
                className={`
                  ${sector.bgColor} rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10
                  transition-all duration-300 hover:shadow-lg
                  border border-black/5
                  flex flex-col items-start gap-4 md:gap-6
                  cursor-pointer relative overflow-hidden
                  ${isActive ? 'ring-2 shadow-xl scale-[1.02]' : 'hover:scale-[1.02]'}
                `}
                style={{
                  // @ts-ignore - Tailwind CSS variable
                  '--tw-ring-color': isActive ? RUST : 'transparent'
                } as React.CSSProperties}
              >
                {/* Background Image - Only for maintenance-technique */}
                {sector.bgImage && (
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                      src={sector.bgImage}
                      alt=""
                      fill
                      className="object-cover scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      priority={sector.id === "maintenance-technique"}
                    />
                    {/* Filtre doux pour fondre l'image dans la carte */}
                    <div className="absolute inset-0 bg-white/85 backdrop-blur-md transition-all duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/80 transition-opacity duration-300" />
                  </div>
                )}
                {/* Header: Icon + Title + Chevron */}
                <div className="w-full flex items-start justify-between gap-4 relative z-10">
                  <div className="flex items-start gap-4 md:gap-5 flex-1">
                    {/* Icon */}
                    <div 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'white',
                        border: `1px solid ${RUST}20`
                      }}
                    >
                      <Icon 
                        className="w-6 h-6 md:w-7 md:h-7"
                        style={{ color: sector.iconColor }}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-[16px] md:text-[17px] lg:text-[18px] leading-[1.4] flex-1 pt-2" style={{ fontWeight: 600 }}>
                      {sector.title}
                    </h3>
                  </div>

                  {/* Chevron */}
                  <ChevronDown 
                    className={`w-5 h-5 md:w-6 md:h-6 flex-shrink-0 transition-transform duration-300 mt-2 ${isActive ? 'rotate-180' : ''}`}
                    style={{ color: RUST }}
                    strokeWidth={2}
                  />
                </div>

                {/* Sub-sectors List */}
                <div 
                  className={`
                    w-full overflow-hidden transition-all duration-300 relative z-10
                    ${isActive ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="pt-2 border-t border-black/10">
                    <ul className="space-y-2 mt-4">
                      {sector.subSectors.map((subSector, idx) => (
                        <li 
                          key={idx}
                          className="text-[13px] md:text-[14px] text-[#444444] leading-[1.6] flex items-start gap-2"
                        >
                          <span style={{ color: RUST }} className="flex-shrink-0 mt-0.5">•</span>
                          <span>{subSector}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Message */}
        <div className="text-center max-w-[700px] mx-auto">
          <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#666666] leading-[1.7]">
            Votre secteur n&apos;apparaît pas ici ?{" "}
            <span style={{ color: RUST, fontWeight: 500 }}>Contactez-nous.</span>{" "}
            Nous explorons en permanence de nouveaux marchés fragmentés.
          </p>
        </div>
      </div>
    </section>
  );
}
