export function Header() {
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
            className="uppercase tracking-[0.15em] shrink-0"
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: '#1a1a1a',
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
                color: '#444444'
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
                color: '#444444'
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
                color: '#444444'
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
                color: '#444444'
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

          {/* Mobile CTA */}
          <div className="md:hidden flex items-center gap-2 ml-auto">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-semibold text-white"
              style={{
                background: '#B7472A',
                boxShadow: '0 6px 18px rgba(183, 71, 42, 0.25)'
              }}
            >
              Discutons
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10.5L9 7L5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Mobile menu button */}
            <button className="p-2" style={{ color: '#1a1a1a' }}>
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
      </div>
    </header>
  );
}
