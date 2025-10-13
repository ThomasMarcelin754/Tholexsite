import styles from "./FooterSection.module.css";

const navigationLinks = [
  { label: "Accueil", href: "/" },
  { label: "Vision", href: "#vision" },
  { label: "Capacités", href: "#capacites" },
  { label: "Sociétés", href: "#secteurs" },
];

const serviceLinks = [
  { label: "Investissement familial", href: "#services" },
  { label: "Transmission sereine", href: "#process" },
  { label: "Accompagnement dirigeants", href: "#accompagnement" },
  { label: "Croissance durable", href: "#durable" },
];

const resourceLinks = [
  { label: "Actualités Tholex", href: "#blog" },
  { label: "Études de cas", href: "#etudes" },
  { label: "FAQ", href: "#faq" },
  { label: "Presse", href: "#presse" },
];

const legalLinks = [
  { label: "Mentions légales", href: "#mentions-legales" },
  { label: "Politique de confidentialité", href: "#confidentialite" },
  { label: "Paramètres cookies", href: "#cookies" },
];

const contactLinks = [
  { label: "contact@tholex.fr", href: "mailto:contact@tholex.fr" },
  { label: "+33 (0)1 23 45 67 89", href: "tel:+33123456789" },
  { label: "12 rue de la transmission, 75002 Paris", href: "https://maps.google.com/?q=12+rue+de+la+transmission+75002+Paris" },
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
      >
        <path d="M12 2.163c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.428.403a4.9 4.9 0 011.772 1.153 4.9 4.9 0 011.153 1.772c.163.457.349 1.258.403 2.428.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.428a4.9 4.9 0 01-1.153 1.772 4.9 4.9 0 01-1.772 1.153c-.457.163-1.258.349-2.428.403-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.428-.403a4.9 4.9 0 01-1.772-1.153 4.9 4.9 0 01-1.153-1.772c-.163-.457-.349-1.258-.403-2.428C2.175 15.584 2.163 15.2 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.428a4.9 4.9 0 011.153-1.772 4.9 4.9 0 011.772-1.153c.457-.163 1.258-.349 2.428-.403C8.416 2.175 8.8 2.163 12 2.163zm0-2.163C8.737 0 8.332.013 7.052.072 5.77.131 4.78.332 3.97.63a7.067 7.067 0 00-2.57 1.672A7.067 7.067 0 00-.272 4.87C-.57 5.68-.77 6.67-.83 7.952-.888 9.232-.9 9.637-.9 12.9c0 3.263.013 3.668.072 4.948.058 1.282.259 2.272.557 3.082.297.81.707 1.504 1.672 2.57a7.067 7.067 0 002.57 1.672c.81.297 1.8.498 3.082.557C8.332 23.987 8.737 24 12 24s3.668-.013 4.948-.072c1.282-.058 2.272-.259 3.082-.557a7.067 7.067 0 002.57-1.672 7.067 7.067 0 001.672-2.57c.297-.81.498-1.8.557-3.082.058-1.28.072-1.685.072-4.948s-.013-3.668-.072-4.948c-.058-1.282-.259-2.272-.557-3.082a7.067 7.067 0 00-1.672-2.57A7.067 7.067 0 0019.949.63c-.81-.297-1.8-.498-3.082-.557C15.668.013 15.263 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
      </svg>
    ),
  },
];

const footerColumns = [
  { title: "Navigation", links: navigationLinks },
  { title: "Services", links: serviceLinks },
  { title: "Ressources", links: resourceLinks },
  { title: "Contact", links: contactLinks },
];

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.branding}>
            <span className={styles.logo}>THOLEX</span>
            <p className={styles.baseline}>
              Transitions industrielles sereines au service des familles
              entrepreneures.
            </p>
          </div>
          <div className={styles.topSummary}>
            <p className={styles.topSummaryTitle}>
              Investisseur partenaire des transmissions familiales.
            </p>
            <p className={styles.topSummaryText}>
              Nous allions capital patient et expertise industrielle pour
              préserver les héritages entrepreneuriaux français et accélérer
              une croissance durable.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {footerColumns.map((column) => (
            <div key={column.title} className={styles.column}>
              <p className={styles.columnTitle}>{column.title}</p>
              <ul className={styles.linkList}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={styles.footerLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.socialRow}>
          <span className={styles.socialLabel}>Suivez-nous</span>
          <div className={styles.socialIcons}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className={styles.socialIcon}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.legalRow}>
          <span className={styles.legalCopy}>
            © {currentYear} Tholex. Tous droits réservés.
          </span>
          <div className={styles.legalLinks}>
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.legalLink}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
