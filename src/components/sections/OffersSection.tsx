const offers = ['Offre 1', 'Offre 2', 'Offre 3'];

export function OffersSection() {
  return (
    <section id="offres" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Offres</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Ce que nous proposons</h2>
          <p className="mt-4 text-base text-foreground/70 sm:text-lg">
            Placeholder pour les différentes offres ou services Tholex.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {offers.map((item) => (
            <article key={item} className="flex flex-col rounded-2xl border border-primary/10 p-6">
              <h3 className="text-xl font-semibold">{item}</h3>
              <div className="mt-4 flex-1 text-sm text-foreground/70">
                À détailler plus tard.
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                Détails à venir
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
