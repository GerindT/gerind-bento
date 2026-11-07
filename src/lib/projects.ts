export type ProjectStatus = "live" | "ui_only" | "offline" | "wip" | "concept" | "dev_only" | "code_private" | "unreleased" | "internal";

export const statusLabels: Record<ProjectStatus, string> = {
  live: "Live",
  ui_only: "Front-end demo",
  offline: "Retired",
  wip: "In progress",
  concept: "Concept",
  dev_only: "Runs locally",
  code_private: "Code private",
  unreleased: "Not public yet",
  internal: "Internal",
};

/** One-line explanations, shown as a legend on /projects and as chip tooltips. */
export const statusHelp: Partial<Record<ProjectStatus, string>> = {
  live: "you can use it today",
  ui_only: "the interface is online, its backend isn't",
  dev_only: "public code, run it on your machine",
  internal: "a client or government system, not open to the public",
  unreleased: "still being built",
  code_private: "the product is public, the code isn't",
  offline: "no longer hosted",
};

export const techIcons = {
  vue: { label: "Vue", icon: "logos:vue" },
  react: { label: "React", icon: "logos:react" },
  nuxt: { label: "Nuxt", icon: "logos:nuxt-icon" },
  nextjs: { label: "Next.js", icon: "logos:nextjs-icon" },
  astro: { label: "Astro", icon: "logos:astro-icon" },
  golang: { label: "Go", icon: "logos:go" },
  laravel: { label: "Laravel", icon: "logos:laravel" },
  php: { label: "PHP", icon: "logos:php" },
  wordpress: { label: "WordPress", icon: "logos:wordpress-icon" },
  nodejs: { label: "Node.js", icon: "logos:nodejs-icon" },
  dotnet: { label: ".NET", icon: "logos:dotnet" },
  python: { label: "Python", icon: "logos:python" },
  fastapi: { label: "FastAPI", icon: "logos:fastapi-icon" },
  mysql: { label: "MySQL", icon: "logos:mysql" },
  mongodb: { label: "MongoDB", icon: "logos:mongodb-icon" },
  postgresql: { label: "PostgreSQL", icon: "logos:postgresql" },
  supabase: { label: "Supabase", icon: "logos:supabase-icon" },
  firebase: { label: "Firebase", icon: "logos:firebase" },
  redis: { label: "Redis", icon: "logos:redis" },
  socketio: { label: "Socket.IO", icon: "logos:socket-io" },
  vectordb: { label: "Vector DB", icon: "ri:database-2-line" },
  k8s: { label: "K8s", icon: "logos:kubernetes" },
  flutter: { label: "Flutter", icon: "logos:flutter" },
  expo: { label: "Expo", icon: "logos:expo-icon" },
  godot: { label: "Godot", icon: "logos:godot-icon" },
  cloudflare: { label: "Cloudflare", icon: "logos:cloudflare-icon" },
} as const;

export type TechStack = keyof typeof techIcons;

export type ProjectGroup = "personal" | "i4a" | "detag" | "friends" | "early";

export const groups: { id: ProjectGroup; title: string; short: string; note: string }[] = [
  { id: "personal", title: "Personal & freelance", short: "Personal", note: "Products, experiments and contracts I built on my own time or for my own clients." },
  { id: "i4a", title: "Innovation4Albania", short: "I4A", note: "Public-sector platforms, as Lead System Architect. Linked where the platform is public." },
  { id: "detag", title: "Detag", short: "Detag", note: "Client platforms built as a developer at Detag. Linked only where the product is already public." },
  { id: "friends", title: "Friends' sites", short: "Friends", note: "Portfolio sites I built for friends." },
  { id: "early", title: "Early days", short: "Early days", note: "Where it started: school and bootcamp projects from 2021." },
];

export const series = {
  "project-a-day": {
    title: "A project a day",
    note: "A challenge I set myself: build a small, complete app in a day. They run locally and the code is public.",
  },
} as const;

