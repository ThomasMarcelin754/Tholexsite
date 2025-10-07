const RUST = "#B7472A";
const STONE = "rgba(255, 255, 255, 0.70)";
const CREAM = "rgba(255, 255, 255, 0.95)";

const mainLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "#vision" },
  { label: "Services", href: "#capacites" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Mentions légales", href: "#mentions-legales" },
  { label: "Politique de confidentialité", href: "#confidentialite" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: (
      <svg
        role="img"
        aria-label="LinkedIn"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5 md:h-6 md:w-6"
        fill="currentColor"
      >
        <path d="M4.983 3.5a2.5 2.5 0 11.002 5.001A2.5 2.5 0 014.983 3.5zM3.5 9.75h2.964v10.5H3.5zM9.25 9.75h2.842v1.436h.04c.396-.75 1.366-1.542 2.812-1.542 3.01 0 3.566 1.982 3.566 4.56v6.046h-2.96v-5.363c0-1.279-.026-2.923-1.78-2.923-1.782 0-2.056 1.392-2.056 2.83v5.456H9.25z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://www.twitter.com",
    icon: (
      <svg
        role="img"
        aria-label="Twitter"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5 md:h-6 md:w-6"
        fill="currentColor"
      >
        <path d="M21.543 7.104c.015.214.015.428.015.643 0 6.57-4.992 14.142-14.142 14.142a14.032 14.032 0 01-7.615-2.228 9.935 9.935 0 007.327-2.05 4.972 4.972 0 01-4.638-3.447 4.93 4.93 0 002.24-.085 4.967 4.967 0 01-3.985-4.873v-.063a4.93 4.93 0 002.25.63A4.965 4.965 0 012.4 4.362a14.07 14.07 0 0010.211 5.18 5.61 5.61 0 01-.123-1.137 4.964 4.964 0 018.58-3.393 9.81 9.81 0 003.137-1.195 4.948 4.948 0 01-2.182 2.74 9.9 9.9 0 002.855-.77 10.616 10.616 0 01-2.345 2.43z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <svg
        role="img"
        aria-label="Instagram"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5 md:h-6 md:w-6"
        fill="currentColor"
      >
        <path d="M12 2.163c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.428.403a4.9 4.9 0 011.772 1.153 4.9 4.9 0 011.153 1.772c.163.457.349 1.258.403 2.428.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.428a4.9 4.9 0 01-1.153 1.772 4.9 4.9 0 01-1.772 1.153c-.457.163-1.258.349-2.428.403-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.428-.403a4.9 4.9 0 01-1.772-1.153 4.9 4.9 0 01-1.153-1.772c-.163-.457-.349-1.258-.403-2.428C2.175 15.584 2.163 15.2 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.428a4.9 4.9 0 011.153-1.772 4.9 4.9 0 011.772-1.153c.457-.163 1.258-.349 2.428-.403C8.416 2.175 8.8 2.163 12 2.163zm0-2.163C8.737 0 8.332.013 7.052.072 5.77.131 4.78.332 3.97.63a7.067 7.067 0 00-2.57 1.672A7.067 7.067 0 00-.272 4.87C-.57 5.68-.77 6.67-.83 7.952-.888 9.232-.9 9.637-.9 12.9c0 3.263.013 3.668.072 4.948.058 1.282.259 2.272.557 3.082.297.81.707 1.504 1.672 2.57a7.067 7.067 0 002.57 1.672c.81.297 1.8.498 3.082.557C8.332 23.987 8.737 24 12 24s3.668-.013 4.948-.072c1.282-.058 2.272-.259 3.082-.557a7.067 7.067 0 002.57-1.672 7.067 7.067 0 001.672-2.57c.297-.81.498-1.8.557-3.082.058-1.28.072-1.685.072-4.948s-.013-3.668-.072-4.948c-.058-1.282-.259-2.272-.557-3.082a7.067 7.067 0 00-1.672-2.57A7.067 7.067 0 0019.949.63c-.81-.297-1.8-.498-3.082-.557C15.668.013 15.263 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
      </svg>
    ),
  },
];

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full text-white"
      style={{
        background: RUST,
        boxShadow: "0 -12px 30px rgba(0, 0, 0, 0.35)",
        borderTop: "1px solid rgba(255, 255, 255, 0.12)",
      }}
    >
      <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[80px] py-12 md:py-16">
        <div className="flex flex-col gap-10 lg:gap-16">
          {/* Top row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 lg:gap-20">
            <div className="space-y-4">
              <p
                className="uppercase tracking-[0.32em] text-[16px] md:text-[18px]"
                style={{ fontWeight: 700, letterSpacing: "0.32em" }}
              >
                THOLEX
              </p>
              <p className="text-[14px] md:text-[15px] leading-[1.7]" style={{ color: STONE }}>
                Groupe industriel dédié aux transmissions sereines et à la
                croissance durable des PME familiales en France.
              </p>
            </div>

            <nav className="flex flex-wrap items-center gap-5 md:gap-8 text-[14px] md:text-[15px]">
              {mainLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors duration-200 hover:text-white"
                  style={{ color: CREAM }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-white/80 transition-all duration-200 hover:bg-white/15 hover:text-white"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-[12px] md:text-[13px]" style={{ color: STONE }}>
            <span>© {currentYear} Tholex. Tous droits réservés.</span>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 text-white/70">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
