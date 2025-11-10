'use client';

import { useState } from 'react';
import { Wrench, Home, Zap, Trees, Settings, Building2, Users, DollarSign, Heart, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useContactForm } from '@/contexts/ContactFormContext';

const RUST = "#B7472A";

const sectors = [
  {
    id: "maintenance-technique",
    title: "Maintenance Technique du Bâtiment",
    icon: Wrench,
    bgColor: "bg-blue-50/80",
    iconColor: RUST,
    bgImage: "/images/Gemini_Generated_Image_hhpeeyhhpeeyhhpe.png",
    subSectors: [
      "Maintenance CVC (Chauffage, Ventilation, Climatisation)",
      "Ventilation & qualité de l'air intérieur",
      "Enveloppe & étanchéité du bâtiment",
      "Chaudières & ramonage",
      "3D (Dératisation, Désinsectisation, Désinfection)"
    ]
  },
  {
    id: "securite-conformite",
    title: "Sécurité & Conformité Réglementaire",
    icon: Home,
    bgColor: "bg-orange-50/60",
    iconColor: RUST,
    bgImage: "/images/Gemini_Generated_Image_t9yg42t9yg42t9yg.png",
    subSectors: [
      "Sécurité incendie",
      "Diagnostics réglementaires",
      "Contrôle et traitement légionelles"
    ]
  },
  {
    id: "installations-electriques",
    title: "Installations Électriques & Accès",
    icon: Zap,
    bgColor: "bg-amber-50/70",
    iconColor: RUST,
    bgImage: "/images/Gemini_Generated_Image_behcaabehcaabehc.png",
    subSectors: [
      "Installations électriques",
      "Bornes de recharge électrique",
      "Contrôle d'accès bâtiment"
    ]
  },
  {
    id: "espaces-verts",
    title: "Espaces Verts & Paysage",
    icon: Trees,
    bgColor: "bg-emerald-50/60",
    iconColor: RUST,
    bgImage: "/images/Gemini_Generated_Image_bet0rabet0rabet0 (1).png",
    subSectors: [
      "Élagage urbain",
      "Entretien paysager",
      "Maintenance panneaux photovoltaïques (extérieurs)"
    ]
  },
  {
    id: "voirie-marquage",
    title: "Voirie & Marquage",
    icon: Settings,
    bgColor: "bg-violet-50/60",
    iconColor: RUST,
    bgImage: "/images/Gemini_Generated_Image_oey161oey161oey1.png",
    subSectors: [
      "Marquage au sol",
      "Voirie"
    ]
  },
  {
    id: "installations-sportives",
    title: "Installations Sportives & Aquatiques",
    icon: Building2,
    bgColor: "bg-cyan-50/60",
    iconColor: RUST,
    bgImage: "/images/Gemini_Generated_Image_ty4cp7ty4cp7ty4c.png",
    subSectors: [
      "Gestion installations sportives",
      "Entretien piscines"
    ]
  },
  {
    id: "ressources-humaines",
    title: "Ressources Humaines",
    icon: Users,
    bgColor: "bg-pink-50/60",
    iconColor: RUST,
    bgImage: "/images/Gemini_Generated_Image_j1mjd8j1mjd8j1mj.png",
    subSectors: [
      "Intérim / Staffing",
      "Gestion des temps et activités (GTA)"
    ]
  },
  {
    id: "equipements-specialises",
    title: "Équipements Spécialisés",
    icon: DollarSign,
    bgColor: "bg-teal-50/60",
    iconColor: RUST,
    bgImage: "/images/Gemini_Generated_Image_ot5n6zot5n6zot5n.png",
    subSectors: [
      "Maintenance véhicules lourds",
      "Entretien cuisine professionnelle"
    ]
  },
  {
    id: "autres-services",
    title: "Autres Services",
    icon: Heart,
    bgColor: "bg-rose-50/60",
    iconColor: RUST,
    bgImage: "/images/Gemini_Generated_Image_dkzzo4dkzzo4dkzz.png",
    subSectors: [
      "Gestion locative",
      "Courtage en assurance",
      "Infogérance IT"
    ]
  }
];

