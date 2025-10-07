const RUST = "#B7472A";
const NIGHT = "#111111";

const navLinks = [
  { label: "Vision", href: "#vision" },
  { label: "Critères", href: "#criteres" },
  { label: "Équipe", href: "#fondateurs" },
  { label: "Contact", href: "#contact" },
];

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      <div style={{ background: RUST }}>
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[80px] py-16 md:py-24 lg:py-[110px] text-white">
          <div className="max-w-[900px] mx-auto text-center">
            <p className="text-[12px] md:text-[13px] uppercase tracking-[0.22em] text-white/75 mb-4">
              Première rencontre
            </p>
            <h2
              className="text-[32px] md:text-[42px] lg:text-[50px] leading-[1.05] tracking-[-0.015em] mb-5"
              style={{ fontWeight: 600 }}
            >
              Organisons une conversation confidentielle avec un fondateur Tholex
            </h2>
            <p className="text-[15px] md:text-[17px] text-white/85 leading-[1.6] mb-10">
              Présentez-nous votre entreprise, vos attentes de transmission et vos
              priorités humaines. Nous revenons vers vous sous 48&nbsp;heures.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <a
                href="mailto:contact@tholex.fr"
                className="px-8 py-4 rounded-full bg-white font-semibold text-[15px] md:text-[16px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(255,255,255,0.25)] w-full sm:w-auto"
                style={{ color: RUST }}
              >
                Planifier un échange →
              </a>
              <a
                href="#criteres"
                className="px-8 py-4 rounded-full border border-white text-white font-semibold text-[15px] md:text-[16px] transition-all duration-300 hover:bg-white/10 w-full sm:w-auto"
              >
                Découvrir nos critères
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: NIGHT }}>
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[80px] py-10 md:py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-white/65 text-[12px] md:text-[13px]">
            <span>© {currentYear} Tholex. Tous droits réservés.</span>
            <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-white/75">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
