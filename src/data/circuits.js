// Text fields are { fr, en } pairs, resolved by t() from LanguageContext.
// No prices on purpose: every tour leads to a quote request.
// Each tour's photo is public/images/tours/<id>.jpg — replace that file to change it.
export const circuits = [
  {
    id: "pretoria-cullinan",
    title: { fr: "Pretoria & la mine de Cullinan", en: "Pretoria & Cullinan Mine" },
    subtitle: {
      fr: "La capitale et la mine de diamants la plus célèbre du pays",
      en: "The capital city and the country's most famous diamond mine",
    },
    region: "Gauteng",
    category: "histoire",
    desc: {
      fr: "Une journée entre les grands monuments de Pretoria et la légendaire mine de Cullinan, où fut découvert le plus gros diamant du monde.",
      en: "A day between Pretoria's great monuments and the legendary Cullinan Mine, where the world's largest diamond was found.",
    },
    duration: { fr: "Journée complète", en: "Full day" },
    group: { fr: "À partir de 2 personnes", en: "From 2 guests" },
    image: "/images/tours/pretoria-cullinan.jpg",
    selectValue: "Pretoria & la mine de Cullinan",
    about: [
      {
        fr: "Pretoria, la capitale administrative, raconte l'histoire du pays à travers ses monuments : le Voortrekker Monument, les jardins des Union Buildings et la grande statue de Nelson Mandela.",
        en: "Pretoria, the administrative capital, tells the country's story through its monuments: the Voortrekker Monument, the Union Buildings gardens and the great statue of Nelson Mandela.",
      },
      {
        fr: "L'après-midi, direction Cullinan et sa mine de diamants encore en activité, dont la visite de surface dévoile plus d'un siècle d'histoire minière.",
        en: "In the afternoon, head to Cullinan and its working diamond mine, where a surface tour reveals more than a century of mining history.",
      },
    ],
    highlights: [
      { fr: "Visite de surface de la mine de Cullinan", en: "Cullinan Mine surface tour" },
      { fr: "Voortrekker Monument", en: "Voortrekker Monument" },
      { fr: "Jardins des Union Buildings", en: "Union Buildings gardens" },
      { fr: "Statue de Nelson Mandela", en: "Nelson Mandela statue" },
      { fr: "Church Square", en: "Church Square" },
      { fr: "Hôtel de ville", en: "City Hall" },
    ],
    included: [
      { fr: "Guide francophone", en: "French-speaking guide" },
      { fr: "Transport privé", en: "Private transport" },
      { fr: "Droits d'entrée", en: "Entrance fees" },
    ],
  },

  {
    id: "johannesburg",
    title: { fr: "Johannesburg, la ville de l'or", en: "Johannesburg City Tour" },
    subtitle: {
      fr: "D'un camp de chercheurs d'or à la ville la plus dynamique d'Afrique",
      en: "From a gold-mining camp to Africa's most dynamic city",
    },
    region: "Gauteng",
    category: "histoire",
    desc: {
      fr: "Plongez dans l'histoire de Johannesburg, de son centre-ville à Constitution Hill, en passant par le quartier créatif de Maboneng.",
      en: "Dive into Johannesburg's history, from the city centre to Constitution Hill, by way of the creative Maboneng district.",
    },
    duration: { fr: "Journée complète", en: "Full day" },
    group: { fr: "À partir de 2 personnes", en: "From 2 guests" },
    image: "/images/tours/johannesburg.jpg",
    selectValue: "Johannesburg, la ville de l'or",
    about: [
      {
        fr: "Née de la ruée vers l'or à la fin du XIXe siècle, Johannesburg est devenue le cœur économique du pays. Cette journée vous fait découvrir ses contrastes : histoire, art urbain et quartiers en pleine renaissance.",
        en: "Born from the gold rush in the late 19th century, Johannesburg became the country's economic heart. This day reveals its contrasts: history, street art and districts in full revival.",
      },
      {
        fr: "Selon vos envies, le programme inclut le Musée de l'Apartheid ou Sanctuary Mandela, et Constitution Hill ou Liliesleaf Farm.",
        en: "Depending on your interests, the programme includes the Apartheid Museum or Sanctuary Mandela, and Constitution Hill or Liliesleaf Farm.",
      },
    ],
    highlights: [
      { fr: "Centre-ville de Johannesburg", en: "Johannesburg city centre" },
      { fr: "Quartier de Maboneng", en: "Maboneng Precinct" },
      { fr: "Nelson Mandela Square", en: "Nelson Mandela Square" },
      { fr: "Musée de l'Apartheid ou Sanctuary Mandela", en: "Apartheid Museum or Sanctuary Mandela" },
      { fr: "Constitution Hill ou Liliesleaf Farm", en: "Constitution Hill or Liliesleaf Farm" },
    ],
    included: [
      { fr: "Guide francophone", en: "French-speaking guide" },
      { fr: "Transport privé", en: "Private transport" },
      { fr: "Droits d'entrée", en: "Entrance fees" },
    ],
  },

  {
    id: "soweto-velo",
    title: { fr: "Soweto à vélo", en: "Soweto Bicycle Tour" },
    subtitle: {
      fr: "Le township le plus célèbre du pays, au rythme de la bicyclette",
      en: "The country's most famous township, at cycling pace",
    },
    region: "Gauteng",
    category: "culture",
    desc: {
      fr: "Parcourez les rues de Soweto à vélo, de la maison de Mandela au mémorial Hector Pieterson, à la rencontre de ses habitants.",
      en: "Ride through the streets of Soweto, from Mandela's house to the Hector Pieterson Memorial, meeting the people who live there.",
    },
    duration: { fr: "2 h 30 ou 4 h", en: "2.5 or 4 hours" },
    group: { fr: "À partir de 2 personnes", en: "From 2 guests" },
    image: "/images/tours/soweto-velo.jpg",
    selectValue: "Soweto à vélo",
    about: [
      {
        fr: "Le vélo est la meilleure façon de sentir l'énergie de Soweto : on s'arrête où l'on veut, on salue les passants, on découvre les ruelles que les bus ne traversent pas.",
        en: "Cycling is the best way to feel Soweto's energy: you stop wherever you like, greet passers-by and discover the lanes that buses never reach.",
      },
      {
        fr: "La balade passe par les lieux clés de la lutte contre l'apartheid et se termine autour d'un repas local.",
        en: "The ride passes the key places of the struggle against apartheid and ends with a local meal.",
      },
    ],
    highlights: [
      { fr: "Balade guidée à vélo", en: "Guided bicycle ride" },
      { fr: "Maison de Nelson Mandela", en: "Mandela House" },
      { fr: "Mémorial Hector Pieterson", en: "Hector Pieterson Memorial" },
      { fr: "Rencontres avec les habitants", en: "Time with local residents" },
      { fr: "Marchés d'artisanat", en: "Arts and crafts markets" },
      { fr: "Découverte de la cuisine locale", en: "Local food experience" },
    ],
    included: [
      { fr: "Transferts aller-retour", en: "Return transfers" },
      { fr: "Vélo et balade guidée", en: "Bicycle and guided ride" },
      { fr: "Guide", en: "Guide" },
      { fr: "Déjeuner", en: "Lunch" },
    ],
  },

  {
    id: "soweto-tuktuk",
    title: { fr: "Soweto en tuk-tuk", en: "Soweto Tuk Tuk Tour" },
    subtitle: {
      fr: "Une façon originale et conviviale de découvrir Soweto",
      en: "A fun, friendly way to discover Soweto",
    },
    region: "Gauteng",
    category: "culture",
    desc: {
      fr: "À bord d'un tuk-tuk, découvrez l'histoire, la culture et l'esprit de communauté de Soweto.",
      en: "Aboard a tuk tuk, discover Soweto's history, culture and community spirit.",
    },
    duration: { fr: "Demi-journée", en: "Half day" },
    group: { fr: "À partir de 2 personnes", en: "From 2 guests" },
    image: "/images/tours/soweto-tuktuk.jpg",
    selectValue: "Soweto en tuk-tuk",
    about: [
      {
        fr: "Ouvert sur la rue, le tuk-tuk permet de voir, d'entendre et de ressentir Soweto de près, sans l'effort du vélo.",
        en: "Open to the street, the tuk tuk lets you see, hear and feel Soweto up close, without the effort of cycling.",
      },
      {
        fr: "Une demi-journée riche en émotions, entre lieux de mémoire, marchés d'artisans et spécialités locales.",
        en: "A moving half day of memorial sites, craft markets and local specialities.",
      },
    ],
    highlights: [
      { fr: "Balade en tuk-tuk", en: "Tuk tuk ride" },
      { fr: "Maison de Nelson Mandela", en: "Mandela House" },
      { fr: "Mémorial Hector Pieterson", en: "Hector Pieterson Memorial" },
      { fr: "Rencontres avec les habitants", en: "Time with local residents" },
      { fr: "Marchés d'artisanat", en: "Arts and crafts markets" },
      { fr: "Découverte de la cuisine locale", en: "Local food experience" },
    ],
    included: [
      { fr: "Transferts aller-retour", en: "Return transfers" },
      { fr: "Balade guidée en tuk-tuk", en: "Guided tuk tuk ride" },
      { fr: "Guide", en: "Guide" },
      { fr: "Déjeuner", en: "Lunch" },
    ],
  },

  {
    id: "dinokeng",
    title: { fr: "Safari à Dinokeng", en: "Dinokeng Day Safari" },
    subtitle: {
      fr: "Les Big Five à une heure de Johannesburg",
      en: "The Big Five an hour from Johannesburg",
    },
    region: "Gauteng",
    category: "safari",
    desc: {
      fr: "Un vrai safari en véhicule ouvert, dans une réserve des Big Five sans paludisme, à environ une heure de Johannesburg.",
      en: "A real safari in an open vehicle, in a malaria-free Big Five reserve about an hour from Johannesburg.",
    },
    duration: { fr: "Demi-journée", en: "Half day" },
    group: { fr: "À partir de 4 personnes", en: "From 4 guests" },
    image: "/images/tours/dinokeng.jpg",
    selectValue: "Safari à Dinokeng",
    about: [
      {
        fr: "La réserve de Dinokeng offre une vraie immersion dans la nature sauvage sans quitter la région de Johannesburg. Accompagné d'un ranger expérimenté, vous partez à la recherche des lions, éléphants, rhinocéros, buffles et léopards.",
        en: "Dinokeng reserve offers a true wilderness experience without leaving the Johannesburg area. With an experienced ranger, you set off in search of lions, elephants, rhinos, buffalo and leopards.",
      },
      {
        fr: "Le ranger partage aussi le comportement des animaux et les efforts de conservation de la réserve. Enfants acceptés à partir de 3 ans.",
        en: "The ranger also explains animal behaviour and the reserve's conservation work. Children are welcome from age 3.",
      },
    ],
    highlights: [
      { fr: "Safari en véhicule ouvert", en: "Open-vehicle safari" },
      { fr: "Ranger expert", en: "Expert ranger" },
      { fr: "Réserve des Big Five", en: "Big Five game reserve" },
      { fr: "Zone sans paludisme", en: "Malaria-free area" },
    ],
    included: [
      { fr: "Transferts aller-retour", en: "Return transfers" },
      { fr: "Ranger", en: "Ranger" },
      { fr: "Véhicule de safari ouvert", en: "Open safari vehicle" },
      { fr: "Frais de conservation", en: "Conservation fee" },
    ],
  },

  {
    id: "lion-park",
    title: { fr: "Lion & Safari Park", en: "Lion & Safari Park" },
    subtitle: {
      fr: "Face à face avec les lions de la savane",
      en: "Face to face with the lions of the savannah",
    },
    region: "Gauteng",
    category: "safari",
    desc: {
      fr: "Un safari de 2 ou 3 heures avec un ranger, au plus près des lions et des animaux de la savane africaine.",
      en: "A 2 or 3-hour safari with a ranger, up close with lions and the animals of the African savannah.",
    },
    duration: { fr: "Demi-journée", en: "Half day" },
    group: { fr: "À partir de 2 personnes", en: "From 2 guests" },
    image: "/images/tours/lion-park.jpg",
    selectValue: "Lion & Safari Park",
    about: [
      {
        fr: "Idéal quand le temps est compté, le Lion & Safari Park permet d'observer lions, guépards, hyènes et antilopes lors d'un safari commenté par un ranger.",
        en: "Ideal when time is short, the Lion & Safari Park lets you watch lions, cheetahs, hyenas and antelope on a safari led by a ranger.",
      },
    ],
    highlights: [
      { fr: "Safari avec un ranger expert", en: "Safari with an expert ranger" },
      { fr: "Safari de 2 h ou 3 h", en: "2 or 3-hour safari" },
      { fr: "Lions et animaux de la savane", en: "Lions and savannah wildlife" },
    ],
    included: [
      { fr: "Transport privé", en: "Private transport" },
      { fr: "Droits d'entrée", en: "Entrance fees" },
      { fr: "Frais de conservation", en: "Conservation fees" },
    ],
  },

  {
    id: "lesedi",
    title: { fr: "Village culturel de Lesedi", en: "Lesedi Cultural Village" },
    subtitle: {
      fr: "Les traditions des grands peuples d'Afrique du Sud",
      en: "The traditions of South Africa's main peoples",
    },
    region: "Nord-Ouest",
    category: "culture",
    desc: {
      fr: "Une immersion dans la richesse culturelle sud-africaine : chants, danses traditionnelles et buffet africain.",
      en: "An immersion in South Africa's cultural richness: singing, traditional dancing and an African buffet.",
    },
    duration: { fr: "Demi-journée", en: "Half day" },
    group: { fr: "À partir de 2 personnes", en: "From 2 guests" },
    image: "/images/tours/lesedi.jpg",
    selectValue: "Village culturel de Lesedi",
    about: [
      {
        fr: "À Lesedi, vous découvrez les modes de vie, l'habitat et les traditions de plusieurs peuples d'Afrique du Sud.",
        en: "At Lesedi, you discover the ways of life, homes and traditions of several South African peoples.",
      },
      {
        fr: "La visite se termine par un spectacle de chants et de danses, suivi d'un buffet de cuisine locale.",
        en: "The visit ends with a singing and dancing show, followed by a buffet of local cuisine.",
      },
    ],
    highlights: [
      { fr: "Immersion culturelle", en: "Cultural immersion" },
      { fr: "Danses et chants traditionnels", en: "Traditional dancing and singing" },
      { fr: "Buffet africain", en: "African buffet" },
      { fr: "Artisanat local", en: "Arts and crafts" },
    ],
    included: [
      { fr: "Transport privé", en: "Private transport" },
      { fr: "Droits d'entrée", en: "Entrance fees" },
      { fr: "Déjeuner ou dîner", en: "Lunch or dinner" },
    ],
  },

  {
    id: "lesedi-lion-park",
    title: { fr: "Lesedi & Lion Park", en: "Lesedi Cultural Village & Lion Park" },
    subtitle: {
      fr: "Culture et safari réunis en une seule journée",
      en: "Culture and safari in a single day",
    },
    region: { fr: "Gauteng / Nord-Ouest", en: "Gauteng / North West" },
    category: "culture",
    desc: {
      fr: "Le meilleur des deux mondes : le village culturel de Lesedi et un safari de 2 heures au Lion & Safari Park.",
      en: "The best of both worlds: Lesedi Cultural Village and a 2-hour safari at the Lion & Safari Park.",
    },
    duration: { fr: "Journée complète", en: "Full day" },
    group: { fr: "À partir de 2 personnes", en: "From 2 guests" },
    image: "/images/tours/lesedi-lion-park.jpg",
    selectValue: "Lesedi & Lion Park",
    about: [
      {
        fr: "La matinée est consacrée aux traditions sud-africaines au village de Lesedi, avec spectacle de danses et chants et un buffet de cuisine locale.",
        en: "The morning is devoted to South African traditions at Lesedi village, with a dancing and singing show and a buffet of local cuisine.",
      },
      {
        fr: "L'après-midi, un safari de 2 heures au Lion & Safari Park vous rapproche des animaux de la savane.",
        en: "In the afternoon, a 2-hour safari at the Lion & Safari Park brings you close to the animals of the savannah.",
      },
    ],
    highlights: [
      { fr: "Immersion culturelle", en: "Cultural immersion" },
      { fr: "Danses et chants traditionnels", en: "Traditional dancing and singing" },
      { fr: "Buffet africain", en: "African buffet" },
      { fr: "Artisanat local", en: "Arts and crafts" },
      { fr: "Safari de 2 h au Lion & Safari Park", en: "2-hour safari at the Lion & Safari Park" },
    ],
    included: [
      { fr: "Transport privé", en: "Private transport" },
      { fr: "Droits d'entrée", en: "Entrance fees" },
      { fr: "Frais de conservation", en: "Conservation fees" },
      { fr: "Déjeuner", en: "Lunch" },
    ],
  },

  {
    id: "pilanesberg",
    title: { fr: "Safari à Pilanesberg", en: "Pilanesberg Day Safari" },
    subtitle: {
      fr: "Les Big Five au cœur d'un ancien cratère volcanique",
      en: "The Big Five inside an ancient volcanic crater",
    },
    region: "Nord-Ouest",
    category: "safari",
    desc: {
      fr: "Observez les animaux sauvages dans leur habitat naturel, au cœur de la réserve de Pilanesberg.",
      en: "Watch wild animals in their natural habitat in the heart of Pilanesberg game reserve.",
    },
    duration: { fr: "Safari de 3 h ou 6 h", en: "3 or 6-hour safari" },
    group: { fr: "À partir de 2 personnes", en: "From 2 guests" },
    image: "/images/tours/pilanesberg.jpg",
    selectValue: "Safari à Pilanesberg",
    about: [
      {
        fr: "Installée dans le cratère d'un volcan éteint, la réserve de Pilanesberg abrite les Big Five et des paysages spectaculaires, à environ deux heures de Johannesburg.",
        en: "Set in the crater of an extinct volcano, Pilanesberg reserve is home to the Big Five and spectacular scenery, about two hours from Johannesburg.",
      },
      {
        fr: "Deux formules au choix : un safari de 3 heures, ou un safari de 6 heures avec un déjeuner léger.",
        en: "Two options: a 3-hour safari, or a 6-hour safari with a light lunch.",
      },
    ],
    highlights: [
      { fr: "Safari en véhicule ouvert", en: "Open-vehicle safari" },
      { fr: "Réserve des Big Five", en: "Big Five game reserve" },
      { fr: "Paysages d'ancien volcan", en: "Ancient volcanic landscapes" },
    ],
    included: [
      { fr: "Transport privé", en: "Private transport" },
      { fr: "Véhicule de safari", en: "Safari vehicle" },
      { fr: "Frais de conservation", en: "Conservation fees" },
      { fr: "Déjeuner léger (formule 6 h)", en: "Light lunch (6-hour option)" },
    ],
  },

  {
    id: "maropeng",
    title: { fr: "Berceau de l'Humanité & Maropeng", en: "Cradle of Humankind & Maropeng" },
    subtitle: {
      fr: "Aux origines de l'humanité, sur un site classé par l'UNESCO",
      en: "At the origins of humankind, on a UNESCO World Heritage Site",
    },
    region: "Gauteng",
    category: "histoire",
    desc: {
      fr: "Une visite passionnante du Berceau de l'Humanité, site du patrimoine mondial de l'UNESCO, et du centre d'accueil de Maropeng.",
      en: "A fascinating visit to the Cradle of Humankind, a UNESCO World Heritage Site, and the Maropeng Visitor Centre.",
    },
    duration: { fr: "Demi-journée", en: "Half day" },
    group: { fr: "À partir de 2 personnes", en: "From 2 guests" },
    image: "/images/tours/maropeng.jpg",
    selectValue: "Berceau de l'Humanité & Maropeng",
    about: [
      {
        fr: "Le Berceau de l'Humanité compte parmi les sites de fossiles d'hominidés les plus riches au monde. Le centre de Maropeng retrace de façon vivante l'histoire de nos origines.",
        en: "The Cradle of Humankind is one of the richest hominid fossil sites in the world. The Maropeng centre brings the story of our origins to life.",
      },
    ],
    highlights: [
      { fr: "Site du patrimoine mondial de l'UNESCO", en: "UNESCO World Heritage Site" },
      { fr: "Centre d'accueil de Maropeng", en: "Maropeng Visitor Centre" },
      { fr: "L'histoire des origines de l'humanité", en: "The story of human origins" },
    ],
    included: [
      { fr: "Transport privé", en: "Private transport" },
      { fr: "Droits d'entrée", en: "Entrance fees" },
    ],
  },
];

export const featuredIds = ["dinokeng", "pretoria-cullinan", "soweto-tuktuk"];

export const filterCategories = [
  { key: "tous", label: "Tous" },
  { key: "safari", label: "Safari" },
  { key: "culture", label: "Culture" },
  { key: "histoire", label: { fr: "Villes & Histoire", en: "Cities & History" } },
];