export function SectorsSection() {
  const [activeSector, setActiveSector] = useState<string | null>(null);
  const { openForm } = useContactForm();

  const handleSectorClick = (sectorId: string) => {
    setActiveSector(activeSector === sectorId ? null : sectorId);
  };

  return (
    <section id="secteurs" className="w-full bg-white py-12 md:py-20 lg:py-[100px] px-5 md:px-10 lg:px-[80px]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-14">
          <p 
            className="text-[12px] md:text-[13px] tracking-[0.2em] uppercase mb-4"
            style={{ color: RUST, fontWeight: 500, letterSpacing: '0.2em' }}
          >
            Secteurs Ciblés
          </p>
          <h2 className="text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] tracking-[-0.02em] max-w-[900px] mx-auto">
            Les marchés où nous créons de la valeur
          </h2>
          <div className="mt-6 md:mt-9 lg:mt-10 flex flex-col items-center gap-3">
            <p className="text-[15px] md:text-[17px] text-[#666666] leading-[1.65] text-center">
              Votre secteur n&apos;apparaît pas ici ?
            </p>
            <button
              onClick={openForm}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[14px] md:text-[15px] font-semibold tracking-[0.08em] text-white shadow-[0_10px_24px_rgba(183,71,42,0.25)] hover:shadow-[0_14px_30px_rgba(183,71,42,0.35)] transition-all duration-300 hover:-translate-y-0.5 border-none cursor-pointer"
              style={{
                background: RUST,
                color: 'white'
              }}
            >
              Contactez-nous →
            </button>
          </div>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
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
                  '--tw-ring-color': isActive ? RUST : 'transparent'
                } as React.CSSProperties}
              >
                {/* Background Image */}
                {sector.bgImage && (
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                      src={sector.bgImage}
                      alt=""
                      fill
                      className="object-cover scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      priority={sector.id === "maintenance-technique"}
                      style={{
                        objectPosition: sector.id === "equipements-specialises" ? 'center 40%' : ((sector.id === "installations-sportives" || sector.id === "voirie-marquage" || sector.id === "espaces-verts" || sector.id === "installations-electriques" || sector.id === "securite-conformite" || sector.id === "maintenance-technique" || sector.id === "autres-services" || sector.id === "ressources-humaines") ? 'center 20%' : 'center')
                      }}
                    />
                    {/* Effet Liquid Glass - différent selon le secteur */}
                    <div
                      className="absolute inset-0 transition-all duration-300"
                      style={{
                        background: (sector.id === "equipements-specialises" || sector.id === "installations-sportives" || sector.id === "voirie-marquage" || sector.id === "espaces-verts" || sector.id === "installations-electriques" || sector.id === "securite-conformite" || sector.id === "maintenance-technique" || sector.id === "autres-services" || sector.id === "ressources-humaines")
                          ? (sector.id === "securite-conformite" ? 'rgba(0, 0, 0, 0.05)' : (sector.id === "installations-electriques" ? 'rgba(0, 0, 0, 0.20)' : (sector.id === "maintenance-technique" || sector.id === "ressources-humaines" ? 'rgba(0, 0, 0, 0.50)' : (sector.id === "installations-sportives" ? 'rgba(0, 0, 0, 0.38)' : (sector.id === "voirie-marquage" || sector.id === "espaces-verts" ? 'rgba(0, 0, 0, 0.32)' : 'rgba(0, 0, 0, 0.35)')))))
                          : 'rgba(255, 255, 255, 0.02)',
                        backdropFilter: 'blur(3px) saturate(110%)',
                        WebkitBackdropFilter: 'blur(3px) saturate(110%)'
                      }}
                    />
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
                    <h3
                      className="text-[16px] md:text-[17px] lg:text-[18px] leading-[1.4] flex-1 pt-2"
                      style={{
                        fontWeight: 600,
                        color: (sector.id === "equipements-specialises" || sector.id === "installations-sportives" || sector.id === "voirie-marquage" || sector.id === "espaces-verts" || sector.id === "installations-electriques" || sector.id === "securite-conformite" || sector.id === "maintenance-technique" || sector.id === "autres-services" || sector.id === "ressources-humaines") ? 'white' : 'inherit'
                      }}
                    >
                      {sector.title}
                    </h3>
                  </div>

                  {/* Chevron */}
                  <ChevronDown
                    className={`w-5 h-5 md:w-6 md:h-6 flex-shrink-0 transition-transform duration-300 mt-2 ${isActive ? 'rotate-180' : ''}`}
                    style={{ color: (sector.id === "equipements-specialises" || sector.id === "installations-sportives" || sector.id === "voirie-marquage" || sector.id === "espaces-verts" || sector.id === "installations-electriques" || sector.id === "securite-conformite" || sector.id === "maintenance-technique" || sector.id === "autres-services" || sector.id === "ressources-humaines") ? 'white' : RUST }}
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
                  <div className={`pt-2 ${(sector.id === "equipements-specialises" || sector.id === "installations-sportives" || sector.id === "voirie-marquage" || sector.id === "espaces-verts" || sector.id === "installations-electriques" || sector.id === "securite-conformite" || sector.id === "maintenance-technique" || sector.id === "autres-services" || sector.id === "ressources-humaines") ? 'border-t border-white/20' : 'border-t border-black/10'}`}>
                    <ul className="space-y-2 mt-4">
                      {sector.subSectors.map((subSector, idx) => (
                        <li
                          key={idx}
                          className="text-[13px] md:text-[14px] leading-[1.6] flex items-start gap-2"
                          style={{
                            color: (sector.id === "equipements-specialises" || sector.id === "installations-sportives" || sector.id === "voirie-marquage" || sector.id === "espaces-verts" || sector.id === "installations-electriques" || sector.id === "securite-conformite" || sector.id === "maintenance-technique" || sector.id === "autres-services" || sector.id === "ressources-humaines") ? 'rgba(255, 255, 255, 0.85)' : '#444444'
                          }}
                        >
                          <span
                            style={{ color: (sector.id === "equipements-specialises" || sector.id === "installations-sportives" || sector.id === "voirie-marquage" || sector.id === "espaces-verts" || sector.id === "installations-electriques" || sector.id === "securite-conformite" || sector.id === "maintenance-technique" || sector.id === "autres-services" || sector.id === "ressources-humaines") ? 'white' : RUST }}
                            className="flex-shrink-0 mt-0.5"
                          >
                            •
                          </span>
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

      </div>
    </section>
  );
}
