'use client';

import { useState } from 'react';
import {
  Calculator,
  Scale,
  Users,
  Monitor,
  Package,
  Megaphone,
  TrendingUp,
  LucideIcon,
} from 'lucide-react';
import Image from 'next/image';

const RUST = "#B7472A";

interface Capability {
  id: string;
  icon: LucideIcon;
  title: string;
  teaser: string;
  bullets: string[];
  image?: string;
}

const capabilities: Capability[] = [
  {
    id: "finance",
    icon: Calculator,
    title: "Finance & Comptabilité",
    teaser: "Pilotage financier et reporting consolidé",
    bullets: [
      "Consolidation comptable multi-entités",
      "Reporting mensuel groupe & analytique",
      "Optimisation fiscale et trésorerie",
      "Relations bancaires et financement"
    ],
    image: "/images/finance-capability.png"
  },
  {
    id: "juridique",
    icon: Scale,
    title: "Juridique & Conformité",
    teaser: "Sécurité juridique et gestion des risques",
    bullets: [
      "Rédaction et négociation de contrats",
      "Veille réglementaire sectorielle",
      "Gestion des litiges et contentieux",
      "Mise en conformité RGPD et normes"
    ]
  },
  {
    id: "rh",
    icon: Users,
    title: "Ressources Humaines & Paie",
    teaser: "Gestion RH complète et développement des talents",
    bullets: [
      "Administration du personnel et paie",
      "Recrutement et onboarding",
      "Formation et développement des compétences",
      "Relations sociales et climat interne"
    ]
  },
  {
    id: "it",
    icon: Monitor,
    title: "IT & Transformation Digitale",
    teaser: "Infrastructure moderne et automatisation",
    bullets: [
      "Infrastructure IT mutualisée et sécurisée",
      "Cybersécurité et protection des données",
      "Déploiement d'outils métiers (CRM, ERP)",
      "Automatisation des processus back-office"
    ]
  },
  {
    id: "achats",
    icon: Package,
    title: "Achats & Approvisionnement",
    teaser: "Optimisation des coûts par la mutualisation",
    bullets: [
      "Centralisation des achats récurrents",
      "Négociation fournisseurs groupe",
      "Référencement et gestion des contrats",
      "Optimisation du TCO (Total Cost of Ownership)"
    ]
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing",
    teaser: "Stratégie et positionnement de marque",
    bullets: [
      "Stratégie marketing et positionnement",
      "Identité de marque et communication",
      "Marketing digital et content marketing",
      "Analyse de marché et veille concurrentielle"
    ]
  },
  {
    id: "commercial",
    icon: TrendingUp,
    title: "Développement Commercial",
    teaser: "Croissance structurée et outils performants",
    bullets: [
      "Génération de leads et CRM",
      "Outils digitaux et analytics",
      "Support avant-vente et formations commerciales",
      "Structuration de la force de vente"
    ]
  }
];