export type Project = {
  slug: string;
  title: string;
  year: string;
  group: ProjectGroup;
  /** Screenshot path. Omit when there is no real image yet: a typographic plate is drawn instead. */
  img?: string;
  alt: string;
  /** Screenshot is a logo-like or portrait artwork that should be contained rather than cropped. */
  contain?: boolean;
  /** Backdrop behind contained artwork, sampled from the artwork's own ground. */
  artBg?: string;
  github?: string;
  site?: string;
  /** Link text for `site` when it is not the full product, e.g. "UI demo". */
  siteLabel?: string;
  statuses: ProjectStatus[];
  stacks: TechStack[];
  /** object-position for `img` when the top-centre crop loses the subject. */
  imgPos?: string;
  /** Extra screenshots for the detail card, after `img`. */
  shots?: { src: string; alt: string }[];
  /** Small side projects shown in their own strip inside the group. */
  series?: "project-a-day";
  /** Large poster in its group. */
  featured?: boolean;
  /** My part in it, when it was not simply "built it". */
  role?: string;
  /** What I did on a team project, in one factual line (company work). */
  part?: string;
  /** One factual line: only what is confirmed. */
  blurb: string;
};

const projects: Project[] = [
  // ---------- personal & freelance ----------
  {
    slug: "vanspot",
    title: "Vanspot",
    year: "2026",
    group: "personal",
    img: "/illustrations/projects/vanspot.webp",
    alt: "Vanspot artwork: a camper van inside a map pin, with the line 'Vanlife maps, routes and community for Albania'",
    contain: true,
    artBg: "#7a8465",
    statuses: ["wip", "unreleased"],
    stacks: ["flutter", "golang", "postgresql"],
    featured: true,
    blurb: "Travel app for vanlifers and motorhomes in Albania: maps, vehicle-aware routing, community spots and an AI guide.",
  },
  {
    slug: "after-hours",
    title: "After Hours",
    year: "2026",
    group: "personal",
    img: "/illustrations/projects/after-hours.webp",
    alt: "After Hours key art: a pixel-art janitor in a dark school corridor",
    contain: true,
    artBg: "#0c0c0c",
    statuses: ["wip", "unreleased"],
    stacks: ["godot"],
    featured: true,
    blurb: "Portrait mobile horror dungeon crawler with a VHS look. The bell rang; the school kept you.",
  },
  {
    slug: "pragma",
    title: "Pyramid × Pragma",
    year: "2026",
    group: "personal",
    img: "/illustrations/projects/pragma.webp",
    alt: "Pyramid × Pragma booking portal home page",
    github: "https://github.com/GerindT/pragma",
    site: "https://piramida.pragma.ltd",
    siteLabel: "UI demo",
    statuses: ["ui_only"],
    stacks: ["golang", "vue"],
    featured: true,
    blurb: "Event operations for the Pyramid of Tirana: a public booking portal and a staff admin panel that runs events end to end. The booking API is offline for now, so the portal shows its UI only.",
  },
  {
    slug: "goflight",
    title: "Goflight",
    year: "2026",
    group: "personal",
    img: "/illustrations/projects/goflight.webp",
    alt: "Goflight terminal-style dashboard",
    github: "https://github.com/GerindT/GoFlight",
    series: "project-a-day",
    statuses: ["dev_only"],
    stacks: ["golang", "vue", "redis", "k8s"],
    blurb: "Terminal-style flight dashboard. A Go service aggregates flight and weather data with caching, circuit breakers and metrics.",
  },
  {
    slug: "prompt-arena",
    title: "Prompt Arena",
    year: "2026",
    group: "personal",
    img: "/illustrations/projects/prompt-arena.webp",
    alt: "Prompt Arena voting page titled 'Rank the Best'",
    github: "https://github.com/GerindT/prompt-arena",
    series: "project-a-day",
    statuses: ["dev_only"],
    stacks: ["nuxt", "supabase", "postgresql"],
    blurb: "Head-to-head voting on AI image generations. Elo ratings update through a Postgres function and the winners climb a live leaderboard.",
  },
  {
    slug: "kean",
    title: "Kean Visual Creations",
    year: "2026",
    group: "personal",
    img: "/illustrations/projects/kean.webp",
    alt: "Kean Visual Creations home page with the headline 'Every shoot, edited down to the one frame'",
    site: "https://kean-eight.vercel.app",
    statuses: ["live"],
    stacks: ["astro", "cloudflare"],
    blurb: "Website for Kean, a photo and video studio in Tirana working with hospitality, food and drink brands.",
  },
  {
    slug: "audire",
    title: "Audire",
    year: "2026",
    group: "personal",
    img: "/illustrations/projects/audire.webp",
    alt: "Audire audio restoration upload screen",
    site: "https://audire.gerind.dev",
    siteLabel: "UI demo",
    statuses: ["concept", "ui_only"],
    stacks: ["python", "fastapi", "vue"],
    blurb: "Audio restoration lab that compares DSP, evolutionary, deep-learning and hybrid methods on the same recording.",
  },
  {
    slug: "pixel-party",
    title: "Pixel Party",
    year: "2025",
    group: "personal",
    img: "/illustrations/projects/pixel-party.webp",
    alt: "Pixel Party shared pixel canvas",
    github: "https://github.com/GerindT/pixel-party",
    series: "project-a-day",
    statuses: ["dev_only"],
    stacks: ["nuxt", "supabase"],
    blurb: "Real-time collaborative pixel canvas: paint together on a shared board with live updates, ghost cursors and PNG/SVG export.",
  },
  {
    slug: "007-drop",
    title: "007-drop",
    year: "2026",
    group: "personal",
    img: "/illustrations/projects/007-drop.webp",
    alt: "007-Drop upload screen",
    github: "https://github.com/GerindT/007-drop",
    series: "project-a-day",
    statuses: ["dev_only"],
    stacks: ["nuxt", "supabase"],
    blurb: "Self-destructing file sharing with in-browser encryption, optional passwords and automatic clean-up.",
  },
  {
    slug: "ai-albania",
    title: "AI Albania",
    year: "2025",
    group: "personal",
    img: "/illustrations/projects/ai-albania.webp",
    alt: "AI Albania site: an impact section with four headline figures and the audiences it serves",
    site: "https://aialbania.org",
    statuses: ["live", "code_private"],
    stacks: ["vue", "nuxt"],
    blurb: "Website for AI Albania, an initiative shaping a responsible AI ecosystem in Albania.",
  },
  {
    slug: "scamless",
    title: "Scamless",
    year: "2024",
    group: "personal",
    img: "/illustrations/projects/scamless.webp",
    alt: "Scamless welcome page",
    github: "https://github.com/GerindT/webScraping",
    site: "https://scamless.gerind.dev",
    siteLabel: "UI demo",
    statuses: ["ui_only"],
    stacks: ["react", "nodejs", "python"],
    featured: true,
    role: "Bachelor's thesis",
    blurb: "Rates the credibility of Amazon products from their reviews, using web scraping and multi-modal NLP: sentiment, feature extraction and recommendations. Presented as a poster at EEML 2024. The demo is the front end only; the scraping backend isn't hosted.",
  },
  {
    slug: "rollbet",
    title: "Rollbet",
    year: "2024",
    group: "personal",
    img: "/illustrations/projects/rollbet.webp",
    alt: "Rollbet logo",
    contain: true,
    statuses: ["offline"],
    stacks: ["vue", "nodejs", "socketio", "redis"],
    featured: true,
    role: "Backend contract",
    blurb: "Fixed race conditions, built queued payouts and integrated fiat and crypto payment gateways.",
  },
  {
    slug: "sose-al",
    title: "Sose Al",
    year: "2024",
    group: "personal",
    img: "/illustrations/projects/sose-al.webp",
    alt: "Sose.al landing page",
    statuses: ["concept", "offline"],
    stacks: ["react", "nodejs", "mongodb", "python", "vectordb"],
    featured: true,
    blurb: "Hiring platform concept with AI candidate search over a vector database.",
  },
  {
    slug: "research",
    title: "reSearch",
    year: "2024",
    group: "personal",
    img: "/illustrations/projects/reSearch.webp",
    alt: "reSearch interface screenshot",
    github: "https://github.com/GerindT/reSearch",
    statuses: ["offline"],
    role: "Web development course",
    stacks: ["react", "php", "mysql"],
    blurb: "A home for AI research papers, inspired by ResearchGate and arXiv: PDF uploads, comments, favourites and moderators who verify papers. React front end, hand-written PHP API, MySQL.",
  },
  {
    slug: "lolcases",
    title: "LolCases",
    year: "2022",
    group: "personal",
    statuses: ["code_private"],
    stacks: ["react", "nodejs", "socketio", "mysql"],
    alt: "",
    featured: true,
    role: "Team lead",
    blurb: "Led the team building it: a React front end, an Express API and Socket.IO services for live battles, with Steam sign-in and crypto checkout.",
  },
  {
    slug: "off-road",
    title: "Off Road",
    year: "2021",
    group: "personal",
    img: "/illustrations/projects/offRoad.webp",
    alt: "Off Road campground app screenshot",
    contain: true,
    github: "https://github.com/GerindT/offroad",
    statuses: ["dev_only"],
    featured: true,
    stacks: ["nodejs", "mongodb"],
    blurb: "Campground web app grown out of the YelpCamp course, with tighter security and Google Maps integration.",
  },

  // ---------- Innovation4Albania ----------
  {
    slug: "pasqyra",
    title: "Pasqyra e Çmimeve",
    year: "2026",
    group: "i4a",
    img: "/illustrations/projects/pasqyra.webp",
    imgPos: "0% 0%",
    alt: "Pasqyra e Çmimeve home page: 'Çmime të dukshme dhe të krahasueshme për çdo konsumator' over a grocery photo, with live price counters",
    shots: [{ src: "/illustrations/projects/pasqyra-app.webp", alt: "Three screens of the Pasqyra e Çmimeve mobile app: categories, the weekly overview and a shopping basket" }],
    site: "https://pasqyraecmimeve.al",
    statuses: ["live"],
    stacks: ["nextjs", "postgresql", "expo"],
    featured: true,
    part: "Technical lead and architect: shaped how the platform is structured and delivered, and worked hands-on across the web app and API with the team.",
    blurb: "National price-transparency platform: shoppers compare weekly prices of basic goods across markets, on the web and in an Expo mobile app.",
  },
  {
    slug: "hap-nje-dere",
    title: "Hap një derë",
    year: "2026",
    group: "i4a",
    alt: "",
    statuses: ["wip", "unreleased"],
    stacks: ["react", "nodejs", "postgresql"],
    part: "Product owner and lead developer: turned the programme's rules into roles, flows and a working product, from the data model to the citizen and staff experience.",
    blurb: "National platform for the rent-subsidy programme: citizens browse homes and apply online, landlords offer houses, and staff review every application in one audited dashboard.",
  },
  {
    slug: "mip",
    title: "MIP",
    year: "2026",
    group: "i4a",
    alt: "",
    statuses: ["internal"],
    stacks: ["react", "fastapi", "postgresql"],
    part: "Architect and developer alongside the team: data model, API design and the front end.",
    blurb: "Menaxhimi i Investimeve Publike: monitoring for Albania's public investment portfolio.",
  },

  {
    slug: "iqmt",
    title: "IQMT",
    year: "2026",
    group: "i4a",
    alt: "",
    statuses: ["internal"],
    stacks: ["nextjs", "postgresql"],
    part: "Led development: set the architecture and built the core of the registry.",
    blurb: "Digital elevator registry, built for ISHMT.",
  },

  {
    slug: "i4a-generator",
    title: "i4a-generator",
    year: "2026",
    group: "i4a",
    alt: "",
    statuses: ["internal"],
    stacks: ["python"],
    part: "Designed and built it, so every new team project starts from the same proven structure.",
    blurb: "CLI that scaffolds new projects from the team's templates.",
  },

  // ---------- Detag ----------
  {
    slug: "mycredit",
    title: "MyCredit",
    year: "2024",
    group: "detag",
    img: "/illustrations/projects/mycredit.webp",
    alt: "MyCredit on a laptop and a phone: the event dashboard with top-ups, purchases and ticket check-ins, and the cashless card in the app",
    shots: [{ src: "/illustrations/projects/mycredit-site.webp", alt: "mycred.it home page" }],
    site: "https://mycred.it/",
    statuses: ["live", "code_private"],
    stacks: ["golang", "laravel", "vue", "redis", "mysql"],
    featured: true,
    part: "One of the lead developers: helped shape the platform's architecture and built core features such as ticketing, white-label event sites and the embeddable widget.",
    blurb: "Event management and cashless payments: ticketing, an embeddable widget and white-label sites.",
  },
  {
    slug: "muse-x",
    title: "Muse-x",
    year: "2026",
    group: "detag",
    img: "/illustrations/projects/muse-x.webp",
    alt: "MUSE-X festival site with the headline 'Step up the beat'",
    site: "https://muse-x.al/",
    statuses: ["live", "code_private"],
    stacks: ["nuxt", "golang", "mysql"],
    part: "Built the site on top of the MyCredit platform.",
    blurb: "Site for the MUSE-X expo-festival at the Pyramid of Tirana, running on the MyCredit platform.",
  },
  {
    slug: "globe-erp",
    title: "Globe ERP system",
    year: "2022",
    group: "detag",
    alt: "",
    statuses: ["internal"],
    stacks: ["laravel", "vue"],
    part: "Core developer across the Laravel back end and the Vue front end.",
    blurb: "ERP with product, stock and pricing modules.",
  },
  {
    slug: "tetris",
    title: "Tetris Planner",
    year: "2023",
    group: "detag",
    alt: "",
    statuses: ["internal"],
    stacks: ["laravel", "vue"],
    blurb: "Material logistics planning, including a warehouse module.",
  },
  {
    slug: "travel",
    title: "Travel system",
    year: "2025",
    group: "detag",
    img: "/illustrations/projects/travel.webp",
    alt: "Regina Group site: the Regina Taxi page, 'Premium Transportation Services', over a photo of the fleet",
    shots: [{ src: "/illustrations/projects/travel-hotels.webp", alt: "Regina Group site: the hotel collection with Regina Blu, Regina City and Regina Palm Resort" }],
    site: "https://reginagroup.al",
    statuses: ["live", "code_private"],
    stacks: ["golang", "nuxt"],
    part: "Core developer across the Go back end and the Nuxt front end.",
    blurb: "Travel platform for Regina Group: hotels, activities, transfers and job offers, with a Go back end and a multilingual Nuxt front end.",
  },

  // ---------- friends ----------
  {
    slug: "florian-hiso",
    title: "Florian Hiso",
    year: "2024",
    group: "friends",
    img: "/illustrations/projects/florian-hiso.webp",
    alt: "Florian Hiso portfolio home page",
    github: "https://github.com/GerindT/florianHiso",
    statuses: ["offline"],
    stacks: ["react", "supabase"],
    blurb: "Portfolio for a software developer and AI researcher: timeline, skill badges, projects and a blog served from a small Postgres API. Retired now that he runs his own site.",
  },
  {
    slug: "enri",
    title: "Enri Tershana",
    year: "2026",
    group: "friends",
    img: "/illustrations/projects/enri.webp",
    alt: "Enri Tershana portfolio home page",
    site: "https://enri-tershana-portofolio.vercel.app",
    statuses: ["live"],
    stacks: ["nuxt"],
    blurb: "Portfolio for a DevOps engineer.",
  },
  {
    slug: "rejon",
    title: "Rejon Hakrama",
    year: "2026",
    group: "friends",
    img: "/illustrations/projects/rejon.webp",
    alt: "Rejon Hakrama terminal-style portfolio",
    site: "https://rejon-hakrama.vercel.app",
    statuses: ["live"],
    stacks: ["nuxt"],
    blurb: "Terminal-style portfolio for a technical support engineer.",
  },
  {
    slug: "aleks-lipo",
    title: "Aleks Lipo",
    year: "2023",
    group: "friends",
    img: "/illustrations/projects/aleks-lipo.webp",
    alt: "Aleks Lipo's bilingual site: a photo carousel above a Bible-school timeline",
    site: "https://aleks-lipo.netlify.app",
    github: "https://github.com/GerindT/aleksLipo",
    statuses: ["live"],
    stacks: ["react"],
    blurb: "Bilingual (Albanian / English) personal site with a photo carousel and a timeline of his Bible-school year. Vite, React, Flowbite and Tailwind.",
  },

  // ---------- early days ----------
  {
    slug: "react-color",
    title: "React Color",
    year: "2021",
    group: "early",
    img: "/illustrations/projects/react-color.webp",
    alt: "React Colors palette gallery",
    github: "https://github.com/GerindT/react-color",
    statuses: ["offline"],
    stacks: ["react"],
    blurb: "Palette maker: create and tweak colour palettes, saved in the browser, with Material UI transitions.",
  },
  {
    slug: "offroad-app",
    title: "Off Road mobile",
    year: "2021",
    group: "early",
    alt: "",
    github: "https://github.com/GerindT/offRoad-App",
    statuses: ["dev_only"],
    stacks: ["expo", "firebase"],
    blurb: "React Native app to create, edit and share campgrounds, with Firebase auth and storage.",
  },
  {
    slug: "web-school",
    title: "Hermann Gmeiner web app",
    year: "2021",
    group: "early",
    alt: "",
    github: "https://github.com/GerindT/web-school-herrman",
    statuses: ["dev_only"],
    stacks: ["nodejs", "mongodb"],
    blurb: "Web app built for my high school as a class project.",
  },
  {
    slug: "portfolio-v1",
    title: "Portfolio v1",
    year: "2021",
    group: "early",
    alt: "",
    github: "https://github.com/GerindT/portfolio-site",
    statuses: ["dev_only"],
    stacks: ["react"],
    blurb: "My first portfolio: multilingual, with switchable themes.",
  },
  {
    slug: "color-game",
    title: "Color Game",
    year: "2021",
    group: "early",
    alt: "",
    github: "https://github.com/GerindT/color-game",
    statuses: ["dev_only"],
    stacks: [],
    blurb: "Colour-guessing game in plain JavaScript, HTML and CSS: my first time moving the DOM around.",
  },
];

