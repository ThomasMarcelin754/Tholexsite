'use client';

import { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Considérer scrollé après 80vh (environ la fin de la hero section)
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1400px] rounded-2xl transition-all duration-300"
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}
    >
      <div className="px-6 md:px-8 lg:px-10 py-4">
        <div className="flex items-center justify-between gap-6 w-full">
          {/* Logo THOLEX */}
          <div
            className="uppercase tracking-[0.15em] shrink-0 transition-colors duration-300"
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: isScrolled ? '#1a1a1a' : '#ffffff',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            THOLEX
          </div>

          {/* Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-8 flex-1">
            <a
              href="#capacites"
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: isScrolled ? '#444444' : '#ffffff'
              }}
              className="hover:opacity-70 transition-all whitespace-nowrap lg:text-[15px]"
            >
              Nos Capacités Support
            </a>
            <a
              href="#criteres"
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: isScrolled ? '#444444' : '#ffffff'
              }}
              className="hover:opacity-70 transition-all whitespace-nowrap lg:text-[15px]"
            >
              Nos Critères
            </a>
            <a
              href="#secteurs"
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: isScrolled ? '#444444' : '#ffffff'
              }}
              className="hover:opacity-70 transition-all whitespace-nowrap lg:text-[15px]"
            >
              Secteurs Ciblés
            </a>
            <a
              href="#contact"
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: isScrolled ? '#444444' : '#ffffff'
              }}
              className="hover:opacity-70 transition-all whitespace-nowrap lg:text-[15px]"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button - Always visible */}
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:opacity-90 whitespace-nowrap"
            style={{
              background: '#B7472A',
              color: 'white',
              fontWeight: 600,
              fontSize: '15px'
            }}
          >
            Discutons →
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 ml-auto transition-colors duration-300"
            style={{ color: isScrolled ? '#1a1a1a' : '#ffffff' }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
