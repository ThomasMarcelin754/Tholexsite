export function FooterSection() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-10 sm:text-left">
        <p className="text-xs text-white/80 sm:text-sm">© {new Date().getFullYear()} Tholex. Tous droits réservés.</p>
        <div className="flex flex-wrap justify-center gap-3 text-xs text-white/70 sm:gap-4 sm:text-sm">
          <a href="#vision" className="transition hover:text-white">Vision</a>
          <a href="#criteres" className="transition hover:text-white">Critères</a>
          <a href="#founders" className="transition hover:text-white">Équipe</a>
          <a href="#cta" className="transition hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
