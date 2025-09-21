const placeholders = ['Critère 1', 'Critère 2', 'Critère 3'];

export function CriteriaSection() {
  return (
    <section id="criteres" className="scroll-mt-24 bg-accent py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Critères</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Ce que nous recherchons</h2>
          <p className="mt-4 text-base text-foreground/70 sm:text-lg">
            Liste des critères d’éligibilité ou des axes d’évaluation.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((item) => (
            <article key={item} className="rounded-2xl border border-primary/15 bg-white p-6">
              <h3 className="text-lg font-semibold">{item}</h3>
              <p className="mt-2 text-sm text-foreground/70">
                Placeholder de description.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
