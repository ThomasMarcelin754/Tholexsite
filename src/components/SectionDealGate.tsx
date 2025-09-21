'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const VIEW_COUNT = 2;

const CRITERIA = [
  {
    id: 'rentabilite',
    title: 'Rentabilité stable',
    description: 'Historique profitable sur minimum 3 ans.',
  },
  {
    id: 'ebitda',
    title: 'EBITDA : X–Y M€',
    description: 'Fourchette indicative ajustée selon votre dossier.',
  },
  {
    id: 'recurrence',
    title: 'Récurrence',
    description: 'Maintenance, contrats long terme ou abonnements actifs.',
  },
  {
    id: 'equipe',
    title: 'Équipe autonome',
    description: 'Noyau technique solide capable de tenir le quotidien.',
  },
  {
    id: 'clients',
    title: 'Clients diversifiés',
    description: 'Concentration client inférieure à 25 % du chiffre.',
  },
  {
    id: 'consolidation',
    title: 'Potentiel de consolidation',
    description: 'Synergies locales, build-up ou intégration régionale.',
  },
] as const;

type Deal = {
  id: string;
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
  linkedCriteria: Array<(typeof CRITERIA)[number]['id']>;
};

const DEALS: Deal[] = [
  {
    id: 'transmission',
    title: 'Time to go in vacation',
    badge: 'Transmission',
    description:
      'Transmission sereine pour les fondateurs qui veulent céder en douceur tout en préservant leur héritage.',
    bullets: [
      'Prix / earn-out défini en confiance',
      'Accompagnement progressif sur 12 à 24 mois',
      'Garantie de maintenir l’ADN de la société',
    ],
    ctaLabel: 'Parlons-en',
    linkedCriteria: ['rentabilite', 'recurrence', 'equipe', 'clients'],
  },
  {
    id: 'croissance',
    title: 'Construisons le futur ensemble',
    badge: 'Croissance',
    description:
      'Co-investissement pour accélérer : synergies commerciales, roadmap data-driven et playbook 3 ans.',
    bullets: [
      'Gouvernance partagée et transparente',
      'Digitalisation des opérations clés',
      'Stratégie M&A ciblée sur votre vertical',
    ],
    ctaLabel: 'Me contacter',
    linkedCriteria: ['ebitda', 'recurrence', 'consolidation', 'clients'],
  },
];

function usePrefersReducedMotion(): boolean {
  const [prefers, setPrefers] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefers(media.matches);

    const listener = (event: MediaQueryListEvent) => setPrefers(event.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, []);

  return prefers;
}

const easeOut = (value: number) => 1 - Math.pow(1 - value, 3);