export function CapabilitiesSection() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeItemMobile, setActiveItemMobile] = useState<string | null>(null);

  const activeCapability = capabilities.find(cap => cap.id === hoveredItem) || capabilities[0];

  return (
    <section id="capacites" className="w-full min-h-[85vh] bg-white py-12 md:py-20 lg:py-[100px] px-5 md:px-10 lg:px-[80px]">
      <div className="max-w-[1600px] mx-auto">
        {/* Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* LEFT SIDE: Section Title + Capabilities List */}
          <div className="flex flex-col space-y-0">
            {/* Section Title - Aligned with top of image */}
            <div className="mb-8 lg:mb-12">
              <p 
                className="text-[12px] md:text-[13px] tracking-[0.2em] uppercase mb-4 md:mb-6"
                style={{ color: RUST, fontWeight: 500 }}
              >
                NOS CAPACITÉS SUPPORT
              </p>
              <h2 className="text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-0.02em]">
                Notre plateforme
              </h2>
            </div>

            {/* Capabilities List */}
            <div className="space-y-0">
            {capabilities.map((capability) => {
              const isHovered = hoveredItem === capability.id;
              const isActiveMobile = activeItemMobile === capability.id;
              const isActive = isHovered || isActiveMobile;
              
              return (
                <div key={capability.id} className="lg:contents">
                  <div
                    onMouseEnter={() => setHoveredItem(capability.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={() => setActiveItemMobile(isActiveMobile ? null : capability.id)}
                    className={`
                      relative py-4 md:py-5 lg:py-6 px-3 md:px-4 transition-all duration-300 cursor-pointer
                      ${isActive ? 'bg-[#B7472A]/[0.02]' : ''}
                    `}
                  >
                    {/* Left Border on Hover/Active */}
                    <div 
                      className={`
                        absolute left-0 top-0 h-full w-[1.5px] transition-all duration-300
                        ${isActive ? 'bg-[#B7472A]' : 'bg-transparent'}
                      `}
                    />

                    {/* Main Row: Icon + Title */}
                    <div className="flex items-center gap-3 md:gap-4 mb-1.5 lg:mb-2">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        {(() => {
                          const Icon = capability.icon;
                          return (
                            <Icon 
                              className={`w-[18px] h-[18px] md:w-[20px] md:h-[20px] transition-colors duration-300 ${isActive ? 'text-[#B7472A]' : 'text-[#999999]'}`}
                              strokeWidth={1.5}
                            />
                          );
                        })()}
                      </div>

                      {/* Title */}
                      <h3 
                        className={`
                          text-[16px] md:text-[18px] lg:text-[20px] tracking-[-0.01em] transition-colors duration-300 flex-1
                          ${isActive ? 'text-[#B7472A]' : 'text-[#1a1a1a]'}
                        `}
                        style={{ fontWeight: 600 }}
                      >
                        {capability.title}
                      </h3>
                    </div>

                    {/* Teaser - Below title */}
                    <p className={`text-[13px] md:text-[14px] text-[#999999] pl-[30px] md:pl-[36px] mb-2 transition-opacity duration-300 ${isActive ? 'opacity-70' : 'opacity-0'}`}>
                      {capability.teaser}
                    </p>

                    {/* Bullets - Appear on Hover/Click */}
                    <div
                      className={`
                        overflow-hidden transition-all duration-300 pl-[30px] md:pl-[36px]
                        ${isActive ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
                      `}
                    >
                      <ul className="space-y-1.5 mt-2">
                        {capability.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="text-[13px] md:text-[14px] text-[#666666] leading-[1.6] flex items-start gap-2"
                            style={{
                              animation: isActive ? `slideDown 0.3s ease forwards ${idx * 0.05}s` : 'none'
                            }}
                          >
                            <span className="text-[#B7472A] mt-0.5 flex-shrink-0 text-[10px]">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Mobile Image - Shows below active item */}
                  {isActiveMobile && capability.image && (
                    <div className="lg:hidden px-3 pb-6">
                      <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-[#fafafa] to-[#f5f5f5] border border-[#e5e5e5]">
                        <Image
                          src={capability.image}
                          alt={capability.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            </div>
          </div>

          {/* RIGHT SIDE: Visual Panel - Hidden on mobile */}
          <div className="hidden lg:block lg:sticky lg:top-[100px] h-fit">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-[#fafafa] to-[#f5f5f5] border border-[#e5e5e5]">
              {/* Image or Placeholder */}
              {activeCapability.image ? (
                <Image
                  src={activeCapability.image}
                  alt={activeCapability.title}
                  fill
                  className="object-cover transition-opacity duration-500"
                />
              ) : (
                <div 
                  className="absolute inset-0 flex items-center justify-center transition-all duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${RUST}08 0%, transparent 70%)`
                  }}
                >
                  <div className="text-center">
                    <div 
                      className="w-24 h-24 rounded-2xl mx-auto mb-6 flex items-center justify-center border-2"
                      style={{
                        background: `linear-gradient(135deg, ${RUST}15, ${RUST}08)`,
                        borderColor: `${RUST}40`
                      }}
                    >
                      {(() => {
                        const Icon = activeCapability.icon;
                        return (
                          <Icon 
                            className="w-12 h-12"
                            style={{ color: RUST }}
                            strokeWidth={1.5}
                          />
                        );
                      })()}
                    </div>
                    
                    <p className="text-[14px] text-[#999999] mb-2">
                      Visuel à venir
                    </p>
                    <p className="text-[18px] text-[#1a1a1a]">
                      {activeCapability.title}
                    </p>
                  </div>
                </div>
              )}

              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes for slide down animation */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
