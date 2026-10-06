import { useLanguage } from "../context/LanguageContext";

// Details only the business owner can supply. Replace these before launch.
const REGISTRATION_NUMBER = { fr: "2025/806051/07 (CIPC)", en: "2025/806051/07 (CIPC)" };
const PUBLICATION_DIRECTOR = { fr: "[nom du responsable à compléter]", en: "[name of the person responsible to be completed]" };

const LAST_UPDATED = { fr: "Dernière mise à jour : 30 septembre 2026", en: "Last updated: 30 September 2026" };

const legalNotice = {
  eyebrow: { fr: "Informations légales", en: "Legal information" },
  title: { fr: "Mentions légales", en: "Legal notice" },
  sections: [
    {
      heading: { fr: "Éditeur du site", en: "Website publisher" },
      paragraphs: [
        { fr: "Le site manguissafrique.com est édité par Manguissa en Afrique, guide touristique francophone en Afrique du Sud.", en: "The website manguissafrique.com is published by Manguissa en Afrique, a French-speaking tour guide in South Africa." },
        { fr: "Adresse : 5 Melrose Street, Johannesburg, Afrique du Sud", en: "Address: 5 Melrose Street, Johannesburg, South Africa" },
        { fr: "Téléphone : +27 81 783 9576", en: "Phone: +27 81 783 9576" },
        { fr: "E-mail : info@manguissafrique.com", en: "Email: info@manguissafrique.com" },
        { fr: "Numéro d'enregistrement : ", en: "Registration number: ", append: REGISTRATION_NUMBER },
        { fr: "Responsable de la publication : ", en: "Person responsible for publication: ", append: PUBLICATION_DIRECTOR },
        { fr: "Membre agréé de la SATSA (Southern Africa Tourism Services Association).", en: "Accredited member of SATSA (Southern Africa Tourism Services Association)." },
      ],
    },
    {
      heading: { fr: "Hébergement", en: "Hosting" },
      paragraphs: [
        { fr: "Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (vercel.com).", en: "The website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States (vercel.com)." },
        { fr: "Le nom de domaine est géré par Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis (cloudflare.com).", en: "The domain name is managed by Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, United States (cloudflare.com)." },
      ],
    },
    {
      heading: { fr: "Propriété intellectuelle", en: "Intellectual property" },
      paragraphs: [
        { fr: "L'ensemble des contenus de ce site (textes, logo, photographies, mise en page) est protégé par le droit d'auteur. Toute reproduction, même partielle, sans l'autorisation écrite de Manguissa en Afrique est interdite.", en: "All content on this website (text, logo, photographs, layout) is protected by copyright. Any reproduction, even partial, without the written permission of Manguissa en Afrique is prohibited." },
      ],
    },
    {
      heading: { fr: "Informations sur les circuits", en: "Tour information" },
      paragraphs: [
        { fr: "Les descriptions des circuits sont fournies à titre indicatif. Les programmes, disponibilités et tarifs sont confirmés dans le devis personnalisé envoyé à chaque client et peuvent varier selon la saison et les conditions sur place.", en: "Tour descriptions are given for information only. Itineraries, availability and prices are confirmed in the personalised quote sent to each client and may vary with the season and local conditions." },
      ],
    },
    {
      heading: { fr: "Droit applicable", en: "Governing law" },
      paragraphs: [
        { fr: "Le présent site et ses mentions légales sont régis par le droit sud-africain.", en: "This website and its legal notice are governed by the laws of South Africa." },
      ],
    },
  ],
};

