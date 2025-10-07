'use client';

import { useState } from 'react';
import { Linkedin } from 'lucide-react';
import Image from 'next/image';

const RUST = "#B7472A";

interface Founder {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedin?: string;
}

const founders: Founder[] = [
  {
    id: "founder-1",
    name: "Pierre Dubois",
    role: "Co-Fondateur & CEO",
    bio: "20 ans d'expérience en M&A et private equity, ancien directeur chez Ardian. Passionné par l'entrepreneuriat familial.",
    imageUrl: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTY5NTM1NHww&ixlib=rb-4.1.0&q=80&w=1080",
    linkedin: "#"
  },
  {
    id: "founder-2",
    name: "Sophie Martin",
    role: "Co-Fondatrice & COO",
    bio: "Expertise en transformation opérationnelle et digitalisation des PME. Ex-McKinsey et fondatrice de 2 startups.",
    imageUrl: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NjMyODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    linkedin: "#"
  }
];

export function FoundersSection() {
  const [hoveredFounder, setHoveredFounder] = useState<string | null>(null);

  return (
    <section 
      id="fondateurs" 
      className="w-full bg-white py-12 md:py-20 lg:py-[100px] px-5 md:px-10 lg:px-[80px]"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
          {/* Left Side - Content */}
          <div className="lg:sticky lg:top-[120px] lg:self-start">
            <p 
              className="text-[12px] md:text-[13px] tracking-[0.2em] uppercase mb-6"
              style={{ color: RUST, fontWeight: 500 }}
            >
              NOS FONDATEURS
            </p>
            
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-0.02em] mb-6">
              L&apos;équipe derrière Tholex
            </h2>
            
            <p className="text-[15px] md:text-[16px] lg:text-[17px] text-[#666666] leading-[1.7] max-w-[500px]">
              Découvrez les entrepreneurs et experts qui ont fondé Tholex pour accompagner les cédants dans leur transition et créer de la valeur durable.
            </p>
          </div>

          {/* Right Side - Founders Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {founders.map((founder) => {
              const isHovered = hoveredFounder === founder.id;
              
              return (
                <div
                  key={founder.id}
                  className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
                  onMouseEnter={() => setHoveredFounder(founder.id)}
                  onMouseLeave={() => setHoveredFounder(null)}
                >
                  {/* Image */}
                  <Image
                    src={founder.imageUrl}
                    alt={founder.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay - Always visible but stronger on hover */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500"
                    style={{
                      opacity: isHovered ? 1 : 0.7
                    }}
                  />

                  {/* Content Overlay - Bottom Third */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    {/* Name & Role - Always visible */}
                    <div className="text-white mb-3">
                      <h3 
                        className="text-[20px] md:text-[22px] lg:text-[24px] mb-1"
                        style={{ fontWeight: 600 }}
                      >
                        {founder.name}
                      </h3>
                      <p 
                        className="text-[13px] md:text-[14px]"
                        style={{ 
                          color: RUST,
                          fontWeight: 500,
                          filter: 'brightness(1.5)'
                        }}
                      >
                        {founder.role}
                      </p>
                    </div>

                    {/* Bio - Appears on hover */}
                    <div 
                      className="overflow-hidden transition-all duration-500"
                      style={{
                        maxHeight: isHovered ? '200px' : '0',
                        opacity: isHovered ? 1 : 0
                      }}
                    >
                      <p className="text-[12px] md:text-[13px] text-white/90 leading-[1.7] mb-4">
                        {founder.bio}
                      </p>

                      {/* LinkedIn Link */}
                      {founder.linkedin && (
                        <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                          <span className="text-[12px]" style={{ fontWeight: 500 }}>
                            LinkedIn
                          </span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Top Accent Line - Appears on hover */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 transition-all duration-500"
                    style={{
                      background: RUST,
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left'
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}