// Stable sort: newest first, source order kept within a year.
export const allProjects: Project[] = projects
  .map((p, i) => ({ p, i }))
  .sort((a, b) => Number(b.p.year) - Number(a.p.year) || a.i - b.i)
  .map(({ p }) => p);

/** Per group, in hand-curated order (source order), with pictured work first. */
export const projectsByGroup = groups.map((g) => {
  const all = projects.filter((p) => p.group === g.id);
  const list = all.filter((p) => !p.series);
  const sideProjects = all.filter((p) => p.series === "project-a-day");
  // Pictured or flagged-important work gets a poster; the rest a compact row.
  const big = (p: Project) => Boolean(p.img || p.featured || p.role);
  // Interleave two-column features with single posters so every grid row fills.
  // A feature needs a single to share its row; without one it becomes a single itself.
  const wanted = list.filter((p) => p.featured);
  const singlesAll = list.filter((p) => big(p) && !p.featured);
  const features = wanted.slice(0, Math.min(2, singlesAll.length));
  const singles = [...singlesAll, ...wanted.filter((p) => !features.includes(p))];
  const pictured: Project[] = [];
  while (features.length || singles.length) {
    if (features.length) pictured.push(features.shift()!);
    if (singles.length) pictured.push(singles.shift()!);
  }
  return { ...g, pictured, features, listed: list.filter((p) => !big(p)), side: sideProjects, count: all.length };
});

/** Home "Selected work": hand-picked across personal and company work. The first one is the large plate. */
const selectedSlugs = ["vanspot", "after-hours", "pragma", "pasqyra", "mycredit", "scamless"];
export const featuredProjects = selectedSlugs.map((slug) => projects.find((p) => p.slug === slug)!).filter(Boolean);
export const liveCount = allProjects.filter((p) => p.statuses.includes("live")).length;