const privacyPolicy = {
  eyebrow: { fr: "Vos données", en: "Your data" },
  title: { fr: "Politique de confidentialité", en: "Privacy policy" },
  sections: [
    {
      heading: { fr: "Qui sommes-nous ?", en: "Who we are" },
      paragraphs: [
        { fr: "Manguissa en Afrique (5 Melrose Street, Johannesburg, Afrique du Sud) est responsable du traitement des données personnelles collectées sur ce site. Nous respectons la loi sud-africaine sur la protection des données personnelles (POPIA) et, pour nos visiteurs européens, le Règlement général sur la protection des données (RGPD).", en: "Manguissa en Afrique (5 Melrose Street, Johannesburg, South Africa) is responsible for the personal data collected on this website. We comply with South Africa's Protection of Personal Information Act (POPIA) and, for our European visitors, the General Data Protection Regulation (GDPR)." },
        { fr: "Pour toute question sur vos données : info@manguissafrique.com", en: "For any question about your data: info@manguissafrique.com" },
      ],
    },
    {
      heading: { fr: "Données collectées", en: "Data we collect" },
      paragraphs: [
        { fr: "Lorsque vous remplissez le formulaire de demande de devis ou nous écrivez, nous recueillons uniquement les informations que vous nous transmettez : nom, adresse e-mail, numéro de téléphone, nombre de voyageurs, circuit souhaité, dates et votre message.", en: "When you fill in the quote request form or write to us, we only collect the information you give us: name, email address, phone number, number of travellers, the tour you are interested in, dates and your message." },
      ],
    },
    {
      heading: { fr: "Utilisation de vos données", en: "How we use your data" },
      paragraphs: [
        { fr: "Vos données servent uniquement à répondre à votre demande, à préparer votre devis et, si vous réservez, à organiser votre voyage. Nous ne vous envoyons pas de publicité sans votre accord et nous ne vendons jamais vos données.", en: "Your data is used only to answer your request, prepare your quote and, if you book, organise your trip. We do not send you marketing without your consent and we never sell your data." },
      ],
    },
    {
      heading: { fr: "Partage des données", en: "Sharing your data" },
      paragraphs: [
        { fr: "Si vous réservez, nous transmettons les informations strictement nécessaires aux prestataires de votre voyage (hébergements, parcs, transport). Nos prestataires techniques (hébergement du site, messagerie) peuvent traiter vos données pour notre compte ; certains sont situés hors d'Afrique du Sud, notamment aux États-Unis.", en: "If you book, we share only the information strictly needed with the providers of your trip (accommodation, parks, transport). Our technical providers (website hosting, email) may process your data on our behalf; some are located outside South Africa, notably in the United States." },
      ],
    },
    {
      heading: { fr: "Durée de conservation", en: "How long we keep it" },
      paragraphs: [
        { fr: "Les demandes de devis sans suite sont conservées au maximum deux ans. Les données liées à une réservation sont conservées le temps nécessaire au voyage et à nos obligations comptables et légales.", en: "Quote requests that do not lead to a booking are kept for at most two years. Booking data is kept for as long as the trip and our accounting and legal obligations require." },
      ],
    },
    {
      heading: { fr: "Vos droits", en: "Your rights" },
      paragraphs: [
        { fr: "Vous pouvez à tout moment demander l'accès à vos données, leur correction ou leur suppression, ou vous opposer à leur utilisation, en écrivant à info@manguissafrique.com.", en: "You may at any time ask to access, correct or delete your data, or object to its use, by writing to info@manguissafrique.com." },
        { fr: "Vous pouvez également adresser une réclamation à l'Information Regulator d'Afrique du Sud (inforegulator.org.za) ou, si vous résidez dans l'Union européenne, à l'autorité de protection des données de votre pays.", en: "You may also lodge a complaint with South Africa's Information Regulator (inforegulator.org.za) or, if you live in the European Union, with your country's data protection authority." },
      ],
    },
    {
      heading: { fr: "Cookies", en: "Cookies" },
      paragraphs: [
        { fr: "Ce site n'utilise pas de cookies publicitaires ni de suivi. Il enregistre seulement, dans votre navigateur, la langue que vous avez choisie. Les polices de caractères sont chargées depuis Google Fonts, qui reçoit à cette occasion votre adresse IP.", en: "This website does not use advertising or tracking cookies. It only stores, in your browser, the language you chose. Fonts are loaded from Google Fonts, which receives your IP address when they load." },
        { fr: "Pour protéger le formulaire de devis contre les robots, nous utilisons hCaptcha (Intuition Machines, Inc.), qui peut traiter votre adresse IP et des informations techniques sur votre navigateur. Les demandes envoyées via le formulaire sont transmises par e-mail grâce au service Web3Forms.", en: "To protect the quote form against bots, we use hCaptcha (Intuition Machines, Inc.), which may process your IP address and technical information about your browser. Requests sent through the form are delivered by email using the Web3Forms service." },
      ],
    },
  ],
};

function LegalPage({ content }) {
  const { t } = useLanguage();

  return (
    <main>
      <section className="pt-40 pb-10 text-center">
        <div className="max-w-[760px] mx-auto px-8">
          <div className="text-[13px] uppercase tracking-wider font-semibold text-gold">{t(content.eyebrow)}</div>
          <h1 className="text-heading-lg mt-2.5">{t(content.title)}</h1>
          <p className="text-sm opacity-55 mt-3">{t(LAST_UPDATED)}</p>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-[760px] mx-auto px-8 space-y-10">
          {content.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold mb-3">{t(section.heading)}</h2>
              <div className="space-y-2.5">
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-[15px] leading-relaxed opacity-80">
                    {t(p)}
                    {p.append && t(p.append)}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export function LegalNotice() {
  return <LegalPage content={legalNotice} />;
}

export function PrivacyPolicy() {
  return <LegalPage content={privacyPolicy} />;
}
