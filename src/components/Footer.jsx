import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

// TODO: replace "#" with the real profile URLs
const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z",
  },
  {
    name: "Instagram",
    href: "#",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 0 0-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z",
  },
  {
    name: "LinkedIn",
    href: "#",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
  },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy text-white pt-20 pb-8">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3.5">
              <img
                src="/images/logo.jpg"
                alt="Manguissa en Afrique"
                className="h-28 w-auto object-contain rounded-full"
              />
              <span className="font-bold text-xl">
                Manguissa <span className="text-gold">{t("en Afrique")}</span>
              </span>
            </div>
            <p className="text-sm opacity-60 max-w-[280px] leading-relaxed">
              {t("Votre guide francophone de confiance pour découvrir les merveilles de l'Afrique du Sud.")}
            </p>
            <h4 className="text-xs uppercase tracking-wider opacity-55 font-semibold mt-6 mb-3">{t("Suivez-nous")}</h4>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  title={s.name}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold transition-colors flex items-center justify-center"
                >
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider opacity-55 font-semibold mb-4">{t("Navigation")}</h4>
            <ul className="space-y-2.5 text-sm opacity-85">
              <li><Link to="/" className="hover:opacity-70">{t("Accueil")}</Link></li>
              <li><Link to="/circuits" className="hover:opacity-70">{t("Nos Circuits")}</Link></li>
              <li><Link to="/galerie" className="hover:opacity-70">{t("Galerie")}</Link></li>
              <li><Link to="/a-propos" className="hover:opacity-70">{t("À Propos")}</Link></li>
              <li><Link to="/contact" className="hover:opacity-70">{t("Contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider opacity-55 font-semibold mb-4">{t("Légal")}</h4>
            <ul className="space-y-2.5 text-sm opacity-85">
              <li><Link to="/mentions-legales" className="hover:opacity-70">{t("Mentions légales")}</Link></li>
              <li><Link to="/confidentialite" className="hover:opacity-70">{t("Politique de confidentialité")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider opacity-55 font-semibold mb-4">{t("Contact")}</h4>
            <ul className="space-y-2.5 text-sm opacity-85">
              <li>info@manguissafrique.com</li>
              <li>+27 81 783 9576</li>
              <li>5 Melrose Street, Johannesburg</li>
            </ul>
            <a
              href="https://www.satsa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 bg-white/5 hover:bg-white/10 transition-colors rounded-brand px-3 py-2"
            >
              <img src="/images/satsa.jpg" alt="Membre SATSA" className="h-7 w-auto rounded-sm" />
              <span className="text-xs opacity-70">{t("Membre agréé SATSA")}</span>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-wrap justify-between gap-2.5 text-[13px] opacity-50">
          <span>{t("© 2026 Manguissa en Afrique. Tous droits réservés.")}</span>
          <span>{t("Guide touristique francophone en Afrique du Sud")}</span>
        </div>
      </div>
    </footer>
  );
}
