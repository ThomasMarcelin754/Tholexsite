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
        <div className="flex items-center justify-between gap-8">
          {/* Logo THOLEX */}
          <div 
            className="uppercase tracking-[0.15em]"
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: '#1a1a1a',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            THOLEX
          </div>

          {/* Navigation - Centered with flex-grow */}
          <nav className="hidden md:flex items-center flex-grow justify-center gap-8">
            <a 
              href="#capacites"
              style={{
                fontSize: '15px',
                fontWeight: 500,
                color: '#444444'
              }}
              className="hover:opacity-70 transition-all"
            >
              Nos Capacités Support
            </a>
            <a 
              href="#criteres"
              style={{
                fontSize: '15px',
                fontWeight: 500,
                color: '#444444'
              }}
              className="hover:opacity-70 transition-all"
            >
              Nos Critères
            </a>
            <a 
              href="#secteurs"
              style={{
                fontSize: '15px',
                fontWeight: 500,
                color: '#444444'
              }}
              className="hover:opacity-70 transition-all"
            >
              Secteurs Ciblés
            </a>
            <a 
              href="#contact"
              style={{
                fontSize: '15px',
                fontWeight: 500,
                color: '#444444'
              }}
              className="hover:opacity-70 transition-all"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <button
            className="hidden md:block rounded-md transition-all duration-200 hover:shadow-xl hover:scale-105"
            style={{
              background: '#B7472A',
              color: 'white',
              padding: '12px 28px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 500,
              boxShadow: '0 4px 12px rgba(183, 71, 42, 0.25)'
            }}
          >
            Discutons
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" style={{ color: '#1a1a1a' }}>
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