export function SectionDealGate() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [enhanced, setEnhanced] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(true);

  useEffect(() => {
    setEnhanced(true);
  }, []);

  useEffect(() => {
    const updateViewport = () => {
      setIsMobileViewport(window.innerWidth < 768);
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);

    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  if (!enhanced) {
    return <FallbackSection prefersReducedMotion={prefersReducedMotion} />;
  }

  return (
    <InteractiveSection
      prefersReducedMotion={prefersReducedMotion}
      isMobileViewport={isMobileViewport}
    />
  );
}

type InteractiveSectionProps = {
  prefersReducedMotion: boolean;
  isMobileViewport: boolean;
};

function InteractiveSection({ prefersReducedMotion, isMobileViewport }: InteractiveSectionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const mobileContainerRef = useRef<HTMLDivElement | null>(null);
  const viewRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [progress, setProgress] = useState(0);
  const [currentView, setCurrentView] = useState(0);
  const [hoveredDeal, setHoveredDeal] = useState<string | null>(null);
  const [overlayContext, setOverlayContext] = useState<Deal | null>(null);
  const rafRef = useRef<number | null>(null);
  const [sectionHeight, setSectionHeight] = useState(() => `calc(${VIEW_COUNT} * 100dvh)`);
  const [isScrollReleased, setIsScrollReleased] = useState(!isMobileViewport);
  const [isSectionActive, setIsSectionActive] = useState(false);
  const previousOverflowRef = useRef<{ body: string; html: string } | null>(null);

  const updateProgress = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;

    const start = el.offsetTop;
    const height = el.offsetHeight;
    const maxScroll = height - window.innerHeight;
    if (maxScroll <= 0) {
      setProgress(0);
      return;
    }

    const raw = (window.scrollY - start) / maxScroll;
    const clamped = Math.min(Math.max(raw, 0), 1);
    setProgress(clamped);
  }, []);

  const recomputeSectionHeight = useCallback(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    if (!section || !sticky) return;

    const viewportHeight = window.innerHeight;
    const stickyHeight = sticky.offsetHeight;
    const requiredHeight = Math.max(stickyHeight + viewportHeight, viewportHeight * VIEW_COUNT);

    setSectionHeight(`${requiredHeight}px`);
    requestAnimationFrame(updateProgress);
  }, [updateProgress]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionActive(entry.isIntersecting);
      },
      {
        threshold: [0.1],
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isMobileViewport) {
      setSectionHeight('100vh');
      return;
    }

    const onScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateProgress);
    recomputeSectionHeight();
    window.addEventListener('resize', recomputeSectionHeight);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateProgress);
      window.removeEventListener('resize', recomputeSectionHeight);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isMobileViewport, updateProgress, recomputeSectionHeight]);

  useEffect(() => {
    if (isMobileViewport) return;
    const next = progress >= 0.5 ? 1 : 0;
    setCurrentView((prev) => (prev === next ? prev : next));
  }, [isMobileViewport, progress]);

  useEffect(() => {
    if (isMobileViewport) return;
    recomputeSectionHeight();
  }, [isMobileViewport, currentView, overlayContext, recomputeSectionHeight]);

  const activeDeal = useMemo(() => DEALS.find((deal) => deal.id === hoveredDeal) ?? null, [hoveredDeal]);

  const scrollToView = useCallback((viewIndex: number) => {
    if (isMobileViewport) {
      const container = mobileContainerRef.current;
      const target = viewRefs.current[viewIndex];
      if (!container || !target) return;

      const behavior = prefersReducedMotion ? 'auto' : 'smooth';
      const top = target.offsetTop - container.offsetTop;
      container.scrollTo({ top, behavior });
      return;
    }

    const el = sectionRef.current;
    if (!el) return;

    const maxScroll = Math.max(el.offsetHeight - window.innerHeight, 0);
    const offset = viewIndex <= 0 ? 0 : maxScroll;
    const top = el.offsetTop + offset;

    const behavior = prefersReducedMotion ? 'auto' : 'smooth';
    window.scrollTo({ top, behavior });
  }, [isMobileViewport, prefersReducedMotion]);

  const handleOpenOverlay = useCallback((deal: Deal) => {
    setOverlayContext(deal);
  }, []);

  const handleCloseOverlay = useCallback(() => {
    setOverlayContext(null);
  }, []);

  const transformValue = useMemo(() => {
    if (isMobileViewport) {
      return 'translateY(0)';
    }

    if (prefersReducedMotion) {
      return progress >= 0.5 ? 'translateY(-100%)' : 'translateY(0)';
    }

    const eased = easeOut(progress);
    return `translateY(-${eased * 100}%)`;
  }, [isMobileViewport, prefersReducedMotion, progress]);

  useEffect(() => {
    if (!isMobileViewport) {
      if (previousOverflowRef.current) {
        document.body.style.overflow = previousOverflowRef.current.body;
        document.documentElement.style.overflow = previousOverflowRef.current.html;
        previousOverflowRef.current = null;
      }
      return;
    }

    if (isScrollReleased || !isSectionActive) {
      if (previousOverflowRef.current) {
        document.body.style.overflow = previousOverflowRef.current.body;
        document.documentElement.style.overflow = previousOverflowRef.current.html;
        previousOverflowRef.current = null;
      }
      return;
    }

    if (!previousOverflowRef.current) {
      previousOverflowRef.current = {
        body: document.body.style.overflow,
        html: document.documentElement.style.overflow,
      };
    }

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      if (previousOverflowRef.current) {
        document.body.style.overflow = previousOverflowRef.current.body;
        document.documentElement.style.overflow = previousOverflowRef.current.html;
        previousOverflowRef.current = null;
      }
    };
  }, [isMobileViewport, isScrollReleased, isSectionActive]);

  useEffect(() => {
    if (!isMobileViewport) {
      setIsScrollReleased(true);
      return;
    }

    setIsScrollReleased(false);
  }, [isMobileViewport]);

  useEffect(() => {
    if (!isMobileViewport || !isSectionActive || isScrollReleased) return;

    setCurrentView(0);
    if (mobileContainerRef.current) {
      mobileContainerRef.current.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [isMobileViewport, isSectionActive, isScrollReleased]);

  useEffect(() => {
    if (!isMobileViewport) return;
    const container = mobileContainerRef.current;
    if (!container) return;

    const views = viewRefs.current.filter((view): view is HTMLDivElement => Boolean(view));
    if (!views.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLDivElement;
          const indexAttr = target.dataset.viewIndex;
          if (typeof indexAttr === 'undefined') return;
          const index = Number.parseInt(indexAttr, 10);
          if (Number.isNaN(index)) return;

          if (entry.intersectionRatio >= 0.8) {
            setCurrentView(index);
            if (index === 1) {
              setIsScrollReleased(true);
            }
          }
        });
      },
      {
        root: container,
        threshold: [0.2, 0.5, 0.8, 1],
      }
    );

    views.forEach((view) => observer.observe(view));

    return () => observer.disconnect();
  }, [isMobileViewport]);

  return (
    <section
      id="criteres"
      ref={sectionRef}
      className="relative isolate scroll-mt-24 bg-accent/40 pb-12"
      aria-labelledby="deal-gate-heading"
      style={{ minHeight: sectionHeight }}
    >
      <div
        ref={stickyRef}
        className={`sticky top-0 z-10 flex flex-col overflow-hidden bg-accent/40 backdrop-blur-sm ${
          isMobileViewport ? 'h-screen' : 'min-h-[100dvh] pb-16'
        }`}
      >
        <header className="flex flex-col items-center gap-3 px-4 pt-10 sm:gap-4 sm:px-6">
          <div className="flex items-center gap-3">
            <BadgeButton
              label="CRITÈRES"
              active={currentView === 0}
              onClick={() => scrollToView(0)}
            />
            <BadgeButton
              label="DEAL FIT"
              active={currentView === 1}
              disabled={isMobileViewport ? !isScrollReleased : progress < 0.5}
              onClick={() => scrollToView(1)}
            />
          </div>
          <h2 id="deal-gate-heading" className="text-center text-2xl font-semibold text-foreground sm:text-4xl">
            Ce que nous regardons & comment on embarque
          </h2>
          <p className="max-w-3xl text-center text-xs text-foreground/70 sm:text-base">
            Faites glisser pour explorer nos critères d’investissement, puis découvrez la structure de deal correspondante.
          </p>
        </header>

        <div className={`relative mt-6 flex-1 ${isMobileViewport ? 'mt-4' : ''} overflow-hidden`}>
          {isMobileViewport ? (
            <div
              ref={mobileContainerRef}
              className={`flex h-full snap-y snap-mandatory flex-col overflow-y-auto ${
                prefersReducedMotion ? '' : 'scroll-smooth'
              } ${isScrollReleased ? 'overscroll-y-auto' : 'overscroll-y-none'}`}
            >
              {[0, 1].map((index) => (
                <div
                  key={index}
                  ref={(node) => {
                    viewRefs.current[index] = node;
                  }}
                  data-view-index={index}
                  className="flex h-[100vh] min-h-[100vh] flex-shrink-0 snap-start"
                >
                  {index === 0 ? (
                    <ViewCriteria
                      active={currentView === 0}
                      highlightDeal={activeDeal}
                      isMobile
                      prefersReducedMotion={prefersReducedMotion}
                    />
                  ) : (
                    <ViewDealFit
                      active={currentView === 1}
                      onHover={setHoveredDeal}
                      onFocus={setHoveredDeal}
                      onBlur={() => setHoveredDeal(null)}
                      onClickCTA={handleOpenOverlay}
                      isMobile
                      prefersReducedMotion={prefersReducedMotion}
                    />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div
              className={`absolute inset-0 flex h-[200%] w-full flex-col will-change-transform ${
                prefersReducedMotion ? '' : 'transition-transform duration-500 ease-out'
              }`}
              style={{ transform: transformValue }}
              aria-live="polite"
            >
              <ViewCriteria
                active={currentView === 0}
                highlightDeal={activeDeal}
                isMobile={false}
                prefersReducedMotion={prefersReducedMotion}
              />
              <ViewDealFit
                active={currentView === 1}
                onHover={setHoveredDeal}
                onFocus={setHoveredDeal}
                onBlur={() => setHoveredDeal(null)}
                onClickCTA={handleOpenOverlay}
                isMobile={false}
                prefersReducedMotion={prefersReducedMotion}
              />
            </div>
          )}
        </div>

        <nav className="pointer-events-none mb-8 flex items-center justify-center gap-3 px-4 sm:mb-10 sm:px-6">
          {[0, 1].map((index) => {
            const isActive = currentView === index;
            const isUnlocked =
              index === 0 || (isMobileViewport ? isScrollReleased : progress >= 0.5);
            return (
              <button
                key={index}
                type="button"
                disabled={!isUnlocked}
                onClick={() => scrollToView(index)}
                className={`pointer-events-auto h-3.5 w-3.5 rounded-full transition ${
                  isActive
                    ? 'scale-125 bg-primary shadow-[0_0_0_4px_rgba(183,65,14,0.15)]'
                    : 'bg-foreground/30 hover:bg-foreground/60 disabled:bg-foreground/10'
                } ${!isUnlocked ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                aria-label={`Aller à la vue ${index + 1}`}
              />
            );
          })}
        </nav>
      </div>

      {overlayContext ? (
        <Overlay deal={overlayContext} onClose={handleCloseOverlay} />
      ) : null}
    </section>
  );
}

type FallbackSectionProps = {
  prefersReducedMotion?: boolean;
};

function FallbackSection({ prefersReducedMotion = false }: FallbackSectionProps) {
  return (
    <section id="criteres" className="scroll-mt-24 bg-accent">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-4 py-20 sm:gap-16 sm:px-6 sm:py-24">
        <header className="flex flex-col items-center gap-3 text-center sm:gap-4">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-primary/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              CRITÈRES
            </span>
            <span className="rounded-full border border-primary/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              DEAL FIT
            </span>
          </div>
          <h2 className="text-2xl font-semibold text-foreground sm:text-4xl">
            Ce que nous regardons & comment on embarque
          </h2>
          <p className="max-w-3xl text-xs text-foreground/70 sm:text-base">
            En version accessible (scroll-snap) pour découvrir nos critères puis nos structures de deal.
          </p>
        </header>

        <div className="space-y-12 sm:space-y-16">
          <ViewCriteria active highlightDeal={null} prefersReducedMotion={prefersReducedMotion} />
          <ViewDealFit
            active
            onHover={() => {}}
            onFocus={() => {}}
            onBlur={() => {}}
            onClickCTA={() => {}}
            prefersReducedMotion={prefersReducedMotion}
          />
        </div>
      </div>
    </section>
  );
}

type CriteriaViewProps = {
  active: boolean;
  highlightDeal: Deal | null;
  isMobile?: boolean;
  prefersReducedMotion?: boolean;
};

function ViewCriteria({
  active,
  highlightDeal,
  isMobile = false,
  prefersReducedMotion = false,
}: CriteriaViewProps) {
  return (
    <section
      aria-label="Critères"
      className={`flex min-h-full w-full flex-shrink-0 flex-col ${
        isMobile ? 'items-stretch' : 'items-center'
      } justify-start gap-8 px-4 pb-16 pt-14 ${
        prefersReducedMotion ? '' : 'transition duration-300'
      } sm:gap-10 sm:px-6 sm:pb-12 sm:pt-12 ${
        isMobile ? 'snap-start overflow-y-auto' : ''
      } ${
        active ? 'opacity-100' : 'opacity-60'
      }`}
    >
      <div className="grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CRITERIA.map((criterion, index) => {
          const isHighlighted = highlightDeal?.linkedCriteria.includes(criterion.id) ?? false;
          return (
            <article
              key={criterion.id}
              className={`relative overflow-hidden rounded-3xl border p-6 ${
                prefersReducedMotion ? '' : 'transition duration-300'
              } ${
                isHighlighted
                  ? 'border-primary/50 bg-white shadow-[0_30px_80px_-30px_rgba(183,65,14,0.65)]'
                  : 'border-white/20 bg-white/85 backdrop-blur-sm shadow-[0_20px_50px_-30px_rgba(15,15,15,0.35)]'
              } ${active ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'}`}
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition ${
                isHighlighted ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
              }`}
              >
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{criterion.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{criterion.description}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                Aligné avec nos critères
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
}

type DealFitProps = {
  active: boolean;
  onHover: (dealId: string | null) => void;
  onFocus: (dealId: string | null) => void;
  onBlur: () => void;
  onClickCTA: (deal: Deal) => void;
  isMobile?: boolean;
  prefersReducedMotion?: boolean;
};

function ViewDealFit({
  active,
  onHover,
  onFocus,
  onBlur,
  onClickCTA,
  isMobile = false,
  prefersReducedMotion = false,
}: DealFitProps) {
  return (
    <section
      aria-label="Deal fit"
      className={`flex min-h-full w-full flex-shrink-0 flex-col ${
        isMobile ? 'items-stretch' : 'items-center'
      } justify-start gap-8 px-4 pb-20 pt-14 ${
        prefersReducedMotion ? '' : 'transition duration-300'
      } sm:gap-10 sm:px-6 sm:pb-12 sm:pt-12 ${
        isMobile ? 'snap-start overflow-y-auto' : ''
      } ${
        active ? 'opacity-100' : 'opacity-60'
      }`}
    >
      <div className="grid w-full max-w-5xl gap-5 sm:gap-6 lg:grid-cols-2">
        {DEALS.map((deal, index) => (
          <article
            key={deal.id}
            className={`relative flex h-full flex-col justify-between gap-6 rounded-3xl border border-primary/15 bg-gradient-to-br from-white via-white to-accent/40 p-6 shadow-[0_30px_80px_-40px_rgba(15,15,15,0.55)] ${
              prefersReducedMotion ? '' : 'transition duration-300'
            } sm:p-8 ${
              active ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'
            }`}
            style={{ transitionDelay: `${index * 80}ms` }}
            onMouseEnter={() => onHover(deal.id)}
            onMouseLeave={() => onHover(null)}
            onFocus={() => onFocus(deal.id)}
            onBlur={onBlur}
          >
            <div className="pointer-events-none absolute inset-x-6 -top-6 h-12 rounded-full bg-primary/15 blur-2xl" aria-hidden />
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{deal.title}</h3>
                <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs sm:tracking-[0.25em]">
                  {deal.badge}
                </span>
              </div>
              <p className="text-sm text-foreground/70 sm:text-base">{deal.description}</p>
              <ul className="space-y-2 text-xs text-foreground/80 sm:text-sm">
                {deal.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-primary" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                Aligné avec nos critères
              </span>
              <button
                type="button"
                onClick={() => onClickCTA(deal)}
                className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(183,65,14,0.6)] transition hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {deal.ctaLabel}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

type BadgeButtonProps = {
  label: string;
  active: boolean;
  onClick: () => void;
  disabled?: boolean;
};

function BadgeButton({ label, active, onClick, disabled }: BadgeButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition sm:px-4 sm:text-xs sm:tracking-[0.25em] ${
        active
          ? 'scale-105 border-primary bg-primary text-white shadow-[0_12px_30px_-20px_rgba(183,65,14,0.9)]'
          : 'border-primary/25 bg-white text-primary hover:border-primary/40 hover:bg-primary/10'
      } ${
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
      } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
    >
      {label}
    </button>
  );
}

type OverlayProps = {
  deal: Deal;
  onClose: () => void;
};

function Overlay({ deal, onClose }: OverlayProps) {
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-8 text-center shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-lg text-foreground/60 transition hover:bg-black/10 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label="Fermer"
        >
          ×
        </button>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">Prise de contact</p>
        <h3 className="mt-2 text-2xl font-semibold text-foreground">{deal.title}</h3>
        <p className="mt-4 text-sm text-foreground/70">
          Nous intégrerons ici le formulaire Supabase et le webhook CRM pour traiter votre demande.
        </p>
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-primary px-6 py-2 text-sm font-semibold text-primary transition hover:border-primary-hover hover:text-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

export default SectionDealGate;
