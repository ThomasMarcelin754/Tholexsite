'use client';

import { useEffect, useRef } from 'react';

const RUST = "#B7472A";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] flex items-center overflow-hidden">
      {/* Video Background - French Riviera Full Screen */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1759390304892-dfb3cae59a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYWN0b3J5JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NTk2NjkwOTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
        >
          <source src="/videos/french_riviera_sunrise_video.mp4" type="video/mp4" />
        </video>

        {/* Subtle dark overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.2) 100%)'
          }}
        />
      </div>

      {/* Content - Aligned with Navbar */}
      <div className="relative z-10 w-[95%] max-w-[1400px] mx-auto pt-20 md:pt-28 lg:pt-32">
        <div className="max-w-[600px] px-6 md:px-8 lg:px-10">
          {/* Badge */}
          <div 
            className="inline-block px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <span 
              className="text-[12px] md:text-[13px] tracking-[0.15em] uppercase text-white"
              style={{ fontWeight: 500 }}
            >
              Groupe Industriel
            </span>
          </div>

          {/* Main Headline */}
          <h1 
            className="text-[44px] md:text-[56px] lg:text-[68px] leading-[1.05] tracking-[-0.02em] mb-6 text-white"
            style={{ 
              fontWeight: 700
            }}
          >
            Rachat de PME<br />
            <span style={{ color: RUST, filter: 'brightness(1.3)' }}>
              familiales
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-[16px] md:text-[18px] text-white/90 leading-[1.6] max-w-[480px]"
          >
            Hub central pour toutes vos fonctions support.
          </p>
        </div>
      </div>
    </section>
  );
}
