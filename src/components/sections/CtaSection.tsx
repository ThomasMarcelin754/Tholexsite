export function CtaSection() {
  return (
    <section id="cta" className="scroll-mt-24 bg-primary text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-5 px-4 py-16 text-center sm:gap-6 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-semibold sm:text-4xl">Prêt·e à échanger ?</h2>
        <p className="text-sm text-white/80 sm:text-lg">
          Ce bloc accueillera le formulaire Supabase et la connexion CRM.
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <button className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-primary transition hover:bg-white/80">
            Get in touch
          </button>
          <button className="rounded-full border border-white px-6 py-2 text-sm font-medium text-white transition hover:bg-white/10">
            Voir nos offres
          </button>
        </div>
      </div>
    </section>
  );
}
