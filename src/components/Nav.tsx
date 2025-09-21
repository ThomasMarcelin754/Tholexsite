'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type NavProps = {
  className?: string;
};

export function Nav({ className = '' }: NavProps) {
  const [overlayOpen, setOverlayOpen] = useState(false);

  useEffect(() => {
    if (!overlayOpen) {
      document.body.style.removeProperty('overflow');
      return;
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [overlayOpen]);

  return (
    <>
      <nav
        className={`z-50 flex w-full max-w-[min(92vw,960px)] items-center justify-between gap-3 rounded-2xl border border-white/60 bg-white/55 px-4 py-2.5 text-sm font-medium text-foreground/80 shadow-lg shadow-black/15 backdrop-blur-md transition sm:rounded-full sm:px-6 sm:py-3 ${className}`}
      >
        <Link
          href="#home"
          className="text-sm font-semibold uppercase tracking-[0.25em] text-foreground transition hover:text-primary sm:text-base"
        >
          Tholex
        </Link>

        <div className="hidden items-center gap-6 sm:flex">
          <Link href="#home" className="transition hover:text-primary">
            Home
          </Link>
          <Link href="#about" className="transition hover:text-primary">
            Notre histoire
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOverlayOpen(true)}
          className="rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-sm transition hover:bg-primary-hover sm:px-5 sm:text-sm"
        >
          Get in touch
        </button>
      </nav>

      {overlayOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 text-left shadow-xl">
            <button
              type="button"
              onClick={() => setOverlayOpen(false)}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-base text-foreground/60 transition hover:bg-black/10 hover:text-foreground"
              aria-label="Fermer la fenêtre de contact"
            >
              ×
            </button>
            <h2 className="text-lg font-semibold text-foreground">Contact à venir</h2>
            <p className="mt-2 text-sm text-foreground/70">
              Nous brancherons ici le formulaire Supabase et le webhook CRM dans les étapes suivantes.
            </p>
            <nav className="mt-4 grid gap-2 text-sm text-foreground/80">
              <Link href="#home" className="rounded-lg bg-foreground/5 px-3 py-2 transition hover:bg-foreground/10" onClick={() => setOverlayOpen(false)}>
                Home
              </Link>
              <Link href="#about" className="rounded-lg bg-foreground/5 px-3 py-2 transition hover:bg-foreground/10" onClick={() => setOverlayOpen(false)}>
                Notre histoire
              </Link>
            </nav>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setOverlayOpen(false)}
                className="rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary transition hover:border-primary-hover hover:text-primary-hover"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Nav;